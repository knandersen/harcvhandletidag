import { getTodaysHype, updateHypeLevel } from '$src/lib/hype.server';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const hype = await getTodaysHype();
		return new Response(JSON.stringify(hype), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error fetching hype:', error);
		return Response.json(
			{ error: 'Failed to fetch hype' },
			{
				status: 500
			}
		);
	}
};

export async function POST({ request }) {
	const { level } = await request.json();
	console.log('Incrementing hype by:', level);
	const hype = await updateHypeLevel(level);
	return new Response(JSON.stringify(hype), {
		headers: { 'Content-Type': 'application/json' }
	});
}
