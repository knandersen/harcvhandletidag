import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const hype = sqliteTable('hype', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	hypeLevel: integer('hypeLevel'),
	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`)
});

export const transfers = sqliteTable('transfers', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	timestamp: text('timestamp')
		.notNull()
		.default(sql`(current_timestamp)`),
	name: text('name'),
	description: text('description'),
	link: text('link')
});
