"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type LenisLike = { stop?: () => void; start?: () => void };

/**
 * Initial-load overlay. It exists in the first server-rendered paint, so the
 * pre-hydration flash of un-animated content is hidden beneath it. When the
 * intro finishes it curtains away and signals the hero (via the intro bus).
 */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;
      const unlock = () => {
        lenis()?.start?.();
        document.documentElement.style.removeProperty("overflow");
      };

      // Reduced motion: never gate the page behind an animation.
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) {
        gsap.set(root, { display: "none" });
        unlock();
        return;
      }

      // Lock scroll while the intro plays.
      lenis()?.stop?.();
      document.documentElement.style.overflow = "hidden";

      const pct = root.querySelector<HTMLElement>("[data-pct]");
      const counter = { v: 0 };

      const tl = gsap.timeline({ onComplete: unlock });
      tl.to(
        counter,
        {
          v: 100,
          duration: 1.4,
          ease: "power2.inOut",
          onUpdate: () => {
            if (pct)
              pct.textContent = String(Math.round(counter.v)).padStart(3, "0");
          },
        },
        0,
      )
        .fromTo(
          "[data-pre-bar]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: "power2.inOut" },
          0,
        )
        // counter lifts + fades away
        .to(
          "[data-pre-counter]",
          { yPercent: -40, autoAlpha: 0, duration: 0.7, ease: "power3.inOut" },
          "+=0.15",
        )
        // curtain wipes up to reveal the hero
        .to(
          root,
          { yPercent: -100, duration: 1.0, ease: "power4.inOut" },
          "-=0.4",
        )
        .set(root, { display: "none" });

      return () => unlock();
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
    >
      <span
        data-pre-counter
        data-pct
        className="font-mono text-[clamp(2rem,7vw,5rem)] font-light leading-none tracking-tight tabular-nums text-ink"
      >
        000
      </span>

      {/* full-bleed progress hairline pinned to the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line">
        <div data-pre-bar className="h-full w-full origin-left bg-accent" />
      </div>
    </div>
  );
}
