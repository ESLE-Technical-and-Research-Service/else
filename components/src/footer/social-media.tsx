import {GetLocalizedText} from "../utils";
import {Language, NavigationItem} from "../types";

export default function SocialMedia() {
    const socialMediaHeaderText = {
        [Language.PL]: "Media społecznościowe",
        [Language.ENG]: "Social Media"
    };

    const socialMediaLinks: NavigationItem[] = [
        {
            name: {
                [Language.PL]: "Linkedin",
                [Language.ENG]: "Linkedin"
            },
            url: "https://pl.linkedin.com/company/else-technical-and-research-service-co-ltd-sp-z-o-o"
        },
        {
            name: {
                [Language.PL]: "Facebook",
                [Language.ENG]: "Facebook"
            },
            url: "https://www.facebook.com/p/ELSE-Technical-and-Research-Service-61556574954977/"
        }
    ]

    return (
        <div>
            <h3 className="font-bold mb-2">
                {GetLocalizedText(socialMediaHeaderText)}
            </h3>
            <ul className="space-y-2 flex gap-4">
                {socialMediaLinks.map((item: NavigationItem, index: number) => (
                    <li key={index}>
                        <a className="hover:underline"
                           href={item.url}
                           target="_blank"
                           rel="noopener noreferrer">
                            {GetLocalizedText(item.name)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}