import type { Metadata } from "next";
import { getProject } from "@/data/projects";
import { SITE } from "@/data/site";
import type { Lang } from "@/i18n/dict";

/** canonical + hreflang for a path without language prefix, e.g. "/projects". */
export function alternates(path: string, lang: Lang): Metadata["alternates"] {
  const en = path || "/";
  const tr = path ? `/tr${path}` : "/tr";
  return { canonical: lang === "tr" ? tr : en, languages: { en, tr, "x-default": en } };
}

export function homeMeta(lang: Lang): Metadata {
  return {
    description: SITE.description[lang],
    alternates: alternates("", lang),
    openGraph: { locale: lang === "tr" ? "tr_TR" : "en_US", description: SITE.description[lang] },
  };
}

export function projectsMeta(lang: Lang): Metadata {
  return {
    title: lang === "tr" ? "Projeler" : "Projects",
    description:
      lang === "tr"
        ? "Ahmet Furkan Göktaş'ın tüm projeleri — otomotiv, gömülü & IoT, yazılım ve oyunlar."
        : "Every build by Ahmet Furkan Göktaş — automotive, embedded & IoT, software and games.",
    alternates: alternates("/projects", lang),
  };
}

export function projectMeta(slug: string, lang: Lang): Metadata {
  const p = getProject(slug);
  if (!p) return {};
  const c = p[lang];
  const cover = p.media.find((m) => m.type === "image");
  return {
    title: p.title,
    description: `${c.tagline} ${c.summary}`.slice(0, 300),
    alternates: alternates(`/projects/${p.slug}`, lang),
    openGraph: cover ? { images: [cover.src] } : undefined,
  };
}
