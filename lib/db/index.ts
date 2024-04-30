import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import invariant from "tiny-invariant";

invariant(process.env.DATABASE_URL, "DATABASE_URL is required");
invariant(process.env.DATABASE_AUTH_TOKEN, "DATABASE_AUTH_TOKEN is required");

const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);