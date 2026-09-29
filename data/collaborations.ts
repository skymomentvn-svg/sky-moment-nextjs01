export type Collaboration = {
  name: string;
  logo?: string;
};

// No real logo assets provided yet — rendered as minimal wordmarks
// until real logo files are dropped into /public/images/logos/.
export const collaborations: Collaboration[] = [
  { name: "SunGroup" },
  { name: "Volkswagen", logo: "/images/logos/Volkswagen xanh_.png" },
  { name: "VinWonders" },
  { name: "Volkswageno1" },
  { name: "Marriott Re" },
  { name: "Hyatt Regency" },
  { name: "VPS" },
  { name: "KDI Holding" },
  { name: "Sailing Club", logo: "/images/logos/SCL.png" },
  { name: "FlyVietnam" },
  { name: "Marmoris Yachting" },
];
