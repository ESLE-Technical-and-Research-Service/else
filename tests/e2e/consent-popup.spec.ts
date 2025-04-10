import { test, expect, Page } from "@playwright/test";
import {openMainPageOnDesktop} from "./utils/openMainPageOnDesktop";

async function assertCommonElements(page: Page, confirmText: RegExp, rejectText: RegExp, headerText: string) {
    await expect(page.getByTestId("cookie-consent-container")).toBeVisible();
    await expect(page.getByTestId("consent-confirm-button")).toBeVisible();
    await expect(page.getByTestId("consent-reject-button")).toBeVisible();
    await expect(page.getByTestId("popup-close-button")).toBeVisible();

    await expect(page.getByTestId("consent-confirm-button")).toHaveText(confirmText);
    await expect(page.getByTestId("consent-reject-button")).toHaveText(rejectText);
    await expect(page.getByTestId("cookie-consent-header")).toHaveText(headerText);
    await expect(page.getByTestId("consent-text-p1")).toBeVisible();
}

test.describe("Consent popup tests", () => {
    test("should show correct consent content in polish", async ({ browser }) => {
        const page = await openMainPageOnDesktop(browser, "pl-PL");

        await assertCommonElements(page, /Akceptuj/, /Odrzuć/, "Szanujemy Twoją prywatność");

        await expect(page.getByTestId("consent-text-p1")).toHaveText(
            /Ta strona internetowa używa plików cookie oraz podobnych technologii.*Akceptując, zgadzasz się na przetwarzanie swoich danych w celu:/
        );

        const consentPart2 = [
            "Śledzenia Twojego zachowania na stronach (np. kliknięcia, przewijanie, odwiedzane treści)",
            "Monitorowania aktywności sesji i wzorców nawigacji",
            "Analizowania użycia w celu poprawy funkcjonalności i personalizacji treści",
        ];

        const items = await page.locator('[data-testid="consent-text-p2"] li').allTextContents();
        expect(items).toEqual(consentPart2);


        const consentTextP3 = await page.getByTestId("consent-text-p3").textContent();

        const normalizedConsentTextP3 = consentTextP3
            ?.replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        expect(normalizedConsentTextP3).toMatch(
            "Możemy również używać narzędzi stron trzecich (np. platform analitycznych) do zbierania anonimowych danych o Twoich interakcjach na tej stronie. " +
            "Możesz w każdej chwili wycofać swoją zgodę, zmieniając ustawienia plików cookie."
        );
    });

    test("should show correct consent content in english", async ({ browser }) => {
        const page = await openMainPageOnDesktop(browser);

        await assertCommonElements(page, /Accept/, /Reject/, "We Value Your Privacy");

        await expect(page.getByTestId("consent-text-p1")).toHaveText(
            /This website uses cookies and similar technologies.*By accepting, you agree to the processing of your data to:/
        );

        const consentPart2 = [
            "Track your behavior across pages (e.g. clicks, scrolls, visited content)",
            "Monitor session activity and navigation patterns",
            "Analyze usage to improve functionality and personalize content"
        ];

        const items = await page.locator('[data-testid="consent-text-p2"] li').allTextContents();
        expect(items).toEqual(consentPart2);

        await expect(page.getByTestId("consent-text-p3")).toContainText("collect anonymized data");
        await expect(page.getByTestId("consent-text-p3")).toContainText("withdraw your consent at any time");
    });

    test("should close consent popup after clicking close button", async ({ browser }) => {
       const page = await openMainPageOnDesktop(browser);

        const closeButton = page.locator('[data-testid="popup-close-button"]');
        await expect(closeButton).toBeVisible();
        await closeButton.click();

        await expect(page.locator('[data-testid="cookie-consent-container"]')).not.toBeVisible();
    });

    test("should close consent popup after clicking reject button", async ({ browser }) => {
        const page = await openMainPageOnDesktop(browser);

        const rejectButton = page.locator('[data-testid="consent-reject-button"]');
        await expect(rejectButton).toBeVisible();
        await rejectButton.click();

        await expect(page.locator('[data-testid="cookie-consent-container"]')).not.toBeVisible();
    });

    test("should close consent popup after clicking confirm button", async ({ browser }) => {
        const page = await openMainPageOnDesktop(browser);

        const confirmButton = page.locator('[data-testid="consent-confirm-button"]');
        await expect(confirmButton).toBeVisible();
        await confirmButton.click();

        await expect(page.locator('[data-testid="cookie-consent-container"]')).not.toBeVisible();
    });
});
