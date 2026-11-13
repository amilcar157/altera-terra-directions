// Shared facts about Altera Terra. Do not rename the five pillars — client-mandated exact names.

export const SITE_NAME = "Altera Terra";
export const TAGLINE = "For those drawn elsewhere";
export const MOTTO_LATIN = "Unum Per Iter";

export const PILLARS = [
  {
    name: "Travel Design",
    line: "Composed to order, from first sketch to the final mile home.",
  },
  {
    name: "Experiences",
    line: "Access that is arranged quietly, never advertised.",
  },
  {
    name: "Private Charters",
    line: "A vessel or an aircraft, held for you alone.",
  },
  {
    name: "Lifestyle & Concierge",
    line: "The ordinary hours, looked after as closely as the extraordinary ones.",
  },
  {
    name: "Fine Art Sourcing",
    line: "Pieces found, verified, and placed with patience.",
  },
] as const;

export const OFFER_STATEMENT =
  "Each service is conceived not as a transaction, but as a gesture: a considered act of curation, access, and quiet excellence.";

export const HOUSES = [
  { city: "Paris", note: "Address on request" },
  { city: "Madrid", note: "Address on request" },
  { city: "Athens", note: "Address on request" },
] as const;

export const HOUSES_STRIP_LINE = "Three houses, one team";
export const HOUSES_STRIP_SUB =
  "Paris, Madrid, Athens — where we live alongside our clients. The journeys themselves go everywhere.";

export const TEAM = [
  { name: "Domenico Morelli", role: "Chef d'orchestre" },
  { name: "Oscar Motta", role: "Strategy & Governance" },
  { name: "Hugo Barbier", role: "Business Development" },
] as const;

export const CIRCLE = {
  name: "The Circle",
  line: "A membership by request. Private evenings at our three houses, the monthly Lettre, and priority on dates that do not repeat.",
  cta: "Request an invitation",
};

export const CTA_PRIMARY = "Begin the conversation";
export const CTA_PRIMARY_ALT = "Request a consultation";

export const CREDENTIAL_LINE = "Virtuoso Member, through Fora Travel.";

export const TESTIMONIAL_SOURCE =
  "A client's words, from testimonials shared on Instagram, with permission.";

export const LANGS = ["en", "fr", "es", "el"] as const;

export type Moment = { title: string; text: string };

export type Journey = {
  slug: string;
  title: string;
  place: string;
  dek: string;
  pillarsInvolved: string[];
  image: string;
  alt: string;
  moments?: Moment[];
  forWhom?: string;
};

export const JOURNEYS: Record<string, Journey> = {
  kyoto: {
    slug: "kyoto-in-the-quiet-season",
    title: "Kyoto, in the quiet season",
    place: "Kyoto, Japan",
    dek: "A family of five, five mornings, one city that reveals itself slowly.",
    pillarsInvolved: ["Travel Design", "Experiences", "Lifestyle & Concierge"],
    image: "kyoto",
    alt: "A wooden covered walkway through a Japanese garden in autumn light",
    forWhom:
      "Composed for a family of five — two generations — who wanted Kyoto without the queues, and without each other's itineraries getting in the way.",
    moments: [
      {
        title: "A ryokan, held in full",
        text: "The whole house, not a wing of it — so three bedrooms could have their doors open to each other, or not, as the week required.",
      },
      {
        title: "The garden before the gates open",
        text: "A private hour inside a moss garden most visitors only see through a crowd, arranged with the temple directly, not around it.",
      },
      {
        title: "A potter, not a demonstration",
        text: "An afternoon in a working studio in Shigaraki, with a craftsman who agreed to one visit, not a standing class.",
      },
      {
        title: "Dinner at a counter of seven seats",
        text: "A kaiseki room usually booked a season out, held for this one evening by a relationship, not a reservation line.",
      },
      {
        title: "The last morning, deliberately empty",
        text: "No plan at all — because the family had asked, on the second day, for one morning with nowhere to be.",
      },
    ],
  },
  karo: {
    slug: "the-mara-before-dawn",
    title: "The Mara, before dawn",
    place: "Masai Mara, Kenya",
    dek: "Two naturalists, one tented camp moved twice, and light no itinerary can schedule.",
    pillarsInvolved: ["Travel Design", "Private Charters", "Experiences"],
    image: "safari",
    alt: "An acacia tree silhouetted against a golden Masai Mara sunset",
  },
  cyclades: {
    slug: "an-island-with-no-ferry-schedule",
    title: "An island, with no ferry schedule",
    place: "The Cyclades, Greece",
    dek: "A charter instead of a timetable, and a week that answers to no one.",
    pillarsInvolved: ["Private Charters", "Lifestyle & Concierge", "Fine Art Sourcing"],
    image: "cyclades",
    alt: "A whitewashed house above the sea on a Cycladic island",
  },
};

export const CONTACT = {
  whatsapp: "https://wa.me/34600000000",
  whatsappLabel: "WhatsApp",
  email: "concierge@alteraterra.vip",
  bookingLabel: "Reserve a 20-minute call",
  bookingHref: "#",
};

export const ENQUIRE_INTRO =
  "Begin with a conversation, not a form. Tell us as much or as little as you'd like — we will do the rest by phone or in person.";

export const CIRCLE_INTRO =
  "The Circle is a membership by request, not a subscription. An introduction, from you or from someone already inside it, is where this usually starts.";

export const GDPR_LINE =
  "I agree that Altera Terra may hold and use these details solely to respond to this enquiry, in line with its privacy practice.";

export const NEWSLETTER_LINE = "Also send me the Lettre, the monthly newsletter from our three houses.";

export const CONFIRMATION_LINE =
  "Received. Someone from the team will write to you directly — usually within one business day.";
