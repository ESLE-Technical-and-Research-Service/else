import {Language} from "../../types/Language";

type FilterClearButtonProps = {
    language: Language;
    handleClearFilter: () => void;
}

export default function FilterClearButton({language, handleClearFilter}: FilterClearButtonProps) {
    return (
        <button
            onClick={handleClearFilter}
            className="px-3 py-1 rounded bg-gray-100
            text-[var(--main-color)] border border-gray-300
            hover:bg-gray-200 text-sm font-normal shadow-none"
        >
            {language === Language.PL ? "Wyczyść" : "Clear"}
        </button>
    )
}