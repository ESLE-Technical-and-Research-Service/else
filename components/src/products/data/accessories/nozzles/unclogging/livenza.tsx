import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    SmallUncloggingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import livenzaImg01 from "../../../../../../../assets/images/products/nozzles/livenza/livenza-01.webp";
import livenzaImg02 from "../../../../../../../assets/images/products/nozzles/livenza/livenza-02.webp";
import livenzaImg03 from "../../../../../../../assets/images/products/nozzles/livenza/livenza-03.webp";
import livenzaImg04 from "../../../../../../../assets/images/products/nozzles/livenza/livenza-04.webp";

export const Livenza: ProductItem = {
    name: {
        [Language.PL]: "Livenza",
        [Language.ENG]: "Livenza",
    },
    href: "/products/water-sewage/accessories/livenza",
    images: [
        livenzaImg01,
        livenzaImg02,
        livenzaImg03,
        livenzaImg04,
    ],
    description: {
        [Language.PL]: "Głowice stożkowe z tylnym strumieniem pod kątem 20° z wymiennymi dyszkami.",
        [Language.ENG]: "Straight nozzles with a tail stream at an angle of 20° with removable disks.",
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
        SmallUncloggingNozzlesCategory,
    ],
    tags: [
        AccessoriesTags.CleaningNozzlesCategory,
        AccessoriesTags.SmallUncloggingNozzlesTag,
    ],
}