import {render, screen} from "@testing-library/react";
import {LanguageProvider} from "../../../context/src/LanguageContext";
import CopyRights from "../../src/footer/copy-rights";

describe("CopyRights component", () => {
    it("should render copy rights component with correct date and content in polish language", () => {
        const currentDate = new Date().getFullYear();

        Object.defineProperty(window.navigator, 'language', {
            value: 'pl-PL',
            configurable: true,
        });

        render(
            <LanguageProvider>
                <CopyRights />
            </LanguageProvider>
        );

        const copyRightsComponent = screen.getByTestId("copy-rights");

        screen.debug();

        expect(copyRightsComponent).toBeInTheDocument();
        expect(copyRightsComponent.innerHTML).toContain(currentDate.toString())
        expect(copyRightsComponent).toHaveTextContent(
            `© ${currentDate.toString()} ELSE - Technical and Research Service. Wszelkie prawa zastrzeżone.`
        );
    });

    it("should render copy rights component with correct date and content in english language", () => {
        const currentDate = new Date().getFullYear();

        Object.defineProperty(window.navigator, 'language', {
            value: 'en',
            configurable: true,
        });

        render(
            <LanguageProvider>
                <CopyRights />
            </LanguageProvider>
        );

        const copyRightsComponent = screen.getByTestId("copy-rights");

        screen.debug();

        expect(copyRightsComponent).toBeInTheDocument();
        expect(copyRightsComponent.innerHTML).toContain(currentDate.toString())
        expect(copyRightsComponent).toHaveTextContent(
            `© ${currentDate.toString()} ELSE - Technical and Research Service. All rights reserved.`
        );
    });
});