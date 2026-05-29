CREATE TABLE `hype` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`hypeLevel` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);