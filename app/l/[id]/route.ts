import { db } from "@/lib/db";
import { EXPIRATION_TYPE, links } from "@/lib/db/schema";
import { eq, isNotNull, like, or } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { NextRequest, userAgent } from "next/server";

type RouteParams = {
    params: {
        id: string;
    }
}

export const GET = async (req: NextRequest, { params }: RouteParams) => {
    const matchingLink = await db.select().from(links).where(or(eq(links.slug, params.id))).get();
    
    if(!matchingLink) {
        notFound();
    }

    if(userAgent(req).isBot) {
        redirect(matchingLink.url);
    }

    let canDelete = false;

    if(matchingLink.expirationValue !== undefined && matchingLink.expirationValue !== null) {
        switch(matchingLink.expirationType) {
            case EXPIRATION_TYPE.DATE:
                if(matchingLink.expirationValue < Date.now()) {
                    canDelete = true;
                    notFound();
                }

                break;
            case EXPIRATION_TYPE.CLICKS:
                if(matchingLink.clicks >= matchingLink.expirationValue) {
                    notFound();
                }

                if(matchingLink.clicks + 1 === matchingLink.expirationValue) {
                    canDelete = true;
                }else {
                    await db.update(links).set({
                        clicks: matchingLink.clicks + 1,
                    }).where(eq(links.id, matchingLink.id));
                }

                break;
        }
    }

    if(canDelete) {
        await db.delete(links).where(eq(links.id, matchingLink.id));
    }

    redirect(matchingLink.url);
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'edge';