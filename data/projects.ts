export type ProjectCategory =
  | "FPV"
  | "Flycam"
  | "Commercial"
  | "Event"
  | "Automotive"
  | "Real Estate"
  | "Tourism";

export type GalleryItem = {
  type: "image" | "video";
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
  cover: {
    type: "image" | "video";
    src: string;
    poster: string;
  };
  gallery: GalleryItem[];
};

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
    cover: {
      type: "video",
      src: "/videos/projects/vps-cup.mp4",
      poster: "/images/projects/vps-cup-cover.jpg",
    },
    gallery: [
      { type: "image", src: "/images/projects/vps-cup-1.jpg" },
      { type: "image", src: "/images/projects/vps-cup-2.jpg" },
      { type: "image", src: "/images/projects/vps-cup-3.jpg" },
    ],
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
    cover: {
      type: "image",
      src: "/images/projects/alora-coral-fest-cover.jpg",
      poster: "/images/projects/alora-coral-fest-cover.jpg",
    },
    gallery: [
      { type: "image", src: "/images/projects/alora-1.jpg" },
      { type: "image", src: "/images/projects/alora-2.jpg" },
    ],
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
    cover: {
      type: "image",
      src: "/images/projects/volkswagen-cover.jpg",
      poster: "/images/projects/volkswagen-cover.jpg",
    },
    gallery: [
      { type: "image", src: "/images/projects/volkswagen-1.jpg" },
      { type: "image", src: "/images/projects/volkswagen-2.jpg" },
    ],
  },
  {
    index: "04",
    slug: "vinwonders",
    title: "VinWonders",
    year: "2025",
    categories: ["FPV", "Tourism"],
    tagline: "Scale, told through motion.",
    description:
      "Sweeping aerial coverage of VinWonders' rides and grounds, built to communicate scale and pace in a single flowing sequence.",
    services: ["FPV", "Flycam"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: {
      type: "image",
      src: "/images/projects/vinwonders-cover.jpg",
      poster: "/images/projects/vinwonders-cover.jpg",
    },
    gallery: [{ type: "image", src: "/images/projects/vinwonders-1.jpg" }],
  },
  {
    index: "05",
    slug: "marriott-resort",
    title: "Marriott Resort",
    year: "2025",
    categories: ["Real Estate", "Tourism"],
    tagline: "The property, from every altitude.",
    description:
      "A hospitality film moving from wide establishing aerials down to intimate interior detail, framing the resort as one continuous experience.",
    services: ["Flycam", "Photography", "VR360 Tour"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: {
      type: "image",
      src: "/images/projects/marriott-cover.jpg",
      poster: "/images/projects/marriott-cover.jpg",
    },
    gallery: [{ type: "image", src: "/images/projects/marriott-1.jpg" }],
  },
  {
    index: "06",
    slug: "sun-group",
    title: "Sun Group",
    year: "2025",
    categories: ["Flycam", "Tourism"],
    tagline: "Landscapes, reframed.",
    description:
      "Coastal and mountain terrain filmed to emphasize scale, light and the rhythm of the landscape across a full day cycle.",
    services: ["Flycam", "Photography"],
    credits: [{ role: "Director", name: "Sky Moment" }],
    cover: {
      type: "image",
      src: "/images/projects/sun-group-cover.jpg",
      poster: "/images/projects/sun-group-cover.jpg",
    },
    gallery: [{ type: "image", src: "/images/projects/sun-group-1.jpg" }],
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
    cover: {
      type: "image",
      src: "/images/projects/yacht-cover.jpg",
      poster: "/images/projects/yacht-cover.jpg",
    },
    gallery: [{ type: "image", src: "/images/projects/yacht-1.jpg" }],
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
    cover: {
      type: "image",
      src: "/images/projects/nha-trang-cover.jpg",
      poster: "/images/projects/nha-trang-cover.jpg",
    },
    gallery: [{ type: "image", src: "/images/projects/nha-trang-1.jpg" }],
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
