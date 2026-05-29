import { getLatestTransfer } from '$src/lib/server/database';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ platform }) => {
	const transfer = await getLatestTransfer(platform.env);

	return { transfer };
};
