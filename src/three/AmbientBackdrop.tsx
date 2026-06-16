"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useDeviceTier } from "@/lib/useDeviceTier";
import { useTheme } from "@/providers/ThemeProvider";

// ssr:false must live inside a client component.
const BackdropScene = dynamic(() => import("./BackdropScene"), { ssr: false });

const PALETTE = {
  // Light stays near-monochrome (no saturated colour clouds) for a refined look.
  light: { paper: "#F6F6F4", shade: "#E7E8EC", accent: "#D2D7E2" },
  dark: { paper: "#0F0F12", shade: "#262A3A", accent: "#566EEA" },
};

/**
 * Fixed, full-viewport ambient gradient behind all content. Falls back to the
 * flat paper background when motion is reduced or before capability detection.
 */
export default function AmbientBackdrop() {
  const reduced = useReducedMotion();
  const { low, ready } = useDeviceTier();
  const { theme } = useTheme();
  const [shown, setShown] = useState(false);

  if (!ready || reduced) return null; // body bg (paper) shows through

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 transition-opacity duration-[3000ms] ease-out"
      style={{ opacity: shown ? 1 : 0 }}
    >
      {/* Soft gradient — rendered at low resolution; fades in after first frame. */}
      <BackdropScene
        dpr={low ? 0.4 : 0.6}
        colors={PALETTE[theme]}
        onReady={() => setShown(true)}
      />
    </div>
  );
}
