'use client';

import {useEffect, useRef, useState} from "react";
import MainFooter from "./main-footer";

export default function ScrollToBottomFooter() {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isContentLong, setIsContentLong] = useState(false);

    const prevIsAtBottomRef = useRef(isAtBottom);

    const checkScrollPosition = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight - 150) {
            if (!prevIsAtBottomRef.current) {
                setIsAtBottom(true);
                prevIsAtBottomRef.current = true;
            }
        } else {
            if (prevIsAtBottomRef.current) {
                setIsAtBottom(false);
                prevIsAtBottomRef.current = false;
            }
        }
    };

    const checkContentHeight = () => {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (documentHeight > windowHeight) {
            setIsContentLong(true);
        } else {
            setIsContentLong(false);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => checkScrollPosition();
            const handleResize = () => checkContentHeight();

            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);

            checkScrollPosition();
            checkContentHeight();

            return () => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return (
        <div
            className={`transition-opacity duration-400 ease-in-out ${
                isContentLong && !isAtBottom ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <MainFooter />
        </div>
    );
}
