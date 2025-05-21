import {Language} from "./Language";

export type NavigationItem = {
    name: {
        [Language.PL]: string,
        [Language.ENG]: string,
    },
    url: string,
};