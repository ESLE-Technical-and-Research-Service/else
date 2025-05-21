import {Language} from "../../types";
import {GetLocalizedText} from "../../utils";

type FilterClearButtonProps = {
    handleClearFilter: () => void;
}

export default function FilterClearButton({handleClearFilter}: FilterClearButtonProps) {
    const filterText = {
        [Language.PL]: "Wyczyść",
        [Language.ENG]: "Clear"
    }

    return (
        <button
            onClick={handleClearFilter}
            className="px-3 py-1 rounded bg-gray-100
            text-[var(--main-color)] border border-gray-300
            hover:bg-gray-200 text-sm font-normal shadow-none"
        >
            {GetLocalizedText(filterText)}
        </button>
    )
}