import {Language, Manufacturer} from "../../types";
import Image from "next/image";
import React from "react";
import {GetLocalizedText} from "../../utils";

type ManufacturerCardProps = {
    manufacturers: Manufacturer[],
}

export const ManufacturerCard = ({manufacturers}: ManufacturerCardProps) => {
    const manufacturerText = {
        [Language.PL]: "Producent:",
        [Language.ENG]: "Manufacturer:",
    };

    return (
        <>
            {manufacturers.length > 0 && (
                <div data-testid="manufacturer-card-container">
                    <span
                        data-testid="manufacturer-card-title"
                        className="font-semibold text-gray-700 mr-2"
                    >
                        {GetLocalizedText(manufacturerText)}
                    </span>
                    <div
                        data-testid="manufacturer-name-card"
                        className="flex flex-wrap gap-2 sm:gap-4 mt-2 items-center justify-center md:justify-start"
                    >
                        {manufacturers.map((man: Manufacturer) => (
                            <a
                                data-testid="manufacturer-link"
                                key={man.name}
                                href={man.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center group"
                            >
                                <div
                                    className="relative w-20 h-10 sm:w-28 sm:h-14 flex items-center justify-center
                                    bg-[var(--background)] overflow-hidden p-2 mb-1"
                                >
                                    <Image
                                        data-testid="manufacturer-logo"
                                        src={man.image}
                                        alt={man.name}
                                        fill
                                        style={{objectFit: 'contain'}}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}