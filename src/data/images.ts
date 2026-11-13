// Unsplash photos, hotlinked per Unsplash API guidelines (attribution in /CREDITS.md).
// Helper builds width/format-aware URLs for responsive <img srcset>.

export type Photo = {
  id: string;
  credit: string;
  creditUrl: string;
};

export const PHOTOS = {
  dHero: { id: "1595971785000-610dc20aa6a3", credit: "Sterling Lanier", creditUrl: "https://unsplash.com/@sterlinglanier" },
  dKyoto: { id: "1610238115511-81be15284155", credit: "Samuel Berner", creditUrl: "https://unsplash.com/@reduxxphotography" },
  dSafari: { id: "1551802230-22c087b11df2", credit: "Henrik Hansen", creditUrl: "https://unsplash.com/@henrik_hansen" },
  dCyclades: { id: "1577956991923-570f15fa49e0", credit: "Nicolas Lysandrou", creditUrl: "https://unsplash.com/@nico86" },

  eHero: { id: "1571274492344-748927a9549d", credit: "Stepan Unar", creditUrl: "https://unsplash.com/@semisunar" },
  eKyoto: { id: "1727836674703-7d3d26af17c3", credit: "Daniel Beauchamp", creditUrl: "https://unsplash.com/@dannywithlove" },
  eSafari: { id: "1731061269662-05497407abdb", credit: "Sylvester Aswin Stanley", creditUrl: "https://unsplash.com/@sylvesteraswin" },
  eCyclades: { id: "1580502304784-8985b7eb7260", credit: "James Ting", creditUrl: "https://unsplash.com/@jamesting" },

  fHero: { id: "1601581874834-3b6065645e07", credit: "Johnny Africa", creditUrl: "https://unsplash.com/@johnnyafrica" },
  fKyoto: { id: "1551277405-8d30a5cde945", credit: "Will Schulenberg", creditUrl: "https://unsplash.com/@willschu" },
  fSafari: { id: "1685301096575-60a1f285b96b", credit: "Polina Koroleva", creditUrl: "https://unsplash.com/@polinakoroleva" },
  fTable: { id: "1731045970795-82a17ec99f30", credit: "Piermario Eva", creditUrl: "https://unsplash.com/@p1mm1" },
} as const satisfies Record<string, Photo>;

export function unsplashUrl(id: string, width: number, format: "jpg" | "webp" | "avif" = "jpg") {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80&fm=${format}`;
}

export function unsplashSrcSet(id: string, widths: number[], format: "jpg" | "webp" | "avif" = "webp") {
  return widths.map((w) => `${unsplashUrl(id, w, format)} ${w}w`).join(", ");
}
