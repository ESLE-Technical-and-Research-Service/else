import ConfirmButton from "../../../src/common/buttons/confirm-button";
import {render, screen, waitFor} from "@testing-library/react";
import {useState} from "react";
import {userEvent} from "@testing-library/user-event";

const TestComponent = () => {
    const [confirmed, setConfirmed] = useState(false);
    return (
        <div>
            <ConfirmButton onClick={() => setConfirmed(true)}>
                Confirm
            </ConfirmButton>
            {confirmed && (<p>Confirmed</p>)}
        </div>
    );
};

describe("ConfirmButton", () => {

    it("should render confirm button correctly", () => {
       render(<TestComponent />);

        expect(screen.queryByText("Confirm")).toBeInTheDocument();
    });

    it("should display 'Confirmed' after clicking confirm button", async () => {
       render(<TestComponent />);

       expect(screen.queryByText("Confirm")).toBeInTheDocument();

       await userEvent.click(screen.getByRole("button"));

       await waitFor(() => {
          expect(screen.getByText("Confirmed")).toBeInTheDocument();
       });
    });
});