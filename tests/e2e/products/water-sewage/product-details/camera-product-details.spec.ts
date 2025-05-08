import {expect, Locator, Page, test} from "@playwright/test";
import {openMainPageOnDesktopAndCloseConsentPopup} from "../../../utils/openMainPageOnDesktop";
import {navigateToCameraProductsPageOnDesktop} from "../../../utils/navigation/navigateProductsMenuOnDesktop";

test.describe("camera product details suite", () => {
   test.describe("desktop version", () => {
      let desktopPage: Page;
      let leftColumn: Locator;

      test.beforeEach(async ({browser}) => {
         desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
         await navigateToCameraProductsPageOnDesktop(desktopPage);

         const productsGrid = desktopPage.getByTestId("products-grid-container").first();
         await productsGrid.waitFor({state: "visible"});
         await expect(productsGrid).toBeVisible({ timeout: 3000 });

         const productsCount = await desktopPage.locator('[data-testid="product-link"]:visible').count();
         expect(productsCount).not.toBe(0);

         const firstSelectedProduct = desktopPage.getByTestId("product-link").first();
         await firstSelectedProduct.waitFor({state: "visible"});
         await expect(firstSelectedProduct).toBeVisible({ timeout: 3000 });
         await firstSelectedProduct.click();

         const productDetailsSection = desktopPage.getByTestId("product-details-section").first();
         await productDetailsSection.waitFor({state: "visible"});
         await expect(productDetailsSection).toBeVisible({ timeout: 3000 });

         leftColumn = desktopPage.getByTestId("product-details-left-column").first();
         await leftColumn.waitFor({state: "visible"});
         await expect(leftColumn).toBeVisible({ timeout: 3000 });
      });

      test("render product details header with product name", async () => {
         const headerTitle = leftColumn.getByTestId("header-title");
         await headerTitle.waitFor({state: "visible"});
         await expect(headerTitle).toBeVisible({ timeout: 3000 });

         const headerTitleText = await headerTitle.textContent();
         await expect(headerTitleText).not.toBeNull();
         await expect(headerTitleText).not.toBe("");
         await expect(headerTitleText).not.toBeUndefined();
      });

      test("render product images with the navigation and thumbnails", async () => {
         const imagesViewerCard = leftColumn.getByTestId("images-viewer-card");
         await imagesViewerCard.waitFor({state: "visible"});
         await expect(imagesViewerCard).toBeVisible({ timeout: 3000 });

         const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
         await currentImageButton.waitFor({state: "visible"});
         await expect(currentImageButton).toBeVisible({ timeout: 3000 });

         const imagesViewerCardRightArrow = leftColumn.locator('[data-testid="images-viewer-card-right-arrow"]:visible').first();
         await imagesViewerCardRightArrow.waitFor({state: "visible"});
         await expect(imagesViewerCardRightArrow).toBeVisible({ timeout: 3000 });

         const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
         await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
         await expect(imagesViewerCardThumbnailsContainer).toBeVisible({ timeout: 3000 });

         const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
         expect(thumbnailsCount).not.toBe(0);
      });

      test("should change each image when thumbnail is clicked", async () => {
         const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container");
         await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
         await expect(imagesViewerCardThumbnailsContainer).toBeVisible({ timeout: 3000 });

         const thumbnailsCount = await imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').count();
         expect(thumbnailsCount).not.toBe(0);

         let currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
         await currentImageButton.waitFor({state: "visible"});
         await expect(currentImageButton).toBeVisible({ timeout: 3000 });

         for (let i = 0; i < thumbnailsCount; i++) {
            const thumbnail = imagesViewerCardThumbnailsContainer.locator('[data-testid="images-viewer-card-thumbnail-button"]:visible').nth(i);
            await thumbnail.waitFor({state: "visible"});
            await expect(thumbnail).toBeVisible({ timeout: 3000 });
            await thumbnail.click();

            currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
            await currentImageButton.waitFor({state: "visible"});
            await expect(currentImageButton).toBeVisible({ timeout: 3000 });
         }
      });

      test("should open image dialog when image is clicked", async () => {
         const imagesViewerCardThumbnailsContainer = leftColumn.getByTestId("images-viewer-card-thumbnails-container").first();
         await imagesViewerCardThumbnailsContainer.waitFor({state: "visible"});
         await expect(imagesViewerCardThumbnailsContainer).toBeVisible({ timeout: 3000 });

         const imageViewerDialogContainerBefore = desktopPage.locator('[data-testid="image-viewer-dialog-container"]').first();
         await expect(imageViewerDialogContainerBefore).not.toBeVisible();

         const currentImageButton = leftColumn.locator('[data-testid="images-viewer-card-current-image-button"]:visible').first();
         await currentImageButton.waitFor({state: "visible"});
         await expect(currentImageButton).toBeVisible({ timeout: 3000 });
         await currentImageButton.click();

         const imageViewerDialogContainerAfter = desktopPage.locator('[data-testid="image-viewer-dialog-container"]').first();
         await imageViewerDialogContainerAfter.waitFor({ state: "visible" });
         await expect(imageViewerDialogContainerAfter).toBeVisible({ timeout: 3000 });

         const imageViewerDialogContent = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-content").first();
         await imageViewerDialogContent.waitFor({ state: "visible" });
         await expect(imageViewerDialogContent).toBeVisible({ timeout: 3000 });

         const fullImage = imageViewerDialogContainerAfter.getByTestId("image-viewer-dialog-full-image").first();
         await fullImage.waitFor({ state: "visible" });
         await expect(fullImage).toBeVisible({ timeout: 3000 });

         const fullImageCloseButton = desktopPage.locator('[data-testid="image-viewer-dialog-full-image-close-button"]').first();
         await fullImageCloseButton.waitFor({ state: "visible" });
         await expect(fullImageCloseButton).toBeVisible({ timeout: 3000 });
         await fullImageCloseButton.click();

         await expect(imageViewerDialogContainerAfter).not.toBeVisible({ timeout: 3000 });
      });
   });
});