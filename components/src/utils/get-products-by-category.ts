import {ProductItem} from "../types/ProductItem";
import {ProductsCategories} from "../types/ProductsCategories";
import {camerasItems, pressureVehiclesItems} from "../products/data/product-items";
import {CamerasForSewageInspectionCategory} from "../products/data/categories";

function getProductsListByCategory(category: string): ProductItem[] {
    switch (category) {
        case ProductsCategories.CAMERAS.toLowerCase():
        case CamerasForSewageInspectionCategory.nameENG.toLowerCase():
            return camerasItems;
        case ProductsCategories.PRESSURE_VEHICLES.toLowerCase():
            return pressureVehiclesItems;
        case ProductsCategories.MILLING_ROBOTS.toLowerCase():
            return [];
        case ProductsCategories.ACCESSORIES.toLowerCase():
            return [];
        default:
            return [];
    }
}

export default getProductsListByCategory;