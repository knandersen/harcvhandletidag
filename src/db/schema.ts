import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';

export const hype = sqliteTable('hype', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	hypeLevel: integer('hypeLevel')
});
