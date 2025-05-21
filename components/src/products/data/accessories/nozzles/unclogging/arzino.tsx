import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import arzinoImg01 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-01.webp";
import arzinoImg02 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-02.webp";
import arzinoImg03 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-03.webp";
import arzinoImg04 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-04.webp";
import arzinoImg05 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-05.webp";
import arzinoImg06 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-06.webp";
import arzinoImg07 from "../../../../../../../assets/images/products/nozzles/arzino/arzino-07.webp";

export const Arzino: ProductItem = {
    name: {
        [Language.PL]: "Arzino",
        [Language.ENG]: "Arzino",
    },
    href: "/products/water-sewage/accessories/arzino",
    images: [
        arzinoImg01,
        arzinoImg02,
        arzinoImg03,
        arzinoImg04,
        arzinoImg05,
        arzinoImg06,
        arzinoImg07,
    ],
    description: {
        [Language.PL]: "Jajowaty kształt umożliwia swobodne prowadzenie jej w krzywiznach kanału. W wersji ze stali nierdzewnej dostępna na zamówienie.",
        [Language.ENG]: "The oval shape allows it to move smoothly through pipe bends. A stainless steel version is available on request.",
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
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.SmallUncloggingNozzlesTag,
    ],
};