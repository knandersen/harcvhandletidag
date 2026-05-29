CREATE TABLE `transfers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`amount` integer,
	`timestamp` text DEFAULT (current_timestamp) NOT NULL,
	`name` text,
	`description` text
);
