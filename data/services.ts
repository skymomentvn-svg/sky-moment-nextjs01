export type Service = {
  index: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  // "youtube": set src to a full YouTube URL (or bare video ID) —
  // e.g. src: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  media: {
    type: "video" | "image" | "youtube";
    src: string;
    poster?: string;
  };
};

export const services: Service[] = [
  {
    index: "01",
    slug: "fpv",
    title: "FPV",
    summary: "Dynamic aerial cinematography.",
    detail: "One-shot / Fly-through / Action / Event.",
    media: {
      type: "video",
      src: "/videos/projects/service-fpv.mp4",
      poster: "/images/services/fpv-poster.jpg",
    },
  },
  {
    index: "02",
    slug: "flycam",
    title: "Flycam",
    summary: "Cinematic aerial filming.",
    detail: "Real Estate / Resort / Tourism / Events.",
    media: {
      type: "image",
      src: "/images/services/flycam.jpg",
    },
  },
  {
    index: "03",
    slug: "videographer",
    title: "Videographer",
    summary: "Commercial video production.",
    detail: "Event / Brand / Social / Corporate.",
    media: {
      type: "image",
      src: "/images/services/videographer.jpg",
    },
  },
  {
    index: "04",
    slug: "photographer",
    title: "Photographer",
    summary: "Commercial, lifestyle and event photography.",
    detail: "Editorial / Lifestyle / Event / Product.",
    media: {
      type: "image",
      src: "/images/services/photographer.jpg",
    },
  },
  {
    index: "05",
    slug: "tvc",
    title: "TVC",
    summary: "Concept, production and post-production.",
    detail: "Script / Shoot / Grade / Deliver.",
    media: {
      type: "image",
      src: "/images/services/tvc.jpg",
    },
  },
  {
    index: "06",
    slug: "branding",
    title: "Branding",
    summary: "Visual storytelling for brands.",
    detail: "Identity / Art Direction / Campaign Visuals.",
    media: {
      type: "image",
      src: "/images/services/branding.jpg",
    },
  },
  {
    index: "07",
    slug: "marketing",
    title: "Marketing",
    summary: "Social content, campaign and digital content.",
    detail: "Social Cutdowns / Campaign Assets / Digital Content.",
    media: {
      type: "image",
      src: "/images/services/marketing.jpg",
    },
  },
  {
    index: "08",
    slug: "vr360-tour",
    title: "VR360 Tour",
    summary: "Immersive 360° experience.",
    detail: "Hotel / Resort / Real Estate / Tourism.",
    media: {
      type: "image",
      src: "/images/services/vr360.jpg",
    },
  },
];
