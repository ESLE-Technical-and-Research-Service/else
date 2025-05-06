import {expect, Locator, Page} from "@playwright/test";
import {Language} from "../../../../components/src/types";

export async function openMenuOnMobile(page: Page): Promise<void> {
    const productsMenu = page.getByTestId("burger-menu-button").first();
    await productsMenu.click();
    const menuCloseButton = await mobileMenuCloseButton(page);
    await menuCloseButton.waitFor({ state: "visible" });
    await expect(menuCloseButton).toBeVisible();
};

export async function mobileMenuCloseButton(page: Page): Promise<Locator> {
    const menuCloseButton = page.getByTestId("mobile-menu-close-button");
    return menuCloseButton;
};

export async function navigateToProductsMenuOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await openMenuOnMobile(page);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const productsMenuLink = burgerMenu.getByTestId("products-menu-link");
    await productsMenuLink.waitFor({ state: "visible" });
    await expect(productsMenuLink).toBeVisible();
    await productsMenuLink.click();

    const menuCloseButton = await mobileMenuCloseButton(page);
    await menuCloseButton.waitFor({ state: "visible" });
    await expect(menuCloseButton).toBeVisible();
};

export async function openMobileFiltersMenu(page: Page, language: Language = Language.ENG): Promise<void> {
    const filtersMenuButtonContainer = page.getByTestId("water-sewage-product-filters-button-container");
    await filtersMenuButtonContainer.waitFor({ state: "visible" });
    await expect(filtersMenuButtonContainer).toBeVisible();

    const filtersMenuButton = page.getByTestId("water-sewage-products-filters-open-button");
    await filtersMenuButton.waitFor({ state: "visible" });
    await expect(filtersMenuButton).toBeVisible();

    const filtersMenuButtonText = await filtersMenuButton.textContent();

    if (language === Language.PL) {
        await expect(filtersMenuButtonText).toBe("Filtry");
    } else {
        await expect(filtersMenuButtonText).toBe("Filters");
    }

    await filtersMenuButton.click();
}

export async function closeButtonForMobileFiltersMenu(page: Page, language: Language = Language.ENG): Promise<Locator> {
    await openMobileFiltersMenu(page, language);
    const mobileFiletersMenuCloseButton = page.getByTestId("water-sewage-products-filters-close-button");
    await mobileFiletersMenuCloseButton.waitFor({ state: "visible" });
    await expect(mobileFiletersMenuCloseButton).toBeVisible();

    return mobileFiletersMenuCloseButton;
}

export async function navigateToWaterAndSewageProductsLinkOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToProductsMenuOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const waterAndSewageSubmenuLink = burgerMenu.getByTestId("products-water-sewage-mobile-submenu-link");
    await waterAndSewageSubmenuLink.waitFor({ state: "visible" });
    await expect(waterAndSewageSubmenuLink).toBeVisible();
    await waterAndSewageSubmenuLink.click();
}

export async function navigateToCameraProductsPageOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToWaterAndSewageProductsLinkOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const camerasSubmenuLink = burgerMenu.getByTestId("cameras-dropdown-submenu-link");
    await camerasSubmenuLink.waitFor({ state: "visible" });
    await expect(camerasSubmenuLink).toBeVisible();
    await camerasSubmenuLink.click();
}