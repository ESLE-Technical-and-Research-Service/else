import classes from "./main-navigation.module.css";
import Link from "next/link";
import {Language} from "../../../../context/src/types/Language";
import {useLanguage} from "../../../../context/src/LanguageContext";
import {useIsTouchTablet} from "../../../../hooks/src/useIsTouchTablet";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import ProductsMobileSubmenu from "./mobile/products-mobile-submenu";
import ProductsTabletSubmenu from "./tablet/products-tablet-submenu";
import ProductsDesktopSubmenu from "./desktop/products-desktop-submenu";

type ProductNavigationProps = {
    handleClickAction: (e: React.MouseEvent | React.TouchEvent, menu: string) => void;
    isMobile?: boolean;
    openDropdown: string | null;
    dropdownSubmenu: string | null;
};

export default function ProductNavigation({
                                              handleClickAction,
                                              isMobile,
                                              openDropdown,
                                              dropdownSubmenu
                                          }: ProductNavigationProps) {
    const {language} = useLanguage();
    const isTouchTablet = useIsTouchTablet();
    const router = useRouter();
    const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);

    useEffect(() => {
        if (!isMobile && !isTouchTablet) {
            // Clear hovered submenu when on mobile or tablet
            setHoveredSubmenu(null);
        }
    }, [isMobile, isTouchTablet]);

    const onDropdownItemActivate = (href: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        handleClickAction(e as React.MouseEvent, 'products');
        router.push(href);
    };

    const handleMouseEnter = (submenu: string) => {
        if (!isMobile && !isTouchTablet) {
            setHoveredSubmenu(submenu);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile && !isTouchTablet) {
            setHoveredSubmenu(null);
        }
    };

    return (
        <>
            <li data-testid="products-menu" className={`${classes.navItem} ${classes.hasDropdown}`}>
                <Link
                    data-testid="products-menu-link"
                    className={`${classes.navLink} hover:underline cursor-pointer`}
                    href="/products"
                    onClick={(e) => handleClickAction(e, 'products')}
                >
                    {language === Language.PLN ? "Produkty" : "Products"}
                </Link>

                {/* Mobile Dropdown – static positioning */}
                {isMobile && openDropdown === 'products' && (
                    <ProductsMobileSubmenu
                        handleClickAction={handleClickAction}
                        dropdownSubmenu={dropdownSubmenu}
                        onDropdownItemActivate={onDropdownItemActivate}
                    />
                )}

                {/* Tablet Dropdown – absolute positioning (triggered by click) */}
                {!isMobile && isTouchTablet && openDropdown === 'products' && (
                    <ProductsTabletSubmenu
                        handleClickAction={handleClickAction}
                        dropdownSubmenu={dropdownSubmenu}
                        onDropdownItemActivate={onDropdownItemActivate}
                    />
                )}

                {/* Desktop Dropdown – absolute positioning; always rendered and controlled by CSS hover */}
                {!isMobile && !isTouchTablet && (
                    <ProductsDesktopSubmenu
                        handleClickAction={handleClickAction}
                        onDropdownItemActivate={onDropdownItemActivate}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        hoveredSubmenu={hoveredSubmenu}
                    />
                )}

            </li>
        </>
    );
}
