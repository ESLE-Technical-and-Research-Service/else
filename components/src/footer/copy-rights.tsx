import {Language} from "../types";
import {GetLocalizedText} from "../utils";

export default function CopyRights() {
    const copyRightsText = {
        [Language.PL]: "Wszelkie prawa zastrzeżone.",
        [Language.ENG]: "All rights reserved.",
    };

    return (
        <div data-testid="copy-rights" className="text-sm text-gray-600 mt-6">
            &copy; {new Date().getFullYear()} ELSE - Technical and Research Service. {GetLocalizedText(copyRightsText)}
        </div>
    )
}