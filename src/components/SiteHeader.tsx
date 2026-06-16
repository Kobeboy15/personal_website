"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = (
      window as unknown as { lenis?: { scrollTo: (t: Element) => void } }
    ).lenis;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-paper/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="gutter flex items-center justify-between py-5">
        <a
          href="#"
          onClick={(e) => onNav(e, "#about")}
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          Kobe Michael
        </a>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden items-center gap-6 sm:flex sm:gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => onNav(e, l.href)}
                  className="link-line font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
