import type { RequestHandler } from './$types';
import { getHype, setHype } from '$src/lib/server/database';

export const GET: RequestHandler = async ({ platform }) => {
	try {
		const hype = await getHype(platform!.env);
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

export const POST: RequestHandler = async ({ request, platform }) => {
	const { level } = await request.json();
	console.log('Incrementing hype by:', level);
	const hype = await setHype(platform!.env, level);
	return new Response(JSON.stringify(hype), {
		headers: { 'Content-Type': 'application/json' }
	});
};
