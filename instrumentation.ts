import invariant from "tiny-invariant"

export const register = () => {
    if(process.env.NODE_ENV === 'production') {
        invariant(process.env.BASE_URL, 'BASE_URL is required in production mode');
    }

    if(process.env.CFTS_SECRET_KEY) {
        invariant(process.env.NEXT_PUBLIC_CFTS_SITE_KEY, 'NEXT_PUBLIC_CFTS_SITE_KEY is required when CFTS_SECRET_KEY is used');
    }

    if(process.env.NEXT_PUBLIC_CFTS_SITE_KEY) {
        invariant(process.env.CFTS_SECRET_KEY, 'CFTS_SECRET_KEY is required when NEXT_PUBLIC_CFTS_SITE_KEY is used');
    }
}