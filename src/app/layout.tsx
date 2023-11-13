import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import NavMenu from "../components/NavMenu";
import FooterMenu from "../components/FooterMenu";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"] });

export const metadata = {
  title: "Kobe Michael",
  description:
    "Web design and development expert. Transform challenges into creative solutions.",
  openGraph: {
    title: "Kobe Michael",
    description:
      "Web design and development expert. Transform challenges into creative solutions.",
    url: "https://www.kobemichael.works/",
    siteName: "Kobe Michael",
    images: [
      {
        url: "https://i.imgur.com/vLnhxu9.jpg",
        width: 751,
        height: 500,
        alt: "Picture of a cool developer",
      },
      {
        url: "https://i.imgur.com/vLnhxu9.jpg",
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
      <body className={`${bitter.className} min-h-screen`}>
        <NavMenu />
        <div
          style={{ minHeight: "calc(100vh - 140px - 140px)" }}
          className="max-w-[940px] m-auto px-6 relative"
        >
          {children}
        </div>
        <FooterMenu />
      </body>
    </html>
  );
}
