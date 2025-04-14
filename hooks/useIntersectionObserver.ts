import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

export const useIntersectionObserver = ({
    threshold = 0.3,
    root = null,
    rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, root, rootMargin }
        );

        if (elementRef && elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, root, rootMargin]);

    return { elementRef, isVisible };
};
