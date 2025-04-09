import {render, screen} from "@testing-library/react";
import {useIsTouchTablet} from "../src/useIsTouchTablet";

describe("useIsTouchTablet", () => {
    const TestComponent = () => {
        const isTouchTablet = useIsTouchTablet();
        return (
            <div>
                {isTouchTablet && <p data-testid="test-tablet">This is touch tablet</p>}
            </div>
        );
    }

    it("should return true when the window width is equal 768px", () => {
        setWindowWidth(768);
        render(<TestComponent/>);

        expect(screen.getByTestId("test-tablet")).toBeInTheDocument();
    });

    it("should return true when the window width is equal 1024px", () => {
        setWindowWidth(1024);
        render(<TestComponent/>);

        expect(screen.getByTestId("test-tablet")).toBeInTheDocument();
    });

    it("should return true when the window width is more than 768px and less than 1024px", () => {
        setWindowWidth(900);
        render(<TestComponent/>);

        expect(screen.getByTestId("test-tablet")).toBeInTheDocument();
    });

    it("should return false when the window width is less than 768px", () => {
        setWindowWidth(767);
        render(<TestComponent/>);

        expect(screen.queryByTestId("test-tablet")).not.toBeInTheDocument();
    });

    it("should return false when the window width is more than 1024px", () => {
        setWindowWidth(1025);
        render(<TestComponent/>);

        expect(screen.queryByTestId("test-tablet")).not.toBeInTheDocument();
    });
});

const setWindowWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
        value: width
    });

    window.dispatchEvent(new Event('resize'));
}