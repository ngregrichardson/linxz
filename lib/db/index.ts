import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const { DB_URL, DB_AUTH_TOKEN } = process.env;

const client = createClient({
    url: DB_URL || 'file:linxz.db',
    authToken: DB_AUTH_TOKEN,
});

export const db = drizzle(client);