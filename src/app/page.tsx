import Image from "next/image";
import Link from "next/link";
import ProjectVisual, { Marks } from "@/components/ProjectVisual";
import { ARCHIVE, PROJECTS, TRACK_LABEL } from "@/data/projects";
import { SITE } from "@/data/site";

const TOOLBOX: { group: string; items: string[] }[] = [
  {
    group: "Embedded",
    items: ["C / C++", "STM32 (register level)", "ESP32", "Arduino / AVR", "PIC16 · CCS C", "RTOS concepts"],
  },
  { group: "Buses & Comms", items: ["CAN", "UART", "I²C", "SPI", "GSM / GPS (SIM808)", "AMQP · HTTP"] },
  { group: "Robotics & Tools", items: ["ROS 2", "Gazebo", "STM32CubeIDE", "Proteus", "KiCad", "3D printing"] },
  { group: "Software", items: ["Flutter", "React Native", "Node.js", "Next.js", "Canvas · WebGL", "PostgreSQL"] },
];

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

export default function Home() {
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
            <span>COMPUTER ENGINEER</span>
            <span>ANKARA, TÜRKİYE</span>
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
                <span>FIG. 01 — A. F. GÖKTAŞ</span>
                <span>“MÜHENDİS”</span>
              </figcaption>
            </figure>
          </div>

          <div className="after-intro mt-12 grid gap-10 md:mt-16 lg:grid-cols-[1fr_1fr]">
            <p className="max-w-xl text-xl leading-snug text-ink-2 md:text-2xl">
              I build things that <span className="text-ink">drive, sense and talk</span> — embedded
              systems, vehicle telemetry and the software around them. I started out wanting to be a
              mechanical engineer; now I write the code that runs inside the machine.
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:justify-end">
              <Link
                href="#work"
                className="wide rounded-full bg-signal px-6 py-3 text-sm font-bold uppercase text-bg transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(255,138,31,.7)]"
              >
                See the work ↓
              </Link>
              <Link
                href="#contact"
                className="wide rounded-full border border-line-2 px-6 py-3 text-sm font-bold uppercase text-ink transition hover:border-ink"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* instrument strip */}
          <dl className="after-intro mt-14 grid grid-cols-2 border-y border-line md:grid-cols-4">
            {[
              ["BUILDS", String(PROJECTS.length).padStart(2, "0"), "shipped & public"],
              ["FOCUS", "Embedded", "automotive · IoT"],
              ["GRADUATING", "06/2027", "OSTIM Technical Univ."],
              ["NEXT", "Feb 2027", "5-month internship"],
            ].map(([k, v, s], i) => (
              <div
                key={k}
                className={`px-1 py-5 md:px-5 ${i % 2 ? "border-l border-line pl-4" : ""} ${
                  i === 2 ? "border-t border-line md:border-l md:border-t-0 md:pl-5" : ""
                } ${i === 3 ? "border-t border-line md:border-t-0" : ""}`}
              >
                <dt className="mono text-[10px] tracking-[0.25em] text-ink-3">{k}</dt>
                <dd className="wide mt-2 text-2xl font-extrabold md:text-3xl">{v}</dd>
                <dd className="mono mt-1 text-[11px] text-ink-3">{s}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section id="work" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="01" title="Selected work" note="Things I designed, built and tested myself. Each one taught me something the syllabus didn't." />

          <div className="space-y-20 md:space-y-28">
            {featured.map((p, i) => (
              <article
                key={p.slug}
                className={`reveal grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <Link href={`/projects/${p.slug}`} className="block lg:col-span-7" aria-label={p.title}>
                  <ProjectVisual project={p} priority={i === 0} />
                </Link>
                <div className="lg:col-span-5">
                  <div className="mono flex gap-4 text-[11px] tracking-[0.2em] text-ink-3">
                    <span className="text-signal">{p.code}</span>
                    <span>{TRACK_LABEL[p.track].toUpperCase()}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="wide mt-4 text-3xl font-extrabold uppercase leading-none md:text-5xl">
                    <Link href={`/projects/${p.slug}`} className="transition hover:text-signal">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-lg leading-snug text-ink">{p.tagline}</p>
                  <p className="mt-3 leading-relaxed text-ink-2">{p.summary}</p>

                  <dl className="mono mt-6 divide-y divide-line border-y border-line text-xs">
                    {p.spec.map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 py-2.5">
                        <dt className="text-ink-3">{k.toUpperCase()}</dt>
                        <dd className="text-right text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="wide rounded-full border border-line-2 px-5 py-2.5 text-xs font-bold uppercase transition hover:border-signal hover:text-signal"
                    >
                      Read the build →
                    </Link>
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono rounded-full px-3 py-2.5 text-xs text-ink-2 transition hover:text-signal"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PARTS LIST ───────────── */}
      <section className="border-t border-line bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="02" title="Parts list" note="Everything else — embedded, IoT, tools and games. Click any line for the full build." />

          <div className="reveal">
            <div className="mono hidden grid-cols-[90px_1.3fr_1fr_1.4fr_90px] gap-4 border-b border-line pb-3 text-[10px] tracking-[0.25em] text-ink-3 md:grid">
              <span>CODE</span>
              <span>PROJECT</span>
              <span>TRACK</span>
              <span>STACK</span>
              <span className="text-right">YEAR</span>
            </div>
            <ul>
              {rest.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 py-5 transition md:grid-cols-[90px_1.3fr_1fr_1.4fr_90px] md:items-center"
                  >
                    <span className="mono hidden text-xs text-ink-3 transition group-hover:text-signal md:block">{p.code}</span>
                    <span className="wide text-lg font-bold uppercase transition group-hover:translate-x-1 group-hover:text-signal md:text-xl">
                      {p.title}
                    </span>
                    <span className="mono text-[11px] text-ink-2 md:text-xs">{TRACK_LABEL[p.track]}</span>
                    <span className="mono col-span-2 text-xs text-ink-3 md:col-span-1">{p.stack.slice(0, 3).join(" · ")}</span>
                    <span className="mono hidden text-right text-xs text-ink-3 md:block">
                      {p.year} <span className="inline-block transition group-hover:translate-x-1 group-hover:text-signal">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mono mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-ink-3">
              <span className="text-ink-2">EARLIER:</span>
              {ARCHIVE.map((a) => (
                <span key={a.title}>
                  {a.title} <span className="text-ink-3/70">— {a.note}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── TOOLBOX ───────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="03" title="Toolbox" note="What's on the bench. Embedded first, everything else in service of it." />
          <div className="reveal grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {TOOLBOX.map((t) => (
              <div key={t.group} className="bg-bg p-6">
                <h3 className="mono text-[11px] tracking-[0.25em] text-signal">{t.group.toUpperCase()}</h3>
                <ul className="mt-5 space-y-2.5">
                  {t.items.map((it) => (
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

      {/* ───────────── GARAGE ───────────── */}
      <section id="garage" className="scroll-mt-20 border-t border-line bg-bg-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHead n="04" title="The garage" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="reveal relative">
              <div className="flex items-end gap-2 md:gap-4">
                {[
                  ["1", "A"],
                  ["7", "F"],
                  ["8", "G"],
                ].map(([d, l]) => (
                  <div key={d} className="flex flex-col items-center">
                    <span className="wide text-[clamp(110px,20vw,240px)] font-black leading-[0.8]">{d}</span>
                    <span className="mono mt-4 text-sm tracking-[0.3em] text-signal">{l}</span>
                  </div>
                ))}
              </div>
              <p className="mono mt-6 text-xs text-ink-3">
                A=1 · F=7 · G=8 — my initials by position in the Turkish alphabet.
              </p>
            </div>
            <div className="reveal space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Every company story seems to start in a garage. Mine is called{" "}
                <span className="text-ink">Garaj178</span> — a channel where I film the builds,
                the teardowns and whatever tech I&apos;m figuring out that week.
              </p>
              <p>
                My daily driver is a 1990 Tofaş Toros, which is exactly why I care about getting
                modern electronics into machines that never had them. The long-term plan is simple:
                build my own company. Everything on this page is a step toward it.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={SITE.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wide rounded-full border border-line-2 px-5 py-2.5 text-xs font-bold uppercase text-ink transition hover:border-signal hover:text-signal"
                >
                  YouTube · @garaj178 ↗
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wide rounded-full border border-line-2 px-5 py-2.5 text-xs font-bold uppercase text-ink transition hover:border-signal hover:text-signal"
                >
                  Instagram · garaj.178 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT ───────────── */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-line">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_70%_at_50%_60%,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
          <div className="mono reveal text-xs tracking-[0.25em] text-signal">05 — CONTACT</div>
          <h2 className="reveal wide mt-6 max-w-5xl text-[clamp(40px,7.5vw,112px)] font-black uppercase leading-[0.9]">
            Let&apos;s build something that <span className="text-signal">moves.</span>
          </h2>
          <div className="reveal mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="min-w-0">
              <p className="max-w-lg text-lg leading-relaxed text-ink-2">
                Looking for a 5-month internship from February 2027 — automotive and embedded teams
                first. Open to relocating. Email is the fastest way to reach me.
              </p>
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
                ["YouTube", "@garaj178", SITE.youtube],
              ].map(([k, v, href]) => (
                <li key={k}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-between py-4 transition hover:text-signal"
                  >
                    <span className="text-ink-3 group-hover:text-signal">{k.toUpperCase()}</span>
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
