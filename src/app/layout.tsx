import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import NavMenu from "../components/NavMenu";
import FooterMenu from "../components/FooterMenu";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kobe Michael",
  description: "Generated by create next app",
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
