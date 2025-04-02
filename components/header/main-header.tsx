import logo from '../../assets/images/logoElse.webp';
import Image from 'next/image';
import classes from './main-header.module.css';
import LanguageSwitch from "./language-switch";
import MainNavigation from "./main-navigation";

export default function MainHeader() {
    return (
        <header className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 text-gray-800">
            <div className="flex items-center justify-start w-1/3">
                <Image src={logo} alt="Logo ELSE" className={classes.logo}/>
            </div>
            <MainNavigation />
            <div className="flex items-center justify-end w-1/3">
                <LanguageSwitch />
            </div>
        </header>
    )
}