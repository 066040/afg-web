import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual, { Marks } from "@/components/ProjectVisual";
import { PROJECTS, TRACK_LABEL, getProject } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: `${p.tagline} ${p.summary}`.slice(0, 300),
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: p.images[0] ? { images: [p.images[0].src] } : undefined,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <main>
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pt-14">
        <Link href="/projects" className="mono text-xs text-ink-3 transition hover:text-signal">
          ← INDEX
        </Link>

        <div className="mono mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.2em] text-ink-3">
          <span className="text-signal">{p.code}</span>
          <span>{TRACK_LABEL[p.track].toUpperCase()}</span>
          <span>{p.year}</span>
        </div>
        <h1 className="wide mt-5 text-[clamp(40px,7.2vw,112px)] font-black uppercase leading-[0.9] [overflow-wrap:anywhere]">
          {p.title}
          <span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-snug text-ink md:text-2xl">{p.tagline}</p>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ProjectVisual project={p} priority sizes="(min-width: 1280px) 1200px, 100vw" className="!aspect-[16/8]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="mono text-[11px] tracking-[0.25em] text-signal">THE BUILD</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2 md:text-xl">{p.summary}</p>

          <h2 className="mono mt-14 text-[11px] tracking-[0.25em] text-signal">WHAT IT DOES</h2>
          <ol className="mt-5 divide-y divide-line border-y border-line">
            {p.highlights.map((h, n) => (
              <li key={h} className="flex gap-5 py-4">
                <span className="mono pt-0.5 text-xs text-ink-3">{String(n + 1).padStart(2, "0")}</span>
                <span className="text-ink">{h}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="relative rounded-[4px] border border-line bg-panel p-6">
            <Marks />
            <h2 className="mono text-[11px] tracking-[0.25em] text-ink-3">SPEC SHEET</h2>
            <dl className="mono mt-4 divide-y divide-line text-xs">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-ink-3">ROLE</dt>
                <dd className="text-right">{p.role}</dd>
              </div>
              {p.spec.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-ink-3">{k.toUpperCase()}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="mono rounded-sm border border-line-2 px-2 py-1 text-[11px] text-ink-2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {p.links.length > 0 && (
            <div className="flex flex-col gap-2">
              {p.links.map((l, n) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`wide flex items-center justify-between rounded-full px-6 py-3.5 text-sm font-bold uppercase transition ${
                    n === 0
                      ? "bg-signal text-bg hover:shadow-[0_10px_40px_-10px_rgba(255,138,31,.7)]"
                      : "border border-line-2 hover:border-ink"
                  }`}
                >
                  {l.label} <span>↗</span>
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>

      {p.images.length > 1 && (
        <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 md:grid-cols-2 md:px-8">
          {p.images.slice(1).map((img) => (
            <figure key={img.src} className="reveal">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] border border-line bg-panel">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mono mt-3 text-[10px] tracking-[0.2em] text-ink-3">{img.alt.toUpperCase()}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <Link
        href={`/projects/${next.slug}`}
        className="group block border-t border-line transition hover:bg-bg-2"
      >
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 py-14 md:px-8 md:py-20">
          <div className="min-w-0">
            <div className="mono text-[11px] tracking-[0.25em] text-ink-3">NEXT BUILD · {next.code}</div>
            <div className="wide mt-3 text-3xl font-black uppercase transition [overflow-wrap:anywhere] group-hover:text-signal md:text-7xl">
              {next.title}
            </div>
          </div>
          <span className="wide text-4xl transition group-hover:translate-x-2 group-hover:text-signal md:text-6xl">→</span>
        </div>
      </Link>
    </main>
  );
}
