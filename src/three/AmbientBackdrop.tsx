"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useDeviceTier } from "@/lib/useDeviceTier";

// ssr:false must live inside a client component.
const BackdropScene = dynamic(() => import("./BackdropScene"), { ssr: false });

/**
 * Fixed, full-viewport ambient layer behind all content. Falls back to the flat
 * paper background when motion is reduced or before capability detection.
 */
export default function AmbientBackdrop() {
  const reduced = useReducedMotion();
  const { low, ready } = useDeviceTier();

  if (!ready || reduced) return null; // body bg (paper) shows through

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-paper"
    >
      {/* Soft gradient — rendered at low resolution; extra pixels are invisible. */}
      <BackdropScene dpr={low ? 0.4 : 0.6} />
    </div>
  );
}
