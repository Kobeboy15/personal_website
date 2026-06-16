"use client";

import { useEffect, useState } from "react";
import { SITE_VERSIONS } from "@/lib/versions";

type LenisLike = { stop?: () => void; start?: () => void };

/**
 * Mobile-only entry point to the version archive. Lives in the footer (not
 * sticky) and opens a bottom-sheet modal listing the previous versions.
 * Desktop uses the fixed corner VersionSwitcher instead.
 */
export default function MobileVersionArchive() {
  const [open, setOpen] = useState(false);

  // Lock scroll + close on Escape while the sheet is open.
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    const unlock = () => {
      lenis?.start?.();
      document.documentElement.style.removeProperty("overflow");
    };
    if (!open) {
      unlock();
      return;
    }
    lenis?.stop?.();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlock();
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-ink-mute transition-colors hover:text-ink"
      >
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
        v4 — archive
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Previous versions of this site"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-paper/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full animate-fade-up rounded-t-2xl border-t border-line bg-paper-dim px-6 pb-12 pt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="eyebrow">Previous Versions</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="font-mono text-base text-ink-mute transition-colors hover:text-ink"
              >
                ✕
              </button>
            </div>

            <ul className="mt-6 flex flex-col gap-px overflow-hidden rounded-sm bg-line">
              {SITE_VERSIONS.map((v) => (
                <li key={v.label}>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-paper px-5 py-4 text-ink transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-sm uppercase tracking-[0.2em]">
                      {v.label}
                    </span>
                    <span aria-hidden className="text-ink-mute">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
