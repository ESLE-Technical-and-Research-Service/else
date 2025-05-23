import {Language, ProductItem} from "../../../../../types";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import warthogWtProImg01 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-pro-01.webp";
import warthogWtProImg02 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-pro-02.webp";
import warthogWtProImg03 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-pro-03.webp";
import warthogWtProImg04 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-pro-04.webp";

export const WarthogWtPro: ProductItem = {
    name: {
        [Language.PL]: "Warthog WT Pro",
        [Language.ENG]: "Warthog WT Pro",
    },
    href: "/products/water-sewage/accessories/warthog-wt-pro",
    images: [
        warthogWtProImg01,
        warthogWtProImg02,
        warthogWtProImg03,
        warthogWtProImg04,
    ],
    description: {
        [Language.PL]: "Głowica WT Pro jest przeznaczona do pokonywania kolan w rurach DN75-150 z korzeniami, lodem i innymi zatorami. Ta głowica jest najczęściej wykorzystywana w pompach o małej wydajności. Owalna konstrukcja zmniejsza ryzyko zablokowania się w kanale, a specjalnie zaprojektowane wypustki z węglika spiekanego zwiększają jej trwałość. Ten model jest wyposażony w dwie dysze boczne ustawione pod kątem, zapewniając intensywne usuwanie trudnych osadów i kamienia.",
        [Language.ENG]: "The WT Pro nozzle is designed to navigate bends in DN75–150 pipes with roots, ice, and other blockages. This nozzle is most commonly used with low-flow pumps. Its oval design reduces the risk of getting stuck in the pipe, and specially designed tungsten carbide inserts enhance its durability. This model is equipped with two angled side jets, providing intensive removal of tough deposits and scale.",
    },
    detailedDescription: {
        [Language.PL]: <></>,
        [Language.ENG]: <></>,
    },
    manufacturers: [NUOVACONTEC],
    category: [
        AccessoriesCategory,
        CleaningNozzlesCategory,
        CleaningNozzlesForPressureVehiclesCategory,
    ],
    tags: [
        AccessoriesTags.CleaningNozzlesTag,
        AccessoriesTags.WarthogTag,
    ],
}