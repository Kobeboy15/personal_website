import FooterSection from "@/components/FooterSection";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="lg:px-24 px-8 max-w-screen-lg mx-auto">
        <div className="blur" />
        <IntroSection />
      </main>
      <FooterSection />
    </div>
  );
}
