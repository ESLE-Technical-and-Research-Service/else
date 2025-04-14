import {expect, Page, test} from "@playwright/test";
import {openMainPageOnTabletAndCloseConsentPopup} from "./utils/openMainPageOnTablet";
import {waterSewageSubmenuItems} from "../../components/src/header/navigation/config/water-sewage-submenu-items";
import {DropDownItem} from "../../components/src/header/navigation/render-dropdown-items";
import {maritimeItems} from "../../components/src/header/navigation/config/maritime-items";

test.describe("main header suite", () => {
    test.describe("tablet version", () => {
        let tabletPage: Page;

        test.beforeEach(async ({browser}) => {
            tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser);
        });

        test("should render main header", async () => {
            const mainHeader = tabletPage.getByTestId('main-header');
            await expect(mainHeader).toBeVisible();
        });

        test.describe("logo", () => {
            test("should render main header logo", async () => {
                const logo = tabletPage.getByTestId("else-logo");
                await expect(logo).toBeVisible();
                await expect(logo).toHaveJSProperty("alt", "Logo ELSE");
            });

            test("should redirect to main page after clicking logo", async () => {
                const logo = tabletPage.getByTestId("else-logo");
                await expect(logo).toBeVisible();
                await logo.click();
                await expect(logo).toBeVisible();

                await expect(tabletPage).toHaveURL("/");
            });
        });

        test.describe("language switch", () => {
            test("should render language switches", async () => {
                const mainHeaderContentContainer = tabletPage.getByTestId('main-header-content');
                await expect(mainHeaderContentContainer).toBeVisible();

                const langSwitchContainer = tabletPage.locator('[data-testid="lang-switch-container"]').first();
                await expect(langSwitchContainer).toBeVisible();

                const englishSwitch = tabletPage.locator('[data-testid="en-lang-switch"]').first();
                await expect(englishSwitch).toBeVisible();
                await expect(englishSwitch).toHaveText(/ENG/);

                const polishSwitch = tabletPage.locator('[data-testid="pl-lang-switch"]').first();
                await expect(polishSwitch).toBeVisible();
                await expect(polishSwitch).toHaveText(/PLN/);
            });
        });

        test.describe("tablet navigation", () => {
            test("should render main navigation", async () => {
                const navigationContainer = tabletPage.locator('[data-testid="main-nav-container"]').first();
                await expect(navigationContainer).toBeVisible();
            });

            test("should render all navigation elements in english", async () => {
                const productsMenu = tabletPage.locator('[data-testid="products-menu"]').first();
                const aboutUsMenu = tabletPage.locator('[data-testid="about-us-menu"]').first();
                const servicesMenu = tabletPage.locator('[data-testid="services-menu"]').first();
                const service24by7Menu = tabletPage.locator('[data-testid="service-24by7-menu"]').first();
                const contactMenu = tabletPage.locator('[data-testid="contact-menu"]').first();

                await expect(productsMenu).toBeVisible();
                await expect(aboutUsMenu).toBeVisible();
                await expect(servicesMenu).toBeVisible();
                await expect(service24by7Menu).toBeVisible();
                await expect(contactMenu).toBeVisible();

                const productsMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"] [data-testid="products-menu-link"]')
                    .first();
                expect(productsMenuLink).toBeVisible();
                expect(productsMenuLink).toHaveText('Products');

                const aboutUsMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"] [data-testid="about-us-menu-link"]')
                    .first();
                expect(aboutUsMenuLink).toBeVisible();
                expect(aboutUsMenuLink).toHaveText('About Us');

                const servicesMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"] [data-testid="services-menu-link"]')
                    .first();
                expect(servicesMenuLink).toBeVisible();
                expect(servicesMenuLink).toHaveText('Services');

                const service24by7MenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]')
                    .first();
                expect(service24by7MenuLink).toBeVisible();
                expect(service24by7MenuLink).toHaveText('Service 24/7');

                const contactMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]')
                    .first();
                expect(contactMenuLink).toBeVisible();
                expect(contactMenuLink).toHaveText('Contact');
            });

            test("should render all navigation elements in polish", async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");

                const productsMenu = tabletPage.locator('[data-testid="products-menu"]').first();
                const aboutUsMenu = tabletPage.locator('[data-testid="about-us-menu"]').first();
                const servicesMenu = tabletPage.locator('[data-testid="services-menu"]').first();
                const service24by7Menu = tabletPage.locator('[data-testid="service-24by7-menu"]').first();
                const contactMenu = tabletPage.locator('[data-testid="contact-menu"]').first();

                await expect(productsMenu).toBeVisible();
                await expect(aboutUsMenu).toBeVisible();
                await expect(servicesMenu).toBeVisible();
                await expect(service24by7Menu).toBeVisible();
                await expect(contactMenu).toBeVisible();

                const productsMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"] [data-testid="products-menu-link"]')
                    .first();
                expect(productsMenuLink).toBeVisible();
                expect(productsMenuLink).toHaveText('Produkty');

                const aboutUsMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"] [data-testid="about-us-menu-link"]')
                    .first();
                expect(aboutUsMenuLink).toBeVisible();
                expect(aboutUsMenuLink).toHaveText('O nas');

                const servicesMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"] [data-testid="services-menu-link"]')
                    .first();
                expect(servicesMenuLink).toBeVisible();
                expect(servicesMenuLink).toHaveText('Serwisy');

                const service24by7MenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]')
                    .first();
                expect(service24by7MenuLink).toBeVisible();
                expect(service24by7MenuLink).toHaveText('Serwis 24/7');

                const contactMenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]')
                    .first();
                expect(contactMenuLink).toBeVisible();
                expect(contactMenuLink).toHaveText('Kontakt');
            });

            test("should display products menu items on click in english", async () => {
                const productsMenu = tabletPage.locator('[data-testid="products-menu"]').first();
                await expect(productsMenu).toBeVisible();
                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await expect(productsMenuLink).toBeVisible();
                await productsMenuLink.click();

                const dropdownMenu = tabletPage.locator('[data-testid="products-tablet-dropdown-menu"]').first();
                await expect(dropdownMenu).toBeVisible({timeout: 2000});

                const waterAndSewageSubmenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-tablet-dropdown-menu"] [data-testid="products-water-sewage-submenu-link"]');
                await expect(waterAndSewageSubmenuLink).toBeVisible();
                await expect(waterAndSewageSubmenuLink).toHaveText('Water and Sewage Department');

                const maritimeSubmenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-tablet-dropdown-menu"] [data-testid="products-maritime-submenu-link"]');
                await expect(maritimeSubmenuLink).toBeVisible();
                await expect(maritimeSubmenuLink).toHaveText('Maritime Department');
            });

            test("should display products menu items on click in polish", async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");

                const productsMenu = tabletPage.locator('[data-testid="products-menu"]').first();
                await expect(productsMenu).toBeVisible();
                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await expect(productsMenuLink).toBeVisible();
                await productsMenuLink.click();

                const dropdownMenu = tabletPage.locator('[data-testid="products-tablet-dropdown-menu"]').first();
                await expect(dropdownMenu).toBeVisible({timeout: 2000});

                const waterAndSewageSubmenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-tablet-dropdown-menu"] [data-testid="products-water-sewage-submenu-link"]');
                await expect(waterAndSewageSubmenuLink).toBeVisible();
                await expect(waterAndSewageSubmenuLink).toHaveText('Dział WOD-KAN');

                const maritimeSubmenuLink = tabletPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-tablet-dropdown-menu"] [data-testid="products-maritime-submenu-link"]');
                await expect(maritimeSubmenuLink).toBeVisible();
                await expect(maritimeSubmenuLink).toHaveText('Dział Morski');
            });

            test("should display water and sewage submenu items on click in english", async () => {
                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await productsMenuLink.click();

                const waterAndSewageSubmenuLink = tabletPage.locator(
                    '[data-testid="products-water-sewage-submenu-link"]'
                );
                await expect(waterAndSewageSubmenuLink).toBeVisible();
                await waterAndSewageSubmenuLink.click();

                const waterAndSewageSubmenuItems = tabletPage.locator(
                    '[data-testid="water-sewage-submenu-tablet-items"]'
                );
                await expect(waterAndSewageSubmenuItems).toBeVisible();

                const submenuItemsContainer = tabletPage
                    .locator('[data-testid="water-sewage-submenu-tablet-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display water and sewage submenu items on click in polish", async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");

                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await productsMenuLink.click();

                const waterAndSewageSubmenuLink = tabletPage.locator(
                    '[data-testid="products-water-sewage-submenu-link"]'
                );
                await expect(waterAndSewageSubmenuLink).toBeVisible();
                await waterAndSewageSubmenuLink.click();

                const waterAndSewageSubmenuItems = tabletPage.locator(
                    '[data-testid="water-sewage-submenu-tablet-items"]'
                );
                await expect(waterAndSewageSubmenuItems).toBeVisible();

                const submenuItemsContainer = tabletPage
                    .locator('[data-testid="water-sewage-submenu-tablet-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items on click english", async () => {
                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await productsMenuLink.click();

                const maritimeSubmenuLink = tabletPage.locator(
                    '[data-testid="products-maritime-submenu-link"]'
                );
                await expect(maritimeSubmenuLink).toBeVisible();
                await maritimeSubmenuLink.click();

                const maritimeSubmenuItems = tabletPage.locator(
                    '[data-testid="maritime-submenu-tablet-items"]'
                );
                await expect(maritimeSubmenuItems).toBeVisible();

                const submenuItemsContainer = tabletPage
                    .locator('[data-testid="maritime-submenu-tablet-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display maritime submenu items on click polish", async ({ browser }) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");

                const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
                await productsMenuLink.click();

                const maritimeSubmenuLink = tabletPage.locator(
                    '[data-testid="products-maritime-submenu-link"]'
                );
                await expect(maritimeSubmenuLink).toBeVisible();
                await maritimeSubmenuLink.click();

                const maritimeSubmenuItems = tabletPage.locator(
                    '[data-testid="maritime-submenu-tablet-items"]'
                );
                await expect(maritimeSubmenuItems).toBeVisible();

                const submenuItemsContainer = tabletPage
                    .locator('[data-testid="maritime-submenu-tablet-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedSubmenuItems = maritimeItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedSubmenuItems);
            });

            test("should display about us menu items on click", async () => {
                const aboutUsMenu = tabletPage.locator('[data-testid="about-us-menu"]').first();
                await expect(aboutUsMenu).toBeVisible();
                const aboutUsMenuLink = tabletPage.locator('[data-testid="about-us-menu-link"]').first();
                await expect(aboutUsMenuLink).toBeVisible();
                await aboutUsMenuLink.click();

                const aboutUsItems = tabletPage.locator('[data-testid="about-us-tablet-items"]').first();
                await expect(aboutUsItems).toBeVisible({timeout: 2000});
            });

            test("should display services menu items on click", async () => {
                const servicesMenu = tabletPage.locator('[data-testid="services-menu"]').first();
                await expect(servicesMenu).toBeVisible();
                const servicesMenuLink = tabletPage.locator('[data-testid="services-menu-link"]').first();
                await expect(servicesMenuLink).toBeVisible();
                await servicesMenuLink.click();

                const servicesItems = tabletPage.locator('[data-testid="services-tablet-items"]').first();
                await expect(servicesItems).toBeVisible({timeout: 2000});
            });
        });
    });
});