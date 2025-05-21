import Link from "next/link";
import {Language, NavigationItem} from "../types";
import {GetLocalizedText} from "../utils";

export default function FooterNavigation() {
    const navigationHeaderText = {
        [Language.PL]: "Nawigacja",
        [Language.ENG]: "Navigation"
    };

    const menuLinks: NavigationItem[] = [
        {
            name: {
                [Language.PL]: "Strona główna",
                [Language.ENG]: "Home"
            },
            url: "/home"
        },
        {
            name: {
                [Language.PL]: "Serwisy",
                [Language.ENG]: "Services"
            },
            url: "/services"
        },
        {
            name: {
                [Language.PL]: "Kontakt",
                [Language.ENG]: "Contact"
            },
            url: "/contact"
        },
        {
            name: {
                [Language.PL]: "24/7",
                [Language.ENG]: "24/7"
            },
            url: "/service-24-7"
        },
    ];

    return (
        <div>
            <h3 className="font-bold mb-2">
                {GetLocalizedText(navigationHeaderText)}
            </h3>
            <ul className="space-y-2">
                {menuLinks.map((menuitem: NavigationItem) => (
                    <li key={menuitem.url}>
                        <Link className="hover:underline" href={menuitem.url}>
                            {GetLocalizedText(menuitem.name)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}