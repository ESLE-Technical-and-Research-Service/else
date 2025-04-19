import {JSX} from "react";
import {StaticImageData} from "next/image";

export type Manufacturer = {
    name: string;
    descriptionPL: JSX.Element;
    descriptionENG: JSX.Element;
    image: StaticImageData;
    link: string;
    website: string;
}