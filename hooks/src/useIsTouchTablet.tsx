import {useEffect, useState} from "react";

export function useIsTouchTablet() {
    const [isTouchTablet, setIsTouchTablet] = useState<boolean>(false);

    useEffect(() => {

        const checkDevice = () => {
            const width = window.innerWidth;
            const isTabled = width >= 768 && width <= 1024;
            setIsTouchTablet(isTabled);
        }

        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isTouchTablet;
}