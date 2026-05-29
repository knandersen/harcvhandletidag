import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	email: text('email').unique(),
	name: text('name')
});

export const hype = sqliteTable('hype', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	hypeLevel: integer('hypeLevel')
});
