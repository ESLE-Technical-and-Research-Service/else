import {StaticImageData} from "next/image";

export type Department = {
    img: StaticImageData,
    altPL: string,
    altENG: string,
    titlePL: string,
    titleENG: string,
    descriptionPL: string,
    descriptionENG: string,
    link: string
};