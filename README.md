# Levitt Chiropractic Center — Website

Modern Next.js 16 (App Router) site for **Levitt Chiropractic Center, P.A.** in Saint Louis Park, MN. Replaces the legacy site while preserving every URL slug for SEO continuity.

## Tech stack

- **Next.js 16** (App Router, RSC)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **Framer Motion** for page/scroll animations
- **next-sitemap** (config provided) + native Next.js metadata API

> The original brief asked for Next.js 14, but the workspace was initialized with Next.js 16 / React 19 / Tailwind v4. The setup uses those versions; APIs and conventions follow current Next.js docs.

## Scripts

```bash
npm run dev      # local dev
npm run build    # production build
npm start        # serve production build
npm run lint     # eslint
```

## Project layout

```
app/
  layout.tsx          Root layout with Navbar + Footer + JSON-LD
  page.tsx            Home
  about-us/...        About Us section
  services/...        All service pages (preserves legacy slugs)
  new-patient-center/...
  resources/...
  contact/...
  sitemap.xml/route.ts   Dynamic XML sitemap from siteConfig
  robots.txt/route.ts    robots.txt route handler
  not-found.tsx
components/
  layout/             Navbar, Footer, MobileMenu
  ui/                 Button, AnimatedSection, HeroSection,
                      ServiceCard, TestimonialCard, ScrollTicker
lib/
  siteConfig.ts       Single source of truth for nav, contact, hours
  metadata.ts         buildMetadata() helper for per-page SEO
public/               Static assets (logo, images)
```

## SEO

- Every route exports `metadata` via `buildMetadata()` for canonical URL, OG, Twitter, and robots tags.
- The dynamic sitemap (`/sitemap.xml`) is generated from `lib/siteConfig.ts` so adding a route automatically registers it.
- `robots.txt` is served at `/robots.txt` and points to the sitemap.
- A `Chiropractor` JSON-LD block is injected from the root layout.

## Configuration

Update `lib/siteConfig.ts` to change phone, address, hours, or navigation — every page and the sitemap pick it up automatically.

Set `SITE_URL` for production builds when using `next-sitemap`.
