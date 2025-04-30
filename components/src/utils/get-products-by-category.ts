import {ProductItem} from "../types/ProductItem";
import {ProductsCategories} from "../types/ProductsCategories";
import {camerasItems, millingRobotsItems, pressureVehiclesItems} from "../products/data/product-items";
import {
    CamerasForSewageInspectionCategory, MillingRobotsForSewerRepairAndRenovationCategory,
    MultipurposeVehiclesForPressureSewerCleaningCategory
} from "../products/data/categories";

function getProductsListByCategory(category: string): ProductItem[] {
    switch (category) {
        case ProductsCategories.CAMERAS.toLowerCase():
        case CamerasForSewageInspectionCategory.nameENG.toLowerCase():
            return camerasItems;
        case ProductsCategories.PRESSURE_VEHICLES.toLowerCase():
        case MultipurposeVehiclesForPressureSewerCleaningCategory.nameENG.toLowerCase():
            return pressureVehiclesItems;
        case ProductsCategories.MILLING_ROBOTS.toLowerCase():
        case MillingRobotsForSewerRepairAndRenovationCategory.nameENG.toLowerCase():
            return millingRobotsItems;
        case ProductsCategories.ACCESSORIES.toLowerCase():
            return [];
        default:
            return [];
    }
}

export default getProductsListByCategory;