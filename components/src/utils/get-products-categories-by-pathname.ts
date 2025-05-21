import {NavigationLinks, ProductsCategories} from "../types";

function getProductsCategoriesByPathname(productType: string): ProductsCategories {
    switch (productType) {
        case NavigationLinks.CAMERAS:
            return ProductsCategories.CAMERAS;
        case NavigationLinks.PRESSURE_VEHICLES:
            return ProductsCategories.PRESSURE_VEHICLES;
        case NavigationLinks.MILLING_ROBOTS:
            return ProductsCategories.MILLING_ROBOTS;
        case NavigationLinks.ACCESSORIES:
            return ProductsCategories.ACCESSORIES;
        default:
            return ProductsCategories.WATER_SEWAGE;
    }
}

export default getProductsCategoriesByPathname;