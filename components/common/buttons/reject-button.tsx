import {ReactNode} from "react";

type RejectButtonProps = {
    children: ReactNode;
    onClick: () => void;
}

export default function RejectButton({children, onClick}: RejectButtonProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="px-6 py-2 mx-2 mt-2 rounded-xs font-semibold transition duration-200 ease-in-out shadow-md
                       hover:shadow-lg hover:scale-105 active:scale-95
                       text-[var(--font-color)] bg-[var(--foreground)] hover:bg-[var(--background)]"
        >
            {children}
        </button>
    )
}