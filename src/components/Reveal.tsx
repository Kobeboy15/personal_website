"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger children (direct elements) instead of revealing as one block. */
  stagger?: boolean;
  delay?: number;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Editorial scroll reveal: fades + lifts content as it enters the viewport.
 * Uses GSAP ScrollTrigger; auto-reverts on unmount via useGSAP.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
  y = 18,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reduced) return; // reduced-motion: render content as-is
      const targets = stagger ? Array.from(el.children) : el;
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [reduced] },
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
