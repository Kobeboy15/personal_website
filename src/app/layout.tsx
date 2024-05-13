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
  title: "Kobe Michael",
  description:
    "A Web Developer and Designer with 6 years of experience in creating visually stunning and highly functional interfaces. I am dedicated to designing and developing seamless web experiences that not only meet but exceed user expectations, ensuring both aesthetic appeal and optimal performance.",
};

const SEOImage =
  "https://private-user-images.githubusercontent.com/23691843/330052076-3eb8325d-f9fd-48b0-968c-cc8abe2a55f1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2MDMwNDQsIm5iZiI6MTcxNTYwMjc0NCwicGF0aCI6Ii8yMzY5MTg0My8zMzAwNTIwNzYtM2ViODMyNWQtZjlmZC00OGIwLTk2OGMtY2M4YWJlMmE1NWYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTEzVDEyMTkwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwMTI4MTVmZDZjYmRlMDJjZjc5ZjIzZjk4Yzc4MWZmMDA5ODUwZjhlYWNiZWYwOTZkMmYwZDk2MTNjYzg0NzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.OKUFtlNp7xXCwrbajy_lAxzKlT-AdpLu7sCMR7B5Ews";

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
