import { writable, derived } from 'svelte/store';
import { osm, dark } from '$lib/style';

export const isDarkmode = writable(false);
export const mapStyle = derived(isDarkmode, (mode) => (mode ? dark : osm));
