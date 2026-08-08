import { Outfit, JetBrains_Mono } from 'next/font/google';
import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://www.kobemichael.dev";

const MetaInfo = {
  title: "Kobe Michael — Software Engineer & Designer",
  description:
    "Kobe Michael is a software engineer and designer based in Vancouver, BC, building user-focused web experiences that balance sound engineering with thoughtful, accessible design.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: MetaInfo.title,
    template: "%s — Kobe Michael",
  },
  description: MetaInfo.description,
  applicationName: "Kobe Michael",
  authors: [{ name: "Kobe Michael", url: SITE_URL }],
  creator: "Kobe Michael",
  publisher: "Kobe Michael",
  keywords: [
    "Kobe Michael",
    "software engineer",
    "frontend developer",
    "web developer",
    "UI/UX designer",
    "design systems",
    "Vancouver",
    "portfolio",
    "React",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: MetaInfo.title,
    description: MetaInfo.description,
    url: SITE_URL,
    siteName: "Kobe Michael",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: MetaInfo.title,
    description: MetaInfo.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F0F12" },
    { media: "(prefers-color-scheme: light)", color: "#F6F6F4" },
  ],
};

// Person structured data — helps search engines understand who the site is
// about and powers richer knowledge-panel / rich results.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kobe Michael",
  url: SITE_URL,
  jobTitle: "Software Engineer & Designer",
  description: MetaInfo.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  // `worksFor` asserts a *current* employer to search engines. The Yield Guild
  // Games contract ended Aug 2026, so it is omitted rather than stale — restore
  // this block, pointed at the new organisation, once the next role starts.
  knowsAbout: [
    "Frontend Engineering",
    "System Design",
    "UI / UX Design",
    "Design Systems",
    "Accessibility",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
