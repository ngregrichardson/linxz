import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({
    url: global.process.env.DB_URL || 'file:linxz.db',
    authToken: global.process.env.DB_AUTH_TOKEN,
});

export const db = drizzle(client);