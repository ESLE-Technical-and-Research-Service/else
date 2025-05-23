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
        title: service.name,
        subtitle: service.title,
        description: service.description,
        href: service.href,
        heroImage: {
            src: service.heroImage,
            alt: service.name,
        },
        images: service.images.map((img: StaticImageData, idx) => ({
            src: img,
            alt: {
                [Language.PL]: `${service.name[Language.PL]} image ${idx}`,
                [Language.ENG]: `${service.name[Language.ENG]} image ${idx}`
            },
        } as ContentImage)),
        mainContent: service.detailedDescription,
        summary: service.summary ? service.summary: undefined,
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
