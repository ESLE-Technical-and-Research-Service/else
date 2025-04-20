import {JSX} from "react";

export default function FormatProductDetailedDescription(description: JSX.Element) {
    return (
        <div className="prose prose-blue max-w-none text-base md:text-lg leading-relaxed">
            {description}
        </div>
    );
}