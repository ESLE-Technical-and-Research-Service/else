import {ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory,
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import piciulImg01 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-01.webp";
import piciulImg02 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-02.webp";
import piciulImg03 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-03.webp";
import piciulImg04 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-04.webp";
import piciulImg05 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-05.webp";
import piciulImg06 from "../../../../../../../assets/images/products/nozzles/piciul/piciul-06.webp";

export const Piciul: ProductItem = {
    name: {
        namePL: "Piciul",
        nameENG: "Piciul",
    },
    href: "/products/water-sewage/accessories/piciul",
    images: [
        piciulImg01,
        piciulImg02,
        piciulImg03,
        piciulImg04,
        piciulImg05,
        piciulImg06,
    ],
    description: {
        textPL: "Krótkie, kompaktowe głowice ze stali nierdzewnej.",
        textENG: "Short, compact stainless steel nozzles.",
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
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.SmallUncloggingNozzlesTag,
    ],
}