import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export const load = (async ({ data, fetch }) => {
	const query: string =
		'[out:json][timeout:25]; \
way(id:183555030); \
map_to_area-> .ulis; \
way(id:183555029); \
map_to_area -> .ut; \
( \
  node(area.ulis)[amenity=vending_machine]; \
  node(area.ut)[amenity=vending_machine]; \
); \
out;';

	let resp = await fetch('https://lz4.overpass-api.de/api/interpreter', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencode',
		},
		body: query
	});

	if (resp.ok) {
		let json = await resp.json();
		return json;
	} else {
		let text = await resp.text();
		throw error(500, '自動販売機データの取得に失敗しました\nリロードしてください');
	}
}) satisfies PageServerLoad;
