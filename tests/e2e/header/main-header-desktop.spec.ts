import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../utils/openMainPageOnDesktop";
import {waterSewageSubmenuItems} from "../../../components/src/header/navigation/config/water-sewage-submenu-items";
import {DropDownItem} from "../../../components/src/header/navigation/render-dropdown-items";
import {maritimeItems} from "../../../components/src/header/navigation/config/maritime-items";

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

                const polishSwitch = desktopPage.locator('[data-testid="pl-lang-switch"]').first();
                await expect(polishSwitch).toBeVisible();
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
                await expect(waterAndSewageItem).toHaveText("Water and Sewage Department");
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
                
                // Wait for the CSS transition to complete
                await desktopPage.waitForTimeout(300);
                
                const dropdownMenu = desktopPage.locator('[data-testid="products-desktop-dropdown-menu"]').first();
                await expect(dropdownMenu).toBeVisible({timeout: 2000});

                const waterAndSewageItem = desktopPage.locator('[data-testid="products-desktop-water-sewage-submenu-link"]').first();
                await expect(waterAndSewageItem).toHaveText("Dział WOD-KAN");
                await waterAndSewageItem.hover();

                // Wait for submenu transition
                await desktopPage.waitForTimeout(300);
                
                const waterSewageSubmenu = desktopPage.locator('[data-testid="water-sewage-submenu-desktop-items"]');
                await expect(waterSewageSubmenu).toBeVisible({timeout: 2000});

                const maritimeItem = desktopPage.locator('[data-testid="products-desktop-maritime-submenu-link"]').first();
                await expect(maritimeItem).toHaveText("Dział Morski");
                await maritimeItem.hover();

                // Wait for submenu transition
                await desktopPage.waitForTimeout(300);
                
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

                const expectedItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelENG);

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

                const expectedItems = waterSewageSubmenuItems.map((item: DropDownItem) => item.labelPL);

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
                // Wait for the transition to complete
                await desktopPage.waitForTimeout(300);
                await expect(servicesItems).toBeVisible({timeout: 2000});
            });
        });
    });
});