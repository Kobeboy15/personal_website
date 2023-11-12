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
          <h3 className="text-neutral-400 text-xs md:text-sm">
            © {currentYear} kobe michael
          </h3>
        </Link>
      </Reveal>
      <Reveal delay={0.9}>
        <div className="flex items-center gap-5 text-neutral-400">
          <a
            href="https://www.linkedin.com/in/kobe-michael/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Kobeboy15"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
