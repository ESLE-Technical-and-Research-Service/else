import {render, screen, waitFor} from "@testing-library/react";
import {LanguageProvider} from "../src/LanguageContext";
import {LanguageTestComponent} from "./LanguageTestComponent";
import {Language} from "../src/types/Language";
import {userEvent} from "@testing-library/user-event";

describe("LanguageProvider", () => {
    describe("with initial language", () => {
        it("given a client language is set to PLN, should set context language to PLN", async () => {
            Object.defineProperty(window.navigator, 'language', {
                value: 'pl-PL',
                configurable: true,
            });

            render(
                <LanguageProvider>
                    <LanguageTestComponent/>
                </LanguageProvider>
            );

            await waitFor(() => {
                const langEl = screen.getByTestId("lang");
                expect(langEl).toHaveTextContent(Language.PLN);
            });
        });

        it("given a browser language is set to ENG, should set language context language to ENG", async () => {
            Object.defineProperty(window.navigator, 'language', {
                value: 'en',
                configurable: true,
            });

            render(
                <LanguageProvider>
                    <LanguageTestComponent />
                </LanguageProvider>
            );

            await waitFor(() => {
                const langEl = screen.getByTestId("lang");
                expect(langEl).toHaveTextContent(Language.ENG);
            })
        });

        it("given a browser has different language than PLN and ENG, should set language context language to ENG", async () => {
            Object.defineProperty(window.navigator, 'language', {
                value: 'it',
                configurable: true,
            });

            render(
                <LanguageProvider>
                    <LanguageTestComponent />
                </LanguageProvider>
            );

            await waitFor(() => {
                const langEl = screen.getByTestId("lang");
                expect(langEl).toHaveTextContent(Language.ENG);
            });
        })
    });

    describe("language switch", () => {
       it("should change the language from ENG to PLN and translate text correctly", async () => {
          Object.defineProperty(window.navigator, 'language', {
              value: 'en',
              configurable: true,
          });

          render(
              <LanguageProvider>
                  <LanguageTestComponent />
              </LanguageProvider>
          );

          const langEl = screen.getByTestId("lang");
          expect(langEl).toHaveTextContent(Language.ENG);

          const translationText = screen.getByTestId("text-translation");
          expect(translationText.textContent).toEqual("This is a test");

          await userEvent.click(screen.getByTestId("pl-switch"));
          expect(langEl).toHaveTextContent(Language.PLN);
          expect(translationText.textContent).toEqual("To jest test");

          await userEvent.click(screen.getByTestId("eng-switch"));
          expect(langEl).toHaveTextContent(Language.ENG);
          expect(translationText.textContent).toEqual("This is a test");
       });
    });
});