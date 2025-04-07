import { ReactNode } from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import classes from "./popup.module.css";
import logo from '../../../assets/images/logoElse.webp';

type PopupProps = {
    children: ReactNode;
    onClose: () => void;
};

export default function Popup({ children, onClose }: PopupProps) {
    return (
        <div className={classes.popup}>
            <div className={classes.content}>
                <div className={classes.topBar}>
                    <Image
                        src={logo}
                        alt="Logo"
                        className={classes.logo}
                    />
                </div>

                <button
                    className={classes.closeButton}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <IoIosClose size={26} />
                </button>

                <div className={classes.popupInnerContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}
