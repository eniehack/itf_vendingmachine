import { type StyleSpecification } from 'maplibre-gl';

export const osm: StyleSpecification = {
	version: 8,
	name: 'Bright',
	metadata: {
		'mapbox:autocomposite': false,
		'mapbox:groups': {
			'1444849242106.713': { collapsed: false, name: 'Places' },
			'1444849334699.1902': { collapsed: true, name: 'Bridges' },
			'1444849345966.4436': { collapsed: false, name: 'Roads' },
			'1444849354174.1904': { collapsed: true, name: 'Tunnels' },
			'1444849364238.8171': { collapsed: false, name: 'Buildings' },
			'1444849382550.77': { collapsed: false, name: 'Water' },
			'1444849388993.3071': { collapsed: false, name: 'Land' }
		},
		'mapbox:type': 'template',
		'openmaptiles:mapbox:owner': 'openmaptiles',
		'openmaptiles:mapbox:source:url': 'mapbox://openmaptiles.4qljc88t',
		'openmaptiles:version': '3.x',
		'maputnik:renderer': 'mbgljs'
	},
	center: [0, 0],
	zoom: 1,
	bearing: 0,
	pitch: 0,
	sources: {
		openmaptiles: { type: 'vector', url: 'https://tile.openstreetmap.jp/data/planet.json' },
		takeshima: { type: 'vector', url: 'https://tile.openstreetmap.jp/data/takeshima.json' },
		hoppo: { type: 'vector', url: 'https://tile.openstreetmap.jp/data/hoppo.json' }
	},
	sprite: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/sprite',
	glyphs: 'https://tile.openstreetmap.jp/fonts/{fontstack}/{range}.pbf',
	layers: [
		{ id: 'background', type: 'background', paint: { 'background-color': '#f8f4f0' } },
		{
			id: 'landcover-glacier',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landcover',
			filter: ['==', 'subclass', 'glacier'],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': '#fff',
				'fill-opacity': {
					base: 1,
					stops: [
						[0, 0.9],
						[10, 0.3]
					]
				}
			}
		},
		{
			id: 'landuse-residential',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['all', ['in', 'class', 'residential', 'suburb', 'neighbourhood']],
			paint: {
				'fill-color': {
					base: 1,
					stops: [
						[12, 'hsla(30, 19%, 90%, 0.4)'],
						[16, 'hsla(30, 19%, 90%, 0.2)']
					]
				}
			}
		},
		{
			id: 'landuse-commercial',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['all', ['==', '$type', 'Polygon'], ['==', 'class', 'commercial']],
			paint: { 'fill-color': 'hsla(0, 60%, 87%, 0.23)' }
		},
		{
			id: 'landuse-industrial',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['all', ['==', '$type', 'Polygon'], ['==', 'class', 'industrial']],
			paint: { 'fill-color': 'hsla(49, 100%, 88%, 0.34)' }
		},
		{
			id: 'landuse-cemetery',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['==', 'class', 'cemetery'],
			paint: { 'fill-color': '#e0e4dd' }
		},
		{
			id: 'landuse-hospital',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['==', 'class', 'hospital'],
			paint: { 'fill-color': '#fde' }
		},
		{
			id: 'landuse-school',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['==', 'class', 'school'],
			paint: { 'fill-color': '#f0e8f8' }
		},
		{
			id: 'landuse-railway',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landuse',
			filter: ['==', 'class', 'railway'],
			paint: { 'fill-color': 'hsla(30, 19%, 90%, 0.4)' }
		},
		{
			id: 'landcover-wood',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landcover',
			filter: ['==', 'class', 'wood'],
			paint: {
				'fill-antialias': {
					base: 1,
					stops: [
						[0, false],
						[9, true]
					]
				},
				'fill-color': '#6a4',
				'fill-opacity': 0.1,
				'fill-outline-color': 'hsla(0, 0%, 0%, 0.03)'
			}
		},
		{
			id: 'landcover-grass',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'landcover',
			filter: ['==', 'class', 'grass'],
			paint: { 'fill-color': '#d8e8c8', 'fill-opacity': 1 }
		},
		{
			id: 'landcover-grass-park',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'openmaptiles',
			'source-layer': 'park',
			filter: ['==', 'class', 'public_park'],
			paint: { 'fill-color': '#d8e8c8', 'fill-opacity': 0.8 }
		},
		{
			id: 'waterway_tunnel',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'waterway',
			minzoom: 14,
			filter: ['all', ['in', 'class', 'river', 'stream', 'canal'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-dasharray': [2, 4],
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 6]
					]
				}
			}
		},
		{
			id: 'waterway-other',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: ['all', ['!in', 'class', 'canal', 'river', 'stream'], ['==', 'intermittent', 0]],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 2]
					]
				}
			}
		},
		{
			id: 'waterway-other-intermittent',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: ['all', ['!in', 'class', 'canal', 'river', 'stream'], ['==', 'intermittent', 1]],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 2]
					]
				},
				'line-dasharray': [4, 3]
			}
		},
		{
			id: 'waterway-stream-canal',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: [
				'all',
				['in', 'class', 'canal', 'stream'],
				['!=', 'brunnel', 'tunnel'],
				['==', 'intermittent', 0]
			],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 6]
					]
				}
			}
		},
		{
			id: 'waterway-stream-canal-intermittent',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: [
				'all',
				['in', 'class', 'canal', 'stream'],
				['!=', 'brunnel', 'tunnel'],
				['==', 'intermittent', 1]
			],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[20, 6]
					]
				},
				'line-dasharray': [4, 3]
			}
		},
		{
			id: 'waterway-river',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: [
				'all',
				['==', 'class', 'river'],
				['!=', 'brunnel', 'tunnel'],
				['==', 'intermittent', 0]
			],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.2,
					stops: [
						[10, 0.8],
						[20, 6]
					]
				}
			}
		},
		{
			id: 'waterway-river-intermittent',
			type: 'line',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'waterway',
			filter: [
				'all',
				['==', 'class', 'river'],
				['!=', 'brunnel', 'tunnel'],
				['==', 'intermittent', 1]
			],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#a0c8f0',
				'line-width': {
					base: 1.2,
					stops: [
						[10, 0.8],
						[20, 6]
					]
				},
				'line-dasharray': [3, 2.5]
			}
		},
		{
			id: 'water-offset',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'water',
			maxzoom: 8,
			filter: ['==', '$type', 'Polygon'],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': '#a0c8f0',
				'fill-opacity': 1,
				'fill-translate': {
					base: 1,
					stops: [
						[6, [2, 0]],
						[8, [0, 0]]
					]
				}
			}
		},
		{
			id: 'water',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'water',
			filter: ['all', ['!=', 'intermittent', 1]],
			layout: { visibility: 'visible' },
			paint: { 'fill-color': 'hsl(210, 67%, 85%)' }
		},
		{
			id: 'water-intermittent',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'water',
			filter: ['all', ['==', 'intermittent', 1]],
			layout: { visibility: 'visible' },
			paint: { 'fill-color': 'hsl(210, 67%, 85%)', 'fill-opacity': 0.7 }
		},
		{
			id: 'water-pattern',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'water',
			filter: ['all'],
			layout: { visibility: 'visible' },
			paint: { 'fill-pattern': 'wave', 'fill-translate': [0, 2.5] }
		},
		{
			id: 'landcover-ice-shelf',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'landcover',
			filter: ['==', 'subclass', 'ice_shelf'],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': '#fff',
				'fill-opacity': {
					base: 1,
					stops: [
						[0, 0.9],
						[10, 0.3]
					]
				}
			}
		},
		{
			id: 'landcover-sand',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849382550.77' },
			source: 'openmaptiles',
			'source-layer': 'landcover',
			filter: ['all', ['==', 'class', 'sand']],
			layout: { visibility: 'visible' },
			paint: { 'fill-color': 'rgba(245, 238, 188, 1)', 'fill-opacity': 1 }
		},
		{
			id: 'building',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849364238.8171' },
			source: 'openmaptiles',
			'source-layer': 'building',
			paint: {
				'fill-antialias': true,
				'fill-color': {
					base: 1,
					stops: [
						[15.5, '#f2eae2'],
						[16, '#dfdbd7']
					]
				}
			}
		},
		{
			id: 'building-top',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849364238.8171' },
			source: 'openmaptiles',
			'source-layer': 'building',
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': '#f2eae2',
				'fill-opacity': {
					base: 1,
					stops: [
						[13, 0],
						[16, 1]
					]
				},
				'fill-outline-color': '#dfdbd7',
				'fill-translate': {
					base: 1,
					stops: [
						[14, [0, 0]],
						[16, [-2, -2]]
					]
				}
			}
		},
		{
			id: 'tunnel-service-track-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'service', 'track']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#cfcdca',
				'line-dasharray': [0.5, 0.25],
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1],
						[16, 4],
						[20, 11]
					]
				}
			}
		},
		{
			id: 'tunnel-minor-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'minor']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#cfcdca',
				'line-opacity': {
					stops: [
						[12, 0],
						[12.5, 1]
					]
				},
				'line-width': {
					base: 1.2,
					stops: [
						[12, 0.5],
						[13, 1],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'tunnel-secondary-tertiary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'secondary', 'tertiary']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[8, 1.5],
						[20, 17]
					]
				}
			}
		},
		{
			id: 'tunnel-trunk-primary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'primary', 'trunk']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-width': {
					base: 1.2,
					stops: [
						[5, 0.4],
						[6, 0.6],
						[7, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'tunnel-motorway-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'motorway']],
			layout: { 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-dasharray': [0.5, 0.25],
				'line-width': {
					base: 1.2,
					stops: [
						[5, 0.4],
						[6, 0.6],
						[7, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'tunnel-path',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'path']]
			],
			paint: {
				'line-color': '#cba',
				'line-dasharray': [1.5, 0.75],
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1.2],
						[20, 4]
					]
				}
			}
		},
		{
			id: 'tunnel-service-track',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'service', 'track']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fff',
				'line-width': {
					base: 1.2,
					stops: [
						[15.5, 0],
						[16, 2],
						[20, 7.5]
					]
				}
			}
		},
		{
			id: 'tunnel-minor',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'minor_road']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fff',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[13.5, 0],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'tunnel-secondary-tertiary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'secondary', 'tertiary']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fff4c6',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 10]
					]
				}
			}
		},
		{
			id: 'tunnel-trunk-primary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['in', 'class', 'primary', 'trunk']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fff4c6',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'tunnel-motorway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'motorway']],
			layout: { 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#ffdaa6',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'tunnel-railway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849354174.1904' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'tunnel'], ['==', 'class', 'rail']],
			paint: {
				'line-color': '#bbb',
				'line-dasharray': [2, 2],
				'line-width': {
					base: 1.4,
					stops: [
						[14, 0.4],
						[15, 0.75],
						[20, 2]
					]
				}
			}
		},
		{
			id: 'ferry',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['in', 'class', 'ferry']],
			layout: { 'line-join': 'round', visibility: 'visible' },
			paint: { 'line-color': 'rgba(108, 159, 182, 1)', 'line-dasharray': [2, 2], 'line-width': 1.1 }
		},
		{
			id: 'aeroway-taxiway-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'aeroway',
			minzoom: 12,
			filter: ['all', ['in', 'class', 'taxiway']],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'rgba(153, 153, 153, 1)',
				'line-opacity': 1,
				'line-width': {
					base: 1.5,
					stops: [
						[11, 2],
						[17, 12]
					]
				}
			}
		},
		{
			id: 'aeroway-runway-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'aeroway',
			minzoom: 12,
			filter: ['all', ['in', 'class', 'runway']],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'rgba(153, 153, 153, 1)',
				'line-opacity': 1,
				'line-width': {
					base: 1.5,
					stops: [
						[11, 5],
						[17, 55]
					]
				}
			}
		},
		{
			id: 'aeroway-area',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'aeroway',
			minzoom: 4,
			filter: ['all', ['==', '$type', 'Polygon'], ['in', 'class', 'runway', 'taxiway']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': 'rgba(255, 255, 255, 1)',
				'fill-opacity': {
					base: 1,
					stops: [
						[13, 0],
						[14, 1]
					]
				}
			}
		},
		{
			id: 'aeroway-taxiway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'aeroway',
			minzoom: 4,
			filter: ['all', ['in', 'class', 'taxiway'], ['==', '$type', 'LineString']],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-opacity': {
					base: 1,
					stops: [
						[11, 0],
						[12, 1]
					]
				},
				'line-width': {
					base: 1.5,
					stops: [
						[11, 1],
						[17, 10]
					]
				}
			}
		},
		{
			id: 'aeroway-runway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'aeroway',
			minzoom: 4,
			filter: ['all', ['in', 'class', 'runway'], ['==', '$type', 'LineString']],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'rgba(255, 255, 255, 1)',
				'line-opacity': {
					base: 1,
					stops: [
						[11, 0],
						[12, 1]
					]
				},
				'line-width': {
					base: 1.5,
					stops: [
						[11, 4],
						[17, 50]
					]
				}
			}
		},
		{
			id: 'road_area_pier',
			type: 'fill',
			metadata: {},
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', '$type', 'Polygon'], ['==', 'class', 'pier']],
			layout: { visibility: 'visible' },
			paint: { 'fill-antialias': true, 'fill-color': '#f8f4f0' }
		},
		{
			id: 'road_pier',
			type: 'line',
			metadata: {},
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', '$type', 'LineString'], ['in', 'class', 'pier']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#f8f4f0',
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1],
						[17, 4]
					]
				}
			}
		},
		{
			id: 'highway-area',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', '$type', 'Polygon'], ['!in', 'class', 'pier']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-antialias': false,
				'fill-color': 'hsla(0, 0%, 89%, 0.56)',
				'fill-opacity': 0.9,
				'fill-outline-color': '#cfcdca'
			}
		},
		{
			id: 'highway-motorway-link-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 12,
			filter: ['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['==', 'class', 'motorway_link']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[12, 1],
						[13, 3],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'highway-link-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: [
				'all',
				['!in', 'brunnel', 'bridge', 'tunnel'],
				['in', 'class', 'primary_link', 'secondary_link', 'tertiary_link', 'trunk_link']
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[12, 1],
						[13, 3],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'highway-minor-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!=', 'brunnel', 'tunnel'], ['in', 'class', 'minor', 'service', 'track']]
			],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#cfcdca',
				'line-opacity': {
					stops: [
						[12, 0],
						[12.5, 1]
					]
				},
				'line-width': {
					base: 1.2,
					stops: [
						[12, 0.5],
						[13, 1],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'highway-secondary-tertiary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['!in', 'brunnel', 'bridge', 'tunnel'],
				['in', 'class', 'secondary', 'tertiary']
			],
			layout: { 'line-cap': 'butt', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[8, 1.5],
						[20, 17]
					]
				}
			}
		},
		{
			id: 'highway-primary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 5,
			filter: ['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['in', 'class', 'primary']],
			layout: { 'line-cap': 'butt', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': {
					stops: [
						[7, 0],
						[8, 1]
					]
				},
				'line-width': {
					base: 1.2,
					stops: [
						[7, 0],
						[8, 0.6],
						[9, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'highway-trunk-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 5,
			filter: ['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['in', 'class', 'trunk']],
			layout: { 'line-cap': 'butt', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': {
					stops: [
						[5, 0],
						[6, 1]
					]
				},
				'line-width': {
					base: 1.2,
					stops: [
						[5, 0],
						[6, 0.6],
						[7, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'highway-motorway-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 4,
			filter: ['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['==', 'class', 'motorway']],
			layout: { 'line-cap': 'butt', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': {
					stops: [
						[4, 0],
						[5, 1]
					]
				},
				'line-width': {
					base: 1.2,
					stops: [
						[4, 0],
						[5, 0.4],
						[6, 0.6],
						[7, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'highway-path',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['==', 'class', 'path']]
			],
			paint: {
				'line-color': '#cba',
				'line-dasharray': [1.5, 0.75],
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1.2],
						[20, 4]
					]
				}
			}
		},
		{
			id: 'highway-motorway-link',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 12,
			filter: ['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['==', 'class', 'motorway_link']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#fc8',
				'line-width': {
					base: 1.2,
					stops: [
						[12.5, 0],
						[13, 1.5],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'highway-link',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: [
				'all',
				['!in', 'brunnel', 'bridge', 'tunnel'],
				['in', 'class', 'primary_link', 'secondary_link', 'tertiary_link', 'trunk_link']
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[12.5, 0],
						[13, 1.5],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'highway-minor',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!=', 'brunnel', 'tunnel'], ['in', 'class', 'minor', 'service', 'track']]
			],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#fff',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[13.5, 0],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'highway-secondary-tertiary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['!in', 'brunnel', 'bridge', 'tunnel'],
				['in', 'class', 'secondary', 'tertiary']
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[8, 0.5],
						[20, 13]
					]
				}
			}
		},
		{
			id: 'highway-primary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['in', 'class', 'primary']]
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[8.5, 0],
						[9, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'highway-trunk',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['in', 'class', 'trunk']]
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'highway-motorway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 5,
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['!in', 'brunnel', 'bridge', 'tunnel'], ['==', 'class', 'motorway']]
			],
			layout: { 'line-cap': 'round', 'line-join': 'round', visibility: 'visible' },
			paint: {
				'line-color': '#fc8',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'railway-transit',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'class', 'transit'], ['!in', 'brunnel', 'tunnel']]
			],
			layout: { visibility: 'visible' },
			paint: {
				'line-color': 'hsla(0, 0%, 73%, 0.77)',
				'line-width': {
					base: 1.4,
					stops: [
						[14, 0.4],
						[20, 1]
					]
				}
			}
		},
		{
			id: 'railway-transit-hatching',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'class', 'transit'], ['!in', 'brunnel', 'tunnel']]
			],
			layout: { visibility: 'visible' },
			paint: {
				'line-color': 'hsla(0, 0%, 73%, 0.68)',
				'line-dasharray': [0.2, 8],
				'line-width': {
					base: 1.4,
					stops: [
						[14.5, 0],
						[15, 2],
						[20, 6]
					]
				}
			}
		},
		{
			id: 'railway-service',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'class', 'rail'], ['has', 'service']]
			],
			paint: {
				'line-color': 'hsla(0, 0%, 73%, 0.77)',
				'line-width': {
					base: 1.4,
					stops: [
						[14, 0.4],
						[20, 1]
					]
				}
			}
		},
		{
			id: 'railway-service-hatching',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'class', 'rail'], ['has', 'service']]
			],
			layout: { visibility: 'visible' },
			paint: {
				'line-color': 'hsla(0, 0%, 73%, 0.68)',
				'line-dasharray': [0.2, 8],
				'line-width': {
					base: 1.4,
					stops: [
						[14.5, 0],
						[15, 2],
						[20, 6]
					]
				}
			}
		},
		{
			id: 'railway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				[
					'all',
					['!has', 'service'],
					['!in', 'brunnel', 'bridge', 'tunnel'],
					['==', 'class', 'rail']
				]
			],
			paint: {
				'line-color': '#bbb',
				'line-width': {
					base: 1.4,
					stops: [
						[14, 0.4],
						[15, 0.75],
						[20, 2]
					]
				}
			}
		},
		{
			id: 'railway-hatching',
			type: 'line',
			metadata: { 'mapbox:group': '1444849345966.4436' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				[
					'all',
					['!has', 'service'],
					['!in', 'brunnel', 'bridge', 'tunnel'],
					['==', 'class', 'rail']
				]
			],
			paint: {
				'line-color': '#bbb',
				'line-dasharray': [0.2, 8],
				'line-width': {
					base: 1.4,
					stops: [
						[14.5, 0],
						[15, 3],
						[20, 8]
					]
				}
			}
		},
		{
			id: 'bridge-motorway-link-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'motorway_link']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[12, 1],
						[13, 3],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'bridge-link-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', 'brunnel', 'bridge'],
				['in', 'class', 'primary_link', 'secondary_link', 'tertiary_link', 'trunk_link']
			],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[12, 1],
						[13, 3],
						[14, 4],
						[20, 15]
					]
				}
			}
		},
		{
			id: 'bridge-secondary-tertiary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['in', 'class', 'secondary', 'tertiary']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-opacity': 1,
				'line-width': {
					base: 1.2,
					stops: [
						[8, 1.5],
						[20, 28]
					]
				}
			}
		},
		{
			id: 'bridge-trunk-primary-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['in', 'class', 'primary', 'trunk']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': 'hsl(28, 76%, 67%)',
				'line-width': {
					base: 1.2,
					stops: [
						[5, 0.4],
						[6, 0.6],
						[7, 1.5],
						[20, 26]
					]
				}
			}
		},
		{
			id: 'bridge-motorway-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'motorway']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#e9ac77',
				'line-width': {
					base: 1.2,
					stops: [
						[5, 0.4],
						[6, 0.6],
						[7, 1.5],
						[20, 22]
					]
				}
			}
		},
		{
			id: 'bridge-path-casing',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'path']]
			],
			paint: {
				'line-color': '#f8f4f0',
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1.2],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'bridge-path',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', '$type', 'LineString'],
				['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'path']]
			],
			paint: {
				'line-color': '#cba',
				'line-dasharray': [1.5, 0.75],
				'line-width': {
					base: 1.2,
					stops: [
						[15, 1.2],
						[20, 4]
					]
				}
			}
		},
		{
			id: 'bridge-motorway-link',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'motorway_link']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fc8',
				'line-width': {
					base: 1.2,
					stops: [
						[12.5, 0],
						[13, 1.5],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'bridge-link',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: [
				'all',
				['==', 'brunnel', 'bridge'],
				['in', 'class', 'primary_link', 'secondary_link', 'tertiary_link', 'trunk_link']
			],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[12.5, 0],
						[13, 1.5],
						[14, 2.5],
						[20, 11.5]
					]
				}
			}
		},
		{
			id: 'bridge-secondary-tertiary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['in', 'class', 'secondary', 'tertiary']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 20]
					]
				}
			}
		},
		{
			id: 'bridge-trunk-primary',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['in', 'class', 'primary', 'trunk']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fea',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'bridge-motorway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'motorway']],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#fc8',
				'line-width': {
					base: 1.2,
					stops: [
						[6.5, 0],
						[7, 0.5],
						[20, 18]
					]
				}
			}
		},
		{
			id: 'bridge-railway',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'rail']],
			paint: {
				'line-color': '#bbb',
				'line-width': {
					base: 1.4,
					stops: [
						[14, 0.4],
						[15, 0.75],
						[20, 2]
					]
				}
			}
		},
		{
			id: 'bridge-railway-hatching',
			type: 'line',
			metadata: { 'mapbox:group': '1444849334699.1902' },
			source: 'openmaptiles',
			'source-layer': 'transportation',
			filter: ['all', ['==', 'brunnel', 'bridge'], ['==', 'class', 'rail']],
			paint: {
				'line-color': '#bbb',
				'line-dasharray': [0.2, 8],
				'line-width': {
					base: 1.4,
					stops: [
						[14.5, 0],
						[15, 3],
						[20, 8]
					]
				}
			}
		},
		{
			id: 'cablecar',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: ['==', 'class', 'cable_car'],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'hsl(0, 0%, 70%)',
				'line-width': {
					base: 1,
					stops: [
						[11, 1],
						[19, 2.5]
					]
				}
			}
		},
		{
			id: 'cablecar-dash',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: ['==', 'class', 'cable_car'],
			layout: { 'line-cap': 'round', visibility: 'visible' },
			paint: {
				'line-color': 'hsl(0, 0%, 70%)',
				'line-dasharray': [2, 3],
				'line-width': {
					base: 1,
					stops: [
						[11, 3],
						[19, 5.5]
					]
				}
			}
		},
		{
			id: 'boundary-land-level-4',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'boundary',
			filter: ['all', ['>=', 'admin_level', 4], ['<=', 'admin_level', 8], ['!=', 'maritime', 1]],
			layout: { 'line-join': 'round' },
			paint: {
				'line-color': '#9e9cab',
				'line-dasharray': [3, 1, 1, 1],
				'line-width': {
					base: 1.4,
					stops: [
						[4, 0.4],
						[5, 1],
						[12, 3]
					]
				}
			}
		},
		{
			id: 'boundary-land-level-2',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'boundary',
			filter: ['all', ['==', 'admin_level', 2], ['!=', 'maritime', 1], ['!=', 'disputed', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': 'hsl(248, 7%, 66%)',
				'line-width': {
					base: 1,
					stops: [
						[0, 0.6],
						[4, 1.4],
						[5, 2],
						[12, 8]
					]
				}
			}
		},
		{
			id: 'boundary-land-disputed',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'boundary',
			filter: ['all', ['!=', 'maritime', 1], ['==', 'disputed', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': 'hsl(248, 7%, 70%)',
				'line-dasharray': [1, 3],
				'line-width': {
					base: 1,
					stops: [
						[0, 0.6],
						[4, 1.4],
						[5, 2],
						[12, 8]
					]
				}
			}
		},
		{
			id: 'boundary-water',
			type: 'line',
			source: 'openmaptiles',
			'source-layer': 'boundary',
			filter: ['all', ['in', 'admin_level', 2, 4], ['==', 'maritime', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': 'rgba(154, 189, 214, 1)',
				'line-opacity': {
					stops: [
						[6, 0.6],
						[10, 1]
					]
				},
				'line-width': {
					base: 1,
					stops: [
						[0, 0.6],
						[4, 1.4],
						[5, 2],
						[12, 8]
					]
				}
			}
		},
		{
			id: 'waterway-name',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'waterway',
			minzoom: 13,
			filter: ['all', ['==', '$type', 'LineString'], ['has', 'name']],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 350,
				'text-field': '{name}',
				'text-font': ['migu1c-regular'],
				'text-letter-spacing': 0.2,
				'text-max-width': 5,
				'text-rotation-alignment': 'map',
				'text-size': 14
			},
			paint: {
				'text-color': '#74aee9',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 1.5
			}
		},
		{
			id: 'water-name-lakeline',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'water_name',
			filter: ['==', '$type', 'LineString'],
			layout: {
				'symbol-placement': 'line',
				'symbol-spacing': 350,
				'text-field': '{name}',
				'text-font': ['migu1c-regular'],
				'text-letter-spacing': 0.2,
				'text-max-width': 5,
				'text-rotation-alignment': 'map',
				'text-size': 14
			},
			paint: {
				'text-color': '#74aee9',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 1.5
			}
		},
		{
			id: 'water-name-ocean',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'water_name',
			filter: ['all', ['==', '$type', 'Point'], ['==', 'class', 'ocean']],
			layout: {
				'symbol-placement': 'point',
				'symbol-spacing': 350,
				'text-field': '{name}',
				'text-font': ['migu1c-regular'],
				'text-letter-spacing': 0.2,
				'text-max-width': 5,
				'text-rotation-alignment': 'map',
				'text-size': 14
			},
			paint: {
				'text-color': '#74aee9',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 1.5
			}
		},
		{
			id: 'water-name-other',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'water_name',
			filter: ['all', ['==', '$type', 'Point'], ['!in', 'class', 'ocean']],
			layout: {
				'symbol-placement': 'point',
				'symbol-spacing': 350,
				'text-field': '{name}',
				'text-font': ['migu1c-regular'],
				'text-letter-spacing': 0.2,
				'text-max-width': 5,
				'text-rotation-alignment': 'map',
				'text-size': {
					stops: [
						[0, 10],
						[6, 14]
					]
				},
				visibility: 'visible'
			},
			paint: {
				'text-color': '#74aee9',
				'text-halo-color': 'rgba(255,255,255,0.7)',
				'text-halo-width': 1.5
			}
		},
		{
			id: 'poi-level-3',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'poi',
			minzoom: 16,
			filter: [
				'all',
				['==', '$type', 'Point'],
				['>=', 'rank', 25],
				['any', ['!has', 'level'], ['==', 'level', 0]]
			],
			layout: {
				'icon-image': '{class}_11',
				'text-anchor': 'top',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 9,
				'text-offset': [0, 0.6],
				'text-padding': 2,
				'text-size': 12,
				visibility: 'visible'
			},
			paint: {
				'text-color': '#666',
				'text-halo-blur': 0.5,
				'text-halo-color': '#ffffff',
				'text-halo-width': 1
			}
		},
		{
			id: 'poi-level-2',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'poi',
			minzoom: 15,
			filter: [
				'all',
				['==', '$type', 'Point'],
				['<=', 'rank', 24],
				['>=', 'rank', 15],
				['any', ['!has', 'level'], ['==', 'level', 0]]
			],
			layout: {
				'icon-image': '{class}_11',
				'text-anchor': 'top',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 9,
				'text-offset': [0, 0.6],
				'text-padding': 2,
				'text-size': 12,
				visibility: 'visible'
			},
			paint: {
				'text-color': '#666',
				'text-halo-blur': 0.5,
				'text-halo-color': '#ffffff',
				'text-halo-width': 1
			}
		},
		{
			id: 'poi-level-1',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'poi',
			minzoom: 14,
			filter: [
				'all',
				['==', '$type', 'Point'],
				['<=', 'rank', 14],
				['has', 'name'],
				['any', ['!has', 'level'], ['==', 'level', 0]]
			],
			layout: {
				'icon-image': '{class}_11',
				'text-anchor': 'top',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 9,
				'text-offset': [0, 0.6],
				'text-padding': 2,
				'text-size': 12,
				visibility: 'visible'
			},
			paint: {
				'text-color': '#666',
				'text-halo-blur': 0.5,
				'text-halo-color': '#ffffff',
				'text-halo-width': 1
			}
		},
		{
			id: 'poi-railway',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'poi',
			minzoom: 13,
			filter: [
				'all',
				['==', '$type', 'Point'],
				['has', 'name'],
				['==', 'class', 'railway'],
				['==', 'subclass', 'station']
			],
			layout: {
				'icon-allow-overlap': false,
				'icon-ignore-placement': false,
				'icon-image': '{class}_11',
				'icon-optional': false,
				'text-allow-overlap': false,
				'text-anchor': 'top',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-ignore-placement': false,
				'text-max-width': 9,
				'text-offset': [0, 0.6],
				'text-optional': true,
				'text-padding': 2,
				'text-size': 12
			},
			paint: {
				'text-color': '#666',
				'text-halo-blur': 0.5,
				'text-halo-color': '#ffffff',
				'text-halo-width': 1
			}
		},
		{
			id: 'road_oneway',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 15,
			filter: [
				'all',
				['==', 'oneway', 1],
				['in', 'class', 'motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'minor', 'service']
			],
			layout: {
				'icon-image': 'oneway',
				'icon-padding': 2,
				'icon-rotate': 90,
				'icon-rotation-alignment': 'map',
				'icon-size': {
					stops: [
						[15, 0.5],
						[19, 1]
					]
				},
				'symbol-placement': 'line',
				'symbol-spacing': 75
			},
			paint: { 'icon-opacity': 0.5 }
		},
		{
			id: 'road_oneway_opposite',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation',
			minzoom: 15,
			filter: [
				'all',
				['==', 'oneway', -1],
				['in', 'class', 'motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'minor', 'service']
			],
			layout: {
				'icon-image': 'oneway',
				'icon-padding': 2,
				'icon-rotate': -90,
				'icon-rotation-alignment': 'map',
				'icon-size': {
					stops: [
						[15, 0.5],
						[19, 1]
					]
				},
				'symbol-placement': 'line',
				'symbol-spacing': 75
			},
			paint: { 'icon-opacity': 0.5 }
		},
		{
			id: 'highway-name-path',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 15.5,
			filter: ['==', 'class', 'path'],
			layout: {
				'symbol-placement': 'line',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'map',
				'text-size': {
					base: 1,
					stops: [
						[13, 12],
						[14, 13]
					]
				}
			},
			paint: {
				'text-color': 'hsl(30, 23%, 62%)',
				'text-halo-color': '#f8f4f0',
				'text-halo-width': 0.5
			}
		},
		{
			id: 'highway-name-minor',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 15,
			filter: ['all', ['==', '$type', 'LineString'], ['in', 'class', 'minor', 'service', 'track']],
			layout: {
				'symbol-placement': 'line',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'map',
				'text-size': {
					base: 1,
					stops: [
						[13, 12],
						[14, 13]
					]
				}
			},
			paint: { 'text-color': '#765', 'text-halo-blur': 0.5, 'text-halo-width': 1 }
		},
		{
			id: 'highway-name-major',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 12.2,
			filter: ['in', 'class', 'primary', 'secondary', 'tertiary', 'trunk'],
			layout: {
				'symbol-placement': 'line',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'map',
				'text-size': {
					base: 1,
					stops: [
						[13, 12],
						[14, 13]
					]
				}
			},
			paint: { 'text-color': '#765', 'text-halo-blur': 0.5, 'text-halo-width': 1 }
		},
		{
			id: 'highway-shield',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 8,
			filter: [
				'all',
				['<=', 'ref_length', 6],
				['==', '$type', 'LineString'],
				['!in', 'network', 'us-interstate', 'us-highway', 'us-state']
			],
			layout: {
				'icon-image': 'road_{ref_length}',
				'icon-rotation-alignment': 'viewport',
				'icon-size': 1,
				'symbol-placement': {
					base: 1,
					stops: [
						[10, 'point'],
						[11, 'line']
					]
				},
				'symbol-spacing': 200,
				'text-field': '{ref}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'viewport',
				'text-size': 10
			},
			paint: {}
		},
		{
			id: 'highway-shield-us-interstate',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 7,
			filter: [
				'all',
				['<=', 'ref_length', 6],
				['==', '$type', 'LineString'],
				['in', 'network', 'us-interstate']
			],
			layout: {
				'icon-image': '{network}_{ref_length}',
				'icon-rotation-alignment': 'viewport',
				'icon-size': 1,
				'symbol-placement': {
					base: 1,
					stops: [
						[7, 'point'],
						[7, 'line'],
						[8, 'line']
					]
				},
				'symbol-spacing': 200,
				'text-field': '{ref}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'viewport',
				'text-size': 10
			},
			paint: { 'text-color': 'rgba(0, 0, 0, 1)' }
		},
		{
			id: 'highway-shield-us-other',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'transportation_name',
			minzoom: 9,
			filter: [
				'all',
				['<=', 'ref_length', 6],
				['==', '$type', 'LineString'],
				['in', 'network', 'us-highway', 'us-state']
			],
			layout: {
				'icon-image': '{network}_{ref_length}',
				'icon-rotation-alignment': 'viewport',
				'icon-size': 1,
				'symbol-placement': {
					base: 1,
					stops: [
						[10, 'point'],
						[11, 'line']
					]
				},
				'symbol-spacing': 200,
				'text-field': '{ref}',
				'text-font': ['migu2m-regular'],
				'text-rotation-alignment': 'viewport',
				'text-size': 10
			},
			paint: { 'text-color': 'rgba(0, 0, 0, 1)' }
		},
		{
			id: 'airport-label-major',
			type: 'symbol',
			source: 'openmaptiles',
			'source-layer': 'aerodrome_label',
			minzoom: 10,
			filter: ['all', ['has', 'iata']],
			layout: {
				'icon-image': 'airport_11',
				'icon-size': 1,
				'text-anchor': 'top',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 9,
				'text-offset': [0, 0.6],
				'text-optional': true,
				'text-padding': 2,
				'text-size': 12,
				visibility: 'visible'
			},
			paint: {
				'text-color': '#666',
				'text-halo-blur': 0.5,
				'text-halo-color': '#ffffff',
				'text-halo-width': 1
			}
		},
		{
			id: 'place-other',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['!in', 'class', 'city', 'town', 'village', 'country', 'continent'],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-bold'],
				'text-letter-spacing': 0.1,
				'text-max-width': 9,
				'text-size': {
					base: 1.2,
					stops: [
						[12, 10],
						[15, 14]
					]
				},
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#633',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'place-village',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['==', 'class', 'village'],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 8,
				'text-size': {
					base: 1.2,
					stops: [
						[10, 12],
						[15, 22]
					]
				},
				visibility: 'visible'
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'place-town',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['==', 'class', 'town'],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 8,
				'text-size': {
					base: 1.2,
					stops: [
						[10, 14],
						[15, 24]
					]
				},
				visibility: 'visible'
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'place-city',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['!=', 'capital', 2], ['==', 'class', 'city']],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 8,
				'text-size': {
					base: 1.2,
					stops: [
						[7, 14],
						[11, 24]
					]
				},
				visibility: 'visible'
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'place-city-capital',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['==', 'capital', 2], ['==', 'class', 'city']],
			layout: {
				'icon-image': 'star_11',
				'icon-size': 0.8,
				'text-anchor': 'left',
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-max-width': 8,
				'text-offset': [0.4, 0],
				'text-size': {
					base: 1.2,
					stops: [
						[7, 14],
						[11, 24]
					]
				},
				visibility: 'visible'
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'place-country-other',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['==', 'class', 'country'], ['>=', 'rank', 3], ['!has', 'iso_a2']],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu1c-regular'],
				'text-max-width': 6.25,
				'text-size': {
					stops: [
						[3, 11],
						[7, 17]
					]
				},
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#334',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			}
		},
		{
			id: 'place-country-3',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['==', 'class', 'country'], ['>=', 'rank', 3], ['has', 'iso_a2']],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-bold'],
				'text-max-width': 6.25,
				'text-size': {
					stops: [
						[3, 11],
						[7, 17]
					]
				},
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#334',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			}
		},
		{
			id: 'place-country-2',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['==', 'class', 'country'], ['==', 'rank', 2], ['has', 'iso_a2']],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-bold'],
				'text-max-width': 6.25,
				'text-size': {
					stops: [
						[2, 11],
						[5, 17]
					]
				},
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#334',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			}
		},
		{
			id: 'place-country-1',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			filter: ['all', ['==', 'class', 'country'], ['==', 'rank', 1], ['has', 'iso_a2']],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-bold'],
				'text-max-width': 6.25,
				'text-size': {
					stops: [
						[1, 11],
						[4, 17]
					]
				},
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#334',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			}
		},
		{
			id: 'place-continent',
			type: 'symbol',
			metadata: { 'mapbox:group': '1444849242106.713' },
			source: 'openmaptiles',
			'source-layer': 'place',
			maxzoom: 1,
			filter: ['==', 'class', 'continent'],
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-bold'],
				'text-max-width': 6.25,
				'text-size': 14,
				'text-transform': 'uppercase',
				visibility: 'visible'
			},
			paint: {
				'text-color': '#334',
				'text-halo-blur': 1,
				'text-halo-color': 'rgba(255,255,255,0.8)',
				'text-halo-width': 2
			}
		},
		{
			id: 'island-hoppo',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'hoppo',
			'source-layer': 'island',
			minzoom: 0,
			layout: { visibility: 'visible' },
			paint: { 'fill-color': '#fff', 'fill-opacity': 1 }
		},
		{
			id: 'island-hoppo-name',
			type: 'symbol',
			source: 'hoppo',
			'source-layer': 'island',
			layout: {
				'text-field': '{name}',
				'text-size': {
					stops: [
						[10, 14],
						[15, 24]
					]
				}
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255, 255, 255, 0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'island-takeshima',
			type: 'fill',
			metadata: { 'mapbox:group': '1444849388993.3071' },
			source: 'takeshima',
			'source-layer': 'island',
			minzoom: 0,
			layout: { visibility: 'visible' },
			paint: { 'fill-color': '#fff', 'fill-opacity': 1 }
		},
		{
			id: 'island-takeshima-name',
			type: 'symbol',
			source: 'takeshima',
			'source-layer': 'island',
			layout: {
				'text-field': '{name}',
				'text-size': {
					stops: [
						[10, 14],
						[15, 24]
					]
				}
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255, 255, 255, 0.8)',
				'text-halo-width': 1.2
			}
		},
		{
			id: 'island-takeshima-poi',
			type: 'symbol',
			source: 'takeshima',
			'source-layer': 'island_poi',
			layout: {
				'text-field': '{name}',
				'text-font': ['migu2m-regular'],
				'text-size': {
					stops: [
						[10, 14],
						[15, 24]
					]
				}
			},
			paint: {
				'text-color': '#333',
				'text-halo-color': 'rgba(255, 255, 255, 0.8)',
				'text-halo-width': 1.2
			}
		}
	],
	id: 'bright'
};
export const dark: StyleSpecification = {
	version: 8,
	name: 'Dark Matter',
	metadata: { 'maputnik:renderer': 'mbgljs' },
	sources: {
		carto: {
			type: 'vector',
			url: 'https://tiles.basemaps.cartocdn.com/vector/carto.streets/v1/tiles.json'
		}
	},
	sprite: 'https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/sprite',
	glyphs: 'https://tile.openstreetmap.jp/fonts/{fontstack}/{range}.pbf',
	layers: [
		{
			id: 'background',
			type: 'background',
			layout: { visibility: 'visible' },
			paint: { 'background-color': '#0e0e0e', 'background-opacity': 1 }
		},
		{
			id: 'landcover',
			type: 'fill',
			source: 'carto',
			'source-layer': 'landcover',
			filter: [
				'any',
				['==', 'class', 'wood'],
				['==', 'class', 'grass'],
				['==', 'subclass', 'recreation_ground']
			],
			paint: {
				'fill-color': {
					stops: [
						[8, '#0e0e0e'],
						[9, '#0e0e0e'],
						[11, '#0e0e0e'],
						[13, '#0e0e0e'],
						[15, '#0e0e0e']
					]
				},
				'fill-opacity': 1
			}
		},
		{
			id: 'park_national_park',
			type: 'fill',
			source: 'carto',
			'source-layer': 'park',
			minzoom: 9,
			filter: ['all', ['==', 'class', 'national_park']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': {
					stops: [
						[8, '#0e0e0e'],
						[9, '#0e0e0e'],
						[11, '#0e0e0e'],
						[13, '#0e0e0e'],
						[15, '#0e0e0e']
					]
				},
				'fill-opacity': 1,
				'fill-translate-anchor': 'map'
			}
		},
		{
			id: 'park_nature_reserve',
			type: 'fill',
			source: 'carto',
			'source-layer': 'park',
			minzoom: 0,
			filter: ['all', ['==', 'class', 'nature_reserve']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': {
					stops: [
						[8, '#0e0e0e'],
						[9, '#0e0e0e'],
						[11, '#0e0e0e'],
						[13, '#0e0e0e'],
						[15, '#0e0e0e']
					]
				},
				'fill-antialias': true,
				'fill-opacity': {
					stops: [
						[6, 0.7],
						[9, 0.9]
					]
				}
			}
		},
		{
			id: 'landuse_residential',
			type: 'fill',
			source: 'carto',
			'source-layer': 'landuse',
			minzoom: 6,
			filter: ['any', ['==', 'class', 'residential']],
			paint: {
				'fill-color': {
					stops: [
						[5, 'rgba(0, 0, 0, 0.5)'],
						[8, 'rgba(0, 0, 0, 0.45)'],
						[9, 'rgba(0, 0, 0, 0.4)'],
						[11, 'rgba(0, 0, 0, 0.35)'],
						[13, 'rgba(0, 0, 0, 0.3)'],
						[15, 'rgba(0, 0, 0, 0.25)'],
						[16, 'rgba(0, 0, 0, 0.15)']
					]
				},
				'fill-opacity': {
					stops: [
						[6, 0.6],
						[9, 1]
					]
				}
			}
		},
		{
			id: 'landuse',
			type: 'fill',
			source: 'carto',
			'source-layer': 'landuse',
			filter: ['any', ['==', 'class', 'cemetery'], ['==', 'class', 'stadium']],
			paint: {
				'fill-color': {
					stops: [
						[8, '#0e0e0e'],
						[9, '#0e0e0e'],
						[11, '#0e0e0e'],
						[13, '#0e0e0e'],
						[15, '#0e0e0e']
					]
				}
			}
		},
		{
			id: 'waterway',
			type: 'line',
			source: 'carto',
			'source-layer': 'waterway',
			paint: {
				'line-color': 'rgba(63, 90, 109, 1)',
				'line-width': {
					stops: [
						[8, 0.5],
						[9, 1],
						[15, 2],
						[16, 3]
					]
				}
			}
		},
		{
			id: 'boundary_county',
			type: 'line',
			source: 'carto',
			'source-layer': 'boundary',
			minzoom: 9,
			maxzoom: 24,
			filter: ['all', ['==', 'admin_level', 6], ['==', 'maritime', 0]],
			paint: {
				'line-color': {
					stops: [
						[4, '#222'],
						[5, '#222'],
						[6, '#2C353C']
					]
				},
				'line-width': {
					stops: [
						[4, 0.5],
						[7, 1]
					]
				},
				'line-dasharray': {
					stops: [
						[6, [1]],
						[7, [2, 2]]
					]
				}
			}
		},
		{
			id: 'boundary_state',
			type: 'line',
			source: 'carto',
			'source-layer': 'boundary',
			minzoom: 4,
			filter: ['all', ['==', 'admin_level', 4], ['==', 'maritime', 0]],
			paint: {
				'line-color': {
					stops: [
						[4, 'rgba(103, 103, 114, 1)'],
						[5, 'rgba(103, 103, 114, 1)'],
						[6, 'rgba(103, 103, 114, 1)']
					]
				},
				'line-width': {
					stops: [
						[4, 0.5],
						[7, 1],
						[8, 1],
						[9, 1.2]
					]
				},
				'line-dasharray': {
					stops: [
						[6, [1, 2, 3]],
						[7, [1, 2, 3]]
					]
				}
			}
		},
		{
			id: 'water',
			type: 'fill',
			source: 'carto',
			'source-layer': 'water',
			minzoom: 0,
			maxzoom: 24,
			filter: ['all', ['==', '$type', 'Polygon']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': '#2C353C',
				'fill-antialias': true,
				'fill-translate-anchor': 'map',
				'fill-opacity': 1
			}
		},
		{
			id: 'water_shadow',
			type: 'fill',
			source: 'carto',
			'source-layer': 'water',
			minzoom: 0,
			filter: ['all', ['==', '$type', 'Polygon']],
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': 'transparent',
				'fill-antialias': true,
				'fill-translate-anchor': 'map',
				'fill-opacity': 1,
				'fill-translate': {
					stops: [
						[0, [0, 2]],
						[6, [0, 1]],
						[14, [0, 1]],
						[17, [0, 2]]
					]
				}
			}
		},
		{
			id: 'aeroway-runway',
			type: 'line',
			source: 'carto',
			'source-layer': 'aeroway',
			minzoom: 12,
			filter: ['all', ['==', 'class', 'runway']],
			layout: { 'line-cap': 'square' },
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10]
					]
				},
				'line-color': '#111'
			}
		},
		{
			id: 'aeroway-taxiway',
			type: 'line',
			source: 'carto',
			'source-layer': 'aeroway',
			minzoom: 13,
			filter: ['all', ['==', 'class', 'taxiway']],
			paint: {
				'line-color': '#111',
				'line-width': {
					stops: [
						[13, 0.5],
						[14, 1],
						[15, 2],
						[16, 4]
					]
				}
			}
		},
		{
			id: 'tunnel_service_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 1],
						[16, 3],
						[17, 6],
						[18, 8]
					]
				},
				'line-opacity': 1,
				'line-color': '#1a1a1a'
			}
		},
		{
			id: 'tunnel_minor_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'miter' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.5],
						[12, 0.5],
						[14, 2],
						[15, 4],
						[16, 6],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': '#1a1a1a'
			}
		},
		{
			id: 'tunnel_sec_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.5],
						[12, 1],
						[13, 2],
						[14, 5],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': '#1a1a1a'
			}
		},
		{
			id: 'tunnel_pri_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 8,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': '#1a1a1a'
			}
		},
		{
			id: 'tunnel_trunk_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: {
				'line-cap': 'butt',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': '#232323'
			}
		},
		{
			id: 'tunnel_mot_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[12, 4],
						[13, 5],
						[14, 7],
						[15, 9],
						[16, 11],
						[17, 13],
						[18, 22]
					]
				},
				'line-opacity': {
					stops: [
						[6, 0.5],
						[7, 1]
					]
				},
				'line-color': '#232323'
			}
		},
		{
			id: 'tunnel_path',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'path'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 0.5],
						[16, 1],
						[18, 3]
					]
				},
				'line-opacity': 1,
				'line-color': '#262626',
				'line-dasharray': {
					stops: [
						[15, [2, 2]],
						[18, [3, 3]]
					]
				}
			}
		},
		{
			id: 'tunnel_service_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 2],
						[16, 2],
						[17, 4],
						[18, 6]
					]
				},
				'line-opacity': 1,
				'line-color': '#161616'
			}
		},
		{
			id: 'tunnel_minor_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 3],
						[16, 4],
						[17, 8],
						[18, 12]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(22, 22, 22, 1)'
			}
		},
		{
			id: 'tunnel_sec_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 2],
						[13, 2],
						[14, 3],
						[15, 4],
						[16, 6],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': '#161616'
			}
		},
		{
			id: 'tunnel_pri_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'tunnel_trunk_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: {
				'line-cap': 'round',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': '#161616'
			}
		},
		{
			id: 'tunnel_mot_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 10,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['==', 'brunnel', 'tunnel']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[10, 1],
						[12, 2],
						[13, 3],
						[14, 5],
						[15, 7],
						[16, 9],
						[17, 11],
						[18, 20]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'tunnel_rail',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: ['all', ['==', 'class', 'rail'], ['==', 'brunnel', 'tunnel']],
			layout: { visibility: 'visible', 'line-join': 'round' },
			paint: {
				'line-color': '#1a1a1a',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[14, 1],
						[15, 1],
						[16, 3],
						[21, 7]
					]
				},
				'line-opacity': 0.5
			}
		},
		{
			id: 'tunnel_rail_dash',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			filter: ['all', ['==', 'class', 'rail'], ['==', 'brunnel', 'tunnel']],
			layout: { visibility: 'visible', 'line-join': 'round' },
			paint: {
				'line-color': '#111',
				'line-width': {
					base: 1.3,
					stops: [
						[15, 0.5],
						[16, 1],
						[20, 5]
					]
				},
				'line-dasharray': {
					stops: [
						[15, [5, 5]],
						[16, [6, 6]]
					]
				},
				'line-opacity': 0.5
			}
		},
		{
			id: 'road_service_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 1],
						[16, 3],
						[17, 6],
						[18, 8]
					]
				},
				'line-opacity': 1,
				'line-color': '#1c1c1c'
			}
		},
		{
			id: 'road_minor_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.5],
						[12, 0.5],
						[14, 2],
						[15, 3],
						[16, 4.3],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[13, 'rgba(65, 71, 88, 1)'],
						[15.7, 'rgba(65, 71, 88, 1)'],
						[16, 'rgba(65, 71, 88, 1)']
					]
				}
			}
		},
		{
			id: 'road_pri_case_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 2],
						[13, 3],
						[14, 4],
						[15, 5],
						[16, 8],
						[17, 10]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': '#232323'
			}
		},
		{
			id: 'road_trunk_case_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 2],
						[13, 3],
						[14, 4],
						[15, 5],
						[16, 8],
						[17, 10]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[12, '#1a1a1a'],
						[14, '#232323']
					]
				}
			}
		},
		{
			id: 'road_mot_case_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 2],
						[13, 3],
						[14, 4],
						[15, 5],
						[16, 8],
						[17, 10]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[12, '#1a1a1a'],
						[14, '#232323']
					]
				}
			}
		},
		{
			id: 'road_sec_case_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.9],
						[12, 1.5],
						[13, 3],
						[14, 5],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[11, 'rgba(65, 71, 88, 1)'],
						[12.99, 'rgba(65, 71, 88, 1)'],
						[13, 'rgba(65, 71, 88, 1)']
					]
				}
			}
		},
		{
			id: 'road_pri_case_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 7,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[7, '#1a1a1a'],
						[12, '#232323']
					]
				}
			}
		},
		{
			id: 'road_trunk_case_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[5, '#1a1a1a'],
						[12, '#232323']
					]
				}
			}
		},
		{
			id: 'road_mot_case_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.7],
						[8, 0.8],
						[11, 3],
						[12, 4],
						[13, 5],
						[14, 7],
						[15, 9],
						[16, 11],
						[17, 13],
						[18, 22]
					]
				},
				'line-opacity': {
					stops: [
						[6, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[5, '#1a1a1a'],
						[12, '#232323']
					]
				}
			}
		},
		{
			id: 'road_path',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'path', 'track'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 0.5],
						[16, 1],
						[18, 3]
					]
				},
				'line-opacity': 1,
				'line-color': '#262626',
				'line-dasharray': {
					stops: [
						[15, [2, 2]],
						[18, [3, 3]]
					]
				}
			}
		},
		{
			id: 'road_service_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 2],
						[16, 2],
						[17, 4],
						[18, 6]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'road_minor_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 3],
						[16, 4],
						[17, 8],
						[18, 12]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'road_pri_fill_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 1],
						[13, 1.5],
						[14, 2],
						[15, 3],
						[16, 6],
						[17, 8]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'road_trunk_fill_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'square', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 1],
						[13, 1.5],
						[14, 2],
						[15, 3],
						[16, 6],
						[17, 8]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'road_mot_fill_ramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 12,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['==', 'ramp', 1]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[12, 1],
						[13, 1.5],
						[14, 2],
						[15, 3],
						[16, 6],
						[17, 8]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'road_sec_fill_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 2],
						[13, 2],
						[14, 3],
						[15, 4],
						[16, 6],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'road_pri_fill_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 10,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[10, 0.3],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(83, 86, 102, 1)'
			}
		},
		{
			id: 'road_trunk_fill_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 10,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'road_mot_fill_noramp',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 10,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['!has', 'brunnel']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[10, 1],
						[12, 2],
						[13, 3],
						[14, 5],
						[15, 7],
						[16, 9],
						[17, 11],
						[18, 20]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(73, 73, 73, 1)'
			}
		},
		{
			id: 'rail',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			filter: ['all', ['==', 'class', 'rail'], ['!=', 'brunnel', 'tunnel']],
			layout: { visibility: 'visible', 'line-join': 'round' },
			paint: {
				'line-color': '#1a1a1a',
				'line-width': {
					base: 1.3,
					stops: [
						[13, 0.5],
						[14, 1],
						[15, 1],
						[16, 3],
						[21, 7]
					]
				}
			}
		},
		{
			id: 'rail_dash',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			filter: ['all', ['==', 'class', 'rail'], ['!=', 'brunnel', 'tunnel']],
			layout: { visibility: 'visible', 'line-join': 'round' },
			paint: {
				'line-color': '#111',
				'line-width': {
					base: 1.3,
					stops: [
						[15, 0.5],
						[16, 1],
						[20, 5]
					]
				},
				'line-dasharray': {
					stops: [
						[15, [5, 5]],
						[16, [6, 6]]
					]
				}
			}
		},
		{
			id: 'bridge_service_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 1],
						[16, 3],
						[17, 6],
						[18, 8]
					]
				},
				'line-opacity': 1,
				'line-color': '#1c1c1c'
			}
		},
		{
			id: 'bridge_minor_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'miter' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.5],
						[12, 0.5],
						[14, 2],
						[15, 3],
						[16, 4.3],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[13, '#161616'],
						[15.7, '#161616'],
						[16, '#1c1c1c']
					]
				}
			}
		},
		{
			id: 'bridge_sec_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'miter' },
			paint: {
				'line-width': {
					stops: [
						[11, 0.5],
						[12, 1.5],
						[13, 3],
						[14, 5],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': {
					stops: [
						[11, '#1a1a1a'],
						[12.99, '#1a1a1a'],
						[13, '#232323']
					]
				}
			}
		},
		{
			id: 'bridge_pri_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 8,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[8, '#1a1a1a'],
						[12, '#232323']
					]
				}
			}
		},
		{
			id: 'bridge_trunk_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: {
				'line-cap': 'butt',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[13, 4],
						[14, 6],
						[15, 8],
						[16, 10],
						[17, 14],
						[18, 18]
					]
				},
				'line-opacity': {
					stops: [
						[5, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[5, '#1a1a1a'],
						[12, '#232323']
					]
				}
			}
		},
		{
			id: 'bridge_mot_case',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 5,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[6, 0.5],
						[7, 0.8],
						[8, 1],
						[11, 3],
						[12, 4],
						[13, 5],
						[14, 7],
						[15, 9],
						[16, 11],
						[17, 13],
						[18, 22]
					]
				},
				'line-opacity': {
					stops: [
						[6, 0.5],
						[7, 1]
					]
				},
				'line-color': {
					stops: [
						[5, '#1a1a1a'],
						[10, '#232323']
					]
				}
			}
		},
		{
			id: 'bridge_path',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'path'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 0.5],
						[16, 1],
						[18, 3]
					]
				},
				'line-opacity': 1,
				'line-color': '#262626',
				'line-dasharray': {
					stops: [
						[15, [2, 2]],
						[18, [3, 3]]
					]
				}
			}
		},
		{
			id: 'bridge_service_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'service'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 2],
						[16, 2],
						[17, 4],
						[18, 6]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'bridge_minor_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 15,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'minor'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[15, 3],
						[16, 4],
						[17, 8],
						[18, 12]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'bridge_sec_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 13,
			maxzoom: 24,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary'], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 2],
						[13, 2],
						[14, 3],
						[15, 4],
						[16, 6],
						[17, 10],
						[18, 14]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'bridge_pri_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'primary'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': '#0b0b0b'
			}
		},
		{
			id: 'bridge_trunk_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 11,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'trunk'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: {
				'line-cap': 'butt',
				'line-join': 'round',
				visibility: 'visible'
			},
			paint: {
				'line-width': {
					stops: [
						[11, 1],
						[13, 2],
						[14, 4],
						[15, 6],
						[16, 8],
						[17, 12],
						[18, 16]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'bridge_mot_fill',
			type: 'line',
			source: 'carto',
			'source-layer': 'transportation',
			minzoom: 10,
			maxzoom: 24,
			filter: ['all', ['==', 'class', 'motorway'], ['!=', 'ramp', 1], ['==', 'brunnel', 'bridge']],
			layout: { 'line-cap': 'butt', 'line-join': 'round' },
			paint: {
				'line-width': {
					stops: [
						[10, 1],
						[12, 2],
						[13, 3],
						[14, 5],
						[15, 7],
						[16, 9],
						[17, 11],
						[18, 20]
					]
				},
				'line-opacity': 1,
				'line-color': 'rgba(65, 71, 88, 1)'
			}
		},
		{
			id: 'building',
			type: 'fill',
			source: 'carto',
			'source-layer': 'building',
			layout: { visibility: 'visible' },
			paint: {
				'fill-color': {
					base: 1,
					stops: [
						[15.5, 'transparent'],
						[16, 'transparent']
					]
				},
				'fill-antialias': true
			}
		},
		{
			id: 'building-top',
			type: 'fill',
			source: 'carto',
			'source-layer': 'building',
			layout: { visibility: 'visible' },
			paint: {
				'fill-translate': {
					base: 1,
					stops: [
						[14, [0, 0]],
						[16, [-2, -2]]
					]
				},
				'fill-outline-color': '#0e0e0e',
				'fill-color': 'rgba(57, 57, 57, 1)',
				'fill-opacity': {
					base: 1,
					stops: [
						[13, 0],
						[16, 1]
					]
				}
			}
		},
		{
			id: 'boundary_country_outline',
			type: 'line',
			source: 'carto',
			'source-layer': 'boundary',
			minzoom: 6,
			maxzoom: 24,
			filter: ['all', ['==', 'admin_level', 2], ['==', 'maritime', 0]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': '#2C353C',
				'line-opacity': 0.5,
				'line-width': 8,
				'line-offset': 0
			}
		},
		{
			id: 'boundary_country_inner',
			type: 'line',
			source: 'carto',
			'source-layer': 'boundary',
			minzoom: 0,
			filter: ['all', ['==', 'admin_level', 2], ['==', 'maritime', 0]],
			layout: { 'line-cap': 'round', 'line-join': 'round' },
			paint: {
				'line-color': {
					stops: [
						[4, 'rgba(92, 94, 94, 1)'],
						[5, 'rgba(96, 96, 96, 1)'],
						[6, 'rgba(102, 102, 102, 1)']
					]
				},
				'line-opacity': 1,
				'line-width': {
					stops: [
						[3, 1],
						[6, 1.5]
					]
				},
				'line-offset': 0
			}
		},
		{
			id: 'waterway_label',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'waterway',
			filter: ['all', ['has', 'name'], ['==', 'class', 'river']],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Regular Italic',
					'Open Sans Italic',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'symbol-placement': 'line',
				'symbol-spacing': 300,
				'symbol-avoid-edges': false,
				'text-size': {
					stops: [
						[9, 8],
						[10, 9]
					]
				},
				'text-padding': 2,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-offset': {
					stops: [
						[6, [0, -0.2]],
						[11, [0, -0.4]],
						[12, [0, -0.6]]
					]
				},
				'text-letter-spacing': 0,
				'text-keep-upright': true
			},
			paint: {
				'text-color': 'rgba(164, 164, 164, 1)',
				'text-halo-color': '#181818',
				'text-halo-width': 1
			}
		},
		{
			id: 'watername_ocean',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'water_name',
			minzoom: 0,
			maxzoom: 5,
			filter: ['all', ['has', 'name'], ['==', '$type', 'Point'], ['==', 'class', 'ocean']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'point',
				'text-size': {
					stops: [
						[0, 13],
						[2, 14],
						[4, 18]
					]
				},
				'text-font': [
					'Montserrat Medium Italic',
					'Open Sans Italic',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-line-height': 1.2,
				'text-padding': 2,
				'text-allow-overlap': false,
				'text-ignore-placement': false,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-max-width': 6,
				'text-letter-spacing': 0.1
			},
			paint: {
				'text-color': 'rgba(109, 123, 129, 1)',
				'text-halo-color': 'rgba(0,0,0,0.7)',
				'text-halo-width': 1,
				'text-halo-blur': 0
			}
		},
		{
			id: 'watername_sea',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'water_name',
			minzoom: 5,
			filter: ['all', ['has', 'name'], ['==', '$type', 'Point'], ['==', 'class', 'sea']],
			layout: {
				'text-field': '{name}',
				'symbol-placement': 'point',
				'text-size': 12,
				'text-font': [
					'Montserrat Medium Italic',
					'Open Sans Italic',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-line-height': 1.2,
				'text-padding': 2,
				'text-allow-overlap': false,
				'text-ignore-placement': false,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-max-width': 6,
				'text-letter-spacing': 0.1
			},
			paint: {
				'text-color': '#3c3c3c',
				'text-halo-color': 'rgba(0,0,0,0.7)',
				'text-halo-width': 1,
				'text-halo-blur': 0
			}
		},
		{
			id: 'watername_lake',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'water_name',
			minzoom: 4,
			filter: ['all', ['has', 'name'], ['==', '$type', 'Point'], ['==', 'class', 'lake']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'symbol-placement': 'point',
				'text-size': {
					stops: [
						[13, 9],
						[14, 10],
						[15, 11],
						[16, 12],
						[17, 13]
					]
				},
				'text-font': [
					'Montserrat Regular Italic',
					'Open Sans Italic',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-line-height': 1.2,
				'text-padding': 2,
				'text-allow-overlap': false,
				'text-ignore-placement': false,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto'
			},
			paint: {
				'text-color': 'rgba(155, 155, 155, 1)',
				'text-halo-color': '#181818',
				'text-halo-width': 1,
				'text-halo-blur': 1
			}
		},
		{
			id: 'watername_lake_line',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'water_name',
			filter: ['all', ['has', 'name'], ['==', '$type', 'LineString']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'symbol-placement': 'line',
				'text-size': {
					stops: [
						[13, 9],
						[14, 10],
						[15, 11],
						[16, 12],
						[17, 13]
					]
				},
				'text-font': [
					'Montserrat Regular Italic',
					'Open Sans Italic',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'symbol-spacing': 350,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-line-height': 1.2
			},
			paint: {
				'text-color': '#444',
				'text-halo-color': '#181818',
				'text-halo-width': 1,
				'text-halo-blur': 1
			}
		},
		{
			id: 'place_hamlet',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 12,
			maxzoom: 16,
			filter: ['any', ['==', 'class', 'neighbourhood'], ['==', 'class', 'hamlet']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[14, '{name}']
					]
				},
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[13, 8],
						[14, 10],
						[16, 11]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': {
					stops: [
						[12, 'none'],
						[14, 'uppercase']
					]
				}
			},
			paint: {
				'text-color': 'rgba(182, 180, 180, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': 'rgba(53, 52, 52, 1)',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_suburbs',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 12,
			maxzoom: 16,
			filter: ['all', ['==', 'class', 'suburb']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[12, 9],
						[13, 10],
						[14, 11],
						[15, 12],
						[16, 13]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': {
					stops: [
						[8, 'none'],
						[12, 'uppercase']
					]
				}
			},
			paint: {
				'text-color': '#666',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_villages',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 10,
			maxzoom: 16,
			filter: ['all', ['==', 'class', 'village']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[10, 9],
						[12, 10],
						[13, 11],
						[14, 12],
						[16, 13]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': 'none'
			},
			paint: {
				'text-color': 'rgba(154, 153, 153, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_town',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 8,
			maxzoom: 14,
			filter: ['all', ['==', 'class', 'town']],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[8, 10],
						[9, 10],
						[10, 11],
						[13, 14],
						[14, 15]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': 'none'
			},
			paint: {
				'text-color': 'rgba(204, 208, 228, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_country_2',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 3,
			maxzoom: 10,
			filter: ['all', ['==', 'class', 'country'], ['>=', 'rank', 3], ['has', 'iso_a2']],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[3, 10],
						[5, 11],
						[6, 12],
						[7, 13],
						[8, 14]
					]
				},
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': {
					stops: [
						[3, 'rgba(157, 157, 157, 1)'],
						[5, 'rgba(114, 114, 114, 1)'],
						[6, 'rgba(112, 112, 112, 1)']
					]
				},
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_country_1',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 2,
			maxzoom: 7,
			filter: ['all', ['==', 'class', 'country'], ['<=', 'rank', 2]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[3, 11],
						[4, 12],
						[5, 13],
						[6, 14]
					]
				},
				'text-transform': 'uppercase',
				'text-max-width': {
					stops: [
						[2, 6],
						[3, 6],
						[4, 9],
						[5, 12]
					]
				}
			},
			paint: {
				'text-color': {
					stops: [
						[3, 'rgba(158, 182, 189, 1)'],
						[5, 'rgba(118, 126, 137, 1)'],
						[6, 'rgba(120, 141, 147, 1)']
					]
				},
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_state',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 5,
			maxzoom: 10,
			filter: ['all', ['==', 'class', 'state'], ['<=', 'rank', 4]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[5, 12],
						[7, 14]
					]
				},
				'text-transform': 'uppercase',
				'text-max-width': 9
			},
			paint: {
				'text-color': 'rgba(203, 230, 230, 1)',
				'text-halo-color': '#111',
				'text-halo-width': 0
			}
		},
		{
			id: 'place_continent',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 0,
			maxzoom: 2,
			filter: ['all', ['==', 'class', 'continent']],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-transform': 'uppercase',
				'text-size': 14,
				'text-letter-spacing': 0.1,
				'text-max-width': 9,
				'text-justify': 'center',
				'text-keep-upright': false
			},
			paint: {
				'text-color': 'rgba(135, 164, 179, 1)',
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_r6',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 8,
			maxzoom: 15,
			filter: ['all', ['==', 'class', 'city'], ['>=', 'rank', 6]],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[8, 12],
						[9, 13],
						[10, 14],
						[13, 17],
						[14, 20]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': 'rgba(168, 176, 180, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_r5',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 8,
			maxzoom: 15,
			filter: ['all', ['==', 'class', 'city'], ['>=', 'rank', 0], ['<=', 'rank', 5]],
			layout: {
				'text-field': {
					stops: [
						[8, '{name_en}'],
						[13, '{name}']
					]
				},
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[8, 14],
						[10, 16],
						[13, 19],
						[14, 22]
					]
				},
				'icon-image': '',
				'icon-offset': [16, 0],
				'text-anchor': 'center',
				'icon-size': 1,
				'text-max-width': 10,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': 'rgba(211, 228, 236, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_dot_r7',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 6,
			maxzoom: 7,
			filter: ['all', ['==', 'class', 'city'], ['<=', 'rank', 7]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 12,
				'icon-image': 'circle-11',
				'icon-offset': [16, 5],
				'text-anchor': 'right',
				'icon-size': 0.4,
				'text-max-width': 8,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2]
			},
			paint: {
				'text-color': 'rgba(174, 191, 207, 1)',
				'icon-color': 'rgba(94, 105, 106, 1)',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_dot_r4',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 5,
			maxzoom: 7,
			filter: ['all', ['==', 'class', 'city'], ['<=', 'rank', 4]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 12,
				'icon-image': 'circle-11',
				'icon-offset': [16, 5],
				'text-anchor': 'right',
				'icon-size': 0.4,
				'text-max-width': 8,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2]
			},
			paint: {
				'text-color': 'rgba(233, 239, 246, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_dot_r2',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 4,
			maxzoom: 7,
			filter: ['all', ['==', 'class', 'city'], ['<=', 'rank', 2]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 12,
				'icon-image': 'circle-11',
				'icon-offset': [16, 5],
				'text-anchor': 'right',
				'icon-size': 0.4,
				'text-max-width': 8,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2]
			},
			paint: {
				'text-color': 'rgba(175, 194, 217, 1)',
				'icon-color': 'rgba(131, 164, 189, 1)',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_city_dot_z7',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 7,
			maxzoom: 8,
			filter: ['all', ['!has', 'capital'], ['!in', 'class', 'country', 'state']],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 12,
				'icon-image': 'circle-11',
				'icon-offset': [16, 5],
				'text-anchor': 'right',
				'icon-size': 0.4,
				'text-max-width': 8,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2]
			},
			paint: {
				'text-color': 'rgba(160, 179, 191, 1)',
				'icon-color': 'rgba(113, 128, 147, 1)',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'place_capital_dot_z7',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'place',
			minzoom: 7,
			maxzoom: 8,
			filter: ['all', ['>', 'capital', 0]],
			layout: {
				'text-field': '{name_en}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 12,
				'icon-image': 'circle-11',
				'icon-offset': [16, 5],
				'text-anchor': 'right',
				'icon-size': 0.4,
				'text-max-width': 8,
				'text-keep-upright': true,
				'text-offset': [0.2, 0.2],
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': 'rgba(177, 201, 214, 1)',
				'icon-color': '#666',
				'icon-translate-anchor': 'map',
				'text-halo-color': '#222',
				'text-halo-width': 1
			}
		},
		{
			id: 'poi_stadium',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'poi',
			minzoom: 15,
			filter: ['all', ['in', 'class', 'stadium', 'cemetery', 'attraction'], ['<=', 'rank', 3]],
			layout: {
				'text-field': '{name}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[15, 8],
						[17, 9],
						[18, 10]
					]
				},
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': '#515151',
				'text-halo-color': '#151515',
				'text-halo-width': 1
			}
		},
		{
			id: 'poi_park',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'poi',
			minzoom: 15,
			filter: ['all', ['==', 'class', 'park']],
			layout: {
				'text-field': '{name}',
				'text-font': [
					'Montserrat Medium',
					'Open Sans Bold',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[15, 8],
						[17, 9],
						[18, 10]
					]
				},
				'text-transform': 'uppercase'
			},
			paint: {
				'text-color': '#515151',
				'text-halo-color': '#151515',
				'text-halo-width': 1
			}
		},
		{
			id: 'roadname_minor',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'transportation_name',
			minzoom: 16,
			filter: ['all', ['in', 'class', 'minor', 'service']],
			layout: {
				'symbol-placement': 'line',
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': 9,
				'text-field': '{name}',
				'symbol-avoid-edges': false,
				'symbol-spacing': 200,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-justify': 'center'
			},
			paint: {
				'text-color': 'rgba(181, 180, 180, 1)',
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'roadname_sec',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'transportation_name',
			minzoom: 15,
			filter: ['all', ['in', 'class', 'secondary', 'tertiary']],
			layout: {
				'symbol-placement': 'line',
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[15, 9],
						[16, 11],
						[18, 12]
					]
				},
				'text-field': '{name}',
				'symbol-avoid-edges': false,
				'symbol-spacing': 200,
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-justify': 'center'
			},
			paint: {
				'text-color': 'rgba(146, 146, 146, 1)',
				'text-halo-color': 'rgba(34, 34, 34, 1)',
				'text-halo-width': 1
			}
		},
		{
			id: 'roadname_pri',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'transportation_name',
			minzoom: 14,
			filter: ['all', ['in', 'class', 'primary']],
			layout: {
				'symbol-placement': 'line',
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[14, 10],
						[15, 10],
						[16, 11],
						[18, 12]
					]
				},
				'text-field': '{name}',
				'symbol-avoid-edges': false,
				'symbol-spacing': {
					stops: [
						[6, 200],
						[16, 250]
					]
				},
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-justify': 'center',
				'text-letter-spacing': {
					stops: [
						[14, 0],
						[16, 0.2]
					]
				}
			},
			paint: {
				'text-color': 'rgba(189, 189, 189, 1)',
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'roadname_major',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'transportation_name',
			minzoom: 13,
			filter: ['all', ['in', 'class', 'trunk', 'motorway']],
			layout: {
				'symbol-placement': 'line',
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				],
				'text-size': {
					stops: [
						[14, 10],
						[15, 10],
						[16, 11],
						[18, 12]
					]
				},
				'text-field': '{name}',
				'symbol-avoid-edges': false,
				'symbol-spacing': {
					stops: [
						[6, 200],
						[16, 250]
					]
				},
				'text-pitch-alignment': 'auto',
				'text-rotation-alignment': 'auto',
				'text-justify': 'center',
				'text-letter-spacing': {
					stops: [
						[13, 0],
						[16, 0.2]
					]
				}
			},
			paint: {
				'text-color': '#383838',
				'text-halo-color': '#111',
				'text-halo-width': 1
			}
		},
		{
			id: 'housenumber',
			type: 'symbol',
			source: 'carto',
			'source-layer': 'housenumber',
			minzoom: 17,
			maxzoom: 24,
			layout: {
				'text-field': '{housenumber}',
				'text-size': {
					stops: [
						[17, 9],
						[18, 11]
					]
				},
				'text-font': [
					'Montserrat Regular',
					'Open Sans Regular',
					'Noto Sans Regular',
					'HanWangHeiLight Regular',
					'NanumBarunGothic Regular'
				]
			},
			paint: {
				'text-halo-color': 'transparent',
				'text-color': 'transparent',
				'text-halo-width': 0.75
			}
		}
	],
	id: 'voyager',
	owner: 'Carto'
};
