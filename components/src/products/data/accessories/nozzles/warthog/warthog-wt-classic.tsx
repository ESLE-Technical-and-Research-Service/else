import {Language, ProductItem} from "../../../../../types";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import warthogWtClassicImg01
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-classic-01.webp";
import warthogWtClassicImg02
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-classic-02.webp";
import warthogWtClassicImg03
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-classic-03.webp";
import warthogWtClassicImg04
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-wt-classic-04.webp";
import {AccessoriesTags} from "../../../tags";

export const WarthogWtClassic: ProductItem = {
    name: {
        [Language.PL]: "Warthog WT Classic",
        [Language.ENG]: "Warthog WT Classic",
    },
    href: "/products/water-sewage/accessories/warthog-wt-classic",
    images: [
        warthogWtClassicImg01,
        warthogWtClassicImg02,
        warthogWtClassicImg03,
        warthogWtClassicImg04,
    ],
    description: {
        [Language.PL]: "WT Classic jest przeznaczona do pokonywania kolan w rurach z korzeniami, lodem i innymi zatorami. Ta głowica jest najczęściej wykorzystywana w pompach o małej wydajności. Owalna konstrukcja zmniejsza ryzyko zablokowania się w kanale, a specjalnie zaprojektowane wypustki z węglika spiekanego zwiększają jej trwałość.",
        [Language.ENG]: "The WT Classic is designed to navigate bends in pipes clogged with roots, ice, and other blockages. This nozzle is most commonly used with low-flow pumps. Its oval design reduces the risk of getting stuck in the pipe, and specially designed tungsten carbide inserts enhance its durability.",
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