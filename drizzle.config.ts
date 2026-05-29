import { defineConfig } from 'drizzle-kit';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
export default defineConfig({
	out: './drizzle',
	driver: 'd1-http',
	dialect: 'sqlite', // 'mysql' | 'sqlite' | 'turso'
	schema: './src/db/schema.ts',
	dbCredentials: {
		accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
		databaseId: process.env.CLOUDFLARE_DATABASE_ID! || 'cd34f94e-776d-4518-9aec-960414ad5c36',
		token: process.env.CLOUDFLARE_D1_TOKEN!
	}
});

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	email: text('email').unique(),
	name: text('name')
});

export const hype = sqliteTable('hype', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	hypeLevel: integer('hypeLevel')
});
