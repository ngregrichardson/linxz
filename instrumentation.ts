import invariant from "tiny-invariant"

export const register = () => {
    if(process.env.NODE_ENV === 'production') {
        invariant(process.env.BASE_URL, 'BASE_URL is required in production');
    }
}