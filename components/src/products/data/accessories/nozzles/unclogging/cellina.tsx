import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import cellinaImg01 from "../../../../../../../assets/images/products/nozzles/cellina/cellina-01.webp";

export const Cellina: ProductItem = {
    name: {
        [Language.PL]: "Cellina",
        [Language.ENG]: "Cellina",
    },
    href: "/products/water-sewage/accessories/cellina",
    images: [
        cellinaImg01,
    ],
    description: {
        [Language.PL]: "Standardowe głowice czyszczące z tylnymi dyszami o kącie 35°.",
        [Language.ENG]: "Standard cleaning nozzles with tail disks at an angle of 35°.",
    },
    detailedDescription: {
        [Language.PL]: <></>,
        [Language.ENG]: <></>,
    },
    manufacturers: [],
    category: [
        AccessoriesCategory,
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
        SmallUncloggingNozzlesCategory,
    ],
    tags: [
        AccessoriesTags.CleaningNozzlesCategory,
        AccessoriesTags.SmallUncloggingNozzlesTag,
    ],
}