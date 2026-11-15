import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/projects", ...PROJECTS.map((p) => `/projects/${p.slug}`)];
  return paths.map((path) => ({
    url: `${SITE.url}${path || "/"}`,
    lastModified: now,
    priority: path === "" ? 1 : path === "/projects" ? 0.8 : 0.6,
    alternates: { languages: { en: `${SITE.url}${path || "/"}`, tr: `${SITE.url}/tr${path}` } },
  }));
}
