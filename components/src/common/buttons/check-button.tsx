import {ReactNode} from "react";
import Link from "next/link";

type CheckButtonProps = {
    children: ReactNode;
    href: string;
};

export default function CheckButton({children, href}: CheckButtonProps) {
    return (
        <Link
            data-testid={`check-button-${href.split('/').pop()}`}
            href={href}
            className="px-6 py-2 mt-6 rounded-xs font-semibold transition duration-200
            ease-in-out border-2 border-[var(--main-color)] hover:scale-105
            active:scale-95"
        >
            {children}
        </Link>
    )
}