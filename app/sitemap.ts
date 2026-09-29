import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://skymoment.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "#work", "#services", "#about", "#contact"].map(
    (path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: new Date(),
    })
  );

  const workRoutes = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...workRoutes];
}
