'use client';

import {usePathname} from "next/navigation";
import {useLanguage} from "../../../../context/src/LanguageContext";
import Link from "next/link";
import {Language, SectionsNames} from "../../types";
import {Fragment} from "react";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {getBreadcrumbLabel} from '../../utils';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const {language} = useLanguage();
    const segments = pathname.split("/").filter(Boolean);

    const homePathName = language === Language.PL ? SectionsNames.HOME.PL : SectionsNames.HOME.ENG;
    
    const getPathUtil = (index: number) => {
        return "/" + segments.slice(0, index + 1).join("/");
    };

    return (
        <nav className="text-medium text-gray-500 dark:text-gray-400 mb-4 mt-6 ml-8">
            <ol className="flex flex-wrap items-center space-x">
                <li>
                    <Link href="/" className="hover:underline">
                        {
                            segments.length > 0 && <span className="mx-2">
                            {homePathName}
                        </span>
                        }
                    </Link>
                </li>
                {segments.length > 0 &&
                    <ChevronRightIcon
                        className="inline-flex h-5 w-5 text-[var(--main-color-accent) mx-1] mr-1"
                        aria-hidden="true"
                    />
                }
                {segments.map((segment, indx) => {
                    const path = getPathUtil(indx);
                    const isLast = indx === segments.length - 1;
                    const formattedSegment = segment.replace(/-/g, " ")
                        .replace(/\b\w/g, c => c.toUpperCase());
                    const langKey = language === Language.PL ? 'pl' : 'en';
                    const mappedName = getBreadcrumbLabel(path, langKey) || formattedSegment;

                    return (
                        <Fragment key={indx}>
                            <li>
                                {isLast ? (
                                    <span>{mappedName}</span>
                                ) : (
                                    <Link href={path} className="hover:underline">
                                        {mappedName}
                                    </Link>
                                )}
                            </li>
                            {!isLast && <span className="mr-2"></span>}
                            {!isLast &&
                                <ChevronRightIcon
                                    className="inline-flex h-5 w-5 text-[var(--main-color-accent)] mr-1"
                                    aria-hidden="true"
                                />
                            }
                        </Fragment>
                    )
                })}
            </ol>
        </nav>
    );
}
