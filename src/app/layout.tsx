import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import MainHeader from "../../components/header/main-header";
import MainFooter from "../../components/footer/main-footer";
import {LanguageProvider} from "../../context/LanguageContext";

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
        <MainHeader />
        <main className="flex-grow">{children}</main>
        <MainFooter />
      </LanguageProvider>
      </body>
    </html>
  );
}
