import {useCookieConsent} from "../src/CookieConsentContext";

export const CookieConsentTestComponent = () => {
    const {showConsent, setConsent} = useCookieConsent();

    return (
        <div>
            {showConsent() && <div>Consent Popup</div>}
            <button
                data-testid="consent-button"
                onClick={() => setConsent(true)}
                type="button"
            >
                Accept Consent
            </button>
        </div>
    );
}