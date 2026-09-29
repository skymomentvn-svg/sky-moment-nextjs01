export type Collaboration = {
  name: string;
  logo?: string;
};

// No real logo assets provided yet — rendered as minimal wordmarks
// until real logo files are dropped into /public/images/logos/.
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
