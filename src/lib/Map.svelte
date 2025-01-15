<script lang="ts">
	import ml from 'maplibre-gl';
	import { isDarkmode, mapStyle } from './store';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { VendingMachine } from './vendingMachine';
	import { writable } from 'svelte/store';
	import { base } from '$app/paths';

	interface Props {
		here: ml.LngLatLike;
		pointData: GeoJSON.FeatureCollection<GeoJSON.Point, Record<string, string>>;
	}

	let { here, pointData }: Props = $props();

	let map: ml.Map;
	let mapElem = $state<HTMLDivElement>();
	const vending = writable<string>('');
	const payment = writable<string>('');
	const VENDING = {
		DRINK: {
			v: 'drinks',
			title: '飲み物',
			icon: { id: 'icon-bottle', file: 'icon-bottle.webp' }
		},
		BREAD: {
			v: 'bread',
			title: 'パン',
			icon: { id: 'icon-bread', file: 'icon-baguette.webp' }
		},
		ICE_CREAM: {
			v: 'ice_cream',
			title: 'アイス',
			icon: { id: 'icon-icecream', file: 'icon-icecream.webp' }
		}
	} as const;
	const vendings = [
		{ value: VENDING.DRINK.v, title: VENDING.DRINK.title },
		{ value: VENDING.BREAD.v, title: VENDING.BREAD.title },
		{ value: VENDING.ICE_CREAM.v, title: VENDING.ICE_CREAM.title }
	];

	$effect(() => {
		if (typeof mapElem === 'undefined') return;
		map = new ml.Map({
			container: mapElem,
			style: $mapStyle,
			center: here,
			zoom: 13
		});
		const SOURCE_ID = 'vendingmachine';
		const LAYER = {
			CIRCLE: 'vendingmachine-circle',
			ICON: 'vendingmachine-icon',
			SYMBOL: 'vendingmachine-symbol'
		};
		map.on('load', () => {
			map.loadImage(`${base}/${VENDING.DRINK.icon.file}`).then((img) => {
				map.addImage(VENDING.DRINK.icon.id, img.data, { sdf: true });
			});
			map.loadImage(`${base}/${VENDING.BREAD.icon.file}`).then((img) => {
				map.addImage(VENDING.BREAD.icon.id, img.data, { sdf: true });
			});
			map.loadImage(`${base}/${VENDING.ICE_CREAM.icon.file}`).then((img) => {
				map.addImage(VENDING.ICE_CREAM.icon.id, img.data, { sdf: true });
			});
			map.addControl(
				new ml.GeolocateControl({
					positionOptions: {
						enableHighAccuracy: true
					},
					trackUserLocation: true
				})
			);
			map.addControl(new ml.NavigationControl());
			map.addSource(SOURCE_ID, {
				type: 'geojson',
				data: pointData
			});
			map.addLayer({
				id: LAYER.CIRCLE,
				source: SOURCE_ID,
				type: 'circle',
				paint: {
					//'circle-color': 'blue',
					//'circle-opacity': 0.8,
					//'circle-stroke-color': 'white',
					//'circle-stroke-width': 1
					'circle-color': 'white',
					'circle-radius': 16
				}
			});
			map.addLayer({
				id: LAYER.ICON,
				source: SOURCE_ID,
				type: 'symbol',
				paint: {
					'icon-color': [
						'match',
						['get', 'vending'],
						VENDING.DRINK.v,
						'blue',
						VENDING.BREAD.v,
						'orange',
						VENDING.ICE_CREAM.v,
						'red',
						'blue' // fallback
					]
				},
				layout: {
					'icon-image': [
						'match',
						['get', 'vending'],
						VENDING.DRINK.v,
						VENDING.DRINK.icon.id,
						VENDING.BREAD.v,
						VENDING.BREAD.icon.id,
						VENDING.ICE_CREAM.v,
						VENDING.ICE_CREAM.icon.id,
						VENDING.DRINK.icon.id // fallback
					],
					'icon-size': 0.15,
					'icon-allow-overlap': true
				}
			});
			map.addLayer({
				id: LAYER.SYMBOL,
				source: SOURCE_ID,
				type: 'symbol',
				layout: {
					'text-font': ['Noto Sans Bold'],
					'text-field': ['format', ['coalesce', ['get', 'brand'], ['get', 'name']]],
					'text-offset': [0, 1.6]
				},
				paint: {
					'text-halo-width': 2,
					'text-halo-color': 'white'
				}
			});
		});
		map.on('click', LAYER.CIRCLE, (e) => {
			if (typeof e.features === 'undefined') return;
			const feature = e.features[0];
			const vm = new VendingMachine(feature);
			new ml.Popup().setLngLat(vm.getPosition()).setHTML(vm.generatePopupText()).addTo(map);
		});
		/*
        const bottleIcon = icon({
            iconUrl: BottleImage,
            iconSize: [36, 36]
        });
        */
		const vUnsubscriber = vending.subscribe((v) => {
			let filter = null;
			if (v === '') {
				map.setFilter(LAYER.CIRCLE, null);
				map.setFilter(LAYER.ICON, null);
				map.setFilter(LAYER.SYMBOL, null);
				return;
			}
			filter = ['==', ['get', 'vending'], v] as ml.FilterSpecification;
			if ($payment !== '') {
				filter = [
					'all',
					filter,
					['==', ['get', `payment:${$payment}`], 'yes']
				] as ml.FilterSpecification;
			}
			map.setFilter(LAYER.CIRCLE, filter);
			map.setFilter(LAYER.ICON, filter);
			map.setFilter(LAYER.SYMBOL, filter);
		});
		return () => {
			vUnsubscriber();
			map.remove();
		};
	});
	$inspect($payment);
</script>

<div id="map-container">
	<div id="map" bind:this={mapElem}></div>
</div>

<button
	class="absolute top-[13rem] right-2.5 bg-white rounded size-[29px]"
	onclick={() => {
		$isDarkmode = !$isDarkmode;
		if ($isDarkmode) {
			document.body.className = 'dark';
		} else {
			document.body.className = '';
		}
	}}
>
	<span class="grid place-items-center p-1 text-red-200">
		{#if $isDarkmode}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="#2D7BBE"
				class="bi bi-moon-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				fill="#ffc300"
				class="bi bi-sun-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
				/>
			</svg>
		{/if}
	</span>
</button>

<div class="absolute bottom-10 left-2 bg-white rounded-lg p-2">
	<div>
		<label for="vending">欲しいものは？</label>
		<select name="vending" id="vending-selector" bind:value={$vending}>
			<option value="">指定なし</option>
			{#each vendings as v}
				<option value={v.value}>{v.title}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	#map {
		height: 100%;
		width: 100vw;
	}
	#map-container {
		position: fixed;
		bottom: 0;
		top: 53px;
	}
</style>
