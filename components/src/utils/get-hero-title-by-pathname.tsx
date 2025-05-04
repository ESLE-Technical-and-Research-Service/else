import {Language} from "../types/Language";
import {JSX} from "react";
import {ProductLinks} from "../types/products";
import HeroImageTitle from "../hero/hero-image-title";

type HeroTitleByPathnameProps = {
    productType: string;
    language: Language;
}

export default function HeroTitleByPathnamegetHeroTitle({productType, language}: HeroTitleByPathnameProps): JSX.Element {
    let title: string = "";

    switch (productType) {
        case ProductLinks.CAMERAS:
            title = language === Language.PL
                ? "Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych"
                : "Inspection Cameras for Sewers and Water Networks";
            break;
        case ProductLinks.PRESSURE_VEHICLES:
            title = language === Language.PL
                ? "Wielofunkcyjne pojazdy do ciśnieniowego czyszczenia kanalizacji"
                : "Multipurpose vehicles for pressure sewer cleaning";
            break;
        case ProductLinks.MILLING_ROBOTS:
            title = language === Language.PL
                ? "Roboty frezujące"
                : "Milling Robots";
            break;
        case ProductLinks.ACCESSORIES:
            title = language === Language.PL
                ? "Akcesoria"
                : "Accessories";
            break;
        default:
            title = language === Language.PL
                ? "Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych"
                : "Inspection Cameras for Sewers and Water Networks";
    }

    return <HeroImageTitle title={title} />;
}
