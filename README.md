# Altera Terra — new design directions (D, E, F)

Three new visual directions for alteraterra.vip, built as a static Astro site. Each direction is a
self-contained prototype under `/directions/<slug>/`, plus a comparison index at `/`.

- **D · Atelier** — warm, artisanal, notebook-bound. `/directions/d-atelier/`
- **E · Cinéma** — almost no text, full-bleed cinematic scroll. `/directions/e-cinema/`
- **F · Carnet de Voyage** — travel-magazine feature layout. `/directions/f-carnet/`

See `design-docs/*.md` for each direction's concept, palette, type pairing and key decisions, and
`CREDITS.md` for photo attribution.

## Status

All three directions are complete: Home, Journey (a single composed case — "Kyoto, in the quiet
season" — with its five moments, pillars involved, and a teaser of two other journeys), and
Enquire (tabbed Private consultation / Join The Circle form, separate GDPR and newsletter consent,
WhatsApp/call/email alternatives, and the Our Houses section). Forms are client-side only (no
backend wired up) — submitting shows a confirmation state in place of the form.

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:4321/`.

## Building

```bash
npm run build
npm run preview
```

Static output goes to `dist/`. All content is server-rendered into the HTML (no client-side
content injection) — confirmed via view-source / curl on each direction's Home.

## Stack

- Astro 7, static output
- No UI framework — each direction is plain HTML/CSS per its own stylesheet
  (`src/styles/d-atelier.css`, `e-cinema.css`, `f-carnet.css`), sharing `src/styles/base.css` for
  reset/accessibility helpers
- Shared content lives in `src/data/brand.ts` (facts, pillars, copy) and `src/data/images.ts`
  (Unsplash photo IDs + responsive URL helpers)
- Fonts are Google Fonts, loaded per direction in `src/components/fonts/`
- i18n: English content only for now; `LangSwitcher.astro` renders the EN·FR·ES·EL control and is
  the place to wire up real locale routing later (structure intentionally kept simple until a
  direction is chosen)
