import {Page} from "@playwright/test";

export async function closeConsentPopup(page: Page ): Promise<void> {
    const closeButton = page.getByTestId("popup-close-button");
    await closeButton.click();
}