"use client";

import { useState } from "react";
import { SITE_VERSIONS } from "@/lib/versions";

/**
 * A quiet corner marker showing the current version (desktop only). Hover or
 * click reveals links to the archived previous versions of the site. On mobile,
 * the archive is reached via the footer modal instead.
 */
export default function VersionSwitcher() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 sm:flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <ul
        className={`flex flex-col gap-2 transition-all duration-300 ease-out ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {SITE_VERSIONS.map((v) => (
          <li key={v.label}>
            <a
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-accent"
            >
              {v.label}
              <span
                aria-hidden
                className="text-ink-mute transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Browse previous versions of this site"
        className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.28em] text-ink-mute transition-colors hover:text-ink"
      >
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
        v4
      </button>
    </div>
  );
}
