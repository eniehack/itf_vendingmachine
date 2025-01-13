import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { payload, type OSMObject } from '$lib/overpass';
import * as v from 'valibot';
import vm from '$lib/assets/vm.json';

const makeGeoJSON = (nodes: OSMObject[]): GeoJSON.FeatureCollection<GeoJSON.Point> => {
	const features = nodes.map((elem: OSMObject): GeoJSON.Feature<GeoJSON.Point> => {
		return {
			type: 'Feature',
			properties: Object.keys(elem.tags).reduce<Record<string, string>>((acc, key) => {
				acc[key] = elem.tags[key];
				return acc;
			}, {}),
			geometry: {
				coordinates: [elem.lon, elem.lat],
				type: 'Point'
			}
		};
	});
	return {
		type: 'FeatureCollection',
		features: features
	} satisfies GeoJSON.FeatureCollection<GeoJSON.Point>;
};

export const load = (async ({
	fetch,
	setHeaders
}): Promise<GeoJSON.FeatureCollection<GeoJSON.Point>> => {
	if (import.meta.env.DEV) return vm as GeoJSON.FeatureCollection<GeoJSON.Point>;
	const query = `[out:json][timeout:25];
way(id:183555030);
map_to_area-> .ulis;
way(id:183555029);
map_to_area -> .ut;
(
  node(area.ulis)[amenity=vending_machine];
  node(area.ut)[amenity=vending_machine];
);
out;`;

	const endpoint = new URL('https://overpass-api.de/api/interpreter');
	endpoint.searchParams.set('data', query);
	const resp = await fetch(endpoint);
	if (!resp.ok) {
		error(500, '自動販売機データの取得に失敗しました\nリロードしてください');
	}

	const json = v.safeParse(payload, await resp.json());
	if (!json.success) {
		error(500, '自動販売機データの取得に失敗しました\nリロードしてください');
	}
	setHeaders({
		'Cache-Control': 'max-age=43200, public, s-maxage=300, stale-while-revalidate=300'
	});
	return makeGeoJSON(json.output.elements);
}) satisfies PageServerLoad;
