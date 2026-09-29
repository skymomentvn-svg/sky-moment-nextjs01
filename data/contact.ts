export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

// Replace the placeholder values below with Sky Moment's real contact
// details. Every place that links to phone/email/socials reads from
// here, so there is only one place to update.
export const contactInfo: {
  phone: ContactChannel;
  email: ContactChannel;
  zalo: ContactChannel;
  facebook: ContactChannel;
  instagram: ContactChannel;
  tiktok: ContactChannel;
} = {
  phone: {
    label: "+84 889 04 0009",
    value: "+84889040009",
    href: "tel:+84889040009",
  },
  email: {
    label: "skymoment.vn@gmail.com",
    value: "skymoment.vn@gmail.com",
    href: "mailto:skymoment.vn@gmail.com",
  },
  zalo: {
    label: "Zalo",
    value: "zalo.me/84889040009",
    href: "https://zalo.me/84889040009",
  },
  facebook: {
    label: "Facebook",
    value: "facebook.com/skymomentvn",
    href: "https://facebook.com/skymomentvn",
  },
  instagram: {
    label: "Instagram",
    value: "@skymomentvn",
    href: "https://instagram.com/skymomentvn",
  },
  tiktok: {
    label: "TikTok",
    value: "@skymoment",
    href: "https://tiktok.com/@skymoment",
  },
};

export const contactChannelList = [
  contactInfo.phone,
  contactInfo.email,
  contactInfo.zalo,
  contactInfo.facebook,
  contactInfo.instagram,
  contactInfo.tiktok,
];
