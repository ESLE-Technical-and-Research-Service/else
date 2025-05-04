import {Language, Manufacturer} from "../../types";
import Image from "next/image";
import React from "react";

type ManufacturerCardProps = {
    manufacturers: Manufacturer[],
    lang: Language,
}

export const ManufacturerCard = ({manufacturers, lang}: ManufacturerCardProps) => {
    return (
        <>
            {manufacturers.length > 0 && (
                <div>
                    <span className="font-semibold text-gray-700 mr-2">
                        {lang === Language.PL ? "Producent:" : "Manufacturer:"}
                    </span>
                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 items-center justify-center md:justify-start">
                        {manufacturers.map((man) => (
                            <a key={man.name} href={man.link} target="_blank" rel="noopener noreferrer"
                               className="flex flex-col items-center group">
                                <div
                                    className="relative w-20 h-10 sm:w-28 sm:h-14 flex items-center justify-center bg-white overflow-hidden p-2 mb-1"
                                >
                                    <Image src={man.image} alt={man.name} fill style={{objectFit: 'contain'}}/>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}