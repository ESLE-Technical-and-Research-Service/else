import {StaticImageData} from "next/image";

export type Service = {
    name: {
        namePL: string,
        nameENG: string,
    };
    href: string;
    heroImage: StaticImageData;
    description: {
        textPL: string,
        textENG: string,
    };
}