import {ImagesGridLayout, NavigationLinks} from "../../types";

// Define the image style configuration type
export type ImageStyleConfig = {
    imagesLayout: ImagesGridLayout;
    columns: number;
    limit: number;
    startIndex: number;
};

// Map service slugs to image style configurations
export const imageStyleMap: Record<string, ImageStyleConfig> = {
    [NavigationLinks.CAM_SERVICE]: {
        imagesLayout: ImagesGridLayout.COLUMN,
        columns: 1,
        limit: 2,
        startIndex: 0,
    },
    [NavigationLinks.PRESSURE_VEHICLES_SERVICE]: {
        imagesLayout: ImagesGridLayout.COLUMN,
        columns: 2,
        limit: 2,
        startIndex: 0,
    },
    [NavigationLinks.TRAININGS]: {
        imagesLayout: ImagesGridLayout.MASONRY,
        columns: 1,
        limit: 2,
        startIndex: 0,
    },
    [NavigationLinks.TECH_SUPPORT]: {
        imagesLayout: ImagesGridLayout.ROW,
        columns: 1,
        limit: 3,
        startIndex: 2,
    },
    default: {
        imagesLayout: ImagesGridLayout.ROW,
        columns: 2,
        limit: 2,
        startIndex: 0,
    }
};

// Helper function to get image style for a slug
export const getImageStyleForSlug = (slug: string): ImageStyleConfig => {
    return imageStyleMap[slug] || imageStyleMap.default;
};