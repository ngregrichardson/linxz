import invariant from "tiny-invariant";

export const register = async () => {
    if(process.env.NODE_ENV === 'production') {
        invariant(global.process.env.BASE_URL, 'BASE_URL is required in production mode');
    }

    if(global.process.env.CFTS_SECRET_KEY) {
        invariant(global.process.env.NEXT_PUBLIC_CFTS_SITE_KEY, 'NEXT_PUBLIC_CFTS_SITE_KEY is required when CFTS_SECRET_KEY is used');
    }

    if(global.process.env.NEXT_PUBLIC_CFTS_SITE_KEY) {
        invariant(global.process.env.CFTS_SECRET_KEY, 'CFTS_SECRET_KEY is required when NEXT_PUBLIC_CFTS_SITE_KEY is used');
    }

    if(!global.process.env.DB_URL) {
        global.process.env.DB_URL = 'file:linxz.db';
    }

    if(process.env.NEXT_RUNTIME === 'nodejs' || process.env.NEXT_RUNTIME === 'edge') {
        await import('@/lib/db');

        await import('@/lib/db/migrate');
    }
}