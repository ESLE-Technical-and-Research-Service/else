import {Department, Language} from "../../types";
import waterAndSewageDepartmentImg from "../../../../assets/images/waterAndSewageDep.png";

export const waterAndSewageDepartment: Department = {
    img: waterAndSewageDepartmentImg,
    alt: {
        [Language.PL]: "Dział WOD-KAN",
        [Language.ENG]: "Water and Sewage Department",
    },
    title: {
        [Language.PL]: "DZIAŁ WOD-KAN",
        [Language.ENG]: "WATER AND SEWAGE DEPARTMENT",
    },
    description: {
        [Language.PL]: "Dostawa specjalistycznych urządzeń i systemów dla sieci wod-kan, szkolenia z obsługi, serwis gwarancyjny i pogwarancyjny.",
        [Language.ENG]: "Delivery of specialized devices and systems for water and sewage networks, user training, warranty and post-warranty service.",
    },
    link: "/about/departments/water-and-sewage"
}