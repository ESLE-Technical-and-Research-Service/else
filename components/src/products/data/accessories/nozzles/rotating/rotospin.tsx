import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    RotatingAndVibratingNozzlesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import rotospinImg01 from "../../../../../../../assets/images/products/nozzles/rotospin/rotospin-01.webp";
import rotospinImg02 from "../../../../../../../assets/images/products/nozzles/rotospin/rotospin-02.webp";
import rotospinImg03 from "../../../../../../../assets/images/products/nozzles/rotospin/rotospin-03.webp";

export const Rotospin: ProductItem = {
    name: {
        [Language.PL]: "Rotospin",
        [Language.ENG]: "Rotospin",
    },
    href: "/products/water-sewage/accessories/rotospin",
    images: [
        rotospinImg02,
        rotospinImg03,
        rotospinImg01,
    ],
    description: {
        [Language.PL]: "Rotospin ¼” to głowica o kontrolowanym obrocie, zaprojektowana specjalnie z myślą o maszynach wysokociśnieniowych o niskim przepływie, stosowanych do usuwania zatorów w kanalizacji domowej oraz kanałach deszczowych. Głowica obraca się samoistnie 3-4 razy na sekundę, pomagając w przecinaniu przeszkód i penetrowaniu zatorów. Posiada 2 tylne dysze, które tną korzenie i zatory aż do krawędzi rury.",
        [Language.ENG]: "The Rotospin ¼” is a controlled rotation nozzle specifically designed for high-pressure, low-flow machines used for clearing blockages in residential sewer lines and stormwater drains. The nozzle rotates on its own 3–4 times per second, helping to cut through obstacles and penetrate blockages. It features two rear jets that cut roots and obstructions all the way to the edge of the pipe.",
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