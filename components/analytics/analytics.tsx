'use client';

import {useCookieConsent} from "../../context/CookieConsentContext";
import {useState} from "react";
import CookieConsent from "../header/cookie/cookie-consent";

export default function Analytics() {
    const { showConsent, setConsent } = useCookieConsent();
    const [closePopup, setClosePopup] = useState<boolean>(false);

    function handlePopupClose() {
        setClosePopup(true);
    }

    function handleAcceptConsent() {
        // set valid cookie for 1 year{ trackId }: AnalyticsProps
        global.document.cookie = "cookie-consent=true; max-age=31536000; Secure; SameSite=Lax";

        const trackId = '1234';

        const script = global.document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackId}`;
        global.document.head.appendChild(script);

        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date()));
                gtag('config', '${trackId}');
            `;
        document.head.appendChild(inlineScript);

        setConsent(true);
        setClosePopup(true);
    }

    function handleRejectConsent() {
        // ask again only after 6 months
        global.document.cookie = "cookie-consent=false; max-age=15552000; Secure; SameSite=Lax";
        setConsent(false);
        setClosePopup(true);
    }

    return (
        <>
            {showConsent() && !closePopup && (
                <CookieConsent
                    handlePopupCloseAction={handlePopupClose}
                    handleAcceptConsentAction={handleAcceptConsent}
                    handleRejectConsentAction={handleRejectConsent}
                />
            )}
        </>
    );
}