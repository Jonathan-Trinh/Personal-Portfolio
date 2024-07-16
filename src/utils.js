export const getImageUrl = (path) => {
    return new URL(`asssets/${path}`, import.meta.url).href;
}