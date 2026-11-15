import ProjectsGrid from "@/components/ProjectsGrid";
import { ARCHIVE, PROJECTS } from "@/data/projects";
import { DICT, type Lang, up } from "@/i18n/dict";

export default function ProjectsView({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mono text-xs tracking-[0.25em] text-signal">
        {up(t.nav.projects, lang)} — {PROJECTS.length} {t.builds}
      </div>
      <h1 className="wide mt-5 text-[clamp(44px,8vw,120px)] font-black uppercase leading-[0.88]">
        {t.projectsTitle}
        <span className="text-signal">.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{t.projectsLead}</p>

      <ProjectsGrid projects={PROJECTS} lang={lang} />

      <div className="mt-20 border-t border-line pt-8">
        <h2 className="mono text-[11px] tracking-[0.25em] text-ink-3">{t.earlierWork}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {ARCHIVE.map((a) => (
            <li key={a.title} className="flex flex-wrap gap-x-3 text-ink-2">
              <span className="wide font-bold uppercase text-ink"><span lang="en">{a.title}</span></span>
              <span className="text-ink-3">— {a[lang]}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
