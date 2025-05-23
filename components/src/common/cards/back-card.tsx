import React from "react";
import {Language} from "../../types";
import BackButton from "../buttons/back-button";
import {GetLocalizedText} from "../../utils";

interface BackCardProps {
    className?: string;
}

const BackCard: React.FC<BackCardProps> = ({className = ""}) => {
    const backText = {
        [Language.PL]: "Wróć do poprzedniej strony",
        [Language.ENG]: "Go back to previous page"
    };

    return (
        <div
            className={
                `px-6 py-5 rounded-2xl min-w-[300px] max-w-1/3 bg-[var(--background)]/60 backdrop-blur-md 
                border border-blue-100 shadow-lg flex flex-col items-center text-center 
                relative overflow-hidden ${className} mb-8`
            }
        >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-200 rounded-l-2xl"/>
            <div className="mb-3 text-base text-gray-700 font-medium z-10">
                {GetLocalizedText(backText)}
            </div>
            <BackButton />
        </div>
    );
};

export default BackCard;