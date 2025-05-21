import {waterSewageSubmenuItems} from "./water-sewage-submenu-items";
import {maritimeItems} from "./maritime-items";
import {Language, SubmenuItem} from "../../../types";


export const productsMenuItems: SubmenuItem[] = [
    {
        href: "/products/water-sewage",
        submenuName: "water-sewage",
        label: {
            [Language.PL]: "Dział WOD-KAN",
            [Language.ENG]: "Water and Sewage Department",
        },
        items: waterSewageSubmenuItems
    },
    {
        href: "/products/maritime",
        submenuName: "maritime",
        label: {
            [Language.PL]: "Dział MORSKI",
            [Language.ENG]: "Maritime Department",
        },
        items: maritimeItems
    }
]
