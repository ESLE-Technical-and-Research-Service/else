import Popup from "../../popup/popup";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {Language} from "../../../../context/src/types/Language";
import classes from "./cookie-consent.module.css";
import ConfirmButton from "../../common/buttons/confirm-button";
import RejectButton from "../../common/buttons/reject-button";

type CookieConsentProps = {
    handlePopupCloseAction: () => void;
    handleAcceptConsentAction: () => void;
    handleRejectConsentAction: () => void;
}

export default function CookieConsent({
                                          handlePopupCloseAction,
                                          handleAcceptConsentAction,
                                          handleRejectConsentAction
                                      }: CookieConsentProps) {
    const {language} = useLanguage();

    return (
        <Popup onClose={handlePopupCloseAction}>
            <main data-testid="cookie-consent-container" className={classes.cookieConsent}>
                <div>
                    <h2 data-testid="cookie-consent-header">
                        {language === Language.PL
                            ? "Szanujemy Twoją prywatność"
                            : "We Value Your Privacy"
                        }
                    </h2>

                    <p data-testid="consent-text-p1">
                        {language === Language.PL
                            ? "Ta strona internetowa używa plików cookie oraz podobnych technologii w celu poprawy " +
                            "Twojego doświadczenia podczas przeglądania, analizy ruchu oraz zrozumienia, jak " +
                            "wchodzisz w interakcję z naszymi treściami. Akceptując, zgadzasz się na przetwarzanie " +
                            "swoich danych w celu:"
                            : "This website uses cookies and similar technologies to enhance your browsing " +
                            "experience, analyze traffic, and understand how you interact with our content. " +
                            "By accepting, you agree to the processing of your data to:"
                        }
                    </p>

                    <ul data-testid="consent-text-p2">
                        <li>
                            {language === Language.PL
                                ? "Śledzenia Twojego zachowania na stronach (np. kliknięcia, " +
                                "przewijanie, odwiedzane treści)"
                                : "Track your behavior across pages (e.g. clicks, scrolls, visited content)"
                            }
                        </li>
                        <li>
                            {language === Language.PL
                                ? "Monitorowania aktywności sesji i wzorców nawigacji"
                                : "Monitor session activity and navigation patterns"
                            }
                        </li>
                        <li>
                            {language === Language.PL
                                ? "Analizowania użycia w celu poprawy funkcjonalności i personalizacji treści"
                                : "Analyze usage to improve functionality and personalize content"
                            }
                        </li>
                    </ul>

                    <p data-testid="consent-text-p3">
                        {
                            language === Language.PL
                                ? "Możemy również używać narzędzi stron trzecich (np. platform analitycznych) do " +
                                "zbierania anonimowych danych o Twoich interakcjach na tej stronie.\n" +
                                "\n" +
                                "Możesz w każdej chwili wycofać swoją zgodę, zmieniając ustawienia plików cookie."
                                : "We may also use third-party tools (e.g., analytics platforms) to collect " +
                                "anonymized data\n" +
                                "                            about your interactions on this website.\n" +
                                "\n" +
                                "                            You can withdraw your consent at any time by changing " +
                                "your cookie settings."
                        }
                    </p>
                </div>
                <div className={classes.buttons}>
                    <ConfirmButton onClick={handleAcceptConsentAction}>
                        {
                            language === Language.PL
                                ? "Akceptuj"
                                : "Accept"
                        }
                    </ConfirmButton>
                    <RejectButton onClick={handleRejectConsentAction}>
                        {
                            language === Language.PL
                                ? "Odrzuć"
                                : "Reject"
                        }
                    </RejectButton>
                </div>
            </main>
        </Popup>
    );
}