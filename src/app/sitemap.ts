import type { MetadataRoute } from "next";

const SITE_URL = "https://afurkangoktas.com"; // <-- değiştir

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/projects", "/articles", "/contact"];

    return routes.map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
    }));
}