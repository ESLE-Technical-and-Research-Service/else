import Popup from "../../popup/popup";
import classes from "./cookie-consent.module.css";
import ConfirmButton from "../../common/buttons/confirm-button";
import RejectButton from "../../common/buttons/reject-button";
import {consent} from "../../analytics/data/consent-content";
import {ConsentListElement} from "../../types";
import {GetLocalizedText} from "../../utils";

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
    return (
        <Popup onClose={handlePopupCloseAction}>
            <main data-testid="cookie-consent-container" className={classes.cookieConsent}>
                <div>
                    <h2 data-testid="cookie-consent-header">
                        {GetLocalizedText(consent.header)}
                    </h2>

                    <p data-testid="consent-text-p1">
                        {GetLocalizedText(consent.text1)}
                    </p>

                    <ul data-testid="consent-text-p2">
                        {consent.listElements.map((item: ConsentListElement, idx: number) => (
                            <li key={idx}>
                                {GetLocalizedText(item)}
                            </li>
                        ))}
                    </ul>

                    <p data-testid="consent-text-p3">
                        {GetLocalizedText(consent.text2)}
                    </p>
                </div>
                <div className={classes.buttons}>
                    <ConfirmButton onClick={handleAcceptConsentAction}>
                        {GetLocalizedText(consent.buttons.accept)}
                    </ConfirmButton>
                    <RejectButton onClick={handleRejectConsentAction}>
                        {GetLocalizedText(consent.buttons.reject)}
                    </RejectButton>
                </div>
            </main>
        </Popup>
    );
}