import {Department, Language} from "../../types";
import maritimeDepartmentImg from "../../../../assets/images/meritimeDep.png"

export const maritimeDepartment: Department = {
    img: maritimeDepartmentImg,
    alt: {
        [Language.PL]: "Dział morski",
        [Language.ENG]: "Maritime Department"
    },
    title:{
        [Language.PL]: "DZIAŁ MORSKI",
        [Language.ENG]: "MARITIME DEPARTMENT"
    },
    description: {
        [Language.PL]: "Wyposazenie statków, okrętów, stacji brzegowych, statków powietrznych, śmigłowców w urządzenia radiowe i nawigacyjne.",
        [Language.ENG]: "Equipping ships, vessels, coastal stations, aircraft, and helicopters with radio and navigation devices."
    },
    link: "/about/departments/maritime"
}