import {ProductItem} from "../../../../types/ProductItem";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory, SmallUncloggingNozzlesCategory
} from "../../categories";
import {AccessoriesTags} from "../../tags/accessories-tags";
import vortexImg01 from "../../../../../../assets/images/products/nozzles/vortex/vortex-01.webp";
import vortexImg02 from "../../../../../../assets/images/products/nozzles/vortex/vortex-02.webp";

export const Vortex: ProductItem = {
    name: {
        namePL: "Vortex",
        nameENG: "Vortex",
    },
    href: "/products/water-sewage/accessories/vortex",
    images: [
        vortexImg01,
        vortexImg02,
    ],
    description: {
        textPL: "Głowice z okrągłą główką i tylnymi dyszami o kącie 15°+35°.",
        textENG: "Nozzles with a rounded head and tail disks at an angle of 15°+35°.",
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
    ]
}