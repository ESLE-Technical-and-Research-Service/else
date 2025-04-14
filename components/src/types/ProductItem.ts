import {StaticImageData} from "next/image";
import {Tag} from "./Tag";

export type ProductItem = {
    labelPL: string,
    labelENG: string,
    href: string,
    images: StaticImageData[],
    descriptionPL: string,
    descriptionENG: string
    categoryPL: string
    categoryENG: string
    tags: Tag[]
}