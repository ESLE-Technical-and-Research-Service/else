import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import grisImg01 from "../../../../../../../assets/images/products/nozzles/gris/gris-01.webp";

export const Gris: ProductItem = {
    name: {
        [Language.PL]: "Gris",
        [Language.ENG]: "Gris",
    },
    href: "/products/water-sewage/accessories/gris",
    images: [
        grisImg01,
    ],
    description: {
        [Language.PL]: "Głowice obrotowe dedykowana do usuwania kamienia wapiennego.",
        [Language.ENG]: "Rotating nozzles dedicated to removing gravel.",
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
        RotatingAndVibratingNozzlesCategory,
    ],
    tags: [
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
        RotatingAndVibratingNozzlesCategory,
    ],
}