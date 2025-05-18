import {Language} from "../../types";

type NextButtonProps = {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    language: Language;
}

export default function NextButton({currentPage, setCurrentPage, totalPages, language}: NextButtonProps) {
    return (
        <button
            data-testid="pagination-next-button"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-blue-300
            bg-[var(--background)]/80 hover:bg-blue-50 text-[var(--main-color)] font-semibold shadow
            transition-all duration-150 text-base focus:outline-none focus:ring-[var(--main-color-secondary)]
            focus:ring-2 focus:border-[var(--main-color-secondary)] hover:-translate-y-0.5 z-10
            disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
        >
            {language === Language.PL ? 'Następna' : 'Next'}
        </button>
    );
}