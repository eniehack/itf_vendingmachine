import { error } from '@sveltejs/kit';
import type { GeoJSONFeature, GeoJSONRoot } from '$lib/geojson';
import type { PageServerLoad } from './$types';
import { payload, type OSMObject } from '$lib/overpass';
import * as v from 'valibot';

const makeGeoJSON = (nodes: OSMObject[]): GeoJSONRoot => {
	const features = nodes.map((elem: OSMObject): GeoJSONFeature => {
		return {
			type: 'Feature',
			properties: Object.keys(elem.tags).reduce<Record<string, string>>(
				(acc, key) => {
					acc[key] = elem.tags[key];
					return acc;
				},
				{}
			),
			geometry: {
				coordinates: [elem.lon, elem.lat],
				type: 'Point'
			}
		};
	});
	return {
		type: 'FeatureCollection',
		features: features
	} satisfies GeoJSONRoot;
};

export const load = (async ({ fetch, setHeaders }): Promise<GeoJSONRoot> => {
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
