"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, LinkedIn } from "./Logo";
import { Reveal } from "./Reveal";

export default function FooterMenu() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-sm flex items-center justify-between max-w-[940px] px-6 m-auto h-[140px]">
      <Reveal delay={0.9}>
        <Link href="/">
          <h3 className="text-xs md:text-sm text-neutral-800 dark:text-neutral-500">
            © {currentYear} kobe michael
          </h3>
        </Link>
      </Reveal>
      <Reveal delay={0.9}>
        <div className="flex items-center gap-5">
          <a
            title="Kobe Michael's LinkedIn"
            href="https://www.linkedin.com/in/kobe-michael/"
            target="_blank"
            rel="noreferrer"
            className="dark:hover:text-white text-neutral-800  dark:text-neutral-500 transition-colors"
          >
            <LinkedIn />
          </a>
          <a
            title="Kobe Michael's GitHub"
            href="https://github.com/Kobeboy15"
            target="_blank"
            rel="noreferrer"
            className="dark:hover:text-white text-neutral-800  dark:text-neutral-500 transition-colors"
          >
            <Github />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
