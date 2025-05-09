import {expect, Locator, Page} from "@playwright/test";
import {Language} from "../../../../components/src/types";

export async function navigateProductsMenuOnDesktop(page: Page, language: Language = Language.ENG ): Promise<Locator> {
    const productsMenu = page.getByTestId("products-menu").first();
    await productsMenu.hover();

    const productsMenuLink = page.getByTestId("products-menu-link").first();
    await productsMenu.waitFor({state: "visible"});
    await expect(productsMenu).toBeVisible();
    await productsMenuLink.waitFor({state: "visible"});
    await expect(productsMenuLink).toBeVisible();

    const productsMenuLinkText = await productsMenuLink.textContent();

    if (language === Language.PL) {
        expect(productsMenuLinkText).toBe("Produkty");
    } else {
        expect(productsMenuLinkText).toBe("Products");
    }

    return productsMenu;
}

export async function navigateToWaterAndSewageProductsMenuLinkOnDesktop(page: Page, language: Language = Language.ENG): Promise<Locator> {
    await navigateProductsMenuOnDesktop(page, language);
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
}

export async function navigateToCameraProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateProductsMenuOnDesktop(page, language);
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);
    await waterAndSewageLink.hover();

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
}

export async function navigateToPressureVehicleProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateProductsMenuOnDesktop(page, language);
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);
    await waterAndSewageLink.hover();

    const pressureVehiclesLink = page.getByTestId("pressure-vehicles-dropdown-submenu-link").first();
    await pressureVehiclesLink.hover();
    await expect(pressureVehiclesLink).toBeVisible();
    const pressureVehiclesLinkText = await pressureVehiclesLink.textContent();

    if (language === Language.PL) {
        expect(pressureVehiclesLinkText).toBe("Samochody ciśnieniowe");
    } else {
        expect(pressureVehiclesLinkText).toBe("Pressure Vehicles");
    }

    await pressureVehiclesLink.click();
}

export async function navigateToMillingRobotsProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateProductsMenuOnDesktop(page, language);
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);
    await waterAndSewageLink.hover();

    const millingRobotsLink = page.getByTestId("milling-robots-dropdown-submenu-link").first();
    await millingRobotsLink.hover();
    await expect(millingRobotsLink).toBeVisible();
    const millingRobotsLinkText = await millingRobotsLink.textContent();

    if (language === Language.PL) {
        expect(millingRobotsLinkText).toBe("Roboty frezujące");
    } else {
        expect(millingRobotsLinkText).toBe("Milling Robots");
    }

    await millingRobotsLink.click();
}

export async function navigateToAccessoriesProductsPageOnDesktop(page: Page, language: Language = Language.ENG): Promise<void> {
    await navigateProductsMenuOnDesktop(page, language);
    const waterAndSewageLink = await navigateToWaterAndSewageProductsMenuLinkOnDesktop(page, language);
    await waterAndSewageLink.hover();

    const accessoriesLink = page.getByTestId("accessories-dropdown-submenu-link").first();
    await accessoriesLink.hover();
    await expect(accessoriesLink).toBeVisible();
    const accessoriesLinkText = await accessoriesLink.textContent();

    if (language === Language.PL) {
        expect(accessoriesLinkText).toBe("Akcesoria");
    } else {
        expect(accessoriesLinkText).toBe("Accessories");
    }

    await accessoriesLink.click();
}