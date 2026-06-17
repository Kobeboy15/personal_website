type ArrowUpRightProps = {
  className?: string;
};

/**
 * North-east arrow used for external/outbound links. Rendered as an inline SVG
 * (not the U+2197 glyph) so iOS Safari/Chrome don't coerce it to an emoji.
 * Sized in `em` and stroked with `currentColor`, so it inherits the parent's
 * font-size and text color like the character it replaced.
 */
export default function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block h-[1em] w-[1em] align-[-0.125em] ${className ?? ""}`}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  );
}
