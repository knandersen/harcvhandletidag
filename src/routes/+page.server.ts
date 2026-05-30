import { getAllTransfers, getLatestTransfer } from '$src/lib/server/database';
import { SvelteDate } from 'svelte/reactivity';
import type { PageLoad } from './$types';
import { transferWindow } from '$src/lib/constants.svelte';

export const load: PageLoad = async ({ platform }) => {
	const transfer = await getLatestTransfer(platform.env);
	const transfers = await getAllTransfers(platform.env);

	const filteredTransfers = transfers.filter((t) => {
		const timestamp = new SvelteDate(t.timestamp);
		return timestamp >= transferWindow.start;
	});

	return { transfers: filteredTransfers, transfer };
};
