import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/about", "/services", "/contact", "/privacy", "/terms"].map((p) => ({
    url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7,
  }));
}
