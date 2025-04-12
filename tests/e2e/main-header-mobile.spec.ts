import {expect, Page, test} from "@playwright/test";
import {openMainPageOnMobileAndCloseConsentPopup} from "./utils/openMainPageOnMobile";
import {waterSewageItems} from "../../components/src/header/navigation/dropdownItems/water-sewage-items";
import {DropDownItem} from "../../components/src/header/navigation/render-dropdown-items";
import {maritimeItems} from "../../components/src/header/navigation/dropdownItems/maritime-items";

test.describe("main header suite", () => {
    test.describe("mobile version", () => {
        let mobilePage: Page;

        test.beforeEach(async ({browser}) => {
            mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
        });

        test("should render main header", async () => {
            const mainHeader = mobilePage.getByTestId('main-header');
            await expect(mainHeader).toBeVisible();
        });

        test.describe("burger menu", async () => {
            test("should render burger menu button", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await expect(burgerMenuButton).toBeVisible();
            });

            test("should display menu items in english after clicking burger menu button", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const mainNavigation = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="main-nav-container"]');
                await expect(mainNavigation).toBeVisible();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await expect(productsMenu).toBeVisible({timeout: 2000});
                await expect(productsMenu).toHaveText("Products");

                const aboutUsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="about-us-menu"]');
                await expect(aboutUsMenu).toBeVisible({timeout: 2000});
                await expect(aboutUsMenu).toHaveText("About Us");

                const servicesMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="services-menu"]');
                await expect(servicesMenu).toBeVisible({timeout: 2000});
                await expect(servicesMenu).toHaveText("Services");

                const service24by7Menu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="service-24by7-menu"]');
                await expect(service24by7Menu).toBeVisible({timeout: 2000});
                await expect(service24by7Menu).toHaveText("Service 24/7");

                const contactMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="contact-menu"]');
                await expect(contactMenu).toBeVisible({timeout: 2000});
                await expect(contactMenu).toHaveText("Contact");
            });

            test("should display menu items in polish after clicking burger menu button", async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");

                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const mainNavigation = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="main-nav-container"]');
                await expect(mainNavigation).toBeVisible();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await expect(productsMenu).toBeVisible({timeout: 2000});
                await expect(productsMenu).toHaveText("Produkty");

                const aboutUsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="about-us-menu"]');
                await expect(aboutUsMenu).toBeVisible({timeout: 2000});
                await expect(aboutUsMenu).toHaveText("O nas");

                const servicesMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="services-menu"]');
                await expect(servicesMenu).toBeVisible({timeout: 2000});
                await expect(servicesMenu).toHaveText("Serwisy");

                const service24by7Menu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="service-24by7-menu"]');
                await expect(service24by7Menu).toBeVisible({timeout: 2000});
                await expect(service24by7Menu).toHaveText("Serwis 24/7");

                const contactMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="contact-menu"]');
                await expect(contactMenu).toBeVisible({timeout: 2000});
                await expect(contactMenu).toHaveText("Kontakt");
            });

            test("should display submenu for products after clicking products menu item", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const productsMobileMenu = mobilePage.locator('[data-testid="products-mobile-menu"]');
                await expect(productsMobileMenu).toBeVisible({timeout: 2000});

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-mairtime-mobile-submenu-link"]'
                );
                await expect(maritimeMobileSubmenuLink).toBeVisible({timeout: 2000});

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await expect(waterAndSewageMobileSubmenuLink).toBeVisible({timeout: 2000});
            });

            test("should display water and sewage submenu items for products menu item in english", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await waterAndSewageMobileSubmenuLink.click();

                const waterAndSewageMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]'
                );
                await expect(waterAndSewageMobileSubmenuItems).toBeVisible({timeout: 2000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]');
                await expect(submenuItemsContainer).toBeVisible({timeout: 2000});

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display water and sewage submenu items for products menu item in polish", async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const waterAndSewageMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-water-sewage-mobile-submenu-link"]'
                );
                await waterAndSewageMobileSubmenuLink.click();

                const waterAndSewageMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]'
                );
                await expect(waterAndSewageMobileSubmenuItems).toBeVisible({timeout: 2000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="water-sewage-mobile-submenu-items"]');
                await expect(submenuItemsContainer).toBeVisible({timeout: 2000});

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items for products menu item in english", async () => {
                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-mairtime-mobile-submenu-link"]'
                );
                await maritimeMobileSubmenuLink.click();

                const maritimeMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]'
                );
                await expect(maritimeMobileSubmenuItems).toBeVisible({timeout: 2000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]');

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items for products menu item in polish", async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");

                const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                await burgerMenuButton.click();

                const productsMenu = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="products-menu"]');
                await productsMenu.click();

                const maritimeMobileSubmenuLink = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="products-mairtime-mobile-submenu-link"]'
                );
                await maritimeMobileSubmenuLink.click();

                const maritimeMobileSubmenuItems = mobilePage.locator(
                    '[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]'
                );
                await expect(maritimeMobileSubmenuItems).toBeVisible({timeout: 2000});

                const submenuItemsContainer = mobilePage
                    .locator('[data-testid="burger-menu-slide-in"] [data-testid="maritime-mobile-submenu-items"]');

                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test.describe("language switch", () => {
                test("should display language switch", async () => {
                    const burgerMenuButton = mobilePage.locator('[data-testid="burger-menu-button"]');
                    await burgerMenuButton.click();

                    const languageSwitchContainer = mobilePage
                        .locator('[data-testid="burger-menu-slide-in"] [data-testid="lang-switch-container"]');
                    await expect(languageSwitchContainer).toBeVisible({timeout: 2000});

                    const englishSwitchButton = mobilePage
                        .locator('[data-testid="burger-menu-slide-in"] [data-testid="en-lang-switch"]');
                    await expect(englishSwitchButton).toBeVisible({timeout: 2000});

                    const polishSwitchButton = mobilePage
                        .locator('[data-testid="burger-menu-slide-in"] [data-testid="pl-lang-switch"]');
                    await expect(polishSwitchButton).toBeVisible({timeout: 2000});
                });
            });
        });
    });
});