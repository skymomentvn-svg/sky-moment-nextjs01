import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FpvLoader from "@/components/FpvLoader";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://skymoment.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sky Moment — FPV, Flycam & Creative Media Production",
    template: "%s — Sky Moment",
  },
  description:
    "Sky Moment is a creative media production studio specializing in FPV, Flycam, photography, videography, TVC, branding, marketing and immersive VR360 experiences.",
  keywords: [
    "FPV",
    "Flycam",
    "aerial cinematography",
    "drone videography",
    "VR360 tour",
    "creative production studio Vietnam",
  ],
  openGraph: {
    title: "Sky Moment — Every flight tells a story.",
    description:
      "Creative media production studio specializing in FPV, Flycam, photography, videography, TVC, branding, marketing and VR360 experiences.",
    url: siteUrl,
    siteName: "Sky Moment",
    images: [{ url: "/images/hero/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Moment — Every flight tells a story.",
    description:
      "Creative media production studio specializing in FPV, Flycam, photography, videography, TVC, branding, marketing and VR360 experiences.",
    images: ["/images/hero/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="bg-base text-ink font-body antialiased">
        <Header />
        <FpvLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
