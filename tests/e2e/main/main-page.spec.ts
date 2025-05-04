import {expect, Page, test} from "@playwright/test";
import { openMainPageOnDesktopAndCloseConsentPopup } from "../utils/openMainPageOnDesktop";

test.describe("main page suite", () => {
   test.describe("desktop version", () => {
     let desktopPage: Page;

     test.beforeEach(async ({browser}) => {
       desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser);
     });

     test("display department cards with correct header text, department cards with correct text in english", async () => {
         const headerTitle = desktopPage.getByTestId("header-title");
         await expect(headerTitle).toHaveText("WHAT DO WE DO?");

         const departmentsCardsContainer = desktopPage.getByTestId("main-departments-cards");
         await expect(departmentsCardsContainer).toBeVisible();

         const departmentCard1 = desktopPage.getByTestId("department-card-0");
         const departmentCard2 = desktopPage.getByTestId("department-card-1");
         await expect(departmentCard1).toBeVisible();
         await expect(departmentCard2).toBeVisible();

         const departmentCard1Title = desktopPage.getByTestId("department-card-title-0");
         const departmentCard2Title = desktopPage.getByTestId("department-card-title-1");
         await expect(departmentCard1Title).toHaveText("WATER AND SEWAGE DEPARTMENT");
         await expect(departmentCard2Title).toHaveText("MARITIME DEPARTMENT");

         const departmentCard1Description = desktopPage.getByTestId("department-card-description-0");
         const departmentCard2Description = desktopPage.getByTestId("department-card-description-1");
         await expect(departmentCard1Description).toHaveText("Delivery of specialized devices and systems for water and sewage networks, user training, warranty and post-warranty service.");
         await expect(departmentCard2Description).toHaveText("Equipping ships, vessels, coastal stations, aircraft, and helicopters with radio and navigation devices.");

         const departmentCard1Link = desktopPage.getByTestId("check-button-water-and-sewage");
         const departmentCard2Link = desktopPage.getByTestId("check-button-maritime");
         await expect(departmentCard1Link).toHaveAttribute("href", "/about/departments/water-and-sewage");
         await expect(departmentCard2Link).toHaveAttribute("href", "/about/departments/maritime");
     });

     test("display department cards with correct header text, department cards with correct text in polish", async ({browser}) => {
         desktopPage = await openMainPageOnDesktopAndCloseConsentPopup(browser, "pl-PL");

         const headerTitle = desktopPage.getByTestId("header-title");
         await expect(headerTitle).toHaveText("CZYM SIĘ ZAJMUJEMY?");

         const departmentsCardsContainer = desktopPage.getByTestId("main-departments-cards");
         await expect(departmentsCardsContainer).toBeVisible();

         const departmentCard1 = desktopPage.getByTestId("department-card-0");
         const departmentCard2 = desktopPage.getByTestId("department-card-1");
         await expect(departmentCard1).toBeVisible();
         await expect(departmentCard2).toBeVisible();

         const departmentCard1Title = desktopPage.getByTestId("department-card-title-0");
         const departmentCard2Title = desktopPage.getByTestId("department-card-title-1");
         await expect(departmentCard1Title).toHaveText("DZIAŁ WOD-KAN");
         await expect(departmentCard2Title).toHaveText("DZIAŁ MORSKI");

         const departmentCard1Description = desktopPage.getByTestId("department-card-description-0");
         const departmentCard2Description = desktopPage.getByTestId("department-card-description-1");
         await expect(departmentCard1Description).toHaveText("Dostawa specjalistycznych urządzeń i systemów dla sieci wod-kan, szkolenia z obsługi, serwis gwarancyjny i pogwarancyjny.");
         await expect(departmentCard2Description).toHaveText("Wyposazenie statków, okrętów, stacji brzegowych, statków powietrznych, śmigłowców w urządzenia radiowe i nawigacyjne.");

         const departmentCard1Link = desktopPage.getByTestId("check-button-water-and-sewage");
         const departmentCard2Link = desktopPage.getByTestId("check-button-maritime");
         await expect(departmentCard1Link).toHaveAttribute("href", "/about/departments/water-and-sewage");
         await expect(departmentCard2Link).toHaveAttribute("href", "/about/departments/maritime");
     })
   });
});