import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import sileImg01 from "../../../../../../../assets/images/products/nozzles/sile/sile-01.webp";
import sileImg02 from "../../../../../../../assets/images/products/nozzles/sile/sile-02.webp";
import sileImg03 from "../../../../../../../assets/images/products/nozzles/sile/sile-03.webp";
import sileImg04 from "../../../../../../../assets/images/products/nozzles/sile/sile-04.webp";
import sileImg05 from "../../../../../../../assets/images/products/nozzles/sile/sile-05.webp";
import sileImg06 from "../../../../../../../assets/images/products/nozzles/sile/sile-06.webp";
import sileImg07 from "../../../../../../../assets/images/products/nozzles/sile/sile-07.webp";
import sileImg08 from "../../../../../../../assets/images/products/nozzles/sile/sile-08.webp";
import sileImg09 from "../../../../../../../assets/images/products/nozzles/sile/sile-09.webp";

export const Sile: ProductItem = {
    name: {
        [Language.PL]: "Sile",
        [Language.ENG]: "Sile",
    },
    href: "/products/water-sewage/accessories/sile",
    images: [
        sileImg01,
        sileImg02,
        sileImg03,
        sileImg04,
        sileImg05,
        sileImg06,
        sileImg07,
        sileImg08,
        sileImg09,
    ],
    description: {
        [Language.PL]: "Małe głowice ze stożkową lub okrągłą główką, ze strumieniem przednim lub bez.",
        [Language.ENG]: "Small nozzles with straight or rounded head, with or without inlet stream.",
    },
    detailedDescription: {
        [Language.PL]: <></>,
        [Language.ENG]: <></>
    },
    manufacturers: [],
    category: [
        AccessoriesCategory,
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
    ],
    tags: [
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.SmallUncloggingNozzlesTag,
    ],
}