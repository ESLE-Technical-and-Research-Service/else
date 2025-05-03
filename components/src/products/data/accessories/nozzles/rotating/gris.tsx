import {ProductItem} from "../../../../../types/ProductItem";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import grisImg01 from "../../../../../../../assets/images/products/nozzles/gris/gris-01.webp";

export const Gris: ProductItem = {
    name: {
        namePL: "Gris",
        nameENG: "Gris",
    },
    href: "/products/water-sewage/accessories/gris",
    images: [
        grisImg01,
    ],
    description: {
        textPL: "Głowice obrotowe dedykowana do usuwania kamienia wapiennego.",
        textENG: "Rotating nozzles dedicated to removing gravel.",
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
        RotatingAndVibratingNozzlesCategory,
    ],
    tags: [
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
        RotatingAndVibratingNozzlesCategory,
    ],
}