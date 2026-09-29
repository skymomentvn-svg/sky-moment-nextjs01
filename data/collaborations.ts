export type Collaboration = {
  name: string;
  logo?: string;
};

// No real logo assets provided yet — rendered as minimal wordmarks
// until real logo files are dropped into /public/images/logos/.
export const collaborations: Collaboration[] = [
  { name: "Sun Group" },
  { name: "Vin Wonders" },
  { name: "Volkswagen" },
  { name: "Marriott Resort" },
  { name: "Hyatt Regency" },
  { name: "VPS" },
  { name: "KDI Holding" },
  { name: "Sailing Club", logo: "public/images/logos/SCL.png" },
  { name: "FlyVietnam" },
  { name: "Marmoris Yachting" },
  { name: "Ana Marina" },
  { name: "Vega City" },
  { name: "VTV2" },
];
