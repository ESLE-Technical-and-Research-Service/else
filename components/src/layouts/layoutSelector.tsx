import React, {RefObject} from "react";
import {ContentModel, Language, PageLayout, serviceToContentModel} from "../types";
import {Service} from "../types/Service";
import GalleryLayout from "./GalleryLayout";

export type LayoutSelectorProps = {
    content: ContentModel;
    layoutType: PageLayout;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
};

/**
 * Selects and returns the appropriate layout component based on the layout type
 * This version uses the generic ContentModel instead of Service
 */
export const getLayoutComponent = ({
    content,
    layoutType,
    badgeRef,
    isBadgeInCenter,
}: LayoutSelectorProps) => {
    const layouts = {
        [PageLayout.GALLERY]: (
            <GalleryLayout
                content={content}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        ),

        [PageLayout.DEFAULT]: (
            <GalleryLayout
                content={content}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        )
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return layouts[layoutType] || layouts[PageLayout.DEFAULT];
};

/**
 * Adapter function to use the new layout system with the old Service type
 * This provides backward compatibility during the transition
 */
export const getServiceLayout = ({
    service,
    layoutType,
    badgeRef,
    isBadgeInCenter,
}: {
    service: Service;
    language: Language;
    layoutType: PageLayout;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
}) => {
    const content = serviceToContentModel(service);

    return getLayoutComponent({
        content,
        layoutType,
        badgeRef,
        isBadgeInCenter,
    });
};