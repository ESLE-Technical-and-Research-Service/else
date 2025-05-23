'use client';

import {Department, Language} from "../types";
import {useState} from "react";
import HeaderDivider from "../common/dividers/header-divider";
import {useIntersectionObserver} from "../../../hooks/useIntersectionObserver";
import {waterAndSewageDepartment} from "./data/water-and-sewage-department";
import {maritimeDepartment} from "./data/maritime-department";
import DepartmentCard from "../common/cards/department-card";
import {GetLocalizedText} from "../utils";

export default function Departments() {
    const { elementRef, isVisible } = useIntersectionObserver();
    const [departments] = useState<Department[]>([waterAndSewageDepartment, maritimeDepartment]);

    const title = {
        [Language.PL]: "CZYM SIĘ ZAJMUJEMY?",
        [Language.ENG]: "WHAT DO WE DO?"
    };

    return (
        <article id="departments" className="max-w-4xl mx-auto mt-18">
            <HeaderDivider title={GetLocalizedText(title)} isVisible={isVisible}/>

            <div ref={elementRef} data-testid="main-departments-cards" className="flex justify-center gap-20 flex-wrap px-4 mt-4 mb-20">
                {departments.map((dep, index) => (
                    <DepartmentCard
                        departmentDetails={dep}
                        isVisible={isVisible}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </article>
    );
}
