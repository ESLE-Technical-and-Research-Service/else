import {ProductsCategories, Tag} from "../types";
import {
    AccessoriesTags,
    CamerasTags,
    MillingRobotsTags,
    PressureVehiclesTags,
    WaterSewageTags
} from "../products/data/tags";

export function getCategoryTagsByCategoryName(category: ProductsCategories): Record<string, Tag> {
    switch (category) {
        case ProductsCategories.CAMERAS:
            return CamerasTags;
        case ProductsCategories.PRESSURE_VEHICLES:
            return PressureVehiclesTags;
        case ProductsCategories.MILLING_ROBOTS:
            return MillingRobotsTags;
        case ProductsCategories.ACCESSORIES:
            return AccessoriesTags;
        case ProductsCategories.WATER_SEWAGE:
            return WaterSewageTags;
        default:
            throw new Error('Invalid TAGs category');
    }
}