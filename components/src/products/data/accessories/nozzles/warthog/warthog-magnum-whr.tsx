import {Language, ProductItem} from "../../../../../types";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags";
import warthogMagnumWhrImg01
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-01.webp";
import warthogMagnumWhrImg02
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-02.webp";
import warthogMagnumWhrImg03
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-03.webp";
import warthogMagnumWhrImg04
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-04.webp";

export const WarthogMagnumWhr: ProductItem = {
    name: {
        [Language.PL]: "Warthog Magnum WHR",
        [Language.ENG]: "Warthog Magnum WHR",
    },
    href: "/products/water-sewage/accessories/warthog-magnum-whr",
    images: [
        warthogMagnumWhrImg01,
        warthogMagnumWhrImg02,
        warthogMagnumWhrImg03,
        warthogMagnumWhrImg04,
    ],
    description: {
        [Language.PL]: "Głowice Warthog Magnum WHR zostały zaprojektowane z myślą o pojazdach z recyklingiem. Można je wyposażyć w wkładki stalowe lub z węglika spiekanego w zależności od potrzeby czyszczenia. Przełączają się pomiędzy ciągnięciem a czyszczeniem bez wyjmowania z rury. Opcja czyszcząca maksymalizuje moc w celu usuwania zanieczyszczeń i wycinania korzeni.",
        [Language.ENG]: "Warthog Magnum WHR nozzles are designed for use with recycling vehicles. They can be equipped with either steel or carbide inserts, depending on the cleaning requirements. They switch between pulling and cleaning without the need to remove them from the pipe. The cleaning mode maximizes power for removing debris and cutting roots.",
    },
    detailedDescription: {
        [Language.PL]: <></>,
        [Language.ENG]: <></>
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