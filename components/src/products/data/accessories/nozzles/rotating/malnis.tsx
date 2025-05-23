import {Language, ProductItem} from "../../../../../types";
import {AccessoriesTags} from "../../../tags";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import malnisImg01 from "../../../../../../../assets/images/products/nozzles/malnis/malnis-01.webp";
import malnisImg02 from "../../../../../../../assets/images/products/nozzles/malnis/malnis-02.webp";
import malnisImg03 from "../../../../../../../assets/images/products/nozzles/malnis/malnis-03.webp";

export const Malnis: ProductItem = {
    name: {
        [Language.PL]: "Malnis",
        [Language.ENG]: "Malnis",
    },
    href: "/products/water-sewage/accessories/malnis",
    images: [
        malnisImg02,
        malnisImg01,
        malnisImg03,
    ],
    description: {
        [Language.PL]: "Głowice Malnis są obrotowe, wibrujące i kompaktowe. Dzięki okrągłej główce zapenwia lekkie wibracje i dlatego idealnie nadaje się do rur PCV. Małe wymiary pozwalają na zastosowanie ich w średnicach już od DN50.",
        [Language.ENG]: "Malnis nozzles are rotating, vibrating, and compact. Thanks to the round head, they produce gentle vibrations, making them ideal for PVC pipes. Their small size allows them to be used in diameters starting from DN50.",
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
};