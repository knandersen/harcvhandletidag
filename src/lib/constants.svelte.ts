import { SvelteDate } from 'svelte/reactivity';

export const sidsteHandel = new SvelteDate('2026-01-26T00:00:00Z'); // Magnus Knudsen

export const transferWindow = {
	start: new SvelteDate('2026-06-15T00:00:00Z'),
	end: new SvelteDate('2026-08-31T23:59:59Z')
};

export const hype = $state({
	level: 0
});
