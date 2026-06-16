"use client";

import { useEffect, useState } from "react";

export interface DeviceCapabilities {
  /** Low-power / mobile — scale down or disable WebGL work. */
  low: boolean;
  ready: boolean;
}

export function useDeviceTier(): DeviceCapabilities {
  const [caps, setCaps] = useState<DeviceCapabilities>({
    low: false,
    ready: false,
  });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    const memory =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
    setCaps({ low: coarse || cores <= 4 || memory <= 4, ready: true });
  }, []);

  return caps;
}
