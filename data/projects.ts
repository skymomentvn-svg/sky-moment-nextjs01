export type ProjectCategory =
  | "FPV"
  | "Flycam"
  | "Commercial"
  | "Event"
  | "Automotive"
  | "Real Estate"
  | "Tourism";

export type GalleryItem = {
  // "youtube": set src to a full YouTube URL (or bare video ID)
  type: "image" | "video" | "youtube";
  src: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  index: string;
  slug: string;
  title: string;
  year: string;
  categories: ProjectCategory[];
  tagline: string;
  description: string;
  services: string[];
  credits: { role: string; name: string }[];
  // The Selected Work grid plays this directly in a lightbox — no
  // separate project page needed. Just paste each project's real
  // YouTube link here (any watch/youtu.be/shorts URL works).
  cover: {
    type: "youtube";
    src: string;
  };
  gallery: GalleryItem[];
};

// All 8 covers below are real Sky Moment YouTube videos.
export const projects: Project[] = [
  {
    index: "01",
    slug: "vps-cup-nha-trang-2026",
    title: "VPS Cup Nha Trang 2026",
    year: "2026",
    categories: ["FPV", "Event"],
    tagline: "Captured from above. Driven by the moment.",
    description:
      "A high-speed sailing regatta across Nha Trang bay, told through low-altitude FPV passes that trace the boats' wake and the shifting light on open water.",
    services: ["FPV", "Flycam", "Photography"],
    credits: [
      { role: "Director", name: "Sky Moment" },
      { role: "FPV Pilot", name: "Sky Moment" },
      { role: "Editor", name: "Sky Moment" },
    ],
    cover: { type: "youtube", src: "https://youtu.be/ToTrABrypgk" },
    gallery: [],
  },
  {
    index: "02",
    slug: "alora-coral-fest-2026",
    title: "Alora Coral Fest 2026",
    year: "2026",
    categories: ["FPV", "Event"],
    tagline: "A festival, seen the way the wind sees it.",
    description:
      "Long, unbroken FPV fly-throughs weave between stages, crowds and coastline to give Alora Coral Fest a single continuous point of view.",
    services: ["FPV", "Videography"],
    credits: [
      { role: "Director", name: "Sky Moment" },
      { role: "FPV Pilot", name: "Sky Moment" },
    ],
    cover: { type: "youtube", src: "https://youtu.be/8Yw_QCQ6u1A" },
    gallery: [],
  },
  {
    index: "03",
    slug: "volkswagen",
    title: "Volkswagen",
    year: "2026",
    categories: ["Automotive", "FPV"],
    tagline: "Precision on the ground, matched from the sky.",
    description:
      "An automotive film pairing close, controlled ground cinematography with FPV passes that mirror the car's own line through the road.",
    services: ["FPV", "TVC"],
    credits: [
      { role: "Director", name: "Sky Moment" },
      { role: "DOP", name: "Sky Moment" },
    ],
    cover: { type: "youtube", src: "https://youtu.be/HM6ltf-KyA8" },
    gallery: [],
  },
  {
    index: "04",
    slug: "an-camp",
    title: "An Camp",
    year: "2026",
    categories: ["FPV", "Tourism"],
    tagline: "A retreat, found from above.",
    description:
      "A cinematic FPV study of An Camp, tracing the retreat's grounds in one continuous, unhurried flow.",
    services: ["FPV"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/oZp1jPeuVj4" },
    gallery: [],
  },
  {
    index: "05",
    slug: "miss-world-vietnam-marmoris",
    title: "Miss World Vietnam",
    year: "2026",
    categories: ["Flycam", "Event"],
    tagline: "A pageant moment, framed by the sea.",
    description:
      "Flycam coverage of Miss World Vietnam aboard Marmoris Yacht, pairing wide establishing passes with closer, more intimate framing.",
    services: ["Flycam", "Photography"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/9VUOEy-Um_M" },
    gallery: [],
  },
  {
    index: "06",
    slug: "sun-group",
    title: "Sun Group",
    year: "2026",
    categories: ["FPV", "Event"],
    tagline: "Nights lit by fireworks and flight.",
    description:
      "FPV coverage across Sun Group's Phu Quoc developments — Sunset Town and Charmora City — from a fireworks show to a New Year's countdown and a live event performance.",
    services: ["FPV", "Videography"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/gcV2_DvnDFU" },
    gallery: [
      { type: "youtube", src: "https://youtu.be/_xQXuAE-YpY", caption: "Countdown New Year 2026" },
      { type: "youtube", src: "https://youtu.be/Ih68Vl8bfSA", caption: "FPV Event Performer — Charmora City" },
      { type: "youtube", src: "https://youtu.be/3CA0ri-wvt8", caption: "Juliet House, Sunset Town" },
    ],
  },
  {
    index: "07",
    slug: "yacht-experience",
    title: "Yacht Experience",
    year: "2025",
    categories: ["Flycam", "Commercial"],
    tagline: "Stillness, from a moving frame.",
    description:
      "A calm, image-led study of a private yacht at sea, favoring long aerial holds over fast cuts.",
    services: ["Flycam", "Photography"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/Q5_WBWHFPPo" },
    gallery: [],
  },
  {
    index: "08",
    slug: "nha-trang-aerial",
    title: "Nha Trang Aerial",
    year: "2025",
    categories: ["Flycam", "Tourism"],
    tagline: "A city, seen at altitude.",
    description:
      "A city-wide aerial survey of Nha Trang, from the bay to the mountains, shot across several sessions to catch different light.",
    services: ["Flycam", "Photography"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/JuZT7-va3DQ" },
    gallery: [{ type: "youtube", src: "https://youtu.be/S3A3fRzPWm4", caption: "Night flight" }],
  },
  {
    index: "09",
    slug: "19-8-stadium-nha-trang",
    title: "19/8 Stadium Nha Trang",
    year: "2026",
    categories: ["FPV", "Tourism"],
    tagline: "A landmark, circled once from the air.",
    description:
      "A cinematic FPV pass around Nha Trang's 19 Thang 8 Stadium, tracing its architecture in one continuous line.",
    services: ["FPV"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/w2ApzAoNlYQ" },
    gallery: [],
  },
  {
    index: "10",
    slug: "fpv-watersport-2026",
    title: "FPV WaterSport 2026",
    year: "2026",
    categories: ["FPV", "Tourism"],
    tagline: "Speed on the water, matched from the air.",
    description:
      "Low, fast FPV passes following watersport action, keeping pace with the water itself.",
    services: ["FPV"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: { type: "youtube", src: "https://youtu.be/PfQ5bXmQKQ8" },
    gallery: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}

export const filterCategories: (ProjectCategory | "All")[] = [
  "All",
  "FPV",
  "Flycam",
  "Commercial",
  "Event",
  "Automotive",
  "Real Estate",
  "Tourism",
];
