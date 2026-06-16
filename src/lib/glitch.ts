// Glitch characters cycled through during the flicker.
const GLITCH_CHARS = "!<>-_\\/[]{}=+*^?#@$%&0123456789";

/**
 * Subtle character flicker: over `durationMs`, only one or two random
 * characters at a time briefly swap to a glitch character while the rest of the
 * text stays intact. Restores the original text at the end. Returns a cancel
 * function. Browser-only.
 */
export function glitchText(
  el: HTMLElement,
  text: string,
  durationMs = 600,
): () => void {
  // Only flicker non-space positions.
  const indices: number[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") indices.push(i);
  }

  const stepMs = 90; // how often the flickering set changes
  const start = performance.now();
  let lastSwap = -Infinity;
  let active = new Map<number, string>();
  let raf = 0;

  const render = () => {
    let out = "";
    for (let i = 0; i < text.length; i++) {
      out += active.get(i) ?? text[i];
    }
    el.textContent = out;
  };

  const tick = (now: number) => {
    if (now - start >= durationMs) {
      el.textContent = text;
      return;
    }
    if (now - lastSwap >= stepMs) {
      lastSwap = now;
      active = new Map();
      const count = 1 + Math.floor(Math.random() * 2); // 1 or 2 at a time
      for (let k = 0; k < count; k++) {
        const idx = indices[Math.floor(Math.random() * indices.length)];
        active.set(idx, GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]);
      }
      render();
    }
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(raf);
    el.textContent = text;
  };
}
