import {DropdownItem, Language} from "../../../types";

export const aboutUsDropdownItems: DropdownItem[] = [
    {
        href: "/about/profile",
        label: {
            [Language.PL]: "Opis działalności",
            [Language.ENG]: "Company Profile",
        },
    },
    {
        href: "/about/departments",
        label: {
            [Language.PL]: "Nasze działy",
            [Language.ENG]: "Our Departments",
        },
    },
    {
        href: "/about/certificates",
        label: {
            [Language.PL]: "Certifikaty",
            [Language.ENG]: "Certificates",
        },
    },
    {
        href: "/about/locations",
        label: {
            [Language.PL]: "Lokalizacje",
            [Language.ENG]: "Locations",
        },
    },
    {
        href: "/about/media",
        label: {
            [Language.PL]: "Media",
            [Language.ENG]: "Media",
        },
    },
];