import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "./utils/openMainPageOnDesktop";
import {openMainPageOnTabletAndCloseConsentPopup} from "./utils/openMainPageOnTablet";

test.describe("main header suite", () => {

   test.describe("desktop version", () => {
      let desktopPage: Page;

      test.beforeEach(async ({ browser})=> {
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

         test("should render all navigation elements", async () => {
            const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
            const aboutUsMenu = desktopPage.locator('[data-testid="about-us-menu"]').first();
            const servicesMenu = desktopPage.locator('[data-testid="services-menu"]').first();
            const service24by7Menu = desktopPage.locator('[data-testid="service-24by7-menu"]').first();
            const contactMenu = desktopPage.locator('[data-testid="contact-menu"]').first();

            await expect(productsMenu).toBeVisible();
            await expect(aboutUsMenu).toBeVisible();
            await expect(servicesMenu).toBeVisible();
            await expect(service24by7Menu).toBeVisible();
            await expect(contactMenu).toBeVisible();
         });

         test("should display products menu items on hover", async () => {
            const productsMenu = desktopPage.locator('[data-testid="products-menu"]').first();
            await productsMenu.hover();

            const dropdownMenu = desktopPage.locator('[data-testid="products-desktop-dropdown-menu"]').first();
            await expect(dropdownMenu).toBeVisible({ timeout: 2000 });

            const waterAndSewageItem = desktopPage.getByText("Water-Sewage Department").first();
            await waterAndSewageItem.hover();

            const waterSewageSubmenu = desktopPage.locator('[data-testid="water-sewage-submenu"]');
            await expect(waterSewageSubmenu).toBeVisible({ timeout: 2000 });

            const maritimeItem = desktopPage.getByText("Maritime Department").first();
            await maritimeItem.hover();

            const maritimeSubmenu = desktopPage.locator('[data-testid="maritime-submenu"]');
            await expect(maritimeSubmenu).toBeVisible({ timeout: 2000 });
         });

         test("should display about us menu items on hover", async () => {
            const aboutUsMenu = desktopPage.locator('[data-testid="about-us-menu"]').first();
            await aboutUsMenu.hover();

            const aboutUsItems = desktopPage.locator('[data-testid="about-us-items"]').first();
            await aboutUsItems.hover();
            expect(aboutUsItems).toBeVisible({ timeout: 2000 });
         });

         test("should display services menu items on hover", async () => {
            const servicesMenu = desktopPage.locator('[data-testid="services-menu"]').first();
            await servicesMenu.hover();

            const servicesItems = desktopPage.locator('[data-testid="services-menu-items"]').first();
            await servicesItems.hover();
            expect(servicesItems).toBeVisible({ timeout: 2000 });
         });
      });
   });

   test.describe("tablet version", () => {
      let tabletPage: Page;

      test.beforeEach(async ({ browser }) => {
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
      })

      test.describe("tablet navigation", () => {
         test("should render main navigation", async () => {
            const navigationContainer = tabletPage.locator('[data-testid="main-nav-container"]').first();
            await expect(navigationContainer).toBeVisible();
         });

         test("should render all navigation elements", async () => {
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
         });

         test("should display products menu items on click", async () => {
            const productsMenu = tabletPage.locator('[data-testid="products-menu"]').first();
            await expect(productsMenu).toBeVisible();
            const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
            await expect(productsMenuLink).toBeVisible();
            await productsMenuLink.click();

            const dropdownMenu = tabletPage.locator('[data-testid="products-tablet-dropdown-menu"]').first();
            await expect(dropdownMenu).toBeVisible({ timeout: 2000 });
         });

         test("should display water and sewage submenu items on click", async () => {
            const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
            await productsMenuLink.click();

            const waterAndSewageSubmenuLink = tabletPage.locator(
                '[data-testid="products-water-sewage-submenu-link"]'
            );
            await expect(waterAndSewageSubmenuLink).toBeVisible();
            await waterAndSewageSubmenuLink.click();

            const waterAndSewageSubmenuItems = tabletPage.locator(
                '[data-testid="water-sewage-submenu-items"]'
            );
            await expect(waterAndSewageSubmenuItems).toBeVisible();
         });

         test("should display maritime submenu items on click", async () => {
            const productsMenuLink = tabletPage.locator('[data-testid="products-menu-link"]').first();
            await productsMenuLink.click();

            const maritimeSubmenuLink = tabletPage.locator(
                '[data-testid="products-maritime-submenu-link"]'
            );
            await expect(maritimeSubmenuLink).toBeVisible();
            await maritimeSubmenuLink.click();

            const maritimeSubmenuItems = tabletPage.locator(
                '[data-testid="maritime-submenu-items"]'
            );
            await expect(maritimeSubmenuItems).toBeVisible();
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
            await expect(servicesItems).toBeVisible({ timeout: 2000 });
         });
      });
   })
});