import {expect, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../../utils/openMainPageOnDesktop";
import {navigateToWaterAndSewageProductsPageOnDesktop} from "../../utils/navigation/navigateProductsMenuOnDesktop";
import {
    AccessoriesCategory,
    CamerasForSewageInspectionCategory,
    CleaningNozzlesCategory,
    CleaningNozzlesForPressureVehiclesCategory,
    MillingRobotsForSewerRepairAndRenovationCategory,
    MultipurposeVehiclesForPressureSewerCleaningCategory,
    SmallUncloggingNozzlesCategory,
    waterSewageCategories
} from "../../../../components/src/products/data/categories";
import {WaterSewageTags} from "../../../../components/src/products/data/tags";
import {Language} from "../../../../components/src/types";
import {openMainPageOnMobileAndCloseConsentPopup} from "../../utils/openMainPageOnMobile";
import {
    closeProductsFiltersMenuOnMobile,
    navigateToWaterAndSewageProductsPageOnMobileAndCloseMenu,
    openProductsFiltersMenuOnMobile
} from "../../utils/navigation/navigateProductsMenuOnMobile";
import {openMainPageOnTabletAndCloseConsentPopup} from "../../utils/openMainPageOnTablet";
import {navigateToWaterAndSewageProductsPageOnTablet} from "../../utils/navigation/navigateProductsMenuOnTablet";

test.describe("water sewage products suite", () => {
    test.describe("desktop version", () => {
        test.describe("english version", () => {
            let desktopPage: Page;

            test.beforeEach(async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
                await navigateToWaterAndSewageProductsPageOnDesktop(desktopPage);
            });

            test.describe("common elements", () => {
                test("display water and sewage products manufacturers names", async () => {
                    const expectedManufacturers = [
                        "ASSMANN",
                        "BECK",
                        "Feierabend & Fock GmbH",
                        "IBAK",
                        "NUOVACONTEC",
                    ];

                    const manufacturerFiltersContainer = desktopPage.getByTestId("manufacturers-filters-container");
                    await manufacturerFiltersContainer.waitFor({state: "visible"});
                    await expect(manufacturerFiltersContainer).toBeVisible();

                    const manufacturerFilters = desktopPage.getByTestId("manufacturers-filters");
                    await expect(manufacturerFilters).toBeVisible();

                    for (const expectedManufacturer of expectedManufacturers) {
                        await expect(manufacturerFilters).toContainText(expectedManufacturer);
                    }
                });

                test("display 16 products per page", async () => {
                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).toBe(16);

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
                test("renders product filters with correct path and labels in english", async () => {
                    const productsFilters = desktopPage.getByTestId("water-sewage-departments-products-filters");
                    await productsFilters.waitFor({state: "visible"});

                    await expect(productsFilters).toContainText("Manufacturers");
                    await expect(productsFilters).toContainText("Categories");
                    await expect(productsFilters).toContainText("Technology");
                });

                test("display water and sewage products categories in english", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    for (const expectedCategory of waterSewageCategories) {
                        await expect(categoryFilters).toContainText(expectedCategory.nameENG);
                    }
                });

                test("should display more technology tags in english after clicking show more button", async () => {
                    const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container");
                    await technologyFiltersContainer.waitFor({state: "visible"});
                    await expect(technologyFiltersContainer).toBeVisible();

                    const technologyFilters = desktopPage.getByTestId("technology-filters");
                    await expect(technologyFilters).toBeVisible();

                    const showMoreButton = desktopPage.getByTestId("show-more-button");
                    await expect(showMoreButton).toBeVisible();

                    while (await showMoreButton.isVisible()) {
                        await showMoreButton.click();
                    }

                    for (const expectedTag of Object.values(WaterSewageTags)) {
                        await expect(technologyFilters).toContainText(expectedTag.nameENG);
                    }

                    await expect(showMoreButton).not.toBeVisible();

                    const showLessButton = desktopPage.getByTestId("show-less-button");
                    await expect(showLessButton).toBeVisible();
                });

                test("renders products grid with pagination controls in english", async () => {
                    const productsContainer = desktopPage.getByTestId("water-sewage-department-products");
                    await productsContainer.waitFor({state: "visible"});
                    await expect(productsContainer).toBeVisible();

                    const productsGridContainer = desktopPage.getByTestId("products-grid-container").first();
                    await productsGridContainer.waitFor({state: "visible"});
                    await expect(productsGridContainer).toBeVisible();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const paginationItems = desktopPage.getByTestId("water-sewage-department-products-pagination-controls");
                    await paginationItems.waitFor({state: "visible"});
                    await expect(paginationItems).toBeVisible();

                    const previousPageButton = desktopPage.getByTestId("pagination-previous-button");
                    await expect(previousPageButton).toBeVisible();
                    const previousButtonText = await previousPageButton.textContent();
                    expect(previousButtonText).toBe("Previous");

                    const nextPageButton = desktopPage.getByTestId("pagination-next-button");
                    await expect(nextPageButton).toBeVisible();
                    const nextButtonText = await nextPageButton.textContent();
                    expect(nextButtonText).toBe("Next");
                });

                test("should display only camera products when cameras category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const cameraCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: CamerasForSewageInspectionCategory.nameENG},
                    );
                    await cameraCategory.waitFor({state: "visible"});
                    await cameraCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/cameras");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();

                    }
                });

                test("should display only pressure vehicle products when pressure vehicle category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const pressureVehicleCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: MultipurposeVehiclesForPressureSewerCleaningCategory.nameENG}
                    );
                    await pressureVehicleCategory.waitFor({state: "visible"});
                    await pressureVehicleCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/pressure-vehicles");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });

                test("should display only milling robots when milling robots category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const millingRobotsCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: MillingRobotsForSewerRepairAndRenovationCategory.nameENG}
                    );
                    await millingRobotsCategory.waitFor({state: "visible"});
                    await millingRobotsCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/milling-robots");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });

                test("should display only accessory products when accessory category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const accessoryCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: AccessoriesCategory.nameENG}
                    );
                    await accessoryCategory.waitFor({state: "visible"});
                    await accessoryCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/accessories");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });

                test("should display only cleaning nozzle products from accessories when cleaning nozzle category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const cleaningNozzleCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: CleaningNozzlesCategory.nameENG}
                    ).first();
                    await cleaningNozzleCategory.waitFor({state: "visible"});
                    await cleaningNozzleCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/accessories");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });

                test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: CleaningNozzlesForPressureVehiclesCategory.nameENG}
                    ).first();
                    await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                    await cleaningNozzleForPressureVehiclesCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/accessories");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });

                test("should display only unclogging nozzle products from accessories when unclogging nozzle category in english is selected", async () => {
                    const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                    await categoryFiltersContainer.waitFor({state: "visible"});
                    await expect(categoryFiltersContainer).toBeVisible();

                    const categoryFilters = desktopPage.getByTestId("category-filters");
                    await expect(categoryFilters).toBeVisible();

                    const uncloggingNozzleCategory = categoryFilters.getByRole(
                        "checkbox",
                        {name: SmallUncloggingNozzlesCategory.nameENG}
                    ).first();
                    await uncloggingNozzleCategory.waitFor({state: "visible"});
                    await uncloggingNozzleCategory.click();

                    const productsGrid = desktopPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible();

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    for (let i = 0; i < productsCount; i++) {
                        const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                        await product.waitFor({state: "visible"});

                        const productLink = await product.getAttribute("href");
                        expect(productLink).toContain("/accessories");

                        const productTitle = await product.textContent();

                        expect(productTitle).not.toBeNull();
                        expect(productTitle).not.toBeUndefined();
                        expect(productTitle).not.toBe("");

                        await expect(product.locator('img')).toBeVisible();
                    }
                });
            });
        });

        test.describe("polish version", () => {
            let desktopPage: Page;

            test.beforeEach(async ({browser}) => {
                desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                await navigateToWaterAndSewageProductsPageOnDesktop(desktopPage, Language.PL);
            });

            test("renders product filters with correct path and labels in polish", async () => {
                const productsFilters = desktopPage.getByTestId("water-sewage-departments-products-filters");
                await productsFilters.waitFor({state: "visible"});

                await expect(productsFilters).toContainText("Producenci");
                await expect(productsFilters).toContainText("Kategorie");
                await expect(productsFilters).toContainText("Technologia");
            });

            test("renders products grid with pagination controls in polish", async () => {
                const productsContainer = desktopPage.getByTestId("water-sewage-department-products");
                await productsContainer.waitFor({state: "visible"});
                await expect(productsContainer).toBeVisible();

                const productsGridContainer = desktopPage.getByTestId("products-grid-container").first();
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const paginationItems = desktopPage.getByTestId("water-sewage-department-products-pagination-controls");
                await paginationItems.waitFor({state: "visible"});
                await expect(paginationItems).toBeVisible();

                const previousPageButton = desktopPage.getByTestId("pagination-previous-button");
                await expect(previousPageButton).toBeVisible();
                const previousButtonText = await previousPageButton.textContent();
                expect(previousButtonText).toBe("Poprzednia");

                const nextPageButton = desktopPage.getByTestId("pagination-next-button");
                await expect(nextPageButton).toBeVisible();
                const nextButtonText = await nextPageButton.textContent();
                expect(nextButtonText).toBe("Następna");
            });

            test("display water and sewage products categories in polish", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                for (const expectedCategory of waterSewageCategories) {
                    await expect(categoryFilters).toContainText(expectedCategory.namePL);
                }
            });

            test("should display more technology tags in polish after clicking show more button", async () => {
                const technologyFiltersContainer = desktopPage.getByTestId("technology-filters-container");
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible();

                const technologyFilters = desktopPage.getByTestId("technology-filters");
                await expect(technologyFilters).toBeVisible();

                const showMoreButton = desktopPage.getByTestId("show-more-button");
                await expect(showMoreButton).toBeVisible();
                const showMoreButtonText = await showMoreButton.textContent();
                expect(showMoreButtonText).toBe("Pokaż więcej");

                while (await showMoreButton.isVisible()) {
                    await showMoreButton.click();
                }

                for (const expectedTag of Object.values(WaterSewageTags)) {
                    await expect(technologyFilters).toContainText(expectedTag.namePL);
                }

                await expect(showMoreButton).not.toBeVisible();

                const showLessButton = desktopPage.getByTestId("show-less-button");
                await expect(showLessButton).toBeVisible();
                const showLessButtonText = await showLessButton.textContent();
                expect(showLessButtonText).toBe("Pokaż mniej");
            });

            test("should display only milling robots when milling robots category in polish is selected", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const millingRobotsCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MillingRobotsForSewerRepairAndRenovationCategory.namePL}
                );
                await millingRobotsCategory.waitFor({state: "visible"});
                await millingRobotsCategory.click();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/milling-robots");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only accessory products when accessory category in polish is selected", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const accessoryCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: AccessoriesCategory.namePL}
                );
                await accessoryCategory.waitFor({state: "visible"});
                await accessoryCategory.click();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only camera products when cameras category in polish is selected", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cameraCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CamerasForSewageInspectionCategory.namePL},
                );
                await cameraCategory.waitFor({state: "visible"});
                await cameraCategory.click();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/cameras");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();

                }
            });

            test("should display only cleaning nozzle products from accessories when cleaning nozzle category in polish is selected", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesCategory.namePL}
                ).first();
                await cleaningNozzleCategory.waitFor({state: "visible"});
                await cleaningNozzleCategory.click();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in polish is selected", async () => {
                const categoryFiltersContainer = desktopPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = desktopPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesForPressureVehiclesCategory.namePL}
                ).first();
                await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                await cleaningNozzleForPressureVehiclesCategory.click();

                const productsGrid = desktopPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = desktopPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });
        });
    });

    test.describe("mobile version", () => {
        let mobilePage: Page;

        test.beforeEach(async ({browser}) => {
            mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
            await navigateToWaterAndSewageProductsPageOnMobileAndCloseMenu(mobilePage);

            const waterSewageProductsContainer = mobilePage.getByTestId("water-sewage-department-products");
            await waterSewageProductsContainer.waitFor({state: "visible"});
            await expect(waterSewageProductsContainer).toBeVisible({timeout: 10000});

            await openProductsFiltersMenuOnMobile(mobilePage);
        });

        test.describe("common elements", () => {
            test("display 16 products per page", async () => {
                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).toBe(16);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});
                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });
        });

        test.describe("english version", () => {
            test("renders product filters with correct path and labels in english", async () => {
                const productsFiltersMobileDrawer = mobilePage.getByTestId("water-sewage-departments-products-filters-drawer");
                await productsFiltersMobileDrawer.waitFor({state: "visible"});

                await expect(productsFiltersMobileDrawer).toContainText("Manufacturers");
                await expect(productsFiltersMobileDrawer).toContainText("Categories");
                await expect(productsFiltersMobileDrawer).toContainText("Technology");
            });

            test("display water and sewage products manufacturers names", async () => {
                const expectedManufacturers = [
                    "ASSMANN",
                    "BECK",
                    "Feierabend & Fock GmbH",
                    "IBAK",
                    "NUOVACONTEC",
                ];

                const manufacturerFiltersContainer = mobilePage.getByTestId("manufacturers-filters-container").first();
                await manufacturerFiltersContainer.waitFor({state: "visible"});
                await expect(manufacturerFiltersContainer).toBeVisible({timeout: 3000});

                const manufacturerFilters = mobilePage.getByTestId("manufacturers-filters").first();
                await expect(manufacturerFilters).toBeVisible({timeout: 3000});

                for (const expectedManufacturer of expectedManufacturers) {
                    await expect(manufacturerFilters).toContainText(expectedManufacturer);
                }
            });

            test("display water and sewage products categories in english", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible();

                for (const expectedCategory of waterSewageCategories) {
                    await expect(categoryFilters).toContainText(expectedCategory.nameENG);
                }
            });

            test("should display only camera products when cameras category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cameraCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CamerasForSewageInspectionCategory.nameENG},
                );
                await cameraCategory.waitFor({state: "visible"});
                await cameraCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/cameras");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});

                }
            });

            test("should display only pressure vehicle products when pressure vehicle category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const pressureVehicleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MultipurposeVehiclesForPressureSewerCleaningCategory.nameENG}
                );
                await pressureVehicleCategory.waitFor({state: "visible"});
                await pressureVehicleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/pressure-vehicles");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only milling robots when milling robots category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const millingRobotsCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MillingRobotsForSewerRepairAndRenovationCategory.nameENG}
                );
                await millingRobotsCategory.waitFor({state: "visible"});
                await millingRobotsCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/milling-robots");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only cleaning nozzle products from accessories when cleaning nozzle category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cleaningNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesCategory.nameENG}
                ).first();
                await cleaningNozzleCategory.waitFor({state: "visible"});
                await cleaningNozzleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesForPressureVehiclesCategory.nameENG}
                ).first();
                await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                await cleaningNozzleForPressureVehiclesCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only unclogging nozzle products from accessories when unclogging nozzle category in english is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const uncloggingNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: SmallUncloggingNozzlesCategory.nameENG}
                ).first();
                await uncloggingNozzleCategory.waitFor({state: "visible"});
                await uncloggingNozzleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });
        });

        test.describe("polish version", () => {
            let mobilePage: Page;

            test.beforeEach(async ({browser}) => {
                mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");
                await navigateToWaterAndSewageProductsPageOnMobileAndCloseMenu(mobilePage, Language.PL);

                const waterSewageProductsContainer = mobilePage.getByTestId("water-sewage-department-products");
                await waterSewageProductsContainer.waitFor({state: "visible"});
                await expect(waterSewageProductsContainer).toBeVisible({timeout: 3000});

                await openProductsFiltersMenuOnMobile(mobilePage, Language.PL);

            });

            test("renders product filters with correct path and labels in polish", async () => {
                const productsFiltersMobileDrawer = mobilePage.getByTestId("water-sewage-departments-products-filters-drawer");
                await productsFiltersMobileDrawer.waitFor({state: "visible"});
                await expect(productsFiltersMobileDrawer).toBeVisible({timeout: 3000});

                await expect(productsFiltersMobileDrawer).toContainText("Producenci");
                await expect(productsFiltersMobileDrawer).toContainText("Kategorie");
                await expect(productsFiltersMobileDrawer).toContainText("Technologia");
            });

            test("display water and sewage products manufacturers names in polish", async () => {
                const expectedManufacturers = [
                    "ASSMANN",
                    "BECK",
                    "Feierabend & Fock GmbH",
                    "IBAK",
                    "NUOVACONTEC",
                ];

                const manufacturerFiltersContainer = mobilePage.getByTestId("manufacturers-filters-container").first();
                await manufacturerFiltersContainer.waitFor({state: "visible"});
                await expect(manufacturerFiltersContainer).toBeVisible({timeout: 3000});

                const manufacturerFilters = mobilePage.getByTestId("manufacturers-filters").first();
                await expect(manufacturerFilters).toBeVisible({timeout: 3000});

                for (const expectedManufacturer of expectedManufacturers) {
                    await expect(manufacturerFilters).toContainText(expectedManufacturer);
                }
            });

            test("display water and sewage products categories in polish", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                for (const expectedCategory of waterSewageCategories) {
                    await expect(categoryFilters).toContainText(expectedCategory.namePL);
                }
            });

            test("should display only camera products when cameras category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cameraCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CamerasForSewageInspectionCategory.namePL},
                );
                await cameraCategory.waitFor({state: "visible"});
                await cameraCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/cameras");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});

                }
            });

            test("should display only pressure vehicle products when pressure vehicle category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const pressureVehicleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MultipurposeVehiclesForPressureSewerCleaningCategory.namePL}
                );
                await pressureVehicleCategory.waitFor({state: "visible"});
                await pressureVehicleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/pressure-vehicles");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only milling robots when milling robots category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const millingRobotsCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MillingRobotsForSewerRepairAndRenovationCategory.namePL}
                );
                await millingRobotsCategory.waitFor({state: "visible"});
                await millingRobotsCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/milling-robots");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only cleaning nozzle products from accessories when cleaning nozzle category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cleaningNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesCategory.namePL}
                ).first();
                await cleaningNozzleCategory.waitFor({state: "visible"});
                await cleaningNozzleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesForPressureVehiclesCategory.namePL}
                ).first();
                await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                await cleaningNozzleForPressureVehiclesCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });

            test("should display only unclogging nozzle products from accessories when unclogging nozzle category in polish is selected", async () => {
                const categoryFiltersContainer = mobilePage.getByTestId("category-filters-container").first();
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible({timeout: 3000});

                const categoryFilters = mobilePage.getByTestId("category-filters").first();
                await expect(categoryFilters).toBeVisible({timeout: 3000});

                const uncloggingNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: SmallUncloggingNozzlesCategory.namePL}
                ).first();
                await uncloggingNozzleCategory.waitFor({state: "visible"});
                await uncloggingNozzleCategory.click();

                await closeProductsFiltersMenuOnMobile(mobilePage);

                const productsGrid = mobilePage.locator('[data-testid="products-grid"]:visible').first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await mobilePage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = mobilePage.locator('[data-testid="product-link"]:visible').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });
        });
    });

    test.describe("tablet version", () => {
        let tabletPage: Page;

        test.beforeEach(async ({browser}) => {
            tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser);
            await navigateToWaterAndSewageProductsPageOnTablet(tabletPage);
        });

        test.describe("common elements", () => {
            test("display water and sewage products manufacturers names", async () => {
                const expectedManufacturers = [
                    "ASSMANN",
                    "BECK",
                    "Feierabend & Fock GmbH",
                    "IBAK",
                    "NUOVACONTEC",
                ];

                const manufacturerFiltersContainer = tabletPage.getByTestId("manufacturers-filters-container");
                await manufacturerFiltersContainer.waitFor({state: "visible"});
                await expect(manufacturerFiltersContainer).toBeVisible({timeout: 3000});

                const manufacturerFilters = tabletPage.getByTestId("manufacturers-filters");
                await expect(manufacturerFilters).toBeVisible({timeout: 3000});

                for (const expectedManufacturer of expectedManufacturers) {
                    await expect(manufacturerFilters).toContainText(expectedManufacturer);
                }
            });

            test("display 16 products per page", async () => {
                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible({timeout: 3000});

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).toBe(16);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});
                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible({timeout: 3000});
                }
            });
        });

        test.describe("english version", () => {
            test("renders product filters with correct path and labels in english", async () => {
                const productsFilters = tabletPage.getByTestId("water-sewage-departments-products-filters");
                await productsFilters.waitFor({state: "visible"});

                await expect(productsFilters).toContainText("Manufacturers");
                await expect(productsFilters).toContainText("Categories");
                await expect(productsFilters).toContainText("Technology");
            });

            test("display water and sewage products categories in english", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                for (const expectedCategory of waterSewageCategories) {
                    await expect(categoryFilters).toContainText(expectedCategory.nameENG);
                }
            });

            test("should display more technology tags in english after clicking show more button", async () => {
                const technologyFiltersContainer = tabletPage.getByTestId("technology-filters-container");
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible();

                const technologyFilters = tabletPage.getByTestId("technology-filters");
                await expect(technologyFilters).toBeVisible();

                const showMoreButton = tabletPage.getByTestId("show-more-button");
                await expect(showMoreButton).toBeVisible();

                while (await showMoreButton.isVisible()) {
                    await showMoreButton.click();
                }

                for (const expectedTag of Object.values(WaterSewageTags)) {
                    await expect(technologyFilters).toContainText(expectedTag.nameENG);
                }

                await expect(showMoreButton).not.toBeVisible();

                const showLessButton = tabletPage.getByTestId("show-less-button");
                await expect(showLessButton).toBeVisible();
            });

            test("renders products grid with pagination controls in english", async () => {
                const productsContainer = tabletPage.getByTestId("water-sewage-department-products");
                await productsContainer.waitFor({state: "visible"});
                await expect(productsContainer).toBeVisible();

                const productsGridContainer = tabletPage.getByTestId("products-grid-container").first();
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const paginationItems = tabletPage.getByTestId("water-sewage-department-products-pagination-controls");
                await paginationItems.waitFor({state: "visible"});
                await expect(paginationItems).toBeVisible();

                const previousPageButton = tabletPage.getByTestId("pagination-previous-button");
                await expect(previousPageButton).toBeVisible();
                const previousButtonText = await previousPageButton.textContent();
                expect(previousButtonText).toBe("Previous");

                const nextPageButton = tabletPage.getByTestId("pagination-next-button");
                await expect(nextPageButton).toBeVisible();
                const nextButtonText = await nextPageButton.textContent();
                expect(nextButtonText).toBe("Next");
            });

            test("should display only camera products when cameras category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cameraCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CamerasForSewageInspectionCategory.nameENG},
                );
                await cameraCategory.waitFor({state: "visible"});
                await cameraCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/cameras");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();

                }
            });

            test("should display only pressure vehicle products when pressure vehicle category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const pressureVehicleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MultipurposeVehiclesForPressureSewerCleaningCategory.nameENG}
                );
                await pressureVehicleCategory.waitFor({state: "visible"});
                await pressureVehicleCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/pressure-vehicles");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only milling robots when milling robots category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const millingRobotsCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MillingRobotsForSewerRepairAndRenovationCategory.nameENG}
                );
                await millingRobotsCategory.waitFor({state: "visible"});
                await millingRobotsCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/milling-robots");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only accessory products when accessory category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const accessoryCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: AccessoriesCategory.nameENG}
                );
                await accessoryCategory.waitFor({state: "visible"});
                await accessoryCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only cleaning nozzle products from accessories when cleaning nozzle category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesCategory.nameENG}
                ).first();
                await cleaningNozzleCategory.waitFor({state: "visible"});
                await cleaningNozzleCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesForPressureVehiclesCategory.nameENG}
                ).first();
                await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                await cleaningNozzleForPressureVehiclesCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only unclogging nozzle products from accessories when unclogging nozzle category in english is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const uncloggingNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: SmallUncloggingNozzlesCategory.nameENG}
                ).first();
                await uncloggingNozzleCategory.waitFor({state: "visible"});
                await uncloggingNozzleCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });
        });

        test.describe("polish version", () => {
            let tabletPage: Page;

            test.beforeEach(async ({browser}) => {
                tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");
                await navigateToWaterAndSewageProductsPageOnTablet(tabletPage, Language.PL);
            });

            test("renders product filters with correct path and labels in polish", async () => {
                const productsFilters = tabletPage.getByTestId("water-sewage-departments-products-filters");
                await productsFilters.waitFor({state: "visible"});

                await expect(productsFilters).toContainText("Producenci");
                await expect(productsFilters).toContainText("Kategorie");
                await expect(productsFilters).toContainText("Technologia");
            });

            test("renders products grid with pagination controls in polish", async () => {
                const productsContainer = tabletPage.getByTestId("water-sewage-department-products");
                await productsContainer.waitFor({state: "visible"});
                await expect(productsContainer).toBeVisible();

                const productsGridContainer = tabletPage.getByTestId("products-grid-container").first();
                await productsGridContainer.waitFor({state: "visible"});
                await expect(productsGridContainer).toBeVisible();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const paginationItems = tabletPage.getByTestId("water-sewage-department-products-pagination-controls");
                await paginationItems.waitFor({state: "visible"});
                await expect(paginationItems).toBeVisible();

                const previousPageButton = tabletPage.getByTestId("pagination-previous-button");
                await expect(previousPageButton).toBeVisible();
                const previousButtonText = await previousPageButton.textContent();
                expect(previousButtonText).toBe("Poprzednia");

                const nextPageButton = tabletPage.getByTestId("pagination-next-button");
                await expect(nextPageButton).toBeVisible();
                const nextButtonText = await nextPageButton.textContent();
                expect(nextButtonText).toBe("Następna");
            });

            test("display water and sewage products categories in polish", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                for (const expectedCategory of waterSewageCategories) {
                    await expect(categoryFilters).toContainText(expectedCategory.namePL);
                }
            });

            test("should display more technology tags in polish after clicking show more button", async () => {
                const technologyFiltersContainer = tabletPage.getByTestId("technology-filters-container");
                await technologyFiltersContainer.waitFor({state: "visible"});
                await expect(technologyFiltersContainer).toBeVisible();

                const technologyFilters = tabletPage.getByTestId("technology-filters");
                await expect(technologyFilters).toBeVisible();

                const showMoreButton = tabletPage.getByTestId("show-more-button");
                await expect(showMoreButton).toBeVisible();
                const showMoreButtonText = await showMoreButton.textContent();
                expect(showMoreButtonText).toBe("Pokaż więcej");

                while (await showMoreButton.isVisible()) {
                    await showMoreButton.click();
                }

                for (const expectedTag of Object.values(WaterSewageTags)) {
                    await expect(technologyFilters).toContainText(expectedTag.namePL);
                }

                await expect(showMoreButton).not.toBeVisible();

                const showLessButton = tabletPage.getByTestId("show-less-button");
                await expect(showLessButton).toBeVisible();
                const showLessButtonText = await showLessButton.textContent();
                expect(showLessButtonText).toBe("Pokaż mniej");
            });

            test("should display only milling robots when milling robots category in polish is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const millingRobotsCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: MillingRobotsForSewerRepairAndRenovationCategory.namePL}
                );
                await millingRobotsCategory.waitFor({state: "visible"});
                await millingRobotsCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/milling-robots");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only accessory products when accessory category in polish is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const accessoryCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: AccessoriesCategory.namePL}
                );
                await accessoryCategory.waitFor({state: "visible"});
                await accessoryCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only camera products when cameras category in polish is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cameraCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CamerasForSewageInspectionCategory.namePL},
                );
                await cameraCategory.waitFor({state: "visible"});
                await cameraCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/cameras");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();

                }
            });

            test("should display only cleaning nozzle products from accessories when cleaning nozzle category in polish is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesCategory.namePL}
                ).first();
                await cleaningNozzleCategory.waitFor({state: "visible"});
                await cleaningNozzleCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });

            test("should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in polish is selected", async () => {
                const categoryFiltersContainer = tabletPage.getByTestId("category-filters-container");
                await categoryFiltersContainer.waitFor({state: "visible"});
                await expect(categoryFiltersContainer).toBeVisible();

                const categoryFilters = tabletPage.getByTestId("category-filters");
                await expect(categoryFilters).toBeVisible();

                const cleaningNozzleForPressureVehiclesCategory = categoryFilters.getByRole(
                    "checkbox",
                    {name: CleaningNozzlesForPressureVehiclesCategory.namePL}
                ).first();
                await cleaningNozzleForPressureVehiclesCategory.waitFor({state: "visible"});
                await cleaningNozzleForPressureVehiclesCategory.click();

                const productsGrid = tabletPage.getByTestId("products-grid").first();
                await productsGrid.waitFor({state: "visible"});
                await expect(productsGrid).toBeVisible();

                const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                expect(productsCount).not.toBe(0);

                for (let i = 0; i < productsCount; i++) {
                    const product = tabletPage.locator('[data-testid="product-link"]').nth(i);
                    await product.waitFor({state: "visible"});

                    const productLink = await product.getAttribute("href");
                    expect(productLink).toContain("/accessories");

                    const productTitle = await product.textContent();

                    expect(productTitle).not.toBeNull();
                    expect(productTitle).not.toBeUndefined();
                    expect(productTitle).not.toBe("");

                    await expect(product.locator('img')).toBeVisible();
                }
            });
        });
    });
});