import Image from "next/image";

/**
 * Decorative accent layer for a project card.
 *
 * Two stacked layers on the right of the card, so the copy on the left is never
 * sat on:
 *
 *  1. A soft radial tint blob — every project gets one, so the cards without a
 *     screenshot still read as part of the same system.
 *  2. The project screenshot, gradient-masked so it dissolves before it reaches
 *     the copy. Blurred and desaturated at rest; on hover it de-blurs, regains
 *     colour and scales up slightly. From lg up this is a full-height image
 *     column (see `.card-media-mask`), paired with the narrower paragraph
 *     measure the cards use at that width; below lg it falls back to a corner
 *     bleed, since a half-width card has no room to spare.
 *
 * Blend modes do the heavy lifting for legibility: `multiply` on the light
 * palette (screenshots are mostly dark UI, so they read as ink), `screen` on
 * dark, where only the bright pixels of the screenshot lift off the card.
 *
 * Expects a `group`-classed, `isolate`d, `overflow-hidden` parent.
 */
export default function ProjectCardMedia({
  cover,
  tint,
  coverGain = 1,
}: {
  cover?: string;
  tint?: string;
  coverGain?: number;
}) {
  if (!cover && !tint) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {tint && (
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[150%] w-[90%] opacity-[0.12] transition-opacity duration-700 ease-out group-hover:opacity-[0.22] motion-reduce:transition-none dark:opacity-[0.16] dark:group-hover:opacity-[0.3]"
          style={{
            background: `radial-gradient(circle at 68% 68%, rgb(${tint}) 0%, transparent 62%)`,
          }}
        />
      )}

      {cover && (
        <div
          className="card-media-mask absolute bottom-0 right-0 h-[72%] w-[56%] mix-blend-multiply dark:mix-blend-screen lg:inset-y-0 lg:h-auto lg:w-[58%]"
          style={{
            // Sits on the wrapper, not the <img>, so it composes with the
            // blur/saturate utilities below instead of overwriting them.
            filter: `brightness(${coverGain})`,
          }}
        >
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 640px) 74vw, 37vw"
            className="scale-[1.12] object-cover object-center opacity-[0.2] blur-[13px] saturate-[0.3] transition-[opacity,filter,transform] duration-700 ease-out will-change-[filter,transform] group-hover:scale-[1.18] group-hover:opacity-[0.34] group-hover:blur-[2.5px] group-hover:saturate-[0.95] motion-reduce:transition-none motion-reduce:group-hover:scale-[1.12] dark:opacity-[0.4] dark:group-hover:opacity-[0.7]"
          />
        </div>
      )}
    </div>
  );
}
