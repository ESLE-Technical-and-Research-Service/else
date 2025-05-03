import {ProductItem} from "../../../../../types/ProductItem";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory, SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags/accessories-tags";
import cellinaImg01 from "../../../../../../../assets/images/products/nozzles/cellina/cellina-01.webp";

export const Cellina: ProductItem = {
    name: {
        namePL: "Cellina",
        nameENG: "Cellina",
    },
    href: "/products/water-sewage/accessories/cellina",
    images: [
        cellinaImg01,
    ],
    description: {
        textPL: "Standardowe głowice czyszczące z tylnymi dyszami o kącie 35°.",
        textENG: "Standard cleaning nozzles with tail disks at an angle of 35°.",
    },
    detailedDescription: {
        descriptionPL: <></>,
        descriptionENG: <></>,
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