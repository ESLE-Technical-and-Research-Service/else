import {ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import medunaImg01 from "../../../../../../../assets/images/products/nozzles/meduna/meduna_3d01.jpg";

export const Meduna: ProductItem = {
    name: {
        namePL: "Meduna",
        nameENG: "Meduna",
    },
    href: "/products/water-sewage/accessories/meduna",
    images: [
        medunaImg01,
    ],
    description: {
        textPL: "Krótkie głowice o okrągłym kształcie.",
        textENG: "Short nozzles with rounded shape.",
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