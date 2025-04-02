import FooterNavigation from "./footer-navigation";
import AboutUsFooter from "./about-us-footer";
import CopyRights from "./copy-rights";
import SocialMedia from "./social-media";

export default function MainFooter() {
    return (
        <footer className="bg-gray-200 text-gray-900 py-6 flex flex-col items-center space-y-4">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-left">
                <FooterNavigation/>
                <AboutUsFooter/>
                <SocialMedia/>
            </div>
            <CopyRights/>
        </footer>
    )
}