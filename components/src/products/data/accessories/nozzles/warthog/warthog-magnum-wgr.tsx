import {Language, ProductItem} from "../../../../../types";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {AccessoriesTags} from "../../../tags";
import warthogMagnumWgrImg01
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-01.webp";
import warthogMagnumWgrImg02
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-02.webp";
import warthogMagnumWgrImg03
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-03.webp";
import warthogMagnumWgrImg04
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-04.webp";
import warthogMagnumWgrImg05
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-05.webp";
import warthogMagnumWgrImg06
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-06.webp";
import warthogMagnumWgrImg07
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-07.webp";
import warthogMagnumWgrImg08
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-08.webp";
import warthogMagnumWgrImg09
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-09.webp";
import warthogMagnumWgrImg10
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-10.webp";
import warthogMagnumWgrImg11
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-11.webp";
import warthogMagnumWgrImg12
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-12.webp";
import warthogMagnumWgrImg13
    from "../../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-wgr-13.webp";

export const WarthogMagnumWgr: ProductItem = {
    name: {
        [Language.PL]: "Warthog Magnum WGR",
        [Language.ENG]: "Warthog Magnum WGR",
    },
    href: "/products/water-sewage/accessories/warthog-magnum-wgr",
    images: [
        warthogMagnumWgrImg06,
        warthogMagnumWgrImg01,
        warthogMagnumWgrImg02,
        warthogMagnumWgrImg03,
        warthogMagnumWgrImg04,
        warthogMagnumWgrImg05,
        warthogMagnumWgrImg07,
        warthogMagnumWgrImg08,
        warthogMagnumWgrImg09,
        warthogMagnumWgrImg10,
        warthogMagnumWgrImg11,
        warthogMagnumWgrImg12,
        warthogMagnumWgrImg13,
    ],
    description: {
        [Language.PL]: "Głowice Warthog MAGNUM WGR zostały zaprojektowane z myślą o pojazdach z recyklingiem. Można je wyposażyć w wkładki stalowe lub z węglika spiekanego w zależności od potrzeby czyszczenia. Przełączają się pomiędzy ciągnięciem a czyszczeniem bez wyjmowania z rury. Opcja czyszcząca maksymalizuje moc w celu usuwania zanieczyszczeń i wycinania korzeni.",
        [Language.ENG]: "Warthog MAGNUM WGR nozzles are designed specifically for recycling vehicles. They can be equipped with either steel or carbide inserts depending on cleaning requirements. They switch between pulling and cleaning without being removed from the pipe. The cleaning mode maximizes power to remove debris and cut roots.",
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