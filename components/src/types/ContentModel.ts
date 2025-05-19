import { StaticImageData } from "next/image";
import { JSX } from "react";
import { Language } from ".";
import {Service} from "./Service";

// Generic content model that can be used by layouts
export type LocalizedText = {
    [Language.PL]: string;
    [Language.ENG]: string;
};

export type LocalizedJSX = {
    [Language.PL]: JSX.Element;
    [Language.ENG]: JSX.Element;
};

export type ContentImage = {
    src: StaticImageData;
    alt: LocalizedText;
};

export type ContentModel = {
    // Basic content information
    title: LocalizedText;
    subtitle?: LocalizedText;
    description?: LocalizedText;
    
    // Navigation
    href?: string;
    
    // Media content
    heroImage?: ContentImage;
    images?: ContentImage[];
    
    // Detailed content sections
    mainContent?: LocalizedJSX;
    summary?: LocalizedJSX;
    
    // Additional content sections that can be used by specific layouts
    sections?: {
        title: LocalizedText;
        content: LocalizedJSX;
    }[];
    
    // Features or key points
    features?: {
        title?: LocalizedText;
        items: LocalizedText[];
    };
    
    // Contact information
    contact?: {
        title: LocalizedText;
        message: LocalizedText;
    };
    
    // Any additional metadata needed by layouts
    metadata?: Record<string, never>;
};

// Adapter function to convert Service to ContentModel
export const serviceToContentModel = (service: Service): ContentModel => {
    return {
        title: {
            [Language.PL]: service.name.namePL,
            [Language.ENG]: service.name.nameENG,
        },
        subtitle: {
            [Language.PL]: service.title.titlePL,
            [Language.ENG]: service.title.titleENG,
        },
        description: {
            [Language.PL]: service.description.textPL,
            [Language.ENG]: service.description.textENG,
        },
        href: service.href,
        heroImage: {
            src: service.heroImage,
            alt: {
                [Language.PL]: service.name.namePL,
                [Language.ENG]: service.name.nameENG,
            },
        },
        images: service.images.map((img: StaticImageData) => ({
            src: img,
            alt: {
                [Language.PL]: service.name.namePL,
                [Language.ENG]: service.name.nameENG,
            },
        })),
        mainContent: {
            [Language.PL]: service.detailedDescription.textPL,
            [Language.ENG]: service.detailedDescription.textENG,
        },
        summary: service.summary ? {
            [Language.PL]: service.summary.summaryPL,
            [Language.ENG]: service.summary.summaryENG,
        } : undefined,
        contact: {
            title: {
                [Language.PL]: "Kontakt",
                [Language.ENG]: "Contact",
            },
            message: {
                [Language.PL]: "Masz pytania odnośnie uslugi?",
                [Language.ENG]: "Do you have questions about this service?",
            },
        },
        features: {
            title: {
                [Language.PL]: "Kluczowe cechy",
                [Language.ENG]: "Key Features",
            },
            items: [
                {
                    [Language.PL]: "Profesjonalna obsługa",
                    [Language.ENG]: "Professional service",
                },
                {
                    [Language.PL]: "Nowoczesne rozwiązania",
                    [Language.ENG]: "Modern solutions",
                },
                {
                    [Language.PL]: "Indywidualne podejście",
                    [Language.ENG]: "Individual approach",
                },
            ],
        },
    };
};

// Helper function to get localized text based on current language
export const getLocalizedText = (text: LocalizedText, language: Language): string => {
    return text[language];
};

// Helper function to get localized JSX based on current language
export const getLocalizedJSX = (content: LocalizedJSX, language: Language): JSX.Element => {
    return content[language];
};