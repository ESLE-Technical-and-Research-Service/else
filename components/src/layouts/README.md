# Layouts Architecture

This directory contains a new, more flexible approach to layouts in the application. The goal is to make layouts more reusable across different sections or future pages, while keeping their styles consistent.

## Key Concepts

### ContentModel

The core of this architecture is the `ContentModel` type, which is a generic content model that can be used by layouts instead of the service-specific `Service` type. This allows layouts to be used with different types of content, not just services.

```typescript
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
    
    // Additional content sections
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
    metadata?: Record<string, any>;
};
```

### Layout Components

Layout components now accept a `content` prop of type `ContentModel` instead of a `service` prop of type `Service`. This makes them more flexible and reusable.

```typescript
type GalleryLayoutProps = {
    content: ContentModel;
    language: Language;
    badgeRef?: RefObject<HTMLDivElement | null>;
    isBadgeInCenter?: boolean;
};
```

### Layout Selector

The layout selector has been updated to work with the generic `ContentModel` instead of the `Service` type. It also provides an adapter function for backward compatibility.

```typescript
// New approach with ContentModel
export const getLayoutComponent = ({
    content,
    language,
    layoutType,
    badgeRef,
    isBadgeInCenter,
}: LayoutSelectorProps) => {
    // ...
};

// Adapter for backward compatibility
export const getServiceLayout = ({
    service,
    language,
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
    // Convert Service to ContentModel
    const content = serviceToContentModel(service, language);
    
    // Use the new layout selector
    return getLayoutComponent({
        content,
        language,
        layoutType,
        badgeRef,
        isBadgeInCenter,
    });
};
```

## How to Use

### Creating Content Models

To use a layout with a specific type of content, you need to create a `ContentModel` for that content. You can use the `serviceToContentModel` adapter function for services, or create your own content models for other types of content.

```typescript
// For services
const content = serviceToContentModel(service, language);

// For other content types
const content: ContentModel = {
    title: {
        [Language.PL]: "Title in Polish",
        [Language.ENG]: "Title in English",
    },
    // ...other properties
};
```

### Using Layouts

Once you have a `ContentModel`, you can use it with any layout component:

```typescript
// Using the layout selector
const layout = getLayoutComponent({
    content,
    language,
    layoutType: PageLayout.GALLERY,
    badgeRef,
    isBadgeInCenter,
});

// Or directly using a layout component
<GalleryLayout
    content={content}
    language={language}
    badgeRef={badgeRef}
    isBadgeInCenter={isBadgeInCenter}
/>
```

### Backward Compatibility

During the transition to the new architecture, you can use the `getServiceLayout` adapter function to use the new layouts with the old `Service` type:

```typescript
const layout = getServiceLayout({
    service,
    language,
    layoutType,
    badgeRef,
    isBadgeInCenter,
});
```

## Examples

See the `examples` directory for examples of how to use layouts with different types of content.

## Migration Guide

To migrate from the old service-specific layouts to the new generic layouts:

1. Create a new layout component in the `layouts` directory that uses the `ContentModel` type
2. Update the layout selector to include the new layout
3. Use the `getServiceLayout` adapter function to use the new layout with existing services
4. For new content types, create a `ContentModel` and use it directly with the layout

## Benefits

This new architecture provides several benefits:

1. **Reusability**: Layouts can be used with different types of content, not just services
2. **Flexibility**: Content models can be created for any type of content
3. **Consistency**: Layouts maintain their styles across different content types
4. **Maintainability**: Changes to layouts don't require changes to content models
5. **Scalability**: New layouts can be added without changing existing content models