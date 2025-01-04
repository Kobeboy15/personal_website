import FooterSection from "@/components/FooterSection";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function Experience({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="lg:px-24 px-8 max-w-screen-lg w-full mx-auto relative">
        <div className="blur" />
        <div className="py-20">
          <span className="lg:absolute static sta top-0 -left-10 h-full flex items-start">
            <div className="lg:py-20 pb-12 sticky top-0">
            <Link href="/" className="font-light flex items-center gap-1">
              <i style={{ fontSize: '16px' }} className="material-symbols-outlined">arrow_back</i>
              <p className="">Home</p>
            </Link>
            </div>
          </span>
          {children}
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
