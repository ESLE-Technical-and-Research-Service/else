'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface CookieConsentContext {
    showConsent: () => boolean;
    setConsent: (consent: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContext | undefined>(undefined);

export const CookieConsentProvider = ({children}: { children: ReactNode }) => {
    const [acceptedConsent, setAcceptedConsent] = useState<boolean>(false)
    const [displayConsentPopup, setDisplayConsentPopup] = useState<boolean>(false)

    useEffect(() => {
        if (!acceptedConsent) {
            const cookie = global.document.cookie
                .split(";")
                .find((cookie) => cookie.trim().startsWith("cookie-consent"));

            if (cookie && cookie.split("=")[1] === "true") {
                setAcceptedConsent(true);
                setDisplayConsentPopup(false);
            } else if (cookie && cookie.split("=")[1] === "false") {
                setAcceptedConsent(false);
                setDisplayConsentPopup(false);
            } else {
                setAcceptedConsent(false);
                setDisplayConsentPopup(true);
            }
        }
    }, []);

    const setConsent = (consent: boolean) => {
        setAcceptedConsent(consent);
    }

    const showConsent = () => {
        return displayConsentPopup;
    }

    return (
        <CookieConsentContext.Provider value={{showConsent, setConsent}}>
            {children}
        </CookieConsentContext.Provider>
    )
};

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);

    if (!context) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }

    return context;
}