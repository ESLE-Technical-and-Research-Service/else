import Image from "next/image";
import {Department, Language} from "../../types";
import CheckButton from "../buttons/check-button";

type DepartmentCardProps = {
    departmentDetails: Department;
    language: Language;
    isVisible: boolean;
    index: number;
}

export default function DepartmentCard({departmentDetails, language, isVisible, index}: DepartmentCardProps) {
    return (
        <div
            data-testid={`department-card-${index}`}
            key={index}
            className={`
                        w-[500px] rounded-2xl shadow-xl text-center p-6 mt-10
                        transform transition-all duration-700 ease-out
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        hover:scale-105 transition duration-300 ease-in-out bg-[var(--background)]
                        `}
        >
            <Image
                src={departmentDetails.img}
                alt={language === Language.PL ? departmentDetails.altPL : departmentDetails.altENG}
                width={200}
                height={200}
                className="mx-auto rounded-lg"
            />
            <h2
                data-testid={`department-card-title-${index}`}
                className="mt-4 text-xl font-semibold text-[var(--font-color-accent)]"
            >
                {language === Language.PL ? departmentDetails.titlePL : departmentDetails.titleENG}
            </h2>
            <p
                data-testid={`department-card-description-${index}`}
                className="mt-3 mb-6 text-sm text-[var(--font-color)] leading-relaxed"
            >
                {language === Language.PL ? departmentDetails.descriptionPL : departmentDetails.descriptionENG}
            </p>
            <CheckButton href={departmentDetails.link}>
                {isVisible && (
                    language === Language.PL
                        ? "Dowiedz się więcej"
                        : "Explore more"
                )}
            </CheckButton>
        </div>
    )
}