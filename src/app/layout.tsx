import { Outfit, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import React from "react";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AmbientBackdrop from "@/three/AmbientBackdrop";
import BackgroundPattern from "@/components/BackgroundPattern";
import Preloader from "@/components/Preloader";
import VersionSwitcher from "@/components/VersionSwitcher";

// Runs before first paint: applies the saved theme (defaults to dark) AND sets
// the background-color inline so there's no flash before the stylesheet loads.
const noFlashTheme = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;var r=document.documentElement;r.classList.toggle('dark',d);r.style.backgroundColor=d?'#0F0F12':'#F6F6F4';r.style.colorScheme=d?'dark':'light';}catch(e){var r=document.documentElement;r.classList.add('dark');r.style.backgroundColor='#0F0F12';}})();`;

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const MetaInfo = {
  title: "Kobe Michael",
  description:
    "A Web Developer and Designer of building sleek, user-friendly websites. I love blending creativity and tech to craft web experiences that look great and work even better.",
};

const SEOImage =
  "https://private-user-images.githubusercontent.com/23691843/330052076-3eb8325d-f9fd-48b0-968c-cc8abe2a55f1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU2MDMwNDQsIm5iZiI6MTcxNTYwMjc0NCwicGF0aCI6Ii8yMzY5MTg0My8zMzAwNTIwNzYtM2ViODMyNWQtZjlmZC00OGIwLTk2OGMtY2M4YWJlMmE1NWYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTEzVDEyMTkwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwMTI4MTVmZDZjYmRlMDJjZjc5ZjIzZjk4Yzc4MWZmMDA5ODUwZjhlYWNiZWYwOTZkMmYwZDk2MTNjYzg0NzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.OKUFtlNp7xXCwrbajy_lAxzKlT-AdpLu7sCMR7B5Ews";

export const metadata = {
  metadataBase: new URL("https://www.kobemichael.works"),
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body
        id="main-page"
        className={`${outfit.className} min-h-screen text-ink font-light antialiased`}
      >
        <ThemeProvider>
          <Preloader />
          <AmbientBackdrop />
          <BackgroundPattern />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <VersionSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
