import invariant from "tiny-invariant";

export const register = async () => {
    const { NODE_ENV, BASE_URL, CFTS_SECRET_KEY, NEXT_PUBLIC_CFTS_SITE_KEY, DB_URL } = process.env;
    if(NODE_ENV === 'production') {
        invariant(BASE_URL, 'BASE_URL is required in production mode');
    }

    if(CFTS_SECRET_KEY) {
        invariant(NEXT_PUBLIC_CFTS_SITE_KEY, 'NEXT_PUBLIC_CFTS_SITE_KEY is required when CFTS_SECRET_KEY is used');
    }

    if(NEXT_PUBLIC_CFTS_SITE_KEY) {
        invariant(CFTS_SECRET_KEY, 'CFTS_SECRET_KEY is required when NEXT_PUBLIC_CFTS_SITE_KEY is used');
    }

    if(!DB_URL) {
        process.env.DB_URL = 'file:linxz.db';
    }

    if(process.env.NEXT_RUNTIME === 'nodejs') {
        await import('@/lib/db');

        await import('@/lib/db/migrate');
    }
}