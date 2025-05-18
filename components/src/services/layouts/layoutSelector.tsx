import React, { RefObject } from "react";
import { Language, PageLayout } from "../../types";
import { Service } from "../../types/Service";
import DefaultLayout from "./DefaultLayout";
import CompactLayout from "./CompactLayout";
import SidebarLayout from "./SidebarLayout";
import GridLayout from "./GridLayout";
import ExpandedLayout from "./ExpandedLayout";
import TimelineLayout from "./TimelineLayout";
import CardsLayout from "./CardsLayout";
import MasonryLayout from "./MasonryLayout";
import { ImageStyleConfig } from "./imageStyles";

export type LayoutSelectorProps = {
    service: Service;
    language: Language;
    layoutType: PageLayout;
    isInCenter1: boolean;
    isInCenter2: boolean;
    isBadgeInCenter: boolean;
    articleImagesRef1: RefObject<HTMLDivElement | null>;
    articleImagesRef2: RefObject<HTMLDivElement | null>;
    badgeRef: RefObject<HTMLDivElement | null>;
    scaleValue: number;
    imagesStyle: ImageStyleConfig;
};

/**
 * Selects and returns the appropriate layout component based on the layout type
 */
export const getLayoutComponent = ({
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
    imagesStyle,
}: LayoutSelectorProps) => {
    // Common props for all layouts
    const commonProps = {
        service,
        language
    };

    // Map of layout types to their respective components with props
    const layouts = {
        [PageLayout.COMPACT]: (
            <CompactLayout
                {...commonProps}
                isInCenter1={isInCenter1}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        ),
        [PageLayout.SIDEBAR]: (
            <SidebarLayout
                {...commonProps}
                isInCenter1={isInCenter1}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        ),
        [PageLayout.GRID]: (
            <GridLayout
                {...commonProps}
                isInCenter1={isInCenter1}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        ),
        [PageLayout.EXPANDED]: (
            <ExpandedLayout
                {...commonProps}
                isInCenter1={isInCenter1}
                isInCenter2={isInCenter2}
                isBadgeInCenter={isBadgeInCenter}
                articleImagesRef1={articleImagesRef1}
                articleImagesRef2={articleImagesRef2}
                badgeRef={badgeRef}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        ),
        [PageLayout.TIMELINE]: (
            <TimelineLayout
                {...commonProps}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
                articleImagesRef1={articleImagesRef1}
            />
        ),
        [PageLayout.CARDS]: (
            <CardsLayout {...commonProps} />
        ),
        [PageLayout.MASONRY]: (
            <MasonryLayout
                {...commonProps}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        ),
        [PageLayout.DEFAULT]: (
            <DefaultLayout
                {...commonProps}
                isInCenter1={isInCenter1}
                isInCenter2={isInCenter2}
                isBadgeInCenter={isBadgeInCenter}
                articleImagesRef1={articleImagesRef1}
                articleImagesRef2={articleImagesRef2}
                badgeRef={badgeRef}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        )
    };

    return layouts[layoutType] || layouts[PageLayout.DEFAULT];
};