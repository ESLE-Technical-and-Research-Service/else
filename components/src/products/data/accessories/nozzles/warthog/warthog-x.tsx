import { ProductItem } from "../../../../../types/ProductItem";
import {NUOVACONTEC} from "../../../manufacturers/NUOVACONTEC";
import {
    AccessoriesCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory
} from "../../../categories";
import {AccessoriesTags} from "../../../tags/accessories-tags";
import warthogXImg01 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-01.webp";
import warthogXImg02 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-02.webp";
import warthogXImg03 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-03.webp";
import warthogXImg04 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-04.webp";
import warthogXImg05 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-05.webp";
import warthogXImg06 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-06.webp";
import warthogXImg07 from "../../../../../../../assets/images/products/nozzles/warthog/warthog-x-07.webp";

export const WarthogX: ProductItem = {
    name: {
        namePL: "Warthog X",
        nameENG: "Warthog X",
    },
    href: "/products/water-sewage/accessories/warthog-x",
    images: [
        warthogXImg01,
        warthogXImg02,
        warthogXImg03,
        warthogXImg04,
        warthogXImg05,
        warthogXImg06,
        warthogXImg07,
    ],
    description: {
        textPL: "Zaprojektowana z myślą o wydłużonej żywotności. Warthog X to najpotężniejsza w branży głowica do rur DN75-DN200. Warthog X ma niewielkie rozmiary i jest wyposażona w kombinację tylnych dysz obrotowych.",
        textENG: "Designed for extended durability, the Warthog X is the most powerful cleaning head in the industry for DN75–DN200 pipes. Despite its compact size, it features a combination of rear rotating jets for superior cleaning performance and propulsion.",
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