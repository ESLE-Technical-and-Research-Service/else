import {Browser, devices, Page} from "@playwright/test";
import {closeConsentPopup} from "./closeConsentPopup";

const baseUrl = 'http://localhost:3000';

export async function openMainPageOnTablet(browser: Browser, locale: string = "en-ENG"): Promise<Page> {
    const context = await browser.newContext({
        locale,
        ...devices['iPad (gen 7)'],
    });
    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.waitForSelector("body");
    return page;
}

export async function openMainPageOnTabletAndCloseConsentPopup(browser: Browser): Promise<Page> {
    const page = await openMainPageOnTablet(browser);
    await closeConsentPopup(page);
    return page;
}