import Analytics from "../../src/analytics/analytics";
import {useCookieConsent} from "../../../context/src/CookieConsentContext";
import {render, screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

jest.mock("../../../context/src/CookieConsentContext");
jest.mock("../../src/header/cookie/cookie-consent", () => {
    // eslint-disable-next-line react/display-name
    return ({handlePopupCloseAction, handleAcceptConsentAction, handleRejectConsentAction}: never) => (
        <div data-testid="cookie-consent-mock">
            <button data-testid="close-button" onClick={handlePopupCloseAction}>Close</button>
            <button data-testid="accept-button" onClick={handleAcceptConsentAction}>Accept</button>
            <button data-testid="reject-button" onClick={handleRejectConsentAction}>Reject</button>
        </div>
    );
});

Object.defineProperty(global.document, 'cookie', {
    writable: true,
    value: '',
});

describe("Analytics", () => {

    it("should render the cookie consent", () => {
        const mockUseCookieConsent = useCookieConsent as jest.MockedFunction<typeof useCookieConsent>;
        const setConsentMock = jest.fn();

        mockUseCookieConsent.mockReturnValue({
            showConsent: () => true,
            setConsent: setConsentMock,
        });

        render(<Analytics/>);

        expect(screen.getByTestId("cookie-consent-mock")).toBeInTheDocument();
    });

    it("should handle accept consent", async () => {
        const mockUseCookieConsent = useCookieConsent as jest.MockedFunction<typeof useCookieConsent>;
        const setConsentMock = jest.fn();

        mockUseCookieConsent.mockReturnValue({
            showConsent: () => true,
            setConsent: setConsentMock,
        });

        render(<Analytics/>);

        await userEvent.click(screen.getByTestId("accept-button"));

        await waitFor(() => {
            expect(setConsentMock).toBeCalledTimes(1);
            expect(setConsentMock).toBeCalledWith(true);
            expect(document.cookie).toContain("cookie-consent=true");
        });
    });

    it("should handle reject consent", async () => {
        const mockUseCookieConsent = useCookieConsent as jest.MockedFunction<typeof useCookieConsent>;
        const setConsentMock = jest.fn();

        mockUseCookieConsent.mockReturnValue({
            showConsent: () => true,
            setConsent: setConsentMock,
        });

        render(<Analytics/>);

        await userEvent.click(screen.getByTestId("reject-button"));

        await waitFor(() => {
            expect(setConsentMock).toBeCalledTimes(1);
            expect(setConsentMock).toBeCalledWith(false);
            expect(document.cookie).toContain("cookie-consent=false");
        });
    });

    it("should close the popup when close button is clicked", async () => {
        const mockUseCookieConsent = useCookieConsent as jest.MockedFunction<typeof useCookieConsent>;
        const setConsentMock = jest.fn();

        mockUseCookieConsent.mockReturnValue({
            showConsent: () => true,
            setConsent: setConsentMock,
        });

        render(<Analytics/>);

        await userEvent.click(screen.getByTestId("close-button"));

        await waitFor(() => {
            expect(screen.queryByTestId("cookie-consent-mock")).not.toBeInTheDocument();
        });
    });
});