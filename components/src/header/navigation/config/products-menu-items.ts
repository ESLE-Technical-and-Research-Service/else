import type {DropDownItem} from "../render-dropdown-items";
import {waterSewageSubmenuItems} from "./water-sewage-submenu-items";
import {maritimeItems} from "./maritime-items";

export type MenuItem = {
    href: string,
    submenuName: string,
    labelPL: string,
    labelENG: string,
    items: DropDownItem[]
}

export const productsMenuItems: MenuItem[] = [
    {
        href: "/products/water-sewage",
        submenuName: "water-sewage",
        labelPL: "Dział WOD-KAN",
        labelENG: "Water and Sewage Department",
        items: waterSewageSubmenuItems
    },
    {
        href: "/products/maritime",
        submenuName: "maritime",
        labelPL: "Dział Morski",
        labelENG: "Maritime Department",
        items: maritimeItems
    }
]
