import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import { ARCHIVE, PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Index",
  description: "Every build by Ahmet Furkan Göktaş — automotive, embedded & IoT, software and games.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mono text-xs tracking-[0.25em] text-signal">INDEX — {PROJECTS.length} BUILDS</div>
      <h1 className="wide mt-5 text-[clamp(44px,8vw,120px)] font-black uppercase leading-[0.88]">
        Every build<span className="text-signal">.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
        From register-level STM32 drivers to a dashboard for a 1990 Toros. Filter by track, open
        any build for the details.
      </p>

      <ProjectsGrid projects={PROJECTS} />

      <div className="mt-20 border-t border-line pt-8">
        <h2 className="mono text-[11px] tracking-[0.25em] text-ink-3">EARLIER WORK</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {ARCHIVE.map((a) => (
            <li key={a.title} className="flex gap-3 text-ink-2">
              <span className="wide font-bold uppercase text-ink">{a.title}</span>
              <span className="text-ink-3">— {a.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
