import {StaticImageData} from "next/image";
import {JSX} from "react";
import {Language} from "./Language";

export type Service = {
    name: {
        [Language.PL]: string,
        [Language.ENG]: string,
    };
    title: {
        [Language.PL]: string,
        [Language.ENG]: string,
    };
    href: string;
    heroImage: StaticImageData;
    images: StaticImageData[];
    description: {
        [Language.PL]: string,
        [Language.ENG]: string,
    };
    detailedDescription: {
        [Language.PL]: JSX.Element,
        [Language.ENG]: JSX.Element,
    };
    summary: {
        [Language.PL]: JSX.Element,
        [Language.ENG]: JSX.Element,
    } | null,
}