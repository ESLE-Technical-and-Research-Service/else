import {ProductItem} from "../../../../../types/ProductItem";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags/accessories-tags";
import ravedisImg01 from "../../../../../../../assets/images/products/nozzles/ravedis/ravedis-01.webp";
import ravedisImg02 from "../../../../../../../assets/images/products/nozzles/ravedis/ravedis-02.webp";
import ravedisImg03 from "../../../../../../../assets/images/products/nozzles/ravedis/ravedis-03.webp";

export const Ravedis: ProductItem = {
    name: {
        namePL: "Ravedis",
        nameENG: "Ravedis",
    },
    href: "/products/water-sewage/accessories/ravedis",
    images: [
        ravedisImg01,
        ravedisImg02,
        ravedisImg03,
    ],
    description: {
        textPL: "Głowice Ravedis są obrotowe, wibrujące i kompaktowe. Dzięki końcówce w kształcie korony, zapewniają bardzo agresywne rozbijanie osadów. Małe wymiary pozwalają na zastosowanie ich w średnicach od DN50 a kształt główki zapobiega zakleszczeniu się jej pomiędzy złączami rury.",
        textENG: "Ravedis nozzles are rotating, vibrating, and compact. Thanks to the crown-shaped tip, they provide highly aggressive deposit breaking. Their small size allows them to be used in pipe diameters starting from DN50, and the head shape prevents them from getting stuck between pipe joints.",
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