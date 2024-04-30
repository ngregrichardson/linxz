import { links } from "@/lib/db/schema";
import { createInsertSchema } from "drizzle-zod";

export const insertLinkSchema = createInsertSchema(links);