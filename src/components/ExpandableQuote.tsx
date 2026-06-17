"use client";

import { useState } from "react";

interface ExpandableQuoteProps {
  paragraphs: string[];
  /** Paragraphs shown before the "Read more" toggle appears. */
  previewCount?: number;
}

/**
 * Renders a recommendation body, collapsing long (multi-paragraph) quotes to a
 * preview with a "Read more" toggle. Short quotes render in full, no button.
 */
export default function ExpandableQuote({
  paragraphs,
  previewCount = 2,
}: ExpandableQuoteProps) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = paragraphs.length > previewCount;
  const visible =
    expanded || !collapsible ? paragraphs : paragraphs.slice(0, previewCount);

  return (
    <div className="flex flex-col gap-4">
      {visible.map((para, i) => (
        <p
          key={i}
          className="text-pretty text-base leading-relaxed text-ink-soft lg:text-lg"
        >
          {para}
        </p>
      ))}

      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="link-line mt-2 self-start font-mono text-xs uppercase tracking-[0.2em] text-ink"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}
