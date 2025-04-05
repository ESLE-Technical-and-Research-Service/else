import logo from '../../assets/images/logoElse.webp';
import Image from 'next/image';
import classes from './main-header.module.css';
import Link from "next/link";
import MainHeaderContent from "./main-header-content";
import CookieConsent from "./cookie-consent";

export default function MainHeader() {
    return (
        <>
            <header className="relative flex items-center justify-between w-full px-4 py-4 bg-gray-100 text-gray-800">
                <div className="flex-none mr-4 md:mr-2">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="Logo ELSE" className={`${classes.logo} w-auto`}/>
                    </Link>
                </div>

                <div className="flex-grow flex justify-center">
                    <MainHeaderContent/>
                </div>
            </header>
            <CookieConsent/>
        </>
    )
}
