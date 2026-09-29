export type Collaboration = {
  name: string;
  // Path to a logo file in /public/images/logos/, e.g. "/images/logos/sun-group.svg".
  // Leave unset and LogoMarquee falls back to a clean text wordmark —
  // no fake logo is ever generated.
  logo?: string;
};

export const collaborations: Collaboration[] = [
  { name: "Sun Group" },
  { name: "VinFast" },
  { name: "VinWonders" },
  { name: "Volkswagen" },
  { name: "Marriott" },
  { name: "Hyatt Regency" },
  { name: "VTV" },
  { name: "VPS Cup" },
  { name: "KDI Holding" },
  { name: "Sailing Club" },
  { name: "FlyVietnam" },
  { name: "Marmoris Yachting" },
];
