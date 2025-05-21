import {DropdownItem, Language} from "../../../types";

export const mainNavItems: DropdownItem[] = [
    {
        href: "/products",
        label: {
            [Language.PL]: "Produkty",
            [Language.ENG]: "Products",
        },
    },
    {
        href: "/about",
        label: {
            [Language.PL]: "O nas",
            [Language.ENG]: "About Us",
        },
    },
    {
        href: "/services",
        label: {
            [Language.PL]: "Serwisy",
            [Language.ENG]: "Services",
        },
    },
    {
        href: "/",
        label: {
            [Language.PL]: "Serwis 24/7",
            [Language.ENG]: "Service 24/7",
        },
    },
    {
        href: "/contact",
        label: {
            [Language.PL]: "Kontakt",
            [Language.ENG]: "Contact",
        },
    }
]