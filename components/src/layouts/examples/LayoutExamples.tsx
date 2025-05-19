import React, {useRef} from "react";
import {Language, PageLayout} from "../../types";
import {ContentModel, LocalizedJSX, LocalizedText} from "../../types/ContentModel";
import GalleryLayout from "../GalleryLayout";
import {getLayoutComponent} from "../layoutSelector";

// Example of using the GalleryLayout with a blog post content model
const createBlogPostContent = (): ContentModel => {
    const title: LocalizedText = {
        [Language.PL]: "Najnowsze trendy w technologii",
        [Language.ENG]: "Latest Technology Trends",
    };
    
    const description: LocalizedText = {
        [Language.PL]: "Odkryj najnowsze trendy technologiczne, które kształtują przyszłość branży.",
        [Language.ENG]: "Discover the latest technology trends that are shaping the future of the industry.",
    };
    
    const mainContent: LocalizedJSX = {
        [Language.PL]: (
            <>
                <h2>Sztuczna inteligencja</h2>
                <p>
                    Sztuczna inteligencja (AI) rewolucjonizuje sposób, w jaki firmy działają i wchodzą w interakcje z klientami.
                    Od chatbotów po zaawansowane systemy analizy danych, AI staje się niezbędnym narzędziem w arsenale każdej firmy.
                </p>
                <h2>Blockchain</h2>
                <p>
                    Technologia blockchain wykracza poza kryptowaluty i znajduje zastosowanie w różnych branżach,
                    od finansów po łańcuch dostaw. Jej zdecentralizowana natura zapewnia bezpieczeństwo i przejrzystość.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <h2>Artificial Intelligence</h2>
                <p>
                    Artificial Intelligence (AI) is revolutionizing the way businesses operate and interact with customers.
                    From chatbots to advanced data analysis systems, AI is becoming an essential tool in every company&#39;s arsenal.
                </p>
                <h2>Blockchain</h2>
                <p>
                    Blockchain technology is moving beyond cryptocurrencies and finding applications in various industries,
                    from finance to supply chain. Its decentralized nature provides security and transparency.
                </p>
            </>
        ),
    };
    
    const summary: LocalizedJSX = {
        [Language.PL]: (
            <>
                <p>
                    W miarę jak technologia stale ewoluuje, firmy muszą być na bieżąco z najnowszymi trendami,
                    aby pozostać konkurencyjnymi. Sztuczna inteligencja, blockchain i Internet rzeczy to tylko
                    niektóre z technologii, które kształtują przyszłość biznesu.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <p>
                    As technology continues to evolve, businesses need to stay up-to-date with the latest trends
                    to remain competitive. Artificial intelligence, blockchain, and the Internet of Things are just
                    some of the technologies that are shaping the future of business.
                </p>
            </>
        ),
    };
    
    const features = {
        title: {
            [Language.PL]: "Kluczowe trendy",
            [Language.ENG]: "Key Trends",
        },
        items: [
            {
                [Language.PL]: "Sztuczna inteligencja i uczenie maszynowe",
                [Language.ENG]: "Artificial intelligence and machine learning",
            },
            {
                [Language.PL]: "Blockchain i kryptowaluty",
                [Language.ENG]: "Blockchain and cryptocurrencies",
            },
            {
                [Language.PL]: "Internet rzeczy (IoT)",
                [Language.ENG]: "Internet of Things (IoT)",
            },
        ],
    };
    
    const contact = {
        title: {
            [Language.PL]: "Kontakt",
            [Language.ENG]: "Contact",
        },
        message: {
            [Language.PL]: "Chcesz dowiedzieć się więcej o trendach technologicznych?",
            [Language.ENG]: "Want to learn more about technology trends?",
        },
    };
    
    // Note: In a real application, you would use actual images
    // For this example, we're using placeholder values
    return {
        title,
        description,
        mainContent,
        summary,
        features,
        contact,
        // Other properties would be added as needed
    };
};

// Example of using the GalleryLayout with a product page content model
const createProductPageContent = (): ContentModel => {
    const title: LocalizedText = {
        [Language.PL]: "Smartfon XYZ Pro",
        [Language.ENG]: "XYZ Pro Smartphone",
    };
    
    const subtitle: LocalizedText = {
        [Language.PL]: "Najnowszy model z serii XYZ",
        [Language.ENG]: "The latest model in the XYZ series",
    };
    
    const description: LocalizedText = {
        [Language.PL]: "Odkryj niezrównaną wydajność i innowacyjne funkcje nowego smartfona XYZ Pro.",
        [Language.ENG]: "Discover unmatched performance and innovative features of the new XYZ Pro smartphone.",
    };
    
    const mainContent: LocalizedJSX = {
        [Language.PL]: (
            <>
                <h2>Specyfikacja techniczna</h2>
                <ul>
                    <li><strong>Procesor:</strong> Octa-core 2.8 GHz</li>
                    <li><strong>Pamięć RAM:</strong> 8 GB</li>
                    <li><strong>Pamięć wewnętrzna:</strong> 256 GB</li>
                    <li><strong>Wyświetlacz:</strong> 6.5&#34; AMOLED</li>
                    <li><strong>Bateria:</strong> 4500 mAh</li>
                </ul>
                <h2>Funkcje aparatu</h2>
                <p>
                    Smartfon XYZ Pro wyposażony jest w potrójny aparat z głównym sensorem 108 MP,
                    który pozwala na robienie profesjonalnych zdjęć w każdych warunkach oświetleniowych.
                </p>
            </>
        ),
        [Language.ENG]: (
            <>
                <h2>Technical Specifications</h2>
                <ul>
                    <li><strong>Processor:</strong> Octa-core 2.8 GHz</li>
                    <li><strong>RAM:</strong> 8 GB</li>
                    <li><strong>Internal Storage:</strong> 256 GB</li>
                    <li><strong>Display:</strong> 6.5&#34; AMOLED</li>
                    <li><strong>Battery:</strong> 4500 mAh</li>
                </ul>
                <h2>Camera Features</h2>
                <p>
                    The XYZ Pro smartphone is equipped with a triple camera with a 108 MP main sensor,
                    which allows you to take professional photos in any lighting conditions.
                </p>
            </>
        ),
    };
    
    const features = {
        title: {
            [Language.PL]: "Kluczowe cechy",
            [Language.ENG]: "Key Features",
        },
        items: [
            {
                [Language.PL]: "Wyświetlacz AMOLED 120Hz",
                [Language.ENG]: "120Hz AMOLED Display",
            },
            {
                [Language.PL]: "Aparat 108 MP z AI",
                [Language.ENG]: "108 MP AI Camera",
            },
            {
                [Language.PL]: "Szybkie ładowanie 65W",
                [Language.ENG]: "65W Fast Charging",
            },
        ],
    };
    
    const contact = {
        title: {
            [Language.PL]: "Wsparcie produktu",
            [Language.ENG]: "Product Support",
        },
        message: {
            [Language.PL]: "Masz pytania dotyczące tego produktu?",
            [Language.ENG]: "Do you have questions about this product?",
        },
    };
    
    return {
        title,
        subtitle,
        description,
        mainContent,
        features,
        contact,
        // Other properties would be added as needed
    };
};

// Example component showing how to use layouts with different content types
export const LayoutExamples: React.FC = () => {
    const language = Language.ENG; // Or get from context/props
    const badgeRef = useRef<HTMLDivElement>(null);
    
    // Create different content models
    const blogPostContent = createBlogPostContent();
    const productPageContent = createProductPageContent();
    
    return (
        <div>
            <h1>Layout Examples</h1>
            
            <h2>Blog Post with Gallery Layout</h2>
            <div className="mb-20">
                {getLayoutComponent({
                    content: blogPostContent,
                    language,
                    layoutType: PageLayout.GALLERY,
                    badgeRef,
                    isBadgeInCenter: false,
                })}
            </div>
            
            <h2>Product Page with Gallery Layout</h2>
            <div className="mb-20">
                {getLayoutComponent({
                    content: productPageContent,
                    language,
                    layoutType: PageLayout.GALLERY,
                    badgeRef,
                    isBadgeInCenter: false,
                })}
            </div>
            
            {/* Direct usage example */}
            <h2>Direct Usage of Gallery Layout</h2>
            <div className="mb-20">
                <GalleryLayout
                    content={blogPostContent}
                    language={language}
                />
            </div>
        </div>
    );
};

export default LayoutExamples;