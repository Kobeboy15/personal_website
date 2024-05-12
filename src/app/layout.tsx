import { Poppins } from "next/font/google";
import NavMenu from "../components/NavMenu";
import FooterMenu from "../components/FooterMenu";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MetaInfo = {
  title: "Kobe Michael | Web Developer & Web Designer",
  description:
    "🚀 Frontend Web Developer and Designer with 6 years of experience and a keen eye for crafting visually appealing and user-friendly interfaces. I am passionate about creating delightful web experiences that exceed user expectations.",
};

const SEOImage =
  "https://cdn.sanity.io/images/hkdrmaxc/production/9db9b27a8ac23c294c3c3a4f37b57cb90bfd7975-1280x832.png?w=2000&fit=max&auto=format&dpr=2";

export const metadata = {
  title: MetaInfo.title,
  description: MetaInfo.description,
  openGraph: {
    title: MetaInfo.title,
    description: MetaInfo.description,
    url: "https://www.kobemichael.works/",
    siteName: "Kobe Michael",
    images: [
      {
        url: SEOImage,
        width: 751,
        height: 500,
        alt: "Picture of a cool developer",
      },
      {
        url: SEOImage,
        width: 1261,
        height: 840,
        alt: "Picture of a REALLY cool web developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body
        id="main-page"
        className={`${poppins.className} min-h-screen bg-slate-100 dark:bg-background-dark text-gray-900 dark:text-white`}
      >
        <NextTopLoader
          height={2}
          zIndex={9999}
          color="rgb(170,167,231)"
          showSpinner={false}
        />
        <NavMenu />
        <React.Fragment>{children}</React.Fragment>
        <FooterMenu />
      </body>
    </html>
  );
}
