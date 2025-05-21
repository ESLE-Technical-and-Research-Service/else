'use client';

import {usePathname} from "next/navigation";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {Service} from "../../../../components/src/types";
import {useMemo, useRef} from "react";
import {NavigationLinks} from "../../../../components/src/types";
import {CameraService} from "../../../../components/src/services/data/camera-service";
import {useInView} from "framer-motion";
import {PressureVehiclesService} from "../../../../components/src/services/data/pressure-vehicles-service";
import {Trainings} from "../../../../components/src/services/data/trainings";
import {getLayoutForSlug} from "../../../../components/src/services/layouts";
import {TechnicalSupport} from "../../../../components/src/services/data/technical-support";
import {getImageStyleForSlug} from "../../../../components/src/services/layouts/imageStyles";
import {getLayoutComponent} from "../../../../components/src/services/layouts/layoutSelector";

export default function ServiceDetailsPage() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const slug = pathname.split("/").pop() || '';

    // Create refs for animations
    const articleImagesRef1 = useRef<HTMLDivElement | null>(null);
    const articleImagesRef2 = useRef<HTMLDivElement | null>(null);
    const badgeRef = useRef(null);

    // Set up animation triggers
    const isInCenter1 = useInView(articleImagesRef1, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isInCenter2 = useInView(articleImagesRef2, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    // Get the service data based on the slug
    const service: Service = useMemo(() => {
        if (slug === NavigationLinks.CAM_SERVICE) return CameraService;
        if (slug === NavigationLinks.PRESSURE_VEHICLES_SERVICE) return PressureVehiclesService;
        if (slug === NavigationLinks.TRAININGS) return Trainings;
        if (slug === NavigationLinks.TECH_SUPPORT) return TechnicalSupport;
        return CameraService;
    }, [slug]);

    // Calculate scale value based on screen size
    const scaleValue = useMemo(() => {
        if (typeof window === 'undefined') return 1.15;
        if (window.innerWidth < 768) return 1.03;
        if (window.innerWidth < 1024) return 1.05;
        return 1.15;
    }, []);

    // Get image style configuration for the current slug
    const imagesStyle = getImageStyleForSlug(slug);

    // Get the layout type for the current slug
    const layoutType = getLayoutForSlug(slug);

    // Use the layout selector to get the appropriate layout component
    return getLayoutComponent({
        service,
        language,
        layoutType,
        isInCenter1,
        isInCenter2,
        isBadgeInCenter,
        articleImagesRef1,
        articleImagesRef2,
        badgeRef,
        scaleValue,
        imagesStyle
    });
}
