import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import vortexImg01 from "../../../../../../../assets/images/products/nozzles/vortex/vortex-01.webp";
import vortexImg02 from "../../../../../../../assets/images/products/nozzles/vortex/vortex-02.webp";

export const Vortex: ProductItem = {
    name: {
        [Language.PL]: "Vortex",
        [Language.ENG]: "Vortex",
    },
    href: "/products/water-sewage/accessories/vortex",
    images: [
        vortexImg01,
        vortexImg02,
    ],
    description: {
        [Language.PL]: "Głowice z okrągłą główką i tylnymi dyszami o kącie 15°+35°.",
        [Language.ENG]: "Nozzles with a rounded head and tail disks at an angle of 15°+35°.",
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
    ]
}