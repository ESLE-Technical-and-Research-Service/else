import {act, render, screen} from "@testing-library/react";
import HeroImage from "../../src/hero/hero-image";
import {LanguageProvider} from "../../../context/src/LanguageContext";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

jest.mock("../../../assets/images/heroImage_01.jpg", () => "image1.jpg");
jest.mock("../../../assets/images/heroImage_02.jpg", () => "image2.jpg");
jest.mock("../../../assets/images/heroImage_03.jpg", () => "image3.jpg");

Object.defineProperty(window.navigator, 'language', {
    value: 'en',
    configurable: true,
});

describe("HeroImage", () => {
    const TestComponent = () => {
        return (
            <LanguageProvider>
                <HeroImage/>
            </LanguageProvider>
        );
    };

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it("renders all hero images", () => {
       render(<TestComponent />);
       expect(screen.getAllByAltText(/ELSE Hero Image/i)).toHaveLength(3);
    });

    it("renders the initial hero image as visible", () => {
        render(<TestComponent />);
        const visible = getVisibleImageWrapper();
        expect(visible).toBeInTheDocument();
    });

    it("cycles to the next image after 5 seconds", () => {
        render(<TestComponent />);

        const getVisibleIndex = () => {
            const slides = getSlideWrappers();
            return Array.from(slides).findIndex((el) =>
                el.className.includes("opacity-100")
            );
        };

        expect(getVisibleIndex()).toBe(0);

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(getVisibleIndex()).toBe(1);

        act(() => {
            jest.advanceTimersByTime(5000);
        });

        expect(getVisibleIndex()).toBe(2);
    });

    it("renders text in English by default", () => {
        render(<TestComponent />);
        expect(screen.getByText(/WELCOME TO/i)).toBeInTheDocument();
        expect(screen.getByText(/Innovative Solutions for a Modern World/i)).toBeInTheDocument();
    });
});

function getSlideWrappers(): NodeListOf<HTMLElement> {
    return document.querySelectorAll("div[class*='transition-opacity']");
}

function getVisibleImageWrapper(): HTMLElement | undefined {
    const wrappers = getSlideWrappers();
    return Array.from(wrappers).find((wrapper) =>
        wrapper.className.includes("opacity-100")
    );
}
