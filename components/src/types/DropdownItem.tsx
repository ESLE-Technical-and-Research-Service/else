import {Language} from "./Language";

export type DropdownItem = {
    href: string;
    label: {
        [Language.PL]: string;
        [Language.ENG]: string;
    }
}