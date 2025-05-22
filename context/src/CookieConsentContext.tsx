'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface CookieConsentContext {
    showConsent: () => boolean;
    setConsent: (consent: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContext | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
    const [displayConsentPopup, setDisplayConsentPopup] = useState<boolean>(false);

    useEffect(() => {
        const cookie = global.document.cookie
            .split(";")
            .find((cookie) => cookie.trim().startsWith("cookie-consent"));

        if (cookie) {
            // const consent = cookie.split("=")[1] === "true";
            setDisplayConsentPopup(false);
        } else {
            setDisplayConsentPopup(true);
        }
    }, []);

    const setConsent = (consent: boolean) => {
        if (!consent) {
            const halfYearInSeconds = 182 * 24 * 60 * 60;
            global.document.cookie = `cookie-consent=${consent}; max-age=${halfYearInSeconds}; Secure; SameSite=Lax; path=/`;
            setDisplayConsentPopup(false);
            return;
        }

        const oneYearInSeconds = 365 * 24 * 60 * 60;
        global.document.cookie = `cookie-consent=${consent}; max-age=${oneYearInSeconds}; Secure; SameSite=Lax; path=/`;
        setDisplayConsentPopup(!consent);
    };

    const showConsent = () => displayConsentPopup;

    return (
        <CookieConsentContext.Provider value={{ showConsent, setConsent }}>
            {children}
        </CookieConsentContext.Provider>
    );
};

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);

    if (!context) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }

    return context;
};
