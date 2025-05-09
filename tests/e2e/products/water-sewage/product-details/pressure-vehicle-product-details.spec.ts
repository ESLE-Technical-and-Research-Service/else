import {expect, Locator, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../../../utils/openMainPageOnDesktop";
import {navigateToPressureVehicleProductsPageOnDesktop} from "../../../utils/navigation/navigateProductsMenuOnDesktop";
import {Language} from "../../../../../components/src/types";
import {openMainPageOnTabletAndCloseConsentPopup} from "../../../utils/openMainPageOnTablet";
import {
    navigateToMillingRobotsProductsPageOnTablet,
    navigateToPressureVehiclesProductsPageOnTablet
} from "../../../utils/navigation/navigateProductsMenuOnTablet";
import {openMainPageOnMobileAndCloseConsentPopup} from "../../../utils/openMainPageOnMobile";
import {
    navigateToPressureVehiclesProductsPageOnMobileAndCloseMenu
} from "../../../utils/navigation/navigateProductsMenuOnMobile";

test.describe("pressure vehicle product details suite", () => {
    test.describe("desktop version", () => {
        let desktopPage: Page;
        let leftColumn: Locator;
        let rightColumn: Locator;

        test.beforeEach(async ({browser}) => {
            desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
            await navigateToPressureVehicleProductsPageOnDesktop(desktopPage);

            const productsGrid = desktopPage.getByTestId("products-grid-container").first();
            await productsGrid.waitFor({state: "visible"});
            await expect(productsGrid).toBeVisible({timeout: 10000});

            const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
            expect(productsCount).not.toBe(0);

            const firstSelectedProduct = desktopPage.getByTestId("product-link").first();
            await firstSelectedProduct.waitFor({state: "visible"});
            await expect(firstSelectedProduct).toBeVisible({timeout: 3000});
            await firstSelectedProduct.click();

            const productDetailsSection = desktopPage.getByTestId("product-details-section").first();
            await productDetailsSection.waitFor({state: "visible"});
            await expect(productDetailsSection).toBeVisible({timeout: 10000});

            leftColumn = desktopPage.getByTestId("product-details-left-column").first();
            await leftColumn.waitFor({state: "visible"});
            await expect(leftColumn).toBeVisible({timeout: 3000});

            rightColumn = desktopPage.getByTestId("product-details-right-column").first();
            await rightColumn.waitFor({state: "visible"});
            await expect(rightColumn).toBeVisible({timeout: 3000});
        });

        test.describe("left column", () => {
            test("render product details header with product name", async () => {
                const headerTitle = leftColumn.getByTestId("header-title").first();
                await headerTitle.waitFor({state: "visible"});
                await expect(headerTitle).toBeVisible({timeout: 3000});

                const headerTitleText = await headerTitle.textContent();
                await expect(headerTitleText).not.toBeNull();
                await expect(headerTitleText).not.toBe("");
                await expect(headerTitleText).not.toBeUndefined();
            });

            test("render product images with the navigation and thumbnails", async () => {
                const imagesViewerCard = leftColumn.getByTestId("images-viewer-card");
                await imagesViewerCard.waitFor({state: "visible"});
                await expect(imagesViewerCard).toBeVisible({timeout: 3000});

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                const imagesViewerCardRightArrow = leftColumn.locator('[data-testid="images-viewer-card-right-arrow"]:visible').first();
                await imagesViewerCardRightArrow.waitFor({state: "visible"});
                await expect(imagesViewerCardRightArrow).toBeVisible({timeout: 3000});

                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);
            });

            test("should open image dialog when image is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container").first();
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const imageViewerDialogContainerBefore = desktopPage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await expect(imageViewerDialogContainerBefore).not.toBeVisible();

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});
                await currentImageButton.click();

                const imageViewerDialogContainerAfter = desktopPage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await imageViewerDialogContainerAfter.waitFor({state: "visible"});
                await expect(imageViewerDialogContainerAfter).toBeVisible({timeout: 3000});

                const imageViewerDialogContent = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-content").first();
                await imageViewerDialogContent.waitFor({state: "visible"});
                await expect(imageViewerDialogContent).toBeVisible({timeout: 3000});

                const fullImage = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-full-image").first();
                await fullImage.waitFor({state: "visible"});
                await expect(fullImage).toBeVisible({timeout: 3000});

                const fullImageCloseButton = desktopPage.locator('[data-testid="image-viewer-dialog-full-image-close-button"]').first();
                await fullImageCloseButton.waitFor({state: "visible"});
                await expect(fullImageCloseButton).toBeVisible({timeout: 3000});
                await fullImageCloseButton.click();

                await expect(imageViewerDialogContainerAfter).not.toBeVisible({timeout: 3000});
            });

            test("display product description and description details", async () => {
                const productDescription = leftColumn.getByTestId("product-description");
                await productDescription.waitFor({state: "visible"});
                await expect(productDescription).toBeVisible({timeout: 3000});

                const productDescriptionText = await productDescription.textContent();
                expect(productDescriptionText).not.toBeNull();
                expect(productDescriptionText).not.toBe("");
                expect(productDescriptionText).not.toBeUndefined();

                const productDetailedDescription = leftColumn.getByTestId("product-detailed-description");
                await productDetailedDescription.waitFor({state: "visible"});
                await expect(productDetailedDescription).toBeVisible({timeout: 3000});

                const productDetailedDescriptionText = await productDetailedDescription.textContent();
                expect(productDetailedDescriptionText).not.toBeNull();
                expect(productDetailedDescriptionText).not.toBe("");
                expect(productDetailedDescriptionText).not.toBeUndefined();
            });

            test("should change each image when thumbnail is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);

                let currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                for (let i = 0; i < thumbnailsCount; i++) {
                    const thumbnail = imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').nth(i);
                    await thumbnail.waitFor({state: "visible"});
                    await expect(thumbnail).toBeVisible({timeout: 3000});
                    await thumbnail.click();

                    currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                    await currentImageButton.waitFor({state: "visible"});
                    await expect(currentImageButton).toBeVisible({timeout: 3000});
                }
            });

            test("display share button and after click copies correct address", async () => {
                const shareButton = leftColumn.getByTestId("share-button");
                await shareButton.waitFor({state: "visible"});
                await expect(shareButton).toBeVisible({timeout: 3000});
                await shareButton.click();

                const clipboardText = await desktopPage.evaluate(() => navigator.clipboard.readText())

                const expectedUrl = await desktopPage.url();
                expect(clipboardText).toBe(expectedUrl);
            });
        });

        test.describe("right column", () => {
            test.describe("common elements", () => {
                test("display else logo in the right column", async () => {
                    const elseLogo = rightColumn.getByTestId("else-logo").first();
                    await elseLogo.waitFor({state: "visible"});
                    await expect(elseLogo).toBeVisible({timeout: 3000});
                    await expect(elseLogo).toHaveAttribute("src");
                });
            });

            test.describe("english version", () => {
                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in english and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Manufacturer:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in english and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Categories:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in english and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tags:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in english and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Do you have questions about this product?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in english and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Related Products");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });

            test.describe("polish version", () => {
                test.beforeEach(async ({browser}) => {
                    desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");
                    await navigateToPressureVehicleProductsPageOnDesktop(desktopPage, Language.PL);

                    const productsGrid = desktopPage.getByTestId("products-grid-container").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible({timeout: 3000});

                    const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    const firstSelectedProduct = desktopPage.getByTestId("product-link").first();
                    await firstSelectedProduct.waitFor({state: "visible"});
                    await expect(firstSelectedProduct).toBeVisible({timeout: 3000});
                    await firstSelectedProduct.click();

                    const productDetailsSection = desktopPage.getByTestId("product-details-section").first();
                    await productDetailsSection.waitFor({state: "visible"});
                    await expect(productDetailsSection).toBeVisible({timeout: 3000});

                    leftColumn = desktopPage.getByTestId("product-details-left-column").first();
                    await leftColumn.waitFor({state: "visible"});
                    await expect(leftColumn).toBeVisible({timeout: 3000});

                    rightColumn = desktopPage.getByTestId("product-details-right-column").first();
                    await rightColumn.waitFor({state: "visible"});
                    await expect(rightColumn).toBeVisible({timeout: 3000});
                });

                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in polish and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Producent:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in polish and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Kategorie:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in polish and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tagi:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in polish and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Masz pytania odnośnie produktu?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in polish and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Powiązane produkty");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });
        });
    });

    test.describe("tablet version", () => {
        let tabletPage: Page;
        let leftColumn: Locator;
        let rightColumn: Locator;

        test.beforeAll(async ({browser}) => {
            tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser);
            await navigateToPressureVehiclesProductsPageOnTablet(tabletPage);

            const productsGrid = tabletPage.getByTestId("products-grid").first();
            await productsGrid.waitFor({state: "visible"});
            await expect(productsGrid).toBeVisible({timeout: 10000});

            const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
            expect(productsCount).not.toBe(0);

            const firstSelectedProduct = tabletPage.getByTestId("product-link").first();
            await firstSelectedProduct.waitFor({state: "visible"});
            await expect(firstSelectedProduct).toBeVisible({timeout: 5000});
            await firstSelectedProduct.click();

            const productDetailsSection = tabletPage.getByTestId("product-details-section").first();
            await productDetailsSection.waitFor({state: "visible"});
            await expect(productDetailsSection).toBeVisible({timeout: 3000});

            leftColumn = tabletPage.getByTestId("product-details-left-column").first();
            await leftColumn.waitFor({state: "visible"});
            await expect(leftColumn).toBeVisible({timeout: 3000});

            rightColumn = tabletPage.getByTestId("product-details-right-column").first();
            await rightColumn.waitFor({state: "visible"});
            await expect(rightColumn).toBeVisible({timeout: 3000});
        });

        test.describe("left column", () => {
            test("render product details header with product name", async () => {
                const headerTitle = leftColumn.getByTestId("header-title").first();
                await headerTitle.waitFor({state: "visible"});
                await expect(headerTitle).toBeVisible({timeout: 3000});

                const headerTitleText = await headerTitle.textContent();
                await expect(headerTitleText).not.toBeNull();
                await expect(headerTitleText).not.toBe("");
                await expect(headerTitleText).not.toBeUndefined();
            });

            test("render product images with the navigation and thumbnails", async () => {
                const imagesViewerCard = leftColumn.getByTestId("images-viewer-card");
                await imagesViewerCard.waitFor({state: "visible"});
                await expect(imagesViewerCard).toBeVisible({timeout: 3000});

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                const imagesViewerCardRightArrow = leftColumn.locator('[data-testid="images-viewer-card-right-arrow"]:visible').first();
                await imagesViewerCardRightArrow.waitFor({state: "visible"});
                await expect(imagesViewerCardRightArrow).toBeVisible({timeout: 3000});

                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);
            });

            test("should open image dialog when image is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container").first();
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const imageViewerDialogContainerBefore = tabletPage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await expect(imageViewerDialogContainerBefore).not.toBeVisible();

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});
                await currentImageButton.click();

                const imageViewerDialogContainerAfter = tabletPage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await imageViewerDialogContainerAfter.waitFor({state: "visible"});
                await expect(imageViewerDialogContainerAfter).toBeVisible({timeout: 3000});

                const imageViewerDialogContent = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-content").first();
                await imageViewerDialogContent.waitFor({state: "visible"});
                await expect(imageViewerDialogContent).toBeVisible({timeout: 3000});

                const fullImage = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-full-image").first();
                await fullImage.waitFor({state: "visible"});
                await expect(fullImage).toBeVisible({timeout: 3000});

                const fullImageCloseButton = tabletPage.locator('[data-testid="image-viewer-dialog-full-image-close-button"]').first();
                await fullImageCloseButton.waitFor({state: "visible"});
                await expect(fullImageCloseButton).toBeVisible({timeout: 3000});
                await fullImageCloseButton.click();

                await expect(imageViewerDialogContainerAfter).not.toBeVisible({timeout: 3000});
            });

            test("display product description and description details", async () => {
                const productDescription = leftColumn.getByTestId("product-description");
                await productDescription.waitFor({state: "visible"});
                await expect(productDescription).toBeVisible({timeout: 3000});

                const productDescriptionText = await productDescription.textContent();
                expect(productDescriptionText).not.toBeNull();
                expect(productDescriptionText).not.toBe("");
                expect(productDescriptionText).not.toBeUndefined();

                const productDetailedDescription = leftColumn.getByTestId("product-detailed-description");
                await productDetailedDescription.waitFor({state: "visible"});
                await expect(productDetailedDescription).toBeVisible({timeout: 3000});

                const productDetailedDescriptionText = await productDetailedDescription.textContent();
                expect(productDetailedDescriptionText).not.toBeNull();
                expect(productDetailedDescriptionText).not.toBe("");
                expect(productDetailedDescriptionText).not.toBeUndefined();
            });

            test("should change each image when thumbnail is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);

                let currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                for (let i = 0; i < thumbnailsCount; i++) {
                    const thumbnail = imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').nth(i);
                    await thumbnail.waitFor({state: "visible"});
                    await expect(thumbnail).toBeVisible({timeout: 3000});
                    await thumbnail.click();

                    currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                    await currentImageButton.waitFor({state: "visible"});
                    await expect(currentImageButton).toBeVisible({timeout: 3000});
                }
            });

            test("display share button and after click copies correct address", async () => {
                const shareButton = leftColumn.getByTestId("share-button");
                await shareButton.waitFor({state: "visible"});
                await expect(shareButton).toBeVisible({timeout: 3000});
                await shareButton.click();

                const clipboardText = await tabletPage.evaluate(() => navigator.clipboard.readText())

                const expectedUrl = await tabletPage.url();
                expect(clipboardText).toBe(expectedUrl);
            });
        });

        test.describe("right column", () => {
            test.describe("common elements", () => {
                test("display else logo in the right column", async () => {
                    const elseLogo = rightColumn.getByTestId("else-logo").first();
                    await elseLogo.waitFor({state: "visible"});
                    await expect(elseLogo).toBeVisible({timeout: 3000});
                    await expect(elseLogo).toHaveAttribute("src");
                });
            });

            test.describe("english version", () => {
                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in english and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Manufacturer:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in english and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Categories:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in english and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tags:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in english and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Do you have questions about this product?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in english and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Related Products");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });

            test.describe("polish version", () => {
                let tabletPage: Page;
                let leftColumn: Locator;
                let rightColumn: Locator;

                test.beforeEach(async ({browser}) => {
                    tabletPage = await openMainPageOnTabletAndCloseConsentPopup(browser, "pl-PL");
                    await navigateToMillingRobotsProductsPageOnTablet(tabletPage, Language.PL);

                    const productsGrid = tabletPage.getByTestId("products-grid").first();
                    await productsGrid.waitFor({state: "visible"});
                    await expect(productsGrid).toBeVisible({timeout: 10000});

                    const productsCount = await tabletPage.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    const firstSelectedProduct = tabletPage.getByTestId("product-link").first();
                    await firstSelectedProduct.waitFor({state: "visible"});
                    await expect(firstSelectedProduct).toBeVisible({timeout: 5000});
                    await firstSelectedProduct.click();

                    const productDetailsSection = tabletPage.getByTestId("product-details-section").first();
                    await productDetailsSection.waitFor({state: "visible"});
                    await expect(productDetailsSection).toBeVisible({timeout: 3000});

                    leftColumn = tabletPage.getByTestId("product-details-left-column").first();
                    await leftColumn.waitFor({state: "visible"});
                    await expect(leftColumn).toBeVisible({timeout: 3000});

                    rightColumn = tabletPage.getByTestId("product-details-right-column").first();
                    await rightColumn.waitFor({state: "visible"});
                    await expect(rightColumn).toBeVisible({timeout: 3000});
                });

                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in polish and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Producent:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in polish and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Kategorie:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in polish and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tagi:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in polish and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Masz pytania odnośnie produktu?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in polish and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Powiązane produkty");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });
        });
    });

    test.describe("mobile version", () => {
        let mobilePage: Page;
        let leftColumn: Locator;
        let rightColumn: Locator;

        test.beforeAll(async ({ browser }) => {
            mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser);
            await navigateToPressureVehiclesProductsPageOnMobileAndCloseMenu(mobilePage);

            const mobileMillingRobotContainer = mobilePage.getByTestId("water-sewage-product-mobile-layout-container-pressure-vehicles").first();
            await mobileMillingRobotContainer.waitFor({state: "visible"});
            await expect(mobileMillingRobotContainer).toBeVisible({timeout: 10000});

            const productsGridContainer = mobileMillingRobotContainer.getByTestId("products-grid-container").first();
            await productsGridContainer.waitFor({state: "visible"});
            await expect(productsGridContainer).toBeVisible({timeout: 3000});

            const productsCount = productsGridContainer.locator('[data-testid="product-link"]:visible').count();
            expect(productsCount).not.toBe(0);

            const firstSelectedProduct = productsGridContainer.locator('[data-testid="product-link"]:visible').first();
            await firstSelectedProduct.waitFor({state: "visible"});
            await expect(firstSelectedProduct).toBeVisible({timeout: 3000});
            await firstSelectedProduct.click();

            const productDetailsSection = mobilePage.getByTestId("product-details-section").first();
            await productDetailsSection.waitFor({state: "visible"});
            await expect(productDetailsSection).toBeVisible({timeout: 10000});

            leftColumn = mobilePage.getByTestId("product-details-left-column").first();
            await leftColumn.waitFor({state: "visible"});
            await expect(leftColumn).toBeVisible({timeout: 3000});

            rightColumn = mobilePage.getByTestId("product-details-right-column").first();
            await rightColumn.waitFor({state: "visible"});
            await expect(rightColumn).toBeVisible({timeout: 3000});
        });

        test.describe("left column", () => {
            test("render product details header with product name", async () => {
                const headerTitle = leftColumn.getByTestId("header-title").first();
                await headerTitle.waitFor({state: "visible"});
                await expect(headerTitle).toBeVisible({timeout: 3000});

                const headerTitleText = await headerTitle.textContent();
                await expect(headerTitleText).not.toBeNull();
                await expect(headerTitleText).not.toBe("");
                await expect(headerTitleText).not.toBeUndefined();
            });

            test("render product images with the navigation and thumbnails", async () => {
                const imagesViewerCard = leftColumn.getByTestId("images-viewer-card");
                await imagesViewerCard.waitFor({state: "visible"});
                await expect(imagesViewerCard).toBeVisible({timeout: 3000});

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                const imagesViewerCardRightArrow = leftColumn.locator('[data-testid="images-viewer-card-right-arrow"]:visible').first();
                await imagesViewerCardRightArrow.waitFor({state: "visible"});
                await expect(imagesViewerCardRightArrow).toBeVisible({timeout: 3000});

                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);
            });

            test("should open image dialog when image is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container").first();
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const imageViewerDialogContainerBefore = mobilePage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await expect(imageViewerDialogContainerBefore).not.toBeVisible();

                const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});
                await currentImageButton.click();

                const imageViewerDialogContainerAfter = mobilePage.locator('[data-testid="image-viewer-dialog-container"]').first();
                await imageViewerDialogContainerAfter.waitFor({state: "visible"});
                await expect(imageViewerDialogContainerAfter).toBeVisible({timeout: 3000});

                const imageViewerDialogContent = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-content").first();
                await imageViewerDialogContent.waitFor({state: "visible"});
                await expect(imageViewerDialogContent).toBeVisible({timeout: 3000});

                const fullImage = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-full-image").first();
                await fullImage.waitFor({state: "visible"});
                await expect(fullImage).toBeVisible({timeout: 3000});

                const fullImageCloseButton = mobilePage.locator('[data-testid="image-viewer-dialog-full-image-close-button"]').first();
                await fullImageCloseButton.waitFor({state: "visible"});
                await expect(fullImageCloseButton).toBeVisible({timeout: 3000});
                await fullImageCloseButton.click();

                await expect(imageViewerDialogContainerAfter).not.toBeVisible({timeout: 3000});
            });

            test("display product description and description details", async () => {
                const productDescription = leftColumn.getByTestId("product-description");
                await productDescription.waitFor({state: "visible"});
                await expect(productDescription).toBeVisible({timeout: 3000});

                const productDescriptionText = await productDescription.textContent();
                expect(productDescriptionText).not.toBeNull();
                expect(productDescriptionText).not.toBe("");
                expect(productDescriptionText).not.toBeUndefined();

                const productDetailedDescription = leftColumn.getByTestId("product-detailed-description");
                await productDetailedDescription.waitFor({state: "visible"});
                await expect(productDetailedDescription).toBeVisible({timeout: 3000});

                const productDetailedDescriptionText = await productDetailedDescription.textContent();
                expect(productDetailedDescriptionText).not.toBeNull();
                expect(productDetailedDescriptionText).not.toBe("");
                expect(productDetailedDescriptionText).not.toBeUndefined();
            });

            test("should change each image when thumbnail is clicked", async () => {
                const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
                await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
                await expect(imagesViewerCardThumbnailsContainer).toBeVisible({timeout: 3000});

                const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
                expect(thumbnailsCount).not.toBe(0);

                let currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                await currentImageButton.waitFor({state: "visible"});
                await expect(currentImageButton).toBeVisible({timeout: 3000});

                for (let i = 0; i < thumbnailsCount; i++) {
                    const thumbnail = imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').nth(i);
                    await thumbnail.waitFor({state: "visible"});
                    await expect(thumbnail).toBeVisible({timeout: 3000});
                    await thumbnail.click();

                    currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
                    await currentImageButton.waitFor({state: "visible"});
                    await expect(currentImageButton).toBeVisible({timeout: 3000});
                }
            });

            test("display share button and after click copies correct address", async () => {
                const shareButton = leftColumn.getByTestId("share-button");
                await shareButton.waitFor({state: "visible"});
                await expect(shareButton).toBeVisible({timeout: 3000});
                await shareButton.click();

                const clipboardText = await mobilePage.evaluate(() => navigator.clipboard.readText())

                const expectedUrl = await mobilePage.url();
                expect(clipboardText).toBe(expectedUrl);
            });
        });

        test.describe("right column", () => {
            test.describe("common elements", () => {
                test("display else logo in the right column", async () => {
                    const elseLogo = rightColumn.getByTestId("else-logo").first();
                    await elseLogo.waitFor({state: "visible"});
                    await expect(elseLogo).toBeVisible({timeout: 3000});
                    await expect(elseLogo).toHaveAttribute("src");
                });
            });

            test.describe("english version", () => {
                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in english and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Manufacturer:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in english and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Categories:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in english and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tags:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in english and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Do you have questions about this product?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in english and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Related Products");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });

            test.describe("polish version", () => {

                test.beforeAll(async ({ browser }) => {
                    mobilePage = await openMainPageOnMobileAndCloseConsentPopup(browser, "pl-PL");
                    await navigateToPressureVehiclesProductsPageOnMobileAndCloseMenu(mobilePage, Language.PL);

                    const mobileCamerasContainer = mobilePage.getByTestId("water-sewage-product-mobile-layout-container-pressure-vehicles").first();
                    await mobileCamerasContainer.waitFor({state: "visible"});
                    await expect(mobileCamerasContainer).toBeVisible({timeout: 5000});

                    const productsGridContainer = mobileCamerasContainer.getByTestId("products-grid-container").first();
                    await productsGridContainer.waitFor({state: "visible"});
                    await expect(productsGridContainer).toBeVisible({timeout: 3000});

                    const productsCount = productsGridContainer.locator('[data-testid="product-link"]:visible').count();
                    expect(productsCount).not.toBe(0);

                    const firstSelectedProduct = productsGridContainer.locator('[data-testid="product-link"]:visible').first();
                    await firstSelectedProduct.waitFor({state: "visible"});
                    await expect(firstSelectedProduct).toBeVisible({timeout: 3000});
                    await firstSelectedProduct.click();

                    const productDetailsSection = mobilePage.getByTestId("product-details-section").first();
                    await productDetailsSection.waitFor({state: "visible"});
                    await expect(productDetailsSection).toBeVisible({timeout: 3000});

                    leftColumn = mobilePage.getByTestId("product-details-left-column").first();
                    await leftColumn.waitFor({state: "visible"});
                    await expect(leftColumn).toBeVisible({timeout: 3000});

                    rightColumn = mobilePage.getByTestId("product-details-right-column").first();
                    await rightColumn.waitFor({state: "visible"});
                    await expect(rightColumn).toBeVisible({timeout: 3000});
                });

                // turn on after adding manufacturers to each camera product
                test.skip("display manufacturer card with manufacturer name in polish and link", async () => {
                    const manufacturerContainer = rightColumn.getByTestId("manufacturer-card-container").first();
                    await manufacturerContainer.waitFor({state: "visible"});
                    await expect(manufacturerContainer).toBeVisible({timeout: 3000});

                    const manufacturerCardTitle = manufacturerContainer.getByTestId("manufacturer-card-title").first();
                    await manufacturerCardTitle.waitFor({state: "visible"});
                    await expect(manufacturerCardTitle).toBeVisible({timeout: 3000});

                    const manufacturerCardTitleText = await manufacturerCardTitle.textContent();
                    expect(manufacturerCardTitleText).toBe("Producent:");

                    const manufacturerNameCard = manufacturerContainer.getByTestId("manufacturer-name-card").first();
                    await manufacturerNameCard.waitFor({state: "visible"});
                    await expect(manufacturerNameCard).toBeVisible({timeout: 3000});

                    const manufacturerLogo = manufacturerNameCard.getByTestId("manufacturer-logo").first();
                    await manufacturerLogo.waitFor({state: "visible"});
                    await expect(manufacturerLogo).toBeVisible({timeout: 3000});
                    await expect(manufacturerLogo).toHaveAttribute("src");

                    const manufacturerLink = manufacturerNameCard.getByTestId("manufacturer-link").first();
                    await manufacturerLink.waitFor({state: "visible"});
                    await expect(manufacturerLink).toBeVisible({timeout: 3000});
                    await expect(manufacturerLink).toHaveAttribute("href");
                });

                test("display category card with title in polish and category links", async () => {
                    const categoryCardContainer = rightColumn.getByTestId("category-card-container").first();
                    await categoryCardContainer.waitFor({state: "visible"});
                    await expect(categoryCardContainer).toBeVisible({timeout: 3000});

                    const categoryCardTitle = categoryCardContainer.getByTestId("category-card-title").first();
                    await categoryCardTitle.waitFor({state: "visible"});
                    await expect(categoryCardTitle).toBeVisible({timeout: 3000});

                    const categoryCardTitleText = await categoryCardTitle.textContent();
                    expect(categoryCardTitleText).toBe("Kategorie:");

                    const categoryCardLink = categoryCardContainer.getByTestId("category-card-link").first();
                    await categoryCardLink.waitFor({state: "visible"});
                    await expect(categoryCardLink).toBeVisible({timeout: 3000});
                    await expect(categoryCardLink).toHaveAttribute("href");

                    const categoryCardLinkText = await categoryCardLink.textContent();
                    expect(categoryCardLinkText).not.toBeNull();
                    expect(categoryCardLinkText).not.toBe("");
                    expect(categoryCardLinkText).not.toBeUndefined();
                });

                test("display tags card with title in polish and tag links", async () => {
                    const tagsCardContainer = rightColumn.getByTestId("tags-card-container").first();
                    await tagsCardContainer.waitFor({state: "visible"});
                    await expect(tagsCardContainer).toBeVisible({timeout: 3000});

                    const tagsCardTitle = tagsCardContainer.getByTestId("tags-card-title").first();
                    await tagsCardTitle.waitFor({state: "visible"});
                    await expect(tagsCardTitle).toBeVisible({timeout: 3000});

                    const tagsCardTitleText = await tagsCardTitle.textContent();
                    expect(tagsCardTitleText).toBe("Tagi:");

                    const tagsCardLinkCount = await tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').count();
                    expect(tagsCardLinkCount).not.toBe(0);

                    for (let i = 0; i < tagsCardLinkCount; i++) {
                        const tagCardLink = tagsCardContainer.locator('[data-testid="tags-card-link"]:visible').nth(i);
                        await tagCardLink.waitFor({state: "visible"});
                        await expect(tagCardLink).toHaveAttribute("href");
                        const tagCardLinkText = await tagCardLink.textContent();
                        expect(tagCardLinkText).not.toBeNull();
                        expect(tagCardLinkText).not.toBeUndefined();
                        expect(tagCardLinkText).not.toBe("");
                    }
                });

                test("display contact us card with correct title in polish and link", async () => {
                    const contactUsCardContainer = rightColumn.getByTestId("contact-us-card-container").first();
                    await contactUsCardContainer.waitFor({state: "visible"});
                    await expect(contactUsCardContainer).toBeVisible({timeout: 3000});

                    const contactUsCardTitle = contactUsCardContainer.getByTestId("contact-us-card-title").first();
                    await contactUsCardTitle.waitFor({state: "visible"});
                    await expect(contactUsCardTitle).toBeVisible({timeout: 3000});

                    const contactUsCardTitleText = await contactUsCardTitle.textContent();
                    expect(contactUsCardTitleText).toBe("Masz pytania odnośnie produktu?");

                    const contactUsCardLink = contactUsCardContainer.locator('[data-testid="contact-us-card-link"]:visible').first();
                    await contactUsCardLink.waitFor({state: "visible"});
                    await expect(contactUsCardLink).toBeVisible({timeout: 3000});
                    await expect(contactUsCardLink).toHaveAttribute("href");

                    const link = await contactUsCardLink.getAttribute("href");
                    expect(link).toBe("/contact");
                });

                test("display recommended products card with correct title in polish and products to recommend with image and link", async () => {
                    const recommendedProductsCardContainer = rightColumn.getByTestId("recommended-products-card-container").first();
                    await recommendedProductsCardContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsCardContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsContainer = recommendedProductsCardContainer.getByTestId("recommended-products-container").first();
                    await recommendedProductsContainer.waitFor({state: "visible"});
                    await expect(recommendedProductsContainer).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitle = recommendedProductsCardContainer.getByTestId("recommended-products-card-title").first();
                    await recommendedProductsCardTitle.waitFor({state: "visible"});
                    await expect(recommendedProductsCardTitle).toBeVisible({timeout: 3000});

                    const recommendedProductsCardTitleText = await recommendedProductsCardTitle.textContent();
                    expect(recommendedProductsCardTitleText).toBe("Powiązane produkty");

                    const recommendedProductLinkCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-link"]:visible').count();
                    expect(recommendedProductLinkCount).not.toBe(0);

                    const recommendedProductImageCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-image"]:visible').count();
                    expect(recommendedProductImageCount).not.toBe(0);

                    const recommendedProductHeaderCount = await recommendedProductsContainer.locator('[data-testid="recommended-product-header"]:visible').count();
                    expect(recommendedProductHeaderCount).not.toBe(0);

                    expect(recommendedProductLinkCount).toEqual(recommendedProductImageCount);
                    expect(recommendedProductLinkCount).toEqual(recommendedProductHeaderCount);
                });
            });
        });
    });
});
