import {StaticImageData} from "next/image";
import {JSX} from "react";

export type Service = {
    name: {
        namePL: string,
        nameENG: string,
    };
    title: {
        titlePL: string,
        titleENG: string,
    };
    href: string;
    heroImage: StaticImageData;
    images: StaticImageData[];
    description: {
        textPL: string,
        textENG: string,
    };
    detailedDescription: {
        textPL: JSX.Element,
        textENG: JSX.Element,
    };
}