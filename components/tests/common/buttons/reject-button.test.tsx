import {useState} from "react";
import RejectButton from "../../../src/common/buttons/reject-button";
import {render, screen, waitFor} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

const TestComponent = () => {
    const [rejected, setRejected] = useState(false);

    return (
        <div>
            <RejectButton onClick={() => setRejected(true)}>
                Reject
            </RejectButton>
            {rejected && <p>Rejected</p>}
        </div>
    );
};

describe("RejectButton", () => {

    it("should render reject button correctly", () => {
       render(<TestComponent />);

        expect(screen.queryByText("Reject")).toBeInTheDocument();
    });

    it("should render 'Rejected' text after clicking rejected button", async () => {
       render(<TestComponent />);

       expect(screen.queryByText("Reject")).toBeInTheDocument();

       await userEvent.click(screen.getByRole("button"));

       await waitFor(() => {
          expect(screen.getByText("Rejected")).toBeInTheDocument();
       });
    });
});