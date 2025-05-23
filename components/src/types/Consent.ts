import {Language} from "./Language";

export type Consent = {
    header: {
        [Language.PL]: string,
        [Language.ENG]: string
    },
    text1: {
        [Language.PL]: string,
        [Language.ENG]: string
    },
    text2: {
        [Language.PL]: string,
        [Language.ENG]: string
    },
    listElements: ConsentListElement[],
    buttons: {
        accept: {
            [Language.PL]: string,
            [Language.ENG]: string
        },
        reject: {
            [Language.PL]: string,
            [Language.ENG]: string
        }
    }
};

export type ConsentListElement = {
    [Language.PL]: string,
    [Language.ENG]: string
}