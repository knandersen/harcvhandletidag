import { hype } from '$src/db/schema';
import type { D1Database } from '@cloudflare/workers-types/experimental';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

export interface Env {
	D1: D1Database;
}

export const getHype = async (env: Env) => {
	const db = drizzle(env.D1);
	const res = await db.select().from(hype).limit(1);

	if (!res || res.length === 0) {
		console.log('No hype found for today, creating new entry with hype level 0');
		const newHype = await db
			.insert(hype)
			.values({
				hypeLevel: 0
			})
			.returning()
			.get();

		console.log('Created new hype entry:', newHype);
		return newHype;
	}
	return res[0];
};

export const setHype = async (env: Env, newLevel: number) => {
	const db = drizzle(env.D1);
	const today = await getHype(env);
	const updatedHype = await db
		.update(hype)
		.set({ hypeLevel: newLevel })
		.where(eq(hype.id, today.id))
		.returning()
		.get();

	console.log('Updated hype entry:', updatedHype);
	return updatedHype;
};

// export default {
// 	async fetch(request: Request, env: Env) {
// 		const db = drizzle(env.D1);
// 		// const result = await db.select().from(users).all();
// 		// return Response.json(result);
// 	}
// };
