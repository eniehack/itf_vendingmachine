import * as v from 'valibot';

const osmObject = v.object({
	type: v.literal('node'),
	id: v.number(),
	lat: v.number(),
	lon: v.number(),
	tags: v.record(v.string(), v.string())
});

export type OSMObject = v.InferOutput<typeof osmObject>;

const osm3sObject = v.object({
	timestamp_osm_base: v.string(),
	timestamp_areas_base: v.string()
});

export const payload = v.object({
	version: v.number(),
	generator: v.string(),
	osm3s: osm3sObject,
	elements: v.array(osmObject)
});

export type Payload = v.InferOutput<typeof payload>;
