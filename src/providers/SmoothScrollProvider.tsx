"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Lenis smooth scroll driven by GSAP's single ticker (one shared RAF, no jitter).
 * Renders children untouched so a server layout can wrap server-rendered content.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return; // native scroll for reduced-motion users

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, [reduced]);

  return <>{children}</>;
}
