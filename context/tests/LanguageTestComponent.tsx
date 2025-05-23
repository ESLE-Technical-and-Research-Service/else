import {useLanguage} from "../src/LanguageContext";
import {Language} from "../../components/src/types";

export const LanguageTestComponent = () => {
    const { language, switchLanguage } = useLanguage();

    return (
        <div>
            <p data-testid="lang">{language}</p>
            <button
                data-testid="eng-switch"
                onClick={() => switchLanguage(Language.ENG)}
                type="button"
            >
                ENG
            </button>
            <button
                data-testid="pl-switch"
                onClick={() => switchLanguage(Language.PL)}
                type="button"
            >
                PLN
            </button>
            <p data-testid="text-translation">
                { language === Language.ENG ? "This is a test" : "To jest test" }
            </p>
        </div>
    );
}

