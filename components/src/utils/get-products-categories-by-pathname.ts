import {ProductsCategories} from "../types/ProductsCategories";
import {ProductLinks} from "../types/products";

function getProductsCategoriesByPathname(productType: string): ProductsCategories {
    switch (productType) {
        case ProductLinks.CAMERAS:
            return ProductsCategories.CAMERAS;
        case ProductLinks.PRESSURE_VEHICLES:
            return ProductsCategories.PRESSURE_VEHICLES;
        case ProductLinks.MILLING_ROBOTS:
            return ProductsCategories.MILLING_ROBOTS;
        case ProductLinks.ACCESSORIES:
            return ProductsCategories.ACCESSORIES;
        default:
            return ProductsCategories.WATER_SEWAGE;
    }
}

export default getProductsCategoriesByPathname;