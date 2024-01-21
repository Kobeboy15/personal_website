import { Bitter } from "next/font/google";
import NavMenu from "../components/NavMenu";
import FooterMenu from "../components/FooterMenu";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { useEffect, useState } from "react";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
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
    <html lang="en">
      <body
        className={`${bitter.className} min-h-screen bg-amber-50 dark:bg-zinc-900 text-gray-900 dark:text-white duration-150`}
      >
        <NextTopLoader
          height={3}
          zIndex={9999}
          color="rgb(253,230,138)"
          showSpinner={false}
        />
        <NavMenu />
        <div
          style={{ minHeight: "calc(100vh - 140px - 140px)" }}
          className="m-auto px-6 pb-24 pt-[40px] relative"
        >
          {children}
        </div>
        <FooterMenu />
      </body>
    </html>
  );
}
