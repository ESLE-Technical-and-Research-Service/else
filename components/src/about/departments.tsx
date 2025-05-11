'use client';

import {useLanguage} from "../../../context/src/LanguageContext";
import {Department} from "../types";
import {useState} from "react";
import HeaderDivider from "../common/dividers/header-divider";
import {useIntersectionObserver} from "../../../hooks/useIntersectionObserver";
import {waterAndSewageDepartment} from "./data/water-and-sewage-department";
import {maritimeDepartment} from "./data/maritime-department";
import DepartmentCard from "../common/cards/department-card";

export default function Departments() {
    const {language} = useLanguage();
    const { elementRef, isVisible } = useIntersectionObserver();
    const [departments] = useState<Department[]>([waterAndSewageDepartment, maritimeDepartment]);

    return (
        <article id="departments" className="max-w-4xl mx-auto mt-18">
            <HeaderDivider title={{ labelPL: "CZYM SIĘ ZAJMUJEMY?", labelENG:"WHAT DO WE DO?"}} isVisible={isVisible}/>

            <div ref={elementRef} data-testid="main-departments-cards" className="flex justify-center gap-20 flex-wrap px-4 mt-4 mb-20">
                {departments.map((dep, index) => (
                    <DepartmentCard
                        departmentDetails={dep}
                        language={language}
                        isVisible={isVisible}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </article>
    );
}
