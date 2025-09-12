type ImageFile = `${string}.${"png" | "jpg" | "jpeg" | "svg" | "gif"}`;

/** Helper function for resolving image paths */
export const getImageUrl = (path: ImageFile): string => {
  return `/assets/${path}`;
};