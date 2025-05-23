'use client';

import Image from "next/image";
import {Department, Language} from "../../types";
import CheckButton from "../buttons/check-button";
import {GetLocalizedText} from "../../utils";

type DepartmentCardProps = {
    departmentDetails: Department;
    isVisible: boolean;
    index: number;
}

export default function DepartmentCard({departmentDetails, isVisible, index}: DepartmentCardProps) {
    const exploreMoreText = {
        [Language.PL]: "Dowiedz się więcej",
        [Language.ENG]: "Explore more",
    };

    return (
        <div
            data-testid={`department-card-${index}`}
            key={index}
            className={`
                        w-[350px] rounded-2xl shadow-xl text-center p-6 mt-10
                        flex flex-col justify-between
                        transform transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        hover:scale-105 transition duration-300 ease-in-out bg-[var(--background)]
                        `}
        >
            <Image
                src={departmentDetails.img}
                alt={GetLocalizedText(departmentDetails.alt)}
                width={200}
                height={200}
                className="mx-auto rounded-lg"
            />
            <h2
                data-testid={`department-card-title-${index}`}
                className="mt-4 text-xl font-semibold text-[var(--font-color-accent)]"
            >
                {GetLocalizedText(departmentDetails.title)}
            </h2>
            <p
                data-testid={`department-card-description-${index}`}
                className="mt-3 mb-6 text-sm text-[var(--font-color)] leading-relaxed"
            >
                {GetLocalizedText(departmentDetails.description)}
            </p>
            <CheckButton href={departmentDetails.link}>
                {isVisible && GetLocalizedText(exploreMoreText)}
            </CheckButton>
        </div>
    )
}