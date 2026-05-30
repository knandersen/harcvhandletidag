import { SvelteDate } from 'svelte/reactivity';

export const sidsteHandel = new SvelteDate('2026-01-26T00:00:00Z'); // Magnus Knudsen

export const transferWindow = {
	start: new SvelteDate('2026-06-15T00:00:00Z'),
	end: new SvelteDate('2026-08-31T23:59:59Z')
};

export const transferFilterDate = new SvelteDate('2026-05-01T00:00:00Z'); // Used to filter transfers in the UI, set to a date before the transfer window starts

export const hype = $state({
	level: 0
});
