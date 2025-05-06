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

test.describe("water sewage products suite", () => {
    test.describe("english version", () => {
        let desktopPage: Page;

        test.beforeEach(async ({browser}) => {
            desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
            await navigateToWaterAndSewageProductsPageOnDesktop(desktopPage);
        });

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

        test(
            "should display only cleaning nozzle products from accessories when cleaning nozzle category in english is selected",
            async () => {
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

        test(
            "should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in english is selected",
            async () => {
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

        test("should display only unclogging nozzle products from accessories when unclogging nozzle category is selected", async () => {
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

        test(
            "should display only cleaning nozzle products from accessories when cleaning nozzle category in polish is selected",
            async () => {
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

        test(
            "should display only cleaning nozzle products for pressure vehicles when cleaning nozzle for pressure vehicles category in polish is selected",
            async () => {
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