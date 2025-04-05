'use client';

import {useCookieConsent} from "../../context/CookieConsentContext";

export default function CookieConsent() {
    const { hasConsent, setConsent } = useCookieConsent();

    function handleCookieConsent() {
        // TODO
    }
    return (
        <>
            {!hasConsent && (
                <main>
                    <h1>Cookie</h1>
                </main>
            )}
        </>
    );
}