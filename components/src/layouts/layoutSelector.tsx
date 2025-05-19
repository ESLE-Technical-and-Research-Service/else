import React, { RefObject } from "react";
import { Language, PageLayout } from "../types";
import { ContentModel, serviceToContentModel } from "../types/ContentModel";
import { Service } from "../types/Service";
import GalleryLayout from "./GalleryLayout";

// Import other layout components as needed
// These would be the new versions that use ContentModel

export type LayoutSelectorProps = {
    content: ContentModel;
    language: Language;
    layoutType: PageLayout;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
    // Add other common props as needed
};

/**
 * Selects and returns the appropriate layout component based on the layout type
 * This version uses the generic ContentModel instead of Service
 */
export const getLayoutComponent = ({
    content,
    language,
    layoutType,
    badgeRef,
    isBadgeInCenter,
    // Add other props as needed
}: LayoutSelectorProps) => {
    // Map of layout types to their respective components with props
    const layouts = {
        // Add other layouts as they are converted to use ContentModel
        [PageLayout.GALLERY]: (
            <GalleryLayout
                content={content}
                language={language}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        ),
        // Default to Gallery layout for now
        [PageLayout.DEFAULT]: (
            <GalleryLayout
                content={content}
                language={language}
                badgeRef={badgeRef}
                isBadgeInCenter={isBadgeInCenter}
            />
        )
    };

    return layouts[layoutType] || layouts[PageLayout.DEFAULT];
};

/**
 * Adapter function to use the new layout system with the old Service type
 * This provides backward compatibility during the transition
 */
export const getServiceLayout = ({
    service,
    language,
    layoutType,
    badgeRef,
    isBadgeInCenter,
    // Add other props as needed
}: {
    service: Service;
    language: Language;
    layoutType: PageLayout;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
    // Add other props as needed
}) => {
    // Convert Service to ContentModel
    const content = serviceToContentModel(service, language);
    
    // Use the new layout selector with the converted content
    return getLayoutComponent({
        content,
        language,
        layoutType,
        badgeRef,
        isBadgeInCenter,
        // Pass other props as needed
    });
};