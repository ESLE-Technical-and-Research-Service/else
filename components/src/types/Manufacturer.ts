import {JSX} from "react";
import {StaticImageData} from "next/image";
import {Language} from "./Language";

export type Manufacturer = {
    name: string;
    description: {
        [Language.PL]: JSX.Element;
        [Language.ENG]: JSX.Element;
    }
    image: StaticImageData;
    link: string;
    website: string;
}