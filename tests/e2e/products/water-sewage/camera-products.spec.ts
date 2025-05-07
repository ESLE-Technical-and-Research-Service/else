import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../../utils/openMainPageOnDesktop";
import {navigateToCameraProductsPageOnDesktop} from "../../utils/navigation/navigateProductsMenuOnDesktop";
import {Language} from "../../../../components/src/types";
import {openMainPageOnMobileAndCloseConsentPopup} from "../../utils/openMainPageOnMobile";
import {
    navigateToCameraProductsPageOnMobile,
    openMobileFiltersMenu
} from "../../utils/navigation/navigateProductsMenuOnMobile";
import {openMainPageOnTabletAndCloseConsentPopup} from "../../utils/openMainPageOnTablet";
import {navigateToCameraProductsPageOnTablet} from "../../utils/navigation/navigateProductsMenuOnTablet";

test.describe("camera products suite", () => {
    test.describe("desktop version", () => {
        let desktopPage: Page;

        test.beforeEach(async ({browser}) => {
            desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
            await navigateToCameraProductsPageOnDesktop(desktopPage);
            await desktopPage.waitForTimeout(3000);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsContainer = desktopPage.getByTestId("water-sewage-product-container-cameras");
                await productsContainer.waitFor({state: "visible"});
                await expect(productsContainer).toBeVisible();

                const cameraProductsGridContainer = desktopPage.getByTestId("water-sewage-product-grid-container-cameras");
                await cameraProductsGridContainer.waitFor({state: "visible"});
                await expect(cameraProductsGridContainer).toBeVisible();

                const productsLayoutContainer = desktopPage.getByTestId("water-sewage-product-desktop-layout-container-cameras");
                await productsLayoutContainer.waitFor({state: "visible"});
                await expect(productsLayoutContainer).toBeVisible();

                const productsGrid = desktopPage.getByTestId("products-grid-container").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});
                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");
                    await expect(product.locator('img')).toBeVisible();
                }
            });
        });

        test.describe("english version", () => {
            test("display breadcrumbs for camera products in english", async () => {
                const breadcrumbsContainer = desktopPage.getByTestId("water-sewage-product-breadcrumbs-container-cameras");
                await breadcrumbsContainer.waitFor({state: "visible"});
                await expect(breadcrumbsContainer).toBeVisible();

                const breadcrumbsHomeLink = desktopPage.getByTestId("breadcrumbs-home-link");
                await breadcrumbsHomeLink.waitFor({state: "visible"});
                await expect(breadcrumbsHomeLink).toBeVisible();

                const breadcrumbsHomeLinkText = await breadcrumbsHomeLink.textContent();
                expect(breadcrumbsHomeLinkText).toBe("Home");

                const breadcrumbsArrow = desktopPage.getByTestId("breadcrumbs-arrow-icon");
                await breadcrumbsArrow.waitFor({state: "visible"});
                await expect(breadcrumbsArrow).toBeVisible();

                const breadcrumbsProductsLink = desktopPage.getByTestId("breadcrumbs-link-products");
                await breadcrumbsProductsLink.waitFor({state: "visible"});
                await expect(breadcrumbsProductsLink).toBeVisible();

                const breadcrumbsProductsLinkText = await breadcrumbsProductsLink.textContent();
                expect(breadcrumbsProductsLinkText).toBe("Products");

                const breadcrumbsDepartmentLink = desktopPage.getByTestId("breadcrumbs-link-water-sewage");
                await breadcrumbsDepartmentLink.waitFor({state: "visible"});
                await expect(breadcrumbsDepartmentLink).toBeVisible();

                const breadcrumbsDepartmentLinkText = await breadcrumbsDepartmentLink.textContent();
                expect(breadcrumbsDepartmentLinkText).toBe("Water and Sewage Department");

                const breadcrumbCurrentPageItem = desktopPage.getByTestId("breadcrumbs-current-page-link");
                await breadcrumbCurrentPageItem.waitFor({state: "visible"});
                await expect(breadcrumbCurrentPageItem).toBeVisible();

                const breadcrumbCurrentPageItemText = await breadcrumbCurrentPageItem.textContent();
                expect(breadcrumbCurrentPageItemText).toBe("Cameras");
            });

            test("display products header with the hero image and title in english", async () => {
                const heroImageTitle = desktopPage.getByTestId("hero-image-title");
                await heroImageTitle.waitFor({state: "visible"});
                await expect(heroImageTitle).toBeVisible();

                const heroImageTitleText = await heroImageTitle.textContent();
                expect(heroImageTitleText).toBe("Inspection Cameras for Sewers and Water Networks");

                const heroImageContainer = desktopPage.getByTestId("hero-image-container");
                await heroImageContainer.waitFor({state: "visible"});
                await expect(heroImageContainer).toBeVisible();

                const heroImage = desktopPage.getByTestId("hero-image-0");
                await heroImage.waitFor({state: "visible"});
                await expect(heroImage).toBeVisible();
            });

            test("display products technology filters in english", async () => {
                const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container");
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible();

                const technologyFilters = desktopPage.getByTestId("technology-filters");
                await expect(technologyFilters).toBeVisible();
                const technologyFiltersTitle = desktopPage.getByTestId("technology-filters-title");
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technology:");

                const technologyFiltersCount = await desktopPage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });

        test.describe("polish version", () => {
            let desktopPage: Page;

            test.beforeEach(async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                await navigateToCameraProductsPageOnDesktop(desktopPage, Language.PL);
            });

            test("display breadcrumbs for camera products in polish", async () => {
                const breadcrumbsContainer = desktopPage.getByTestId("water-sewage-product-breadcrumbs-container-cameras");
                await breadcrumbsContainer.waitFor({state: "visible"});
                await expect(breadcrumbsContainer).toBeVisible();

                const breadcrumbsHomeLink = desktopPage.getByTestId("breadcrumbs-home-link");
                await breadcrumbsHomeLink.waitFor({state: "visible"});
                await expect(breadcrumbsHomeLink).toBeVisible();

                const breadcrumbsHomeLinkText = await breadcrumbsHomeLink.textContent();
                expect(breadcrumbsHomeLinkText).toBe("Strona główna");

                const breadcrumbsArrow = desktopPage.getByTestId("breadcrumbs-arrow-icon");
                await breadcrumbsArrow.waitFor({state: "visible"});
                await expect(breadcrumbsArrow).toBeVisible();

                const breadcrumbsProductsLink = desktopPage.getByTestId("breadcrumbs-link-products");
                await breadcrumbsProductsLink.waitFor({state: "visible"});
                await expect(breadcrumbsProductsLink).toBeVisible();

                const breadcrumbsProductsLinkText = await breadcrumbsProductsLink.textContent();
                expect(breadcrumbsProductsLinkText).toBe("Produkty");

                const breadcrumbsDepartmentLink = desktopPage.getByTestId("breadcrumbs-link-water-sewage");
                await breadcrumbsDepartmentLink.waitFor({state: "visible"});
                await expect(breadcrumbsDepartmentLink).toBeVisible();

                const breadcrumbsDepartmentLinkText = await breadcrumbsDepartmentLink.textContent();
                expect(breadcrumbsDepartmentLinkText).toBe("Dział WOD-KAN");

                const breadcrumbCurrentPageItem = desktopPage.getByTestId("breadcrumbs-current-page-link");
                await breadcrumbCurrentPageItem.waitFor({state: "visible"});
                await expect(breadcrumbCurrentPageItem).toBeVisible();

                const breadcrumbCurrentPageItemText = await breadcrumbCurrentPageItem.textContent();
                expect(breadcrumbCurrentPageItemText).toBe("Kamery");
            });

            test("display products header with the hero image and title in polish", async () => {
                const heroImageTitle = desktopPage.getByTestId("hero-image-title");
                await heroImageTitle.waitFor({state: "visible"});
                await expect(heroImageTitle).toBeVisible();

                const heroImageTitleText = await heroImageTitle.textContent();
                expect(heroImageTitleText).toBe("Kamery inspekcyjne do kanalizacji i sieci wodno-kanalizacyjnych");

                const heroImageContainer = desktopPage.getByTestId("hero-image-container");
                await heroImageContainer.waitFor({state: "visible"});
                await expect(heroImageContainer).toBeVisible();

                const heroImage = desktopPage.getByTestId("hero-image-0");
                await heroImage.waitFor({state: "visible"});
                await expect(heroImage).toBeVisible();
            });

            test("display products technology filters in polish", async () => {
                const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container");
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible();

                const technologyFilters = desktopPage.getByTestId("technology-filters");
                await expect(technologyFilters).toBeVisible();
                const technologyFiltersTitle = desktopPage.getByTestId("technology-filters-title");
                const technologyFiltersText = await technologyFiltersTitle.textContent();
                expect(technologyFiltersText).toBe("Technologia:");

                const technologyFiltersCount = await desktopPage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });

    test.describe("mobile version", () => {
        let mobilePage: Page;

        test.beforeEach(async ({browser}) => {
            mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
            await navigateToCameraProductsPageOnMobile(mobilePage);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsGridContainer = mobilePage.getByTestId("water-sewage-product-mobile-layout-container-cameras");
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible();

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
                await navigateToCameraProductsPageOnMobile(mobilePage, Language.PL);
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

                const technologyFiltersCount = await mobilePage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });

    test.describe("tablet version", () => {
        let tabletPage: Page;

        test.beforeEach(async ({browser}) => {
            tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser);
            await navigateToCameraProductsPageOnTablet(tabletPage);
        });

        test.describe("common elements", () => {
            test("display products grid with product titles and images", async () => {
                const productsGridContainer = tabletPage.getByTestId("water-sewage-product-desktop-layout-container-cameras");
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible();

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

                const technologyFiltersCount = await tabletPage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });

        test.describe("polish version", () => {
            let tabletPage: Page;

            test.beforeEach(async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");
                await navigateToCameraProductsPageOnTablet(tabletPage, Language.PL);
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

                const technologyFiltersCount = await tabletPage.locator('[data-testid="technology-filters"]').count();
                expect(technologyFiltersCount).not.toBe(0);
            });
        });
    });
});