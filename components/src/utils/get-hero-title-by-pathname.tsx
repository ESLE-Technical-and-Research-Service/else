import {Language, NavigationLinks} from "../types";
import {JSX} from "react";
import HeroImageTitle from "../hero/hero-image-title";

type HeroTitleByPathnameProps = {
    pathname: string;
    language: Language;
}

export default function HeroTitleByPathName({pathname, language}: HeroTitleByPathnameProps): JSX.Element {
    let title: string = "";

    switch (pathname) {
        case NavigationLinks.CAMERAS:
            title = language === Language.PL
                ? "Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych"
                : "Inspection Cameras for Sewers and Water Networks";
            break;
        case NavigationLinks.PRESSURE_VEHICLES:
            title = language === Language.PL
                ? "Wielofunkcyjne pojazdy do ciśnieniowego czyszczenia kanalizacji"
                : "Multipurpose vehicles for pressure sewer cleaning";
            break;
        case NavigationLinks.MILLING_ROBOTS:
            title = language === Language.PL
                ? "Roboty frezujące"
                : "Milling Robots";
            break;
        case NavigationLinks.ACCESSORIES:
            title = language === Language.PL
                ? "Akcesoria"
                : "Accessories";
            break;
        case NavigationLinks.SERVICES:
            title = language === Language.PL
                ? "Serwisy"
                : "Services";
            break;
        default:
            title = language === Language.PL
                ? "Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych"
                : "Inspection Cameras for Sewers and Water Networks";
    }

    return <HeroImageTitle title={title}/>;
}
