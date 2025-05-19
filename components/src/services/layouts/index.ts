import {NavigationLinks, PageLayout} from "../../types";

// Map service slugs to page layouts
export const serviceLayoutMap: Record<string, PageLayout> = {
    [NavigationLinks.CAM_SERVICE]: PageLayout.SIDEBAR,
    [NavigationLinks.PRESSURE_VEHICLES_SERVICE]: PageLayout.COMPACT,
    [NavigationLinks.TRAININGS]: PageLayout.TIMELINE,
    [NavigationLinks.TECH_SUPPORT]: PageLayout.GALLERY,

    default: PageLayout.GALLERY
};

export const getLayoutForSlug = (slug: string): PageLayout => {
    return serviceLayoutMap[slug] || serviceLayoutMap.default;
};
