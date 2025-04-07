import {render, screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import * as nextRouter from "next/router";
import {ReactNode} from "react";
import CheckButton from "../../../src/common/buttons/check-button";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

jest.mock("next/link", () => {
    // eslint-disable-next-line react/display-name
    return ({ href, children }: { href: string; children: ReactNode }) => {
        const router = nextRouter.useRouter();
        return <button onClick={() => router.push(href)}>{children}</button>;
    }
});
const TestComponent = () => {
    return (
        <div>
            <CheckButton href="/test">Check button</CheckButton>
        </div>
    );
};

describe("CheckButton", () => {

    it("should render check button", () => {
        render(<TestComponent />);

        expect(screen.queryByText("Check button")).toBeInTheDocument();
    });

    it("should redirect to the correct URL when clicked", async () => {
        const pushMock = jest.fn();
        (nextRouter.useRouter as jest.Mock).mockImplementation(() => ({
            push: pushMock,
        }));

        render(<TestComponent />);

        const checkButton = screen.getByText("Check button");

        await userEvent.click(checkButton);

        await waitFor(() => {
            expect(pushMock).toHaveBeenCalledWith("/test");
        });
    });
});
