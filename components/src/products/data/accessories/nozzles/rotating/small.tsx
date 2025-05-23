import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import smallImg01 from "../../../../../../../assets/images/products/nozzles/small/small-01.webp";
import smallImg02 from "../../../../../../../assets/images/products/nozzles/small/small-02.webp";
import smallImg03 from "../../../../../../../assets/images/products/nozzles/small/small-03.webp";

export const Small: ProductItem = {
    name: {
        [Language.PL]: "Małe głowice obrotowe",
        [Language.ENG]: "Small rotating nozzles",
    },
    href: "/products/water-sewage/accessories/small",
    images: [
        smallImg01,
        smallImg02,
        smallImg03,
    ],
    description: {
        [Language.PL]: "Małe głowice obrotowe i wibracyjne. Dzięki końcówce w kształcie korony zapewniają agresywne i skuteczne czyszczenie. Na skutek wibracji głowicy ze ścianek kanału odpadają twarde osady. Przeznaczone do kanałów od DN30.",
        [Language.ENG]: "Small rotating and vibrating nozzles. Thanks to their crown-shaped tip, they provide aggressive and effective cleaning. The vibration of the nozzle causes hard deposits to break off from the pipe walls. Designed for pipes starting from DN30.",
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
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.RotatingAndVibratingNozzlesTag,
    ],
}