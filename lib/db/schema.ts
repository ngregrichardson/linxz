import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { ulid } from "ulidx";

export const EXPIRATION_TYPE = {
    NONE: 'NONE',
    DATE: 'DATE',
    CLICKS: 'CLICKS'
} as const;

type ExpirationValue = keyof typeof EXPIRATION_TYPE;

const EXPIRATION_TYPE_VALUES = Object.values(EXPIRATION_TYPE) as [ExpirationValue, ...ExpirationValue[]];

export const links = sqliteTable("links", {
    id: text('id').primaryKey().$default(ulid),
    url: text('url').notNull(),
    slug: text('slug').unique(),
    metaPassthrough: integer('meta_passthrough', { mode: 'boolean' }).default(false),
    expirationType: text('expiration_type', { enum: EXPIRATION_TYPE_VALUES }).default(EXPIRATION_TYPE.NONE).notNull(),
    expirationValue: integer('expiration_value').default(0).notNull(),
    clicks: integer('clicks').default(0).notNull(),
});

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;