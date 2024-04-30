export type CreateLinkFormState = {
    error: string | null;
} | {
    message: string;
    link: string;
    key: string;
}