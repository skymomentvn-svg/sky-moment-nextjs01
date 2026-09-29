# Sky Moment

Official website for **Sky Moment** — creative media production studio
(FPV, Flycam, Videography, Photography, TVC, Branding, Marketing, VR360 Tour).

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, global SEO metadata
  page.tsx             Homepage — assembles all sections
  work/[slug]/page.tsx Dynamic project detail route
  api/contact/route.ts Contact form endpoint (see below)
  sitemap.ts, robots.ts
components/            One component per section, no hard-coded content
data/                  services.ts, projects.ts, collaborations.ts
public/
  videos/hero/          sky-moment-hero.mp4
  videos/showreel/       showreel.mp4
  videos/projects/       per-project & per-service clips
  images/projects/       project covers + gallery
  images/services/       service thumbnails
  images/logos/          optional real client logos
  images/hero/            poster/fallback images
```

## Replacing media

Every video/image path lives in `data/*.ts` or is set once in a
component — never duplicated across the codebase. To swap media:

1. Drop the real file into the matching folder under `public/` (see
   the `README.txt` left in each folder for the exact filename expected).
2. If you rename a file, update the one reference in `data/services.ts`,
   `data/projects.ts`, or the relevant component.

Until real files are added, `Hero.tsx` falls back to a dark gradient
instead of a broken video, so the layout never breaks in the meantime.

## Contact form

`components/ContactForm.tsx` validates client-side and posts to
`app/api/contact/route.ts`. That route currently just logs the
submission server-side and returns success, so the UI flow — loading,
success and error states — is fully testable without a backend.

To connect a real provider, open `app/api/contact/route.ts` and
uncomment one of the three ready-made blocks (Formspree, Resend, or
Supabase), then add the matching keys from `.env.example` to `.env.local`.

## Design tokens

Colors, type families and the type scale are centralized in
`tailwind.config.ts`. The accent color (`accent`, a warm horizon amber)
and the display/body typefaces (Archivo / Manrope, loaded via
`next/font/google` in `app/layout.tsx`) are the two things most likely
to need adjusting for brand refinement — everything else derives from them.

## Notes on this build

This code was generated without a live Node/npm environment to run
`next dev` or `next build` against, so please run a first local build
and fix any dependency-version mismatches Next.js flags — the code
follows Next.js 14 App Router conventions throughout but has not been
compiled in this session.
