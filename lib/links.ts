'use server';

import { db } from "@/lib/db";
import { EXPIRATION_TYPE, links } from "@/lib/db/schema";
import { insertLinkSchema } from "@/lib/db/validation";
import { CreateLinkFormState } from "@/types";
import { format } from "date-fns";
import { ulid } from "ulidx";
import { z } from "zod";

const filteredSchema = insertLinkSchema.omit({
    id: true,
    clicks: true,
}).extend({
    expirationValue: z.string().optional().pipe(z.coerce.number().min(0).int().default(0)),
    metaPassthrough: z.string().optional().pipe(z.coerce.boolean().default(false)),
    url: z.string().url(),
});

const AUTO_SLUG_LENGTH = 6;

export const createLink = async (_: CreateLinkFormState, formData: FormData) => {
    const validatedFields = filteredSchema.safeParse(Object.fromEntries(formData));

    if(!validatedFields.success) {
        return {
            error: validatedFields.error.flatten()
        }
    }

    try {
        const id = ulid();
        const slug = validatedFields.data.slug || id.slice(7, 7 + AUTO_SLUG_LENGTH);
        const newLink = await db.insert(links).values({
            ...validatedFields.data,
            id,
            slug
        }).returning();

        if(newLink.length <= 0) {
            throw new Error('Failed to create link. Please try again later.');
        }

        const createdLink = newLink[0];

        const url = `http${process.env.NODE_ENV === 'production' ? 's://linxz.cc' : '://localhost:3000'}/l/${slug}`;

        return {
            message: `You link was created and copied to your clipboard! ${createdLink.expirationType === EXPIRATION_TYPE.NONE ? 'This link will never expire.' : `This link will expire ${createdLink.expirationType === EXPIRATION_TYPE.CLICKS ? `after ${createdLink.expirationValue} clicks.` : `after ${format(new Date(createdLink.expirationValue), 'h:mm aaaa \'on\' MMM do, yyyy')}`}`}`,
            link: url,
            key: ulid(),
        };
    }catch(e: any) {
        return {
            error: e.message
        }
    }
}