# E · Cinéma

**Concept.** The site behaves like a trailer, not a brochure: full-bleed stills, long slow scroll, type that appears and recedes rather than sitting in boxes. Almost no visible UI — no cards, no borders, no icons — just image, a few words, and space.

**Palette** (roles)
- `#05070A` Near-black — page background between scenes
- `#F5F3EE` Ivory — type over imagery
- `#9C8255` Brass — the single accent (used only for the CTA underline and the language switcher's active state)
- `rgba(5,7,10,.55)` Scrim — gradient overlay for text legibility, never a flat tint

**Typography.** `Fraunces` at very large, slightly condensed settings for the handful of lines of copy that exist; `Inter` in small, wide-tracked caps for the nav and meta (dates, places). Most sections carry one sentence, not a paragraph.

**Recurring motif.** The "scene change": every section is 100vh (or close to it), image first, and transitions on scroll with a slow cross-fade/parallax (CSS `scroll-timeline`-style progressive reveal, no heavy JS). A thin brass rule appears only at the moment a CTA is interactive — otherwise the frame is clean.

**Image style.** Cinematic, wide, often aerial or long-lens: coastlines from the sea, a yacht at anchor, a sunset silhouette. Color graded cool-dark with warm highlights — think a film still, not a holiday snapshot.

**Three key decisions.**
1. Copy is cut to the bone: a dek of 6–12 words per section, with the fuller sentence held back for the Journey page. This is the direction where the brief's "almost no text" is taken literally — SEO text still exists, but visually hidden text (`sr-only`) underneath carries the H2/H3 structure and the fuller sentence for crawlers and screen readers, so the page is accessible and indexable without breaking the cinematic read.
2. One CTA fades in only after the Five Pillars section, not in the hero — the hero's only job is the lema and the motto, nothing competes with the image.
3. Navigation is a minimal top bar that is transparent over the hero and solidifies (near-black, 90% opacity) on scroll — so chrome never fights the first frame.
