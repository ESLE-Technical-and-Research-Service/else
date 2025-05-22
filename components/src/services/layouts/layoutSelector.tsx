import React, {RefObject} from "react";
import {Language, PageLayout, Service} from "../../types";
import DefaultLayout from "./DefaultLayout";
import CompactLayout from "./CompactLayout";
import SidebarLayout from "./SidebarLayout";
import GridLayout from "./GridLayout";
import ExpandedLayout from "./ExpandedLayout";
import TimelineLayout from "./TimelineLayout";
import CardsLayout from "./CardsLayout";
import MasonryLayout from "./MasonryLayout";
import GalleryLayout from "./GalleryLayout";
import {ImageStyleConfig} from "./imageStyles";

export type LayoutSelectorProps = {
    service: Service;
    language: Language;
    layoutType: PageLayout;
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
                articleImagesRef={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        ),
        [PageLayout.SIDEBAR]: (
            <SidebarLayout
                {...commonProps}
                articleImagesRef1={articleImagesRef1}
                scaleValue={scaleValue}
                imagesStyle={imagesStyle}
            />
        ),
        [PageLayout.GRID]: (
            <GridLayout
                {...commonProps}
                badgeRef={badgeRef}
            />
        ),
        [PageLayout.EXPANDED]: (
            <ExpandedLayout
                {...commonProps}
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
            />
        ),
        [PageLayout.GALLERY]: (
            <GalleryLayout
                {...commonProps}
                badgeRef={badgeRef}
            />
        ),
        [PageLayout.DEFAULT]: (
            <DefaultLayout
                {...commonProps}
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
