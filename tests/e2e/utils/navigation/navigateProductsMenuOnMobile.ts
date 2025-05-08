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
    const mobileSlideInMenu = page.getByTestId("burger-menu-slide-in").first();
    await mobileSlideInMenu.waitFor({ state: "visible" });
    await expect(mobileSlideInMenu).toBeVisible({ timeout: 3000 });

    const menuCloseButtonContainer = mobileSlideInMenu.getByTestId("mobile-menu-close-button-container").first();
    await menuCloseButtonContainer.waitFor({ state: "visible" });
    await expect(menuCloseButtonContainer).toBeVisible({ timeout: 3000 });

    const menuCloseButton = menuCloseButtonContainer.locator('[data-testid="mobile-menu-close-button"]');
    await menuCloseButton.waitFor({ state: "visible" });
    await expect(menuCloseButton).toBeVisible({ timeout: 3000 });
    return menuCloseButton;
}

export async function closeMobileMenu(page: Page): Promise<void> {
    const menuCloseButton = await mobileMenuCloseButton(page);
    await menuCloseButton.click();
}

export async function navigateToProductsMenuOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await openMenuOnMobile(page);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const productsMenuLink = burgerMenu.getByTestId("products-menu-link");
    await productsMenuLink.waitFor({ state: "visible" });
    await expect(productsMenuLink).toBeVisible();


    const productsMenuLinkText = await productsMenuLink.textContent();
    if (language === Language.PL) {
        expect(productsMenuLinkText).toBe("Produkty");
    } else {
        expect(productsMenuLinkText).toBe("Products");
    }

    await productsMenuLink.click();

    const menuCloseButton = await mobileMenuCloseButton(page);
    await menuCloseButton.waitFor({ state: "visible" });
    await expect(menuCloseButton).toBeVisible();
}

export async function openProductsFiltersMenuOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    const filtersMenuButtonContainer = page.getByTestId("water-sewage-product-filters-button-container-mobile");
    await filtersMenuButtonContainer.waitFor({ state: "visible" });
    await expect(filtersMenuButtonContainer).toBeVisible();

    const filtersMenuButton = page.getByTestId("water-sewage-products-filters-open-button");
    await filtersMenuButton.waitFor({ state: "visible" });
    await expect(filtersMenuButton).toBeVisible();

    const filtersMenuButtonText = await filtersMenuButton.textContent();

    if (language === Language.PL) {
        expect(filtersMenuButtonText).toBe("Filtry");
    } else {
        expect(filtersMenuButtonText).toBe("Filters");
    }

    await filtersMenuButton.click();
}

export async function closeProductsFiltersMenuOnMobile(page: Page): Promise<void> {
    const filtersDrawer = page.getByTestId("water-sewage-departments-products-filters-drawer");
    await filtersDrawer.waitFor({ state: "visible" });
    await expect(filtersDrawer).toBeVisible({ timeout: 3000 });

    const filtersMenuButtonContainer = page.locator('[data-testid="water-sewage-departments-products-filters-close-button-container"]').first();
    await filtersMenuButtonContainer.waitFor({ state: "visible" });
    await expect(filtersMenuButtonContainer).toBeVisible({ timeout: 3000 });

    const filtersMenuButton = page.locator('[data-testid="water-sewage-departments-products-filters-close-button"]').first();
    await filtersMenuButton.waitFor({ state: "visible" });
    await expect(filtersMenuButton).toBeVisible({ timeout: 3000 });

    await filtersMenuButton.click();
}

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

export async function navigateToWaterAndSewageProductsPageOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToProductsMenuOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const waterAndSewageSubmenuLink = burgerMenu.getByTestId("products-water-sewage-mobile-submenu-link");
    await waterAndSewageSubmenuLink.waitFor({ state: "visible" });
    await expect(waterAndSewageSubmenuLink).toBeVisible({ timeout: 3000 });
    await waterAndSewageSubmenuLink.click();
}

export async function navigateToWaterAndSewageProductsPageOnMobileAndCloseMenu(
    page: Page, language: Language = Language.ENG): Promise<void> {
        await navigateToProductsMenuOnMobile(page, language);

        const burgerMenu = page.getByTestId("burger-menu-slide-in");
        const waterAndSewageSubmenuLink = burgerMenu.getByTestId("products-water-sewage-mobile-submenu-link");
        await waterAndSewageSubmenuLink.waitFor({ state: "visible" });
        await expect(waterAndSewageSubmenuLink).toBeVisible({ timeout: 3000 });
        await waterAndSewageSubmenuLink.click();

        await closeMobileMenu(page);
    }

export async function navigateToCameraProductsPageOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToWaterAndSewageProductsPageOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const camerasSubmenuLink = burgerMenu.getByTestId("cameras-dropdown-submenu-link");
    await camerasSubmenuLink.waitFor({ state: "visible" });
    await expect(camerasSubmenuLink).toBeVisible();
    await camerasSubmenuLink.click();
}

export async function navigateToPressureVehiclesProductsPageOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToWaterAndSewageProductsPageOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const pressureVehiclesSubmenuLink = burgerMenu.getByTestId("pressure-vehicles-dropdown-submenu-link");
    await pressureVehiclesSubmenuLink.waitFor({ state: "visible" });
    await expect(pressureVehiclesSubmenuLink).toBeVisible();
    await pressureVehiclesSubmenuLink.click();
}

export async function navigateToMillingRobotsProductsPageOnMobile(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateToWaterAndSewageProductsPageOnMobile(page, language);

    const burgerMenu = page.getByTestId("burger-menu-slide-in");
    const millingRobotsSubmenuLink = burgerMenu.getByTestId("milling-robots-dropdown-submenu-link");
    await millingRobotsSubmenuLink.waitFor({ state: "visible" });
    await expect(millingRobotsSubmenuLink).toBeVisible();
    await millingRobotsSubmenuLink.click();
}