CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`slug` text,
	`meta_passthrough` integer DEFAULT false,
	`expiration_type` text DEFAULT 'NONE' NOT NULL,
	`expiration_value` integer DEFAULT 0 NOT NULL,
	`clicks` integer DEFAULT 0 NOT NULL
);
