import {render, screen, cleanup} from "@testing-library/react";
import {LanguageProvider} from "../../../../context/src/LanguageContext";
import DepartmentCard from "../../../src/common/cards/department-card";
import {Department, Language} from "../../../src/types";
import {StaticImageData} from "next/image";
import CheckButton, {CheckButtonProps} from "../../../src/common/buttons/check-button";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));


describe("Department card", () => {
    afterEach(cleanup);
    it(
        "should render department card with correct content in polish", () => {

            const staticImageData: StaticImageData = {
                src: "./image.webp",
                height: 100,
                width: 100,
                blurDataURL: ""
            }

            const departmentDetails: Department = {
                img: staticImageData,
                altPL: "Obraz w języku polskim",
                altENG: "Image in English",
                titlePL: "Tytuł w języku polskim",
                titleENG: "Title in English",
                descriptionPL: "Opis w języku polskim",
                descriptionENG: "Description in English",
                link: "Dowiedz się więcej"
            };

            const buttonProps: CheckButtonProps = {
                children: "Dowiedz sie więcej",
                href: "link"
            };

            Object.defineProperty(window.navigator, 'language', {
                value: 'pl-PL',
                configurable: true,
            });

            render(
                <LanguageProvider>
                    <DepartmentCard
                        departmentDetails={departmentDetails}
                        language={Language.PL}
                        isVisible={true}
                        index={0}
                    />
                    <CheckButton href={departmentDetails.link}>{buttonProps.children}</CheckButton>
                </LanguageProvider>
            );

            expect(screen.getByTestId("department-card-0")).toBeInTheDocument();
            expect(screen.getByTestId("department-card-title-0")).toHaveTextContent(departmentDetails.titlePL);
            expect(screen.getByTestId("department-card-description-0")).toHaveTextContent(departmentDetails.descriptionPL);
            expect(screen.getByRole("img", {name: departmentDetails.altPL})).toBeInTheDocument();
            expect(screen.getByRole("link", {name: departmentDetails.link})).toHaveAttribute("href", departmentDetails.link);
        });
});
