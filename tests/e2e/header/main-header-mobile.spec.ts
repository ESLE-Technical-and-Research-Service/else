import {expect, Page, test} from "@playwright/test";
import {openMainPageOnMobileAndCloseConsentPopup} from "../utils/openMainPageOnMobile";
import {waterSewageSubmenuItems} from "../../../components/src/header/navigation/config/water-sewage-submenu-items";
import type {DropDownItem} from "../../../components/src/header/navigation/render-dropdown-items";
import {maritimeItems} from "../../../components/src/header/navigation/config/maritime-items";

test.describe("main header suite", () => {
    test.describe("mobile version", () => {
        test.describe("common elements", () => {
            let mobilePage: Page;

            test.beforeEach(async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
            });

            test("should render main header", async () => {
                const mainHeader = mobilePage.getByTestId('main-header');
                await expect(mainHeader).toBeVisible({ timeout: 3000 });
            });

            test("should render burger menu button", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await expect(burgerMenuButton).toBeVisible({ timeout: 3000 });
            });

            test("should display language switch", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const languageSwitchContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="lang-switch-container"]');
                await expect(languageSwitchContainer).toBeVisible({timeout: 3000});

                const englishSwitchButton = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="en-lang-switch"]');
                await expect(englishSwitchButton).toBeVisible({timeout: 3000});

                const polishSwitchButton = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="pl-lang-switch"]');
                await expect(polishSwitchButton).toBeVisible({timeout: 3000});
            });

            test("should display submenu for products after clicking products menu item", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const productsMobileMenu = mobilePage.locator('[data-testid="products-mobile-menu-container"]');
                await expect(productsMobileMenu).toBeVisible({timeout: 3000});

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-maritime-mobile-submenu-link"]'
                );
                await expect(maritimeMobileSubmenuLink).toBeVisible({timeout: 3000});

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await expect(waterAndSewageMobileSubmenuLink).toBeVisible({timeout: 3000});
            });
        })

        test.describe("english version", () => {
            let mobilePage: Page;

            test.beforeEach(async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.waitFor({ state: "visible" });
                await burgerMenuButton.click();

            });

            test("should display menu items in english after clicking burger menu button", async () => {
                const mainNavigation = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="main-nav-container"]');
                await expect(mainNavigation).toBeVisible({ timeout: 3000});

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await expect(productsMenu).toBeVisible({ timeout: 3000 });
                await expect(productsMenu).toHaveText("Products");

                const aboutUsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="about-us-menu"]');
                await expect(aboutUsMenu).toBeVisible({ timeout: 3000 });
                await expect(aboutUsMenu).toHaveText("About Us");

                const servicesMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="services-menu"]');
                await expect(servicesMenu).toBeVisible({ timeout: 3000 });
                await expect(servicesMenu).toHaveText("Services");

                const service24by7Menu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="service-24by7-menu"]');
                await expect(service24by7Menu).toBeVisible({ timeout: 3000 });
                await expect(service24by7Menu).toHaveText("Service 24/7");

                const contactMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="contact-menu"]');
                await expect(contactMenu).toBeVisible({ timeout: 3000 });
                await expect(contactMenu).toHaveText("Contact");
            });

            test("should display water and sewage submenu items for products menu item in english", async () => {
                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await waterAndSewageMobileSubmenuLink.waitFor({ state: "visible" });
                await waterAndSewageMobileSubmenuLink.click();

                const waterAndSewageMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]'
                );
                await expect(waterAndSewageMobileSubmenuItems).toBeVisible({timeout: 3000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]');
                await expect(submenuItemsContainer).toBeVisible({timeout: 3000});

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items for products menu item in english", async () => {
                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.waitFor({ state: "visible" });
                await productsMenu.click();

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-maritime-mobile-submenu-link"]'
                );
                await maritimeMobileSubmenuLink.click();

                const maritimeMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]'
                );
                await expect(maritimeMobileSubmenuItems).toBeVisible({timeout: 3000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]');

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

        });

        test.describe("polish version", () => {
            let mobilePage: Page;

            test.beforeEach(async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");
                await mobilePage.waitForTimeout(3000);
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.waitFor({ state: "visible" });
                await burgerMenuButton.click();
            });

            test("should display menu items in polish after clicking burger menu button", async () => {
                const mainNavigation = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="main-nav-container"]');
                await expect(mainNavigation).toBeVisible();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await expect(productsMenu).toBeVisible({timeout: 3000});
                await expect(productsMenu).toHaveText("Produkty");

                const aboutUsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="about-us-menu"]');
                await expect(aboutUsMenu).toBeVisible({timeout: 3000});
                await expect(aboutUsMenu).toHaveText("O nas");

                const servicesMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="services-menu"]');
                await expect(servicesMenu).toBeVisible({timeout: 3000});
                await expect(servicesMenu).toHaveText("Serwisy");

                const service24by7Menu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="service-24by7-menu"]');
                await expect(service24by7Menu).toBeVisible({timeout: 3000});
                await expect(service24by7Menu).toHaveText("Serwis 24/7");

                const contactMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="contact-menu"]');
                await expect(contactMenu).toBeVisible({timeout: 3000});
                await expect(contactMenu).toHaveText("Kontakt");
            });

            test("should display water and sewage submenu items for products menu item in polish", async () => {
                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.waitFor({ state: "visible" });
                await expect(productsMenu).toBeVisible({timeout: 3000});
                await productsMenu.click();

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await waterAndSewageMobileSubmenuLink.waitFor({ state: "visible" });
                await expect(waterAndSewageMobileSubmenuLink).toBeVisible({timeout: 3000});
                await waterAndSewageMobileSubmenuLink.click();

                const waterAndSewageMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]'
                );
                await expect(waterAndSewageMobileSubmenuItems).toBeVisible({timeout: 3000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]');
                await expect(submenuItemsContainer).toBeVisible({timeout: 3000});

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items for products menu item in polish", async () => {
                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.waitFor({ state: "visible" });
                await productsMenu.click();

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-maritime-mobile-submenu-link"]'
                );
                await maritimeMobileSubmenuLink.waitFor({ state: "visible" });
                await maritimeMobileSubmenuLink.click();

                const maritimeMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]'
                );
                await expect(maritimeMobileSubmenuItems).toBeVisible({timeout: 3000});

                const submenuLinks = maritimeMobileSubmenuItems.locator('li a');
                await expect(submenuLinks).toHaveCount(maritimeItems.length, { timeout: 3000 });
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelPL);
                expect(submenuItems).toEqual(expectedSubmenuItems);
            });
        });
    });
});