import {Language, ProductItem} from "../../../../../types";
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
        [Language.PL]: "Meduna",
        [Language.ENG]: "Meduna",
    },
    href: "/products/water-sewage/accessories/meduna",
    images: [
        medunaImg01,
    ],
    description: {
        [Language.PL]: "Krótkie głowice o okrągłym kształcie.",
        [Language.ENG]: "Short nozzles with rounded shape.",
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