A solo attempt to build a proper internal CMS from scratch — the kind of tool that no-code platforms like Retool approximate but can never fully deliver: typed, customisable, and owned end to end.

The motivation was straightforward. No-code admin tools work until they don't — no type safety, no custom business logic, no path to your own design system, and a vendor sitting between you and your own database. This was an experiment in what it looks like to replace that with something you actually control.

## What it covers

The CMS manages **12 entity types** across **10 active CRUD admin areas** — content items, scheduling, user management, API keys, announcements, FAQ, lookups, maintenance windows, nested task workflows, and an activity feed. Nested CRUD-within-CRUD (tasks under each parent item) was the kind of thing that required workarounds in Retool but is straightforward with server actions and a proper data model.

## Architecture

- **Next.js 16 App Router** — React Server Components for the data-heavy list views, client components where interactivity is needed. No separate API layer; server actions are the endpoint.
- **Tailwind v4 + shadcn/ui** — the first project I built on Tailwind v4. The CSS-first config is a meaningful improvement over the JS config.
- **Supabase** for the data layer — Postgres under the hood, Zod-validated server actions for all mutations
- **Clerk** for auth — magic-link with an allowlist. Right UX for an internal tool: no passwords, and Clerk's middleware integrates cleanly with App Router

## Data layer

Each entity follows a shared pattern: a Zod schema (doubles as form validation at the UI boundary), a server action file for mutations, and a typed React Query hook for client-side cache invalidation. The schemas enforce the same rules at the API and UI layers simultaneously.

## Design decisions

Skipping a REST or RPC layer was the biggest deliberate choice. For an internal tool with a single frontend, a separate API adds indirection without benefit — the action *is* the endpoint. That decision cut a significant amount of boilerplate and kept the data flow easy to follow.

Clerk over NextAuth for the same reason: magic-link auth with an allowlist is simpler to operate than password management for a small internal team, and Clerk's session model composes well with Supabase row-level security as a future extension point.

## Stack

`Next.js 16` `React 19` `TypeScript` `Tailwind v4` `shadcn/ui` `Supabase` `Clerk` `Zod`
