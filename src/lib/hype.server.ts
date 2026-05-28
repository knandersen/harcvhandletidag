import type { D1Database } from '@cloudflare/workers-types/experimental';
import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '$generated/prisma/client';
import { getPlatformProxy } from 'wrangler';

const getClient = async (): Promise<PrismaClient> => {
	const platform = await getPlatformProxy();
	const db = platform.env?.D1 as D1Database;
	if (!db) throw new Error('D1 binding missing. Run under wrangler dev and check binding name.');
	const adapter = new PrismaD1(db);
	const prisma = new PrismaClient({ adapter });
	return prisma;
};

const getTodayString = () => {
	const today = new Date();
	today.setUTCHours(0, 0, 0, 0);
	const todayString = today.toISOString();
	return todayString;
};

export const getTodaysHype = async () => {
	const prisma = await getClient();
	const todayString = getTodayString();

	const hype = await prisma.hype.findFirst({
		where: {
			date: {
				equals: todayString
			}
		}
	});
	if (!hype) {
		console.log('No hype found for today, creating new entry with hype level 0');
		const newHype = await prisma.hype.create({
			data: {
				date: todayString,
				hypeLevel: 0
			}
		});
		console.log('Created new hype entry:', newHype);
		return newHype;
	}
	return hype;
};

export const updateHypeLevel = async (newLevel: number) => {
	const prisma = await getClient();
	const today = await getTodaysHype();
	const updatedHype = await prisma.hype.update({
		where: {
			id: today.id
		},
		data: { hypeLevel: today.hypeLevel + newLevel }
	});
	return updatedHype;
};
