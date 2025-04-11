import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "./utils/openMainPageOnDesktop";
import {openMainPageOnTabletAndCloseConsentPopup} from "./utils/openMainPageOnTablet";
import {openMainPageOnMobileAndCloseConsentPopup} from "./utils/openMainPageOnMobile";
import {waterSewageItems} from "../../components/src/header/navigation/dropdownItems/water-sewage-items";
import {DropDownItem} from "../../components/src/header/navigation/render-dropdown-items";
import {maritimeItems} from "../../components/src/header/navigation/dropdownItems/maritime-items";

test.describe("main header suite", () => {

    test.describe("desktop version", () => {
        let desktopPage: Page;

        test.beforeEach(async ({browser}) => {
            desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
        });

        test("should render main header", async () => {
            const mainHeader = desktopPage.getByTestId('main-header');
            await expect(mainHeader).toBeVisible();
        });

        test.describe("logo", () => {
            test("should render main header logo", async () => {
                const logo = desktopPage.getByTestId("else-logo");
                await expect(logo).toBeVisible();
                await expect(logo).toHaveJSProperty("alt", "Logo ELSE");
            });

            test("should redirect to main page after clicking logo", async () => {
                const logo = desktopPage.getByTestId("else-logo");
                await expect(logo).toBeVisible();
                await logo.click();
                await expect(logo).toBeVisible();

                await expect(desktopPage).toHaveURL("/");
            });
        });

        test.describe("language switch", () => {
            test("should render language switches", async () => {
                const mainHeaderContentContainer = desktopPage.getByTestId('main-header-content');
                await expect(mainHeaderContentContainer).toBeVisible();

                const langSwitchContainer = desktopPage.locator('[data-testid="lang-switch-container"]').first();
                await expect(langSwitchContainer).toBeVisible();

                const englishSwitch = desktopPage.locator('[data-testid="en-lang-switch"]').first();
                await expect(englishSwitch).toBeVisible();
                await expect(englishSwitch).toHaveText(/ENG/);

                const polishSwitch = desktopPage.locator('[data-testid="pl-lang-switch"]').first();
                await expect(polishSwitch).toBeVisible();
                await expect(polishSwitch).toHaveText(/PLN/);
            });
        })

        test.describe("navigation", () => {
            test("should render main navigation", async () => {
                const navigationContainer = desktopPage.locator('[data-testid="main-nav-container"]').first();
                await expect(navigationContainer).toBeVisible();
            });

            test("should render all navigation elements in english", async () => {
                const productsMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"]').first();
                const aboutUsMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"]').first();
                const servicesMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"]').first();
                const service24by7Menu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]').first();
                const contactMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]').first();

                await expect(productsMenu).toBeVisible();
                await expect(aboutUsMenu).toBeVisible();
                await expect(servicesMenu).toBeVisible();
                await expect(service24by7Menu).toBeVisible();
                await expect(contactMenu).toBeVisible();

                const productsMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"] [data-testid="products-menu-link"]')
                    .first();
                expect(productsMenuLink).toBeVisible();
                expect(productsMenuLink).toHaveText('Products');

                const aboutUsMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"] [data-testid="about-us-menu-link"]')
                    .first();
                expect(aboutUsMenuLink).toBeVisible();
                expect(aboutUsMenuLink).toHaveText('About Us');

                const servicesMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"] [data-testid="services-menu-link"]')
                    .first();
                expect(servicesMenuLink).toBeVisible();
                expect(servicesMenuLink).toHaveText('Services');

                const service24by7MenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]')
                    .first();
                expect(service24by7MenuLink).toBeVisible();
                expect(service24by7MenuLink).toHaveText('Service 24/7');

                const contactMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]')
                    .first();
                expect(contactMenuLink).toBeVisible();
                expect(contactMenuLink).toHaveText('Contact');
            });

            test("should render all navigation elements in polish", async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                const productsMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"]').first();
                const aboutUsMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"]').first();
                const servicesMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"]').first();
                const service24by7Menu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]').first();
                const contactMenu = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]').first();

                await expect(productsMenu).toBeVisible();
                await expect(aboutUsMenu).toBeVisible();
                await expect(servicesMenu).toBeVisible();
                await expect(service24by7Menu).toBeVisible();
                await expect(contactMenu).toBeVisible();

                const productsMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="products-menu"] [data-testid="products-menu-link"]')
                    .first();
                expect(productsMenuLink).toBeVisible();
                expect(productsMenuLink).toHaveText('Produkty');

                const aboutUsMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="about-us-menu"] [data-testid="about-us-menu-link"]')
                    .first();
                expect(aboutUsMenuLink).toBeVisible();
                expect(aboutUsMenuLink).toHaveText('O nas');

                const servicesMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="services-menu"] [data-testid="services-menu-link"]')
                    .first();
                expect(servicesMenuLink).toBeVisible();
                expect(servicesMenuLink).toHaveText('Serwisy');

                const service24by7MenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="service-24by7-menu"]')
                    .first();
                expect(service24by7MenuLink).toBeVisible();
                expect(service24by7MenuLink).toHaveText('Serwis 24/7');

                const contactMenuLink = desktopPage
                    .locator('[data-testid="main-nav-container"] [data-testid="contact-menu"]')
                    .first();
                expect(contactMenuLink).toBeVisible();
                expect(contactMenuLink).toHaveText('Kontakt');
            });

            test("should display products menu items on hover in english", async () => {
                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const dropdownMenu = desktopPage.locator('[data-testid="products-desktop-dropdown-menu"]').first();
                await expect(dropdownMenu).toBeVisible({timeout: 2000});

                const waterAndSewageItem = desktopPage.locator('[data-testid="products-desktop-water-sewage-submenu-link"]').first();
                await expect(waterAndSewageItem).toHaveText("Water-Sewage Department");
                await waterAndSewageItem.hover();

                const waterSewageSubmenu = desktopPage.locator('[data-testid="water-sewage-submenu-desktop-items"]');
                await expect(waterSewageSubmenu).toBeVisible({timeout: 2000});

                const maritimeItem = desktopPage.locator('[data-testid="products-desktop-maritime-submenu-link"]').first();
                await expect(maritimeItem).toHaveText("Maritime Department");
                await maritimeItem.hover();

                const maritimeSubmenu = desktopPage.locator('[data-testid="maritime-submenu-desktop-items"]');
                await expect(maritimeSubmenu).toBeVisible({timeout: 2000});
            });

            test("should display products menu items on hover in polish", async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const dropdownMenu = desktopPage.locator('[data-testid="products-desktop-dropdown-menu"]').first();
                await expect(dropdownMenu).toBeVisible({timeout: 2000});

                const waterAndSewageItem = desktopPage.locator('[data-testid="products-desktop-water-sewage-submenu-link"]').first();
                await expect(waterAndSewageItem).toHaveText("Dział WOD-KAN");
                await waterAndSewageItem.hover();

                const waterSewageSubmenu = desktopPage.locator('[data-testid="water-sewage-submenu-desktop-items"]');
                await expect(waterSewageSubmenu).toBeVisible({timeout: 2000});

                const maritimeItem = desktopPage.locator('[data-testid="products-desktop-maritime-submenu-link"]').first();
                await expect(maritimeItem).toHaveText("Dział Morski");
                await maritimeItem.hover();

                const maritimeSubmenu = desktopPage.locator('[data-testid="maritime-submenu-desktop-items"]');
                await expect(maritimeSubmenu).toBeVisible({timeout: 2000});
            });

            test("should display products water and sewage submenu items in english", async () => {
                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const waterAndeSewageLink = desktopPage
                    .locator('[data-testid="products-desktop-water-sewage-submenu-link"]')
                    .first();
                await waterAndeSewageLink.hover();

                const submenuItemsContainer = desktopPage
                    .locator('[data-testid="water-sewage-submenu-desktop-items"]')
                .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedItems = waterSewageItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedItems);
            });

            test("should display products water and sewage submenu items in polish", async ({ browser }) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");

                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const waterAndeSewageLink = desktopPage
                    .locator('[data-testid="products-desktop-water-sewage-submenu-link"]')
                    .first();
                await waterAndeSewageLink.hover();

                const submenuItemsContainer = desktopPage
                    .locator('[data-testid="water-sewage-submenu-desktop-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedItems = waterSewageItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedItems);
            });

            test("should display products maritime submenu items in english", async () => {
                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const maritimeSubmenuLink = desktopPage
                    .locator('[data-testid="products-desktop-maritime-submenu-link"]')
                    .first();
                await maritimeSubmenuLink.hover();

                const submenuItemsContainer = desktopPage
                    .locator('[data-testid="maritime-submenu-desktop-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedItems = maritimeItems.map((item: DropDownItem) => item.labelENG);

                expect(submenuItems).toEqual(expectedItems);
            });

            test("should display products maritime submenu items in polis", async ({ browser }) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");

                const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
                await productsMenu.hover();

                const maritimeSubmenuLink = desktopPage
                    .locator('[data-testid="products-desktop-maritime-submenu-link"]')
                    .first();
                await maritimeSubmenuLink.hover();

                const submenuItemsContainer = desktopPage
                    .locator('[data-testid="maritime-submenu-desktop-items"]')
                    .first();
                const submenuLinks = submenuItemsContainer.locator('li a');
                const submenuItems = await submenuLinks.allTextContents();

                const expectedItems = maritimeItems.map((item: DropDownItem) => item.labelPL);

                expect(submenuItems).toEqual(expectedItems);
            });

            test("should display about us menu items on hover", async () => {
                const aboutUsMenu = desktopPage.locator('[data-testid="about-us-menu"]').first();
                await aboutUsMenu.hover();

                const aboutUsItems = desktopPage.locator('[data-testid="about-us-items"]').first();
                await aboutUsItems.hover();
                expect(aboutUsItems).toBeVisible({timeout: 2000});
            });

            test("should display services menu items on hover", async () => {
                const servicesMenu = desktopPage.locator('[data-testid="services-menu"]').first();
                await servicesMenu.hover();

                const servicesItems = desktopPage.locator('[data-testid="services-menu-items"]').first();
                await servicesItems.hover();
                expect(servicesItems).toBeVisible({timeout: 2000});
            });
        });
    });

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
                await expect(waterAndSewageSubmenuLink).toHaveText('Water-Sewage Department');

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

                const expectedSubmenuItems = waterSewageItems.map((item: DropDownItem) => item.labelENG);

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

                const expectedSubmenuItems = waterSewageItems.map((item: DropDownItem) => item.labelPL);

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