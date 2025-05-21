import {Category, Language} from "../../types";

export const AccessoriesCategory: Category = {
    name: {
        [Language.PL]: "Akcesoria",
        [Language.ENG]: "Accessories",
    },
    link: "/products/accessories",
};

export const CamerasForSewageInspectionCategory: Category = {
    name: {
        [Language.PL]: "Kamery do inspekcji kanalizacji / sieci wod-kan",
        [Language.ENG]: "Cameras for sewage inspection / water networks",
    },
    link: "/products/water-sewage/cameras",
};

export const CleaningNozzlesCategory: Category = {
    name: {
        [Language.PL]: "Głowice czyszczące",
        [Language.ENG]: "Cleaning nozzles",
    },
    link: "/products/water-sewage/accessories/cleaning-nozzles",
};

export const CleaningNozzlesForPressureVehiclesCategory: Category = {
    name: {
        [Language.PL]: "Głowice czyszczące do pojazdów ciśnieniowych",
        [Language.ENG]: "Cleaning nozzles for pressure vehicles",
    },
    link: "/products/water-sewage/accessories/cleaning-nozzles",
};

export const MillingRobotsForSewerRepairAndRenovationCategory: Category = {
    name: {
        [Language.PL]: "Roboty frezujące do napraw i renowacji kanałów",
        [Language.ENG]: "Milling robots for sewer repair and renovation",
    },
    link: "/products/water-sewage/milling-robots",
};

export const MultipurposeVehiclesForPressureSewerCleaningCategory: Category = {
    name: {
        [Language.PL]: "Wielofunkcyjne pojazdy do ciśnieniowego czyszczenia kanalizacji",
        [Language.ENG]: "Multipurpose vehicles for pressure sewer cleaning",
    },
    link: "/products/water-sewage/pressure-vehicles",
};

export const SpecializedVehicleBodies: Category = {
    name: {
        [Language.PL]: "Specjalistyczne zabudowy na pojazdach",
        [Language.ENG]: "Specialized vehicle bodies",
    },
    link: "/products/water-sewage/vehicle-bodies",
};

export const SmallUncloggingNozzlesCategory: Category = {
    name: {
        [Language.PL]: "Małe głowice udrażniające",
        [Language.ENG]: "Small unclogging nozzles",
    },
    link: "/products/water-sewage/accessories/small-unclogging-nozzles",
};

export const RotatingAndVibratingNozzlesCategory: Category = {
    name: {
        [Language.PL]: "Głowice obrotowe i wibracyjne",
        [Language.ENG]: "Rotating and vibrating nozzles",
    },
    link: "/products/water-sewage/accessories/rotating-and-vibrating-nozzles",
};

export const waterSewageCategories: Category[] = [
    AccessoriesCategory,
    CamerasForSewageInspectionCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    MillingRobotsForSewerRepairAndRenovationCategory,
    MultipurposeVehiclesForPressureSewerCleaningCategory,
    SpecializedVehicleBodies,
    SmallUncloggingNozzlesCategory,
    RotatingAndVibratingNozzlesCategory,
];

export const accessoriesCategories: Category[] = [
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory,
    RotatingAndVibratingNozzlesCategory,
];