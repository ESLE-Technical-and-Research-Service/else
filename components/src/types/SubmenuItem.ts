import {Language} from "./Language";
import {DropdownItem} from "./DropdownItem";

export type SubmenuItem = {
    href: string,
    submenuName: string,
    label: {
        [Language.PL]: string,
        [Language.ENG]: string,
    },
    items: DropdownItem[],
}
