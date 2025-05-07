import {expect, Locator, Page} from "@playwright/test";
import {Language} from "../../../../components/src/types";

export async function navigateProductsMenuOnTablet(page: Page): Promise<Locator> {
    const productsMenu = page.getByTestId("products-menu").first();
    await productsMenu.waitFor({state: "visible"});
    await expect(productsMenu).toBeVisible({timeout: 3000});

    const productsMenuLink = page.getByTestId("products-menu-link").first();
    await productsMenuLink.waitFor({state: "visible"});
    await expect(productsMenuLink).toBeVisible({timeout: 3000});
    await productsMenuLink.click();

    await page.waitForSelector('[data-testid="products-tablet-dropdown-menu"]', { state: "visible" });

    return productsMenu;
}

export async function navigateToWaterAndSewageProductsMenuLinkOnTablet(page: Page, language: Language = Language.ENG): Promise<Locator> {
    await navigateProductsMenuOnTablet(page);
    const waterAndeSewageLink = page.getByTestId("products-water-sewage-submenu-link");
    await waterAndeSewageLink.waitFor({state: "visible"});
    await expect(waterAndeSewageLink).toBeVisible({timeout: 3000});

    const waterAndSewageLinkText = await waterAndeSewageLink.textContent();

    if (language === Language.PL) {
        expect(waterAndSewageLinkText).toBe("Dział WOD-KAN");
    } else {
        expect(waterAndSewageLinkText).toBe("Water and Sewage Department");
    }
    return waterAndeSewageLink;
}

export async function navigateToWaterAndSewageProductsPageOnTablet(page: Page, language: Language = Language.ENG): Promise<void> {
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnTablet(page, language);
    await waterAndSewageLink.waitFor({state: "visible"});
    await waterAndSewageLink.click();
}

export async function navigateToCameraProductsPageOnTablet(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToWaterAndSewageProductsPageOnTablet(page, language);

    const waterAndSewageSubmenuTabletItems = page.getByTestId("water-sewage-submenu-tablet-items");
    await waterAndSewageSubmenuTabletItems.waitFor({state: "visible"});
    await expect(waterAndSewageSubmenuTabletItems).toBeVisible({timeout: 3000});

    const cameraLink = page.getByTestId("cameras-dropdown-submenu-link");
    await cameraLink.waitFor({state: "visible"});
    await cameraLink.click();
}