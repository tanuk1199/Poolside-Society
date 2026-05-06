# Poolside Society — Explore

Standalone Next.js 16 app for Poolside Society's angle-specific landing pages.

- **Local dev folder**: `Stores/Poolside Society/landing-pages/poolside-explore/`
- **Repo**: https://github.com/tanuk1199/Poolside-Society
- **Planned subdomain**: `explore.poolsidesocietyco.com`

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Fonts via `next/font/google`: Cormorant Garamond (display, italic) + DM Sans (body)
- Brand tokens wired in `app/globals.css` as `--psl-*` CSS variables

## Local development

```bash
npm install
npm run dev
```

## Conventions

- Per-product image isolation: each landing page gets its own `lib/[prefix]-images.ts` + `components/[prefix]-asset.tsx` so image swaps stay scoped.
- Routes live under `app/[slug]/page.tsx`.
- Pushes to `main` auto-deploy via Vercel (once connected).
