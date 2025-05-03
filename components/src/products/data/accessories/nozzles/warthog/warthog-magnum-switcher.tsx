import {ProductItem} from "../../../../../types/ProductItem";
import {AccessoriesTags} from "../../../tags/accessories-tags";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import warthogMagnumSwitcherImg01 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-01.webp";
import warthogMagnumSwitcherImg02 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-02.webp";
import warthogMagnumSwitcherImg03 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-03.webp";
import warthogMagnumSwitcherImg04 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-04.webp";
import warthogMagnumSwitcherImg05 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-05.webp";
import warthogMagnumSwitcherImg06 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-06.webp";
import warthogMagnumSwitcherImg07 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-07.webp";
import warthogMagnumSwitcherImg08 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-08.webp";
import warthogMagnumSwitcherImg09 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-switcher-09.webp";

export const WarthogMagnumSwitcher: ProductItem = {
    name: {
        namePL: "Warthog Magnum Switcher",
        nameENG: "Warthog Magnum Switcher",
    },
    href: "/products/water-sewage/accessories/warthog-magnum-switcher",
    images: [
        warthogMagnumSwitcherImg01,
        warthogMagnumSwitcherImg02,
        warthogMagnumSwitcherImg03,
        warthogMagnumSwitcherImg04,
        warthogMagnumSwitcherImg05,
        warthogMagnumSwitcherImg06,
        warthogMagnumSwitcherImg07,
        warthogMagnumSwitcherImg08,
        warthogMagnumSwitcherImg09,
    ],
    description: {
        textPL: "Głowica Warthog Magnum Switcher to dwa narzędzia w jednym. Przełącza się pomiędzy ciągnięciem a czyszczeniem bez wyjmowania z rury. Zmienia wzorce strumienia oraz oszczędza czas i zużycie wody.",
        textENG: "The Warthog Magnum Switcher nozzle is two tools in one. It switches between pulling and cleaning without being removed from the pipe. It changes jet patterns, saving both time and water consumption.",
    },
    detailedDescription: {
        descriptionPL: <></>,
        descriptionENG: <></>
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