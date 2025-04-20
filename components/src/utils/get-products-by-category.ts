import {ProductItem} from "../types/ProductItem";
import {ProductsCategories} from "../types/ProductsCategories";
import {camerasItems} from "../products/data/camerasItems";

function getProductsListByCategory(category: string): ProductItem[] {
    switch (category) {
        case ProductsCategories.CAMERAS.toLowerCase():
            return camerasItems;
        case ProductsCategories.PRESSURE_VEHICLES.toLowerCase():
            return [];
        case ProductsCategories.MILLING_ROBOTS.toLowerCase():
            return [];
            case ProductsCategories.ACCESSORIES.toLowerCase():
            return [];
        default:
            return [];
    }
}

export default getProductsListByCategory;