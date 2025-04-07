import {render, screen, waitFor} from "@testing-library/react";
import {CookieConsentProvider} from "../src/CookieConsentContext";
import {CookieConsentTestComponent} from "./CookieConsentTestComponent";
import {userEvent} from "@testing-library/user-event";

Object.defineProperty(global.document, 'cookie', {
    writable: true,
    value: 'cookie-consent=false',
});

describe("CookieConsentContext", () => {
    it("should show consent popup if no consent cookie exists", async () => {
       global.document.cookie = "";

       render(
           <CookieConsentProvider>
               <CookieConsentTestComponent />
           </CookieConsentProvider>
       );

        await waitFor(() => {
            expect(screen.getByText("Consent Popup")).toBeInTheDocument();
        });
    });

    it("should hide cookie consent popup if cookie is set to true", async () => {
       global.document.cookie = "cookie-consent=true";

       render(
           <CookieConsentProvider>
               <CookieConsentTestComponent />
           </CookieConsentProvider>
       );

       await waitFor(() => {
           expect(screen.queryByText("Consent Popup")).not.toBeInTheDocument();
       });
    });

    it("should hide cookie consent popup if cookie is set to false", async () => {
        global.document.cookie = "cookie-consent=false";

       render(
           <CookieConsentProvider>
               <CookieConsentTestComponent />
           </CookieConsentProvider>
       );

       await waitFor(() => {
           expect(screen.queryByText("Consent Popup")).not.toBeInTheDocument();
       });
    });

    it("should update consent when setConsent is called", async () => {
        global.document.cookie = "";

        render(
            <CookieConsentProvider>
                <CookieConsentTestComponent />
            </CookieConsentProvider>
        );

        expect(screen.queryByText("Consent Popup")).toBeInTheDocument();

        await userEvent.click(screen.getByTestId("consent-button"));

        await waitFor(() => {
            expect(global.document.cookie).toContain("cookie-consent=true");
            expect(screen.queryByText("Consent Popup")).not.toBeInTheDocument();
        });
    });
});