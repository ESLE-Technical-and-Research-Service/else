import {ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import tremolImg01 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-01.webp";
import tremolImg02 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-02.webp";
import tremolImg03 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-03.webp";
import tremolImg04 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-04.webp";
import tremolImg05 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-05.webp";
import tremolImg06 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-06.webp";
import tremolImg07 from "../../../../../../../assets/images/products/nozzles/tremol/tremol-07.webp";

export const Tremol: ProductItem = {
    name: {
        namePL: "Tremol",
        nameENG: "Tremol",
    },
    href: "/products/water-sewage/accessories/tremol",
    images: [
        tremolImg06,
        tremolImg07,
        tremolImg05,
        tremolImg04,
        tremolImg03,
        tremolImg02,
        tremolImg01,
    ],
    description: {
        textPL: "Głowice czyszczące z obrotowymi strumieniami o kącie (85° / 90°). Idealne do usuwania tłuszczu i kamienia ze ścian rur, przed inspekcją kamerą lub przy wycinaniu korzeni. W celu bardziej skutecznego czyszczenia zalecany jest centralizator, umożliwiający uniesienie głowicy z dna kanału.",
        textENG: "Cleaning nozzles with rotating jets at an angle (85° / 90°). Ideal for removing grease and scale from pipe walls, prior to camera inspection or root cutting. For more effective cleaning, the use of a centralizer is recommended to lift the nozzle off the bottom of the pipe.",
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
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.RotatingAndVibratingNozzlesTag,
    ],
}