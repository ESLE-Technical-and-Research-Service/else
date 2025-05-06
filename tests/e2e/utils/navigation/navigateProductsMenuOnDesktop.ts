import {expect, Locator, Page} from "@playwright/test";
import {Language} from "../../../../components/src/types";

export async function navigateProductsMenuOnDesktop(page: Page): Promise<Locator> {
    const productsMenu = page.getByTestId("products-menu").first();
    await productsMenu.hover();
    return productsMenu;
};

export async function navigateToWaterAndSewageProductsMenuLinkOnDesktop(page: Page, language: Language = Language.ENG): Promise<Locator> {
    await navigateProductsMenuOnDesktop(page);
    const waterAndeSewageLink = page.getByTestId("products-desktop-water-sewage-submenu-link");
    await waterAndeSewageLink.hover();
    await expect(waterAndeSewageLink).toBeVisible();
    const waterAndSewageLinkText = await waterAndeSewageLink.textContent();

    if (language === Language.PL) {
        expect(waterAndSewageLinkText).toBe("Dział WOD-KAN");
    } else {
        expect(waterAndSewageLinkText).toBe("Water and Sewage Department");
    }
    return waterAndeSewageLink;
}

export async function navigateToWaterAndSewageProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);
    await waterAndSewageLink.waitFor({state: "visible"});
    await waterAndSewageLink.click();
};

export async function navigateToCameraProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateProductsMenuOnDesktop(page);
    await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);

    const cameraLink = page.getByTestId("cameras-dropdown-submenu-link");
    await cameraLink.hover();
    await expect(cameraLink).toBeVisible();
    const cameraLinkText = await cameraLink.textContent();

    if (language === Language.PL) {
        expect(cameraLinkText).toBe("Kamery");
    } else {
        expect(cameraLinkText).toBe("Cameras");
    }

    await cameraLink.click();
};