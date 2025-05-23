import {StaticImageData} from "next/image";
import {Language} from "./Language";

export type Department = {
    img: StaticImageData,
    alt: {
        [Language.PL]: string,
        [Language.ENG]: string
    },
    title: {
        [Language.PL]: string,
        [Language.ENG]: string,
    },
    description: {
        [Language.PL]: string,
        [Language.ENG]: string
    },
    link: string
};