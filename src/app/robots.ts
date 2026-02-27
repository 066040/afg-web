import type { MetadataRoute } from "next";

const SITE_URL = "https://afurkangoktas.com"; // <-- değiştir

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}