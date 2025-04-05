'use client';

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface CookieConsentContext {
    hasConsent: boolean;
    setConsent: (consent: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContext | undefined>(undefined);

export const CookieConsentProvider = ({children}: { children: ReactNode }) => {
    const [acceptedConsent, setAcceptedConsent] = useState<boolean>(false);

    useEffect(() => {
        if (!acceptedConsent) {
            const cookie = global.document.cookie
                .split(";")
                .find((cookie) => cookie.trim().startsWith("cookie-consent"));

            if (cookie && cookie.split("=")[1] === "true") {
                setAcceptedConsent(true);
            } else {
                setAcceptedConsent(false);
            }
        }
    }, []);

    const setConsent = (consent: boolean) => {
        setAcceptedConsent(consent);
    }

    return (
        <CookieConsentContext.Provider value={{hasConsent: acceptedConsent, setConsent}}>
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