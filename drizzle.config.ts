import type { Config } from 'drizzle-kit';
import invariant from 'tiny-invariant';

invariant(process.env.DB_URL, "DB_URL is required");
invariant(process.env.DB_AUTH_TOKEN, "DB_AUTH_TOKEN is required");

export default {
  schema: './lib/db/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_URL,
    authToken: process.env.DB_AUTH_TOKEN,
  },
} satisfies Config;