import {Category} from "../../types/Category";

export const AccessoriesCategory: Category = {
    namePL: "Akcesoria",
    nameENG: "Accessories",
    link: "/products/accessories",
};

export const CamerasForSewageInspectionCategory: Category = {
    namePL: "Kamery do inspekcji kanalizacji / sieci wod-kan",
    nameENG: "Cameras for sewage inspection / water networks",
    link: "/products/water-sewage/cameras",
};

export const CleaningNozzlesForPressureVehiclesCategory: Category = {
    namePL: "Głowice czyszczące do pojazdów ciśnieniowych",
    nameENG: "Cleaning nozzles for pressure vehicles",
    link: "/products/water-sewage/accessories/cleaning-nozzles",
};

export const MillingRobotsForSewerRepairAndRenovationCategory: Category = {
    namePL: "Roboty frezujące do napraw i renowacji kanałów",
    nameENG: "Milling robots for sewer repair and renovation",
    link: "/products/water-sewage/milling-robots",
};

export const MultipurposeVehiclesForPressureSewerCleaningCategory: Category = {
    namePL: "Wielofunkcyjne pojazdy do ciśnieniowego czyszczenia kanalizacji",
    nameENG: "Multipurpose vehicles for pressure sewer cleaning",
    link: "/products/water-sewage/pressure-vehicles",
};

export const SpecializedVehicleBodies: Category = {
    namePL: "Specjalistyczne zabudowy na pojazdach",
    nameENG: "Specialized vehicle bodies",
    link: "/products/water-sewage/vehicle-bodies",
};

export const waterSewageCategories: Category[] = [
    AccessoriesCategory,
    CamerasForSewageInspectionCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    MillingRobotsForSewerRepairAndRenovationCategory,
    MultipurposeVehiclesForPressureSewerCleaningCategory,
    SpecializedVehicleBodies,
];

export const accessoriesCategories: Category[] = [
    AccessoriesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
];