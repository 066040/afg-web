"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectVisual from "@/components/ProjectVisual";
import { type Project, type Track, TRACK_LABEL } from "@/data/projects";
import { DICT, type Lang, base, up } from "@/i18n/dict";

const FILTERS: ("all" | Track)[] = ["all", "automotive", "embedded", "software", "games"];

export default function ProjectsGrid({ projects, lang }: { projects: Project[]; lang: Lang }) {
  const [f, setF] = useState<(typeof FILTERS)[number]>("all");
  const list = f === "all" ? projects : projects.filter((p) => p.track === f);
  const t = DICT[lang];

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" role="tablist">
        {FILTERS.map((k) => {
          const count = k === "all" ? projects.length : projects.filter((p) => p.track === k).length;
          const on = f === k;
          return (
            <button
              key={k}
              role="tab"
              aria-selected={on}
              onClick={() => setF(k)}
              className={`mono rounded-full border px-4 py-2 text-xs transition ${
                on ? "border-signal bg-signal text-bg" : "border-line-2 text-ink-2 hover:border-ink hover:text-ink"
              }`}
            >
              {k === "all" ? t.all : TRACK_LABEL[lang][k]} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((p) => (
          <Link key={p.slug} href={`${base(lang)}/projects/${p.slug}`} className="group block">
            <ProjectVisual project={p} lang={lang} sizes="(min-width: 768px) 45vw, 100vw" />
            <div className="mono mt-5 flex gap-4 text-[11px] tracking-[0.2em] text-ink-3">
              <span>{up(TRACK_LABEL[lang][p.track], lang)}</span>
              <span>{p[lang].year}</span>
            </div>
            <h2 className="wide mt-2 text-2xl font-extrabold uppercase transition group-hover:text-signal md:text-3xl">
              <span lang="en">{p.title}</span> <span className="inline-block transition group-hover:translate-x-1">→</span>
            </h2>
            <p className="mt-2 text-ink-2">{p[lang].tagline}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
