import {Locator, Page} from "@playwright/test";

export async function navigateProductsMenu(page: Page): Promise<Locator> {
    const productsMenu = page.getByTestId("products-menu").first();
    await productsMenu.hover();
    return productsMenu;
};

export async function navigateToWaterAndSewageProductsPage(page: Page): Promise<Locator> {
    await navigateProductsMenu(page);
    const waterAndeSewageLink = page.getByTestId("products-desktop-water-sewage-submenu-link");
    await waterAndeSewageLink.hover();
    return waterAndeSewageLink;
}