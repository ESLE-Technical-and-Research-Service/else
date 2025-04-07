import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import {LanguageProvider} from "../../context/src/LanguageContext";
import {CookieConsentProvider} from "../../context/src/CookieConsentContext";
import Analytics from "../../components/src/analytics/analytics";
import ScrollToBottomFooter from "../../components/src/footer/scroll-to-bottom-footer";
import MainHeader from "../../components/src/header/main-header";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "ELSE - Technical and Research Service",
    description: "ELSE Technical and Research Service ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={`${roboto.variable} antialiased`}
        >
        <LanguageProvider>
            <CookieConsentProvider>
                <MainHeader/>
                <Analytics />
                <main className="flex-grow">{children}</main>
                <ScrollToBottomFooter />
            </CookieConsentProvider>
        </LanguageProvider>
        </body>
        </html>
    );
}
