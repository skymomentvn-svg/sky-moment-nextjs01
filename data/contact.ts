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
    label: "+84 90 000 0000",
    value: "+84900000000",
    href: "tel:+84900000000",
  },
  email: {
    label: "hello@skymoment.vn",
    value: "hello@skymoment.vn",
    href: "mailto:hello@skymoment.vn",
  },
  zalo: {
    label: "Zalo",
    value: "zalo.me/84900000000",
    href: "https://zalo.me/84900000000",
  },
  facebook: {
    label: "Facebook",
    value: "facebook.com/skymoment",
    href: "https://facebook.com/skymoment",
  },
  instagram: {
    label: "Instagram",
    value: "@skymoment",
    href: "https://instagram.com/skymoment",
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
