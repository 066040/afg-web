import Image from "next/image";
import { type Lang, up } from "@/i18n/dict";
import type { Project } from "@/data/projects";
import { TRACK_LABEL } from "@/data/projects";

/** Corner crop marks — the AFG frame. */
export function Marks() {
  const c = "pointer-events-none absolute h-3 w-3 border-signal";
  return (
    <>
      <span className={`${c} left-2 top-2 border-l border-t`} />
      <span className={`${c} right-2 top-2 border-r border-t`} />
      <span className={`${c} bottom-2 left-2 border-b border-l`} />
      <span className={`${c} bottom-2 right-2 border-b border-r`} />
    </>
  );
}

/**
 * Cover visual: the first photo / video of the project, or — until media
 * arrives — a blueprint "spec plate" so the layout still looks deliberate.
 */
export default function ProjectVisual({
  project,
  lang,
  priority,
  sizes = "(min-width: 1024px) 55vw, 100vw",
  className = "",
}: {
  project: Project;
  lang: Lang;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const m = project.media[0];
  const copy = project[lang];
  const alt = copy.captions?.[0] ?? project.title;
  return (
    <div className={`group/vis relative aspect-[16/10] overflow-hidden rounded-[4px] border border-line bg-panel ${className}`}>
      {m?.type === "image" && (
        <Image
          src={m.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition duration-700 group-hover/vis:scale-[1.03]"
        />
      )}
      {m?.type === "video" && (
        <video
          src={m.src}
          poster={m.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {!m && (
        <div className="grid-bg absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(255,138,31,0.10),transparent_70%)]" />
          <div className="absolute inset-x-8 top-1/2 flex items-center gap-2 text-ink-3">
            <span className="h-3 w-px bg-ink-3" />
            <span className="h-px flex-1 bg-line-2" />
            <span className="mono text-[10px] tracking-[0.25em]">{up(TRACK_LABEL[lang][project.track], lang)}</span>
            <span className="h-px flex-1 bg-line-2" />
            <span className="h-3 w-px bg-ink-3" />
          </div>
          <div
            className="wide absolute -bottom-[0.18em] left-5 select-none text-[clamp(64px,12vw,170px)] font-black leading-none text-transparent"
            style={{ WebkitTextStroke: "1px rgba(236,233,227,0.14)" }}
          >
            {project.code.replace("AFG-", "")}
          </div>
          <div className="mono absolute right-5 top-5 text-right text-[10px] leading-relaxed text-ink-3">
            {copy.spec.map(([k, v]) => (
              <div key={k}>
                {up(k, lang)} <span className="text-ink-2">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <Marks />
      <div className="mono absolute left-4 top-4 rounded-sm bg-bg/80 px-2 py-1 text-[10px] tracking-[0.2em] text-signal backdrop-blur">
        {project.code}
      </div>
    </div>
  );
}
