import { ProductItem } from "../../../../types/ProductItem";
import {NUOVACONTEC} from "../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../categories";
import {AccessoriesTags} from "../../tags/accessories-tags";
import warthogMagnumWhrImg01 from "../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-01.webp";
import warthogMagnumWhrImg02 from "../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-02.webp";
import warthogMagnumWhrImg03 from "../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-03.webp";
import warthogMagnumWhrImg04 from "../../../../../../assets/images/products/nozzles/warthog/warthog-magnum-whr-04.webp";

export const WarthogMagnumWhr: ProductItem = {
    name: {
        namePL: "Warthog Magnum WHR",
        nameENG: "Warthog Magnum WHR",
    },
    href: "/products/water-sewage/accessories/warthog-magnum-whr",
    images: [
        warthogMagnumWhrImg01,
        warthogMagnumWhrImg02,
        warthogMagnumWhrImg03,
        warthogMagnumWhrImg04,
    ],
    description: {
        textPL: "Głowice Warthog Magnum WHR zostały zaprojektowane z myślą o pojazdach z recyklingiem. Można je wyposażyć w wkładki stalowe lub z węglika spiekanego w zależności od potrzeby czyszczenia. Przełączają się pomiędzy ciągnięciem a czyszczeniem bez wyjmowania z rury. Opcja czyszcząca maksymalizuje moc w celu usuwania zanieczyszczeń i wycinania korzeni.",
        textENG: "Warthog Magnum WHR nozzles are designed for use with recycling vehicles. They can be equipped with either steel or carbide inserts, depending on the cleaning requirements. They switch between pulling and cleaning without the need to remove them from the pipe. The cleaning mode maximizes power for removing debris and cutting roots.",
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
    tags: [AccessoriesTags.CleaningNozzlesTag],
}