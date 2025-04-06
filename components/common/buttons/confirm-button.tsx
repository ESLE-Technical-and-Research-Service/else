import {ReactNode} from "react";


type ConfirmButtonProps = {
    children: ReactNode;
    onClick: () => void;
}

export default function ConfirmButton({ children, onClick }: ConfirmButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 mx-2 mt-2 rounded-xs font-semibold transition duration-200 ease-in-out shadow-md
                       hover:shadow-lg hover:scale-105 active:scale-95
                       text-[var(--font-color-light)] bg-[var(--main-color)] hover:bg-green-600"
        >
            {children}
        </button>
    )
}