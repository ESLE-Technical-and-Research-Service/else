import {Browser, Page} from "@playwright/test";
import {closeConsentPopup} from "./closeConsentPopup";

const baseUrl = process.env.BASE_URL as string;

export async function openMainPageOnDesktop(browser: Browser, locale: string = "en-ENG"): Promise<Page> {
    const context = await browser.newContext({ locale });
    const page = await context.newPage();
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto(baseUrl);
    await page.waitForSelector("body");
    return page;
}

export async function openMainPageOnDesktopAndCloseConsentPopup(browser: Browser, locale?: string): Promise<Page> {
    const page = await openMainPageOnDesktop(browser, locale);
    await closeConsentPopup(page);
    return page;
}
