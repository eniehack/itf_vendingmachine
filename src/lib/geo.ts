import { writable, type Writable } from 'svelte/store';
import type { GeoJSONFeature } from './geojson';
import { VendingMachine } from './vendingMachine';
import ml from 'maplibre-gl';

export const here: Writable<ml.LngLat> = writable(new ml.LngLat(140.1019, 36.107));

export const insertMarker = (map: ml.Map, features: GeoJSONFeature[], el: HTMLDivElement) => {
	features.forEach((obj) => {
		let vm = new VendingMachine(obj);
		el.setAttribute('class', 'marker');
		/*
        el.style.backgroundImage = `url(http://${window.location.host}${BottleImage})`;
        el.style.width = "36px";
        el.style.height = "36px"; */
		const popup = new ml.Popup().setHTML(vm.generatePopupText());
		//let m = new Marker({element: el})
		new ml.Marker().setLngLat(obj.geometry.coordinates).setPopup(popup).addTo(map);
	});
};
