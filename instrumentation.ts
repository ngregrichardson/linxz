import invariant from "tiny-invariant"

export const register = () => {
    invariant(process.env.BASE_URL, "BASE_URL environment variable is required (e.g. https://linxz.cc)");
}