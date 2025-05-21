import {DropdownItem, Language} from "../../../types";

export const servicesDropdownItems: DropdownItem[] = [
    {
        href: "/services/cam-service",
        label: {
            [Language.PL]: "Serwis kamer",
            [Language.ENG]: "Cameras service",
        },
    },
    {
        href: "/services/pressure-vehicles-service",
        label: {
            [Language.PL]: "Serwis samochodów ciśnieniowych",
            [Language.ENG]: "Pressure Vehicles Service"
        },
    },
    {
        href: "/services/tech-support",
        label: {
            [Language.PL]: "Wsparcie techniczne",
            [Language.ENG]: "Technical Support"
        },
    },
    {
        href: "/services/trainings",
        label: {
            [Language.PL]: "Szkolenia",
            [Language.ENG]: "Trainings"
        },
    },
];