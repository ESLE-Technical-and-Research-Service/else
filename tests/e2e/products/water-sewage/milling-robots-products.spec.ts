import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../../utils/openMainPageOnDesktop";
import {navigateToMillingRobotsProductsPageOnDesktop} from "../../utils/navigation/navigateProductsMenuOnDesktop";
import {Language} from "../../../../components/src/types";
import {openMainPageOnMobileAndCloseConsentPopup} from "../../utils/openMainPageOnMobile";
import {
    navigateToMillingRobotsProductsPageOnMobile,
    openMobileFiltersMenu
} from "../../utils/navigation/navigateProductsMenuOnMobile";
import {openMainPageOnTabletAndCloseConsentPopup} from "../../utils/openMainPageOnTablet";
import {navigateToMillingRobotsProductsPageOnTablet} from "../../utils/navigation/navigateProductsMenuOnTablet";

test.describe("milling robots products suite", () => {
    test.describe("desktop version", () => {
        let desktopPage: Page;

        test.beforeEach(async ({browser}) => {
            desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
            await navigateToMillingRobotsProductsPageOnDesktop(desktopPage);
            await desktopPage.waitForTimeout(3000);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsContainer = desktopPage.getByTestId("water-sewage-product-container-milling-robots").first();
                await productsContainer.waitFor({state: "visible"});
                await expect(productsContainer).toBeVisible({ timeout: 3000 });

                const millingRobotsProductsGridContainer = desktopPage.getByTestId("water-sewage-product-grid-container-milling-robots").first();
                await millingRobotsProductsGridContainer.waitFor({state: "visible"});
                await expect(millingRobotsProductsGridContainer).toBeVisible({ timeout: 3000 });

                const productsLayoutContainer = desktopPage.getByTestId("water-sewage-product-desktop-layout-container-milling-robots").first();
                await productsLayoutContainer.waitFor({state: "visible"});
                await expect(productsLayoutContainer).toBeVisible({ timeout: 3000 });

                const productsGrid = desktopPage.getByTestId("products-grid-container").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({ timeout: 3000 });

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});
                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");
                    await expect(product.locator('img')).toBeVisible({ timeout: 3000 });
                }
            });
        });

        test.describe("english version", () => {
            test("display breadcrumbs for milling robots products in english", async () => {
                const breadcrumbsContainer = desktopPage.getByTestId("water-sewage-product-breadcrumbs-container-milling-robots").first();
                await breadcrumbsContainer.waitFor({state: "visible"});
                await expect(breadcrumbsContainer).toBeVisible({ timeout: 3000 });

                const breadcrumbsHomeLink = desktopPage.getByTestId("breadcrumbs-home-link").first();
                await breadcrumbsHomeLink.waitFor({state: "visible"});
                await expect(breadcrumbsHomeLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsHomeLinkText = await breadcrumbsHomeLink.textContent();
                expect(breadcrumbsHomeLinkText).toBe("Home");

                const breadcrumbsArrow = desktopPage.getByTestId("breadcrumbs-arrow-icon");
                await breadcrumbsArrow.waitFor({state: "visible"});
                await expect(breadcrumbsArrow).toBeVisible({ timeout: 3000 });

                const breadcrumbsProductsLink = desktopPage.getByTestId("breadcrumbs-link-products");
                await breadcrumbsProductsLink.waitFor({state: "visible"});
                await expect(breadcrumbsProductsLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsProductsLinkText = await breadcrumbsProductsLink.textContent();
                expect(breadcrumbsProductsLinkText).toBe("Products");

                const breadcrumbsDepartmentLink = desktopPage.getByTestId("breadcrumbs-link-water-sewage");
                await breadcrumbsDepartmentLink.waitFor({state: "visible"});
                await expect(breadcrumbsDepartmentLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsDepartmentLinkText = await breadcrumbsDepartmentLink.textContent();
                expect(breadcrumbsDepartmentLinkText).toBe("Water and Sewage Department");

                const breadcrumbCurrentPageItem = desktopPage.getByTestId("breadcrumbs-current-page-link");
                await breadcrumbCurrentPageItem.waitFor({state: "visible"});
                await expect(breadcrumbCurrentPageItem).toBeVisible({ timeout: 3000 });

                const breadcrumbCurrentPageItemText = await breadcrumbCurrentPageItem.textContent();
                expect(breadcrumbCurrentPageItemText).toBe("Milling Robots");
            });

            test("display products header with the hero image and title in english", async () => {
                const heroImageTitle = desktopPage.getByTestId("hero-image-title").first();
                await heroImageTitle.waitFor({state: "visible"});
                await expect(heroImageTitle).toBeVisible({ timeout: 3000 });

                const heroImageTitleText = await heroImageTitle.textContent();
                expect(heroImageTitleText).toBe("Milling Robots");

                const heroImageContainer = desktopPage.getByTestId("hero-image-container").first();
                await heroImageContainer.waitFor({state: "visible"});
                await expect(heroImageContainer).toBeVisible({ timeout: 3000 });

                const heroImage = desktopPage.getByTestId("hero-image-0");
                await heroImage.waitFor({state: "visible"});
                await expect(heroImage).toBeVisible({ timeout: 3000 });
            });

            test("display products technology filters in english", async () => {
                const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({ timeout: 3000 });

                const technologyFilters = desktopPage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({ timeout: 3000 });
                const technologyFiltersTitle = desktopPage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technology:");

                const technologyFiltersCount = await desktopPage.locator('[data-testid="technology-filters"]:visible').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });

        test.describe("polish version", () => {
            let desktopPage: Page;

            test.beforeEach(async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                await navigateToMillingRobotsProductsPageOnDesktop(desktopPage, Language.PL);
            });

            test("display breadcrumbs for milling robots products in polish", async () => {
                const breadcrumbsContainer = desktopPage.getByTestId("water-sewage-product-breadcrumbs-container-milling-robots").first();
                await breadcrumbsContainer.waitFor({state: "visible"});
                await expect(breadcrumbsContainer).toBeVisible({ timeout: 3000 });

                const breadcrumbsHomeLink = desktopPage.getByTestId("breadcrumbs-home-link").first();
                await breadcrumbsHomeLink.waitFor({state: "visible"});
                await expect(breadcrumbsHomeLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsHomeLinkText = await breadcrumbsHomeLink.textContent();
                expect(breadcrumbsHomeLinkText).toBe("Strona główna");

                const breadcrumbsArrow = desktopPage.getByTestId("breadcrumbs-arrow-icon").first();
                await breadcrumbsArrow.waitFor({state: "visible"});
                await expect(breadcrumbsArrow).toBeVisible({ timeout: 3000 });

                const breadcrumbsProductsLink = desktopPage.getByTestId("breadcrumbs-link-products").first();
                await breadcrumbsProductsLink.waitFor({state: "visible"});
                await expect(breadcrumbsProductsLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsProductsLinkText = await breadcrumbsProductsLink.textContent();
                expect(breadcrumbsProductsLinkText).toBe("Produkty");

                const breadcrumbsDepartmentLink = desktopPage.getByTestId("breadcrumbs-link-water-sewage").first();
                await breadcrumbsDepartmentLink.waitFor({state: "visible"});
                await expect(breadcrumbsDepartmentLink).toBeVisible({ timeout: 3000 });

                const breadcrumbsDepartmentLinkText = await breadcrumbsDepartmentLink.textContent();
                expect(breadcrumbsDepartmentLinkText).toBe("Dział WOD-KAN");

                const breadcrumbCurrentPageItem = desktopPage.getByTestId("breadcrumbs-current-page-link").first();
                await breadcrumbCurrentPageItem.waitFor({state: "visible"});
                await expect(breadcrumbCurrentPageItem).toBeVisible({ timeout: 3000 });

                const breadcrumbCurrentPageItemText = await breadcrumbCurrentPageItem.textContent();
                expect(breadcrumbCurrentPageItemText).toBe("Roboty frezujące");
            });

            test("display products header with the hero image and title in polish", async () => {
                const heroImageTitle = desktopPage.getByTestId("hero-image-title").first();
                await heroImageTitle.waitFor({state: "visible"});
                await expect(heroImageTitle).toBeVisible({ timeout: 3000 });

                const heroImageTitleText = await heroImageTitle.textContent();
                expect(heroImageTitleText).toBe("Roboty frezujące");

                const heroImageContainer = desktopPage.getByTestId("hero-image-container").first();
                await heroImageContainer.waitFor({state: "visible"});
                await expect(heroImageContainer).toBeVisible({ timeout: 3000 });

                const heroImage = desktopPage.getByTestId("hero-image-0");
                await heroImage.waitFor({state: "visible"});
                await expect(heroImage).toBeVisible({ timeout: 3000 });
            });

            test("display products technology filters in polish", async () => {
                const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({ timeout: 3000 });

                const technologyFilters = desktopPage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({ timeout: 3000 });
                const technologyFiltersTitle = desktopPage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technologia:");

                const technologyFiltersCount = await desktopPage.locator('[data-testid="technology-filters"]:visible').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });

    test.describe("mobile version", () => {
        let mobilePage: Page;

        test.beforeEach(async ({browser}) => {
            mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
            await navigateToMillingRobotsProductsPageOnMobile(mobilePage);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsGridContainer = mobilePage.getByTestId("water-sewage-product-mobile-layout-container-milling-robots").first();
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible({ timeout: 3000 });

                const visibleProducts = mobilePage.locator('[data-testid="product-link"]:visible');
                const productsCount = await visibleProducts.count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = visibleProducts.nth(i);

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");
                }
            });
        });

        test.describe("english version", () => {
            test("display products technology filters in english", async () => {
                await openMobileFiltersMenu(mobilePage);

                const technologyFiltersContainer = mobilePage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({timeout: 3000});

                const technologyFilters = mobilePage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({timeout: 3000});

                const technologyFiltersTitle = mobilePage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technology:");

                const technologyFiltersCount = await mobilePage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });

        test.describe("polish version", () => {
            let mobilePage: Page;

            test.beforeEach(async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");
                await navigateToMillingRobotsProductsPageOnMobile(mobilePage, Language.PL);
            });

            test("display products technology filters in polish", async () => {
                await openMobileFiltersMenu(mobilePage);

                const technologyFiltersContainer = mobilePage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({timeout: 3000});

                const technologyFilters = mobilePage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({timeout: 3000});

                const technologyFiltersTitle = mobilePage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technologia:");

                const technologyFiltersCount = await mobilePage.locator('[data-testid="technology-filters"]:visible').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });

    test.describe("tablet version", () => {
        let tabletPage: Page;

        test.beforeEach(async ({browser}) => {
            tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser);
            await navigateToMillingRobotsProductsPageOnTablet(tabletPage);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsGridContainer = tabletPage.getByTestId("water-sewage-product-desktop-layout-container-milling-robots");
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible({ timeout: 3000 });

                const visibleProducts = tabletPage.locator('[data-testid="product-link"]:visible');
                const productsCount = await visibleProducts.count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = visibleProducts.nth(i);

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");
                }
            });
        });

        test.describe("english version", () => {
            test("display products technology filters in english", async () => {
                const technologyFiltersContainer = tabletPage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({timeout: 3000});

                const technologyFilters = tabletPage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({timeout: 3000});

                const technologyFiltersTitle = tabletPage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technology:");

                const technologyFiltersCount = await tabletPage.locator('[data-testid="technology-filters"]:visible').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });

        test.describe("polish version", () => {
            let tabletPage: Page;

            test.beforeEach(async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");
                await navigateToMillingRobotsProductsPageOnTablet(tabletPage, Language.PL);
            });

            test("display products technology filters in polish", async () => {
                const technologyFiltersContainer = tabletPage.getByTestId("technology-filters-container").first();
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible({timeout: 3000});

                const technologyFilters = tabletPage.getByTestId("technology-filters").first();
                await expect(technologyFilters).toBeVisible({timeout: 3000});

                const technologyFiltersTitle = tabletPage.getByTestId("technology-filters-title").first();
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technologia:");

                const technologyFiltersCount = await tabletPage.locator('[data-testid="technology-filters"]:visible').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });
});