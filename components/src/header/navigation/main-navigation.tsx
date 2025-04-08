import React, {useState} from 'react';
import ProductNavigation from "./producs-navigation";
import AboutUsNavigation from "./about-us-navigation";
import ServicesNavigation from "./services-navigation";
import Service24by7Navigation from "./service-24-7-navigation";
import ContactNavigation from "./contact-navigation";

type MainNavigationProps = {
    isMobile?: boolean;
}

export default function MainNavigation({isMobile = false}: MainNavigationProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleClick = (e: React.MouseEvent, menu: string) => {
        if (isMobile) {
            e.preventDefault();
            toggleDropdown(menu);
        }
    };

    return (
        <nav>
            <ul className={`flex ${isMobile ? 'flex-col gap-4' : 'space-x-8 gap-4'} p-4`}>
                <ProductNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile} />
                <AboutUsNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile} />
                <ServicesNavigation handleClickAction={handleClick} openDropdown={openDropdown} isMobile={isMobile} />
                <Service24by7Navigation />
                <ContactNavigation />
            </ul>
        </nav>
    );
}
