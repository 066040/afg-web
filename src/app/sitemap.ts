import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, priority: 1 },
    { url: `${SITE.url}/projects`, lastModified: now, priority: 0.8 },
    ...PROJECTS.map((p) => ({ url: `${SITE.url}/projects/${p.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
