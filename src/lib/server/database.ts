import { hype, transfers } from '$src/db/schema';
import type { D1Database } from '@cloudflare/workers-types/experimental';
import { desc, eq, sum } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

export interface Env {
	D1: D1Database;
}

export const getHype = async (env: Env) => {
	const db = drizzle(env.D1);
	const res = await db
		.select({
			total: sum(hype.hypeLevel)
		})
		.from(hype);
	return res[0]?.total ?? 0;
};

export const addHype = async (env: Env, level: number) => {
	const db = drizzle(env.D1);
	await db.insert(hype).values({
		hypeLevel: level
	});
	return { message: 'OK' };
};

// export default {
// 	async fetch(request: Request, env: Env) {
// 		const db = drizzle(env.D1);
// 		// const result = await db.select().from(users).all();
// 		// return Response.json(result);
// 	}
// };

export const getLatestTransfer = async (env: Env) => {
	const db = drizzle(env.D1);
	const res = await db.select().from(transfers).orderBy(desc(transfers.timestamp)).limit(1);
	return res[0] ?? null;
};

export const getAllTransfers = async (env: Env) => {
	const db = drizzle(env.D1);
	const res = await db.select().from(transfers).orderBy(desc(transfers.timestamp));
	return res;
};
