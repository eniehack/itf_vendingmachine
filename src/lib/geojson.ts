import * as v from 'valibot';

export const geoJSONFeature = v.object({
	type: v.literal('Feature'),
	properties: v.record(v.string(), v.string()),
	geometry: v.object({
		coordinates: v.tuple([v.number(), v.number()]),
		type: v.literal('Point')
	})
});

export type GeoJSONFeature = v.InferOutput<typeof geoJSONFeature>;

export const geoJSONRoot = v.object({
	type: v.literal('FeatureCollection'),
	features: v.array(geoJSONFeature)
});

export type GeoJSONRoot = v.InferOutput<typeof geoJSONRoot>;
