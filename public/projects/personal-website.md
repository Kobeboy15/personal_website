This site has been through three full redesigns since 2023. Each one was a deliberate reset — not an iteration on the previous design, but a fresh take on what a portfolio should actually be.

V4 (what you're looking at) is built to be awwwards-quality without sacrificing the thing a portfolio has to do: communicate clearly and quickly who I am and what I've built.

## V2 → V3 → V4

**V1** (November 2023) was the initial scaffold — minimal, mostly a proof-of-concept to get something live.

**V2** (May 2024) was the first real design: a fairly standard developer portfolio — clean grid, project cards, timeline. It worked, but it looked like every other Next.js portfolio.

**V3** (January 2025) pushed harder on motion and visual identity. GSAP scroll-triggered animations throughout, a more typographic layout, stronger hierarchy. The problem: it was slow to read. Visitors were watching animations instead of absorbing content.

**V4** (June 2026) is a calibration between the two. The 3D ambient backdrop (React Three Fiber) and smooth scroll (Lenis) give it depth, but the content layout is disciplined — clear sections, real hierarchy, no animation that competes with text.

## Animation philosophy

The rule I settled on: **motion should reveal, not perform**. Scroll-triggered reveals (`Reveal` component wrapping every content block) use a short fade + translate that feels responsive rather than theatrical. The ambient 3D scene in the hero is a background element — it never moves fast enough to draw focus away from the headline.

GSAP handles all the scroll-linked work; Framer Motion handles discrete UI state (hover, presence). Keeping them separated means each library does what it's best at and they never conflict.

## Technical decisions

- **No CMS** — the site started with Sanity wired up. Removed it. JSON files are sufficient for a personal portfolio and the overhead of a CMS wasn't justified.
- **`server-only` data layer** — all data fetching is in `src/lib/data.ts` with the `server-only` guard, so it's impossible to accidentally call it client-side
- **`generateStaticParams`** on experience and project detail pages — fully static, no server round-trip on navigation
- **OG image generation** with a static photo fallback, sitemap with canonical URLs, JSON-LD structured data

## What I keep rebuilding

Every version of the site starts with the same question: what is the one thing a recruiter or engineering lead should walk away knowing? The answer has stayed the same — *production engineering across web3, SaaS, and full-stack, with a genuine design sensibility* — but how to show rather than tell that keeps evolving.

## Stack

`Next.js 14` `React 18` `TypeScript` `GSAP` `React Three Fiber` `Lenis` `Tailwind CSS`
