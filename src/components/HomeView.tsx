import Image from "next/image";
import Link from "next/link";
import ProjectVisual, { Marks } from "@/components/ProjectVisual";
import { ARCHIVE, PROJECTS, TRACK_LABEL } from "@/data/projects";
import { SITE } from "@/data/site";
import { DICT, type Lang, base, up } from "@/i18n/dict";

const TOOLBOX: Record<Lang, { group: string; items: string[] }[]> = {
  en: [
    { group: "Embedded", items: ["C / C++", "STM32 (register level)", "ESP32", "Arduino / AVR", "PIC16 · CCS C", "RTOS concepts"] },
    { group: "Buses & Comms", items: ["CAN", "UART", "I²C", "SPI", "GSM / GPS (SIM808)", "AMQP · HTTP"] },
    { group: "Robotics & Tools", items: ["ROS 2", "Gazebo", "STM32CubeIDE", "Proteus", "KiCad", "3D printing"] },
    { group: "Software", items: ["Flutter", "React Native", "Node.js", "Next.js", "Canvas · WebGL", "PostgreSQL"] },
  ],
  tr: [
    { group: "Gömülü", items: ["C / C++", "STM32 (register seviyesi)", "ESP32", "Arduino / AVR", "PIC16 · CCS C", "RTOS kavramları"] },
    { group: "Haberleşme", items: ["CAN", "UART", "I²C", "SPI", "GSM / GPS (SIM808)", "AMQP · HTTP"] },
    { group: "Robotik & Araçlar", items: ["ROS 2", "Gazebo", "STM32CubeIDE", "Proteus", "KiCad", "3D baskı"] },
    { group: "Yazılım", items: ["Flutter", "React Native", "Node.js", "Next.js", "Canvas · WebGL", "PostgreSQL"] },
  ],
};

function SectionHead({ n, title, note }: { n: string; title: string; note?: string }) {
  return (
    <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5 md:mb-14">
      <div className="flex items-baseline gap-4">
        <span className="mono text-xs text-signal">{n}</span>
        <h2 className="wide text-3xl font-extrabold uppercase md:text-5xl">{title}</h2>
      </div>
      {note && <p className="mono max-w-sm text-xs leading-relaxed text-ink-3">{note}</p>}
    </div>
  );
}

export default function HomeView({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  const b = base(lang);
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <main>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <div className="mono after-intro mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] tracking-[0.2em] text-ink-3">
            <span className="text-signal">00 — IGNITION</span>
            <span>{up(t.role, lang)}</span>
            <span>{up(t.city, lang)}</span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
            <h1 className="wide text-[clamp(46px,8.2vw,150px)] font-black uppercase leading-[0.86]">
              <span className="rise block overflow-hidden">
                <span>Ahmet</span>
              </span>
              <span className="rise d1 block overflow-hidden">
                <span>Furkan</span>
              </span>
              <span className="rise d2 block overflow-hidden">
                <span>
                  Göktaş<span className="text-signal">.</span>
                </span>
              </span>
            </h1>

            <figure className="after-intro relative mx-auto w-full max-w-[340px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-line bg-panel">
                <Image
                  src="/profile.jpg"
                  alt="Ahmet Furkan Göktaş"
                  fill
                  priority
                  sizes="340px"
                  className="object-cover object-[50%_30%] grayscale-[35%] contrast-[1.05] transition duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <Marks />
              </div>
              <figcaption className="mono mt-3 flex justify-between text-[10px] tracking-[0.2em] text-ink-3">
                <span>{t.fig}</span>
                <span>“MÜHENDİS”</span>
              </figcaption>
            </figure>
          </div>

          <div className="after-intro mt-12 grid gap-10 md:mt-16 lg:grid-cols-[1fr_1fr]">
            <p className="max-w-xl text-xl leading-snug text-ink-2 md:text-2xl">{t.heroLead}</p>
            <div className="flex flex-wrap items-start gap-3 lg:justify-end">
              <Link
                href="#work"
                className="wide rounded-full bg-signal px-6 py-3 text-sm font-bold uppercase text-bg transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(255,138,31,.7)]"
              >
                {t.seeWork}
              </Link>
              <Link
                href="#contact"
                className="wide rounded-full border border-line-2 px-6 py-3 text-sm font-bold uppercase text-ink transition hover:border-ink"
              >
                {t.getInTouch}
              </Link>
            </div>
          </div>

          <dl className="after-intro mt-14 grid grid-cols-2 border-y border-line md:grid-cols-4">
            {t.strip.map(([k, v, s], i) => (
              <div
                key={k}
                className={`px-1 py-5 md:px-5 ${i % 2 ? "border-l border-line pl-4" : ""} ${
                  i === 2 ? "border-t border-line md:border-l md:border-t-0 md:pl-5" : ""
                } ${i === 3 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <dt className="mono text-[10px] tracking-[0.25em] text-ink-3">{k}</dt>
                <dd className="wide mt-2 text-2xl font-extrabold md:text-3xl">{v || String(PROJECTS.length)}</dd>
                <dd className="mono mt-1 text-[11px] text-ink-3">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section id="work" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="01" title={t.selected} note={t.selectedNote} />

          <div className="space-y-20 md:space-y-28">
            {featured.map((p, i) => {
              const c = p[lang];
              const href = `${b}/projects/${p.slug}`;
              return (
                <article
                  key={p.slug}
                  className={`reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <Link href={href} className="block lg:col-span-7" aria-label={p.title}>
                    <ProjectVisual project={p} lang={lang} priority={i === 0} />
                  </Link>
                  <div className="lg:col-span-5">
                    <div className="mono flex gap-4 text-[11px] tracking-[0.2em] text-ink-3">
                      <span className="text-signal">{p.code}</span>
                      <span>{up(TRACK_LABEL[lang][p.track], lang)}</span>
                      <span>{c.year}</span>
                    </div>
                    <h3 className="wide mt-4 text-3xl font-extrabold uppercase leading-none md:text-5xl">
                      <Link href={href} className="transition hover:text-signal">
                        <span lang="en">{p.title}</span>
                      </Link>
                    </h3>
                    <p className="mt-4 text-lg leading-snug text-ink">{c.tagline}</p>
                    <p className="mt-3 leading-relaxed text-ink-2">{c.summary}</p>

                    <dl className="mono mt-6 divide-y divide-line border-y border-line text-xs">
                      {c.spec.map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-4 py-2.5">
                          <dt className="text-ink-3">{up(k, lang)}</dt>
                          <dd className="text-right text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={href}
                        className="wide rounded-full border border-line-2 px-5 py-2.5 text-xs font-bold uppercase transition hover:border-signal hover:text-signal"
                      >
                        {t.readBuild}
                      </Link>
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono rounded-full px-3 py-2.5 text-xs text-ink-2 transition hover:text-signal"
                        >
                          {t.links[l.kind]} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── MORE BUILDS ───────────── */}
      <section className="border-t border-line bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="02" title={t.parts} note={t.partsNote} />

          <div className="reveal">
            <div className="mono hidden grid-cols-[90px_1.3fr_1fr_1.4fr_90px] gap-4 border-b border-line pb-3 text-[10px] tracking-[0.25em] text-ink-3 md:grid">
              {t.cols.map((c, i) => (
                <span key={c} className={i === 4 ? "text-right" : ""}>
                  {c}
                </span>
              ))}
            </div>
            <ul>
              {rest.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link
                    href={`${b}/projects/${p.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 transition md:grid-cols-[90px_1.3fr_1fr_1.4fr_90px] md:items-center"
                  >
                    <span className="mono hidden text-xs text-ink-3 transition group-hover:text-signal md:block">{p.code}</span>
                    <span className="wide text-lg font-bold uppercase transition group-hover:translate-x-1 group-hover:text-signal md:text-xl">
                      <span lang="en">{p.title}</span>
                    </span>
                    <span className="mono text-[11px] text-ink-2 md:text-xs">{TRACK_LABEL[lang][p.track]}</span>
                    <span className="mono col-span-2 text-xs text-ink-3 md:col-span-1">{p.stack.slice(0, 3).join(" · ")}</span>
                    <span className="mono hidden text-right text-xs text-ink-3 md:block">
                      {p[lang].year} <span className="inline-block transition group-hover:translate-x-1 group-hover:text-signal">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mono mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-ink-3">
              <span className="text-ink-2">{t.earlier}:</span>
              {ARCHIVE.map((a) => (
                <span key={a.title}>
                  <span lang="en">{a.title}</span> <span className="text-ink-3/70">— {a[lang]}</span>
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={`${b}/projects`}
                className="wide inline-block rounded-full border border-line-2 px-6 py-3 text-sm font-bold uppercase transition hover:border-signal hover:text-signal"
              >
                {t.allProjects}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── TOOLBOX ───────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="03" title={t.toolbox} note={t.toolboxNote} />
          <div className="reveal grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {TOOLBOX[lang].map((g) => (
              <div key={g.group} className="bg-bg p-6">
                <h3 className="mono text-[11px] tracking-[0.25em] text-signal">{up(g.group, lang)}</h3>
                <ul className="mt-5 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-ink">
                      <span className="h-px w-3 bg-line-2" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT ───────────── */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-line">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_70%_at_50%_60%,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <div className="mono reveal text-xs tracking-[0.25em] text-signal">04 — {up(t.nav.contact, lang)}</div>
          <h2 className="reveal wide mt-6 max-w-5xl text-[clamp(40px,7.5vw,112px)] font-black uppercase leading-[0.9]">
            {t.contactTitle}
          </h2>
          <div className="reveal mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="min-w-0">
              <p className="max-w-lg text-lg leading-relaxed text-ink-2">{t.contactLead}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="wide group mt-8 inline-flex max-w-full items-center gap-3 border-b-2 border-signal pb-1 text-base font-bold transition [overflow-wrap:anywhere] hover:text-signal sm:text-xl md:text-3xl"
              >
                {SITE.email}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
            <ul className="mono divide-y divide-line border-y border-line text-sm">
              {[
                ["GitHub", "066040", SITE.github],
                ["LinkedIn", "Ahmet Furkan Göktaş", SITE.linkedin],
              ].map(([k, v, href]) => (
                <li key={k}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-between py-4 transition hover:text-signal"
                  >
                    <span className="text-ink-3 group-hover:text-signal">{up(k, lang)}</span>
                    <span>{v} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
