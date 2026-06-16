"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return; // reduced-motion: skip intro animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-reveal-line] > *", {
        yPercent: 110,
        duration: 1.1,
        stagger: 0.1,
        delay: 0.15,
      })
        .from(
          "[data-reveal-fade]",
          { opacity: 0, y: 16, duration: 0.9, stagger: 0.1 },
          "-=0.7",
        )
        .from("[data-hero-rule]", { scaleX: 0, duration: 1.1 }, "-=0.8");
    },
    { scope: ref, dependencies: [reduced] },
  );

  return (
    <section
      ref={ref}
      className="gutter relative flex min-h-[100svh] flex-col pb-10 pt-28"
    >
      {/* top meta row */}
      <div className="grid grid-cols-12 gap-4 pt-2">
        <p data-reveal-fade className="eyebrow col-span-6">
          Portfolio — 2026
        </p>
        <p
          data-reveal-fade
          className="eyebrow col-span-6 text-right text-ink-soft"
        >
          Vancouver, BC
        </p>
      </div>

      {/* Name — the focal point, centred in the available height */}
      <div className="flex flex-1 items-center py-10">
        <h1 className="font-sans font-medium leading-[0.86] tracking-[-0.03em] text-ink">
          <span data-reveal-line className="block overflow-hidden">
            <span className="block text-[clamp(3.5rem,17vw,28rem)]">Kobe</span>
          </span>
          <span data-reveal-line className="block overflow-hidden">
            <span className="block text-[clamp(3.5rem,17vw,28rem)]">Michael</span>
          </span>
        </h1>
      </div>

      {/* bottom row: role + intro */}
      <div className="grid grid-cols-12 items-end gap-6">
        <div data-reveal-fade className="col-span-12 sm:col-span-5">
          <p className="eyebrow mb-3">Software Engineer · Designer</p>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-ink-soft">
            I build user-focused web experiences — balancing the functional and
            the artistic, with a care for detail, usability, and craft.
          </p>
        </div>
        <div
          data-reveal-fade
          className="col-span-12 flex items-end justify-between gap-6 sm:col-span-7 sm:justify-end"
        >
          <a href="#work" className="link-line font-mono text-sm uppercase tracking-widest">
            Selected Work
          </a>
          <span className="hidden font-mono text-xs uppercase tracking-[0.28em] text-ink-mute sm:inline">
            ↓ Scroll
          </span>
        </div>
      </div>

      <div data-hero-rule className="rule mt-8 origin-left" />
    </section>
  );
}
