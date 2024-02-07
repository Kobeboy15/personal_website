import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function NotFound() {
  return (
    <div
      style={{ minHeight: "calc(100vh - 420px)" }}
      className="flex items-center justify-center"
    >
      <Reveal delay={0.1}>
        <div className="dark:text-white flex flex-col max-w-lg gap-3">
          <p className=" tracking-widest text-center">Error 404</p>
          <h3 className="text-5xl tracking-wide font-bold text-center">
            Page not found.
          </h3>
          <p className=" tracking-wider text-sm leading-8 text-center mb-9">
            The page you are looking for doesn&apos;t exist. You may have
            mistyped the address or the page may have moved.
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="hover:text-yellow-500 dark:hover:text-yellow-200 transition-colors text-sm flex justify-center"
            >
              <p className="border-b-[1.2px]">Return to homepage</p>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
