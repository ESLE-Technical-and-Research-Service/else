import {Language, ProductItem, ProductsCategories} from "../types";
import {
    accessoriesItems,
    camerasItems,
    millingRobotsItems,
    pressureVehiclesItems
} from "../products/data/product-items";
import {
    CamerasForSewageInspectionCategory,
    MillingRobotsForSewerRepairAndRenovationCategory,
    MultipurposeVehiclesForPressureSewerCleaningCategory
} from "../products/data/categories";

function getProductsListByCategory(category: string): ProductItem[] {
    switch (category) {
        case ProductsCategories.CAMERAS.toLowerCase():
        case CamerasForSewageInspectionCategory.name[Language.ENG].toLowerCase():
            return camerasItems;
        case ProductsCategories.PRESSURE_VEHICLES.toLowerCase():
        case MultipurposeVehiclesForPressureSewerCleaningCategory.name[Language.ENG].toLowerCase():
            return pressureVehiclesItems;
        case ProductsCategories.MILLING_ROBOTS.toLowerCase():
        case MillingRobotsForSewerRepairAndRenovationCategory.name[Language.ENG].toLowerCase():
            return millingRobotsItems;
        case ProductsCategories.ACCESSORIES.toLowerCase():
            return accessoriesItems;
        default:
            return [];
    }
}

export default getProductsListByCategory;