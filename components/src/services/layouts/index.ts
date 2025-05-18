import { NavigationLinks, PageLayout } from "../../types";

// Map service slugs to page layouts
export const serviceLayoutMap: Record<string, PageLayout> = {
    [NavigationLinks.CAM_SERVICE]: PageLayout.TIMELINE,
    [NavigationLinks.PRESSURE_VEHICLES_SERVICE]: PageLayout.COMPACT,
    [NavigationLinks.TRAININGS]: PageLayout.EXPANDED,
    // Default layout for any other services
    default: PageLayout.GRID
};

// Function to get the layout for a given slug
export const getLayoutForSlug = (slug: string): PageLayout => {
    return serviceLayoutMap[slug] || serviceLayoutMap.default;
};