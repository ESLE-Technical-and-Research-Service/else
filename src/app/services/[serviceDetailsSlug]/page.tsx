'use client';

import {usePathname} from "next/navigation";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {Service} from "../../../../components/src/types/Service";
import {useMemo, useRef} from "react";
import {NavigationLinks, PageLayout} from "../../../../components/src/types";
import {CameraService} from "../../../../components/src/services/data/camera-service";
import {useInView} from "framer-motion";
import {PressureVehiclesService} from "../../../../components/src/services/data/pressure-vehicles-service";
import {Trainings} from "../../../../components/src/services/data/trainings";
import {ImagesGridLayout} from "../../../../components/src/types/ImagesGridLayout";
import {getLayoutForSlug} from "../../../../components/src/services/layouts";
import DefaultLayout from "../../../../components/src/services/layouts/DefaultLayout";
import CompactLayout from "../../../../components/src/services/layouts/CompactLayout";
import SidebarLayout from "../../../../components/src/services/layouts/SidebarLayout";
import GridLayout from "../../../../components/src/services/layouts/GridLayout";
import ExpandedLayout from "../../../../components/src/services/layouts/ExpandedLayout";
import TimelineLayout from "../../../../components/src/services/layouts/TimelineLayout";
import CardsLayout from "../../../../components/src/services/layouts/CardsLayout";

export default function ServiceDetailsPage() {
    const {language} = useLanguage();
    const pathname = usePathname();
    const slug = pathname.split("/").pop();
    const articleImagesRef1 = useRef<HTMLDivElement | null>(null);
    const articleImagesRef2 = useRef<HTMLDivElement | null>(null);
    const badgeRef = useRef(null);
    const isInCenter1 = useInView(articleImagesRef1, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isInCenter2 = useInView(articleImagesRef2, {amount: 0.5, margin: "-10% 0px -10% 0px"});
    const isBadgeInCenter = useInView(badgeRef, {amount: 0.5, margin: "-20% 0px -20% 0px"});

    const service: Service = useMemo(() => {
        if (slug === NavigationLinks.CAM_SERVICE) return CameraService;
        if (slug === NavigationLinks.PRESSURE_VEHICLES_SERVICE) return PressureVehiclesService;
        if (slug === NavigationLinks.TRAININGS) return Trainings;
        return CameraService;
    }, [slug]);

    let scaleValue = 1.15;
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
            scaleValue = 1.03;
        } else if (window.innerWidth < 1024) {
            scaleValue = 1.05;
        }
    }

    let imagesStyle;

    switch (slug) {
        case NavigationLinks.CAM_SERVICE:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.ROW,
                columns: 3,
                limit: 4,
                startIndex: 0,
            };
            break;
            case NavigationLinks.PRESSURE_VEHICLES_SERVICE:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.COLUMN,
                columns: 2,
                limit: 2,
                startIndex: 0,
            };
            break;
            case NavigationLinks.TRAININGS:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.MASONRY,
                columns: 1,
                limit: 2,
                startIndex: 0,
            };
            break;
        default:
            imagesStyle = {
                imagesLayout: ImagesGridLayout.ROW,
                columns: 2,
                limit: 2,
                startIndex: 0,
            };
    }

    // Get the layout type for the current slug
    const layoutType = getLayoutForSlug(slug || '');

    // Common props for all layouts
    const layoutProps = {
        service,
        language,
        isInCenter1,
        isInCenter2,
        isBadgeInCenter,
        articleImagesRef1,
        articleImagesRef2,
        badgeRef,
        scaleValue,
        imagesStyle,
    };

    // Render the appropriate layout based on the layout type
    switch (layoutType) {
        case PageLayout.COMPACT:
            return <CompactLayout 
                service={service}
                language={language}
                isInCenter1={isInCenter1}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />;

        case PageLayout.SIDEBAR:
            return <SidebarLayout 
                service={service}
                language={language}
                isInCenter1={isInCenter1}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />;

        case PageLayout.GRID:
            return <GridLayout 
                service={service}
                language={language}
                isInCenter1={isInCenter1}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />;

        case PageLayout.EXPANDED:
            return <ExpandedLayout {...layoutProps} />;

        case PageLayout.TIMELINE:
            return <TimelineLayout 
                service={service}
                language={language}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
                articleImagesRef1={articleImagesRef1}
            />;

        case PageLayout.CARDS:
            return <CardsLayout 
                service={service}
                language={language}
                isInCenter1={isInCenter1}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />;

        case PageLayout.DEFAULT:
        default:
            return <DefaultLayout {...layoutProps} />;
    }
}
