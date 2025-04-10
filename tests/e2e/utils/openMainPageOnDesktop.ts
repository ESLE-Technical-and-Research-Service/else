import {Browser, Page} from "@playwright/test";
import {closeConsentPopup} from "./closeConsentPopup";

const baseUrl = "http://localhost:3000/";

export async function openMainPageOnDesktop(browser: Browser, locale: string = "en-ENG"): Promise<Page> {
    const context = await browser.newContext({ locale });
    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.waitForSelector("body");
    return page;
}

export async function openMainPageOnDesktopAndCloseConsentPopup(browser: Browser): Promise<Page> {
    const page = await openMainPageOnDesktop(browser);
    await closeConsentPopup(page);
    return page;
}
