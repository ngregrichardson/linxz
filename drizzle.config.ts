import type { Config } from 'drizzle-kit';
import invariant from 'tiny-invariant';

invariant(process.env.DATABASE_URL, "DATABASE_URL is required");
invariant(process.env.DATABASE_AUTH_TOKEN, "DATABASE_AUTH_TOKEN is required");

export default {
  schema: './lib/db/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;