import { getTodaysHype } from '$src/lib/hype.server';

export async function load() {
	const hype = await getTodaysHype();

	return hype;
}
