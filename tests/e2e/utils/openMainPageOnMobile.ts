import {Browser, devices, Page} from "@playwright/test";
import {closeConsentPopup} from "./closeConsentPopup";

const baseUrl = process.env.BASE_URL as string;

export async function openMainPageOnMobile(browser: Browser, locale: string = "en-ENG"): Promise<Page> {
    const context = await browser.newContext({
        locale,
        ...devices['iPhone 13']
    });
    const page = await context.newPage();
    await page.goto(baseUrl);
    await page.waitForSelector("body");
    return page;
}

export async function openMainPageOnMobileAndCloseConsentPopup(browser: Browser, locale?: string): Promise<Page> {
    const page = await openMainPageOnMobile(browser, locale);
    await closeConsentPopup(page);
    return page;
}