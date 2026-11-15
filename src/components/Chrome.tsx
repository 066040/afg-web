"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DICT, type Lang, base } from "@/i18n/dict";
import { SITE } from "@/data/site";
import ReplayIntro from "@/components/ReplayIntro";

export function useLang(): Lang {
  const p = usePathname() || "/";
  return p === "/tr" || p.startsWith("/tr/") ? "tr" : "en";
}

/** Same page in the other language. */
function swapPath(path: string, to: Lang) {
  const plain = path.replace(/^\/tr(?=\/|$)/, "") || "/";
  return to === "tr" ? (plain === "/" ? "/tr" : `/tr${plain}`) : plain;
}

export function Header() {
  const lang = useLang();
  const path = usePathname() || "/";
  const t = DICT[lang];
  const b = base(lang);
  const nav = [
    { href: `${b}/projects`, label: t.nav.projects },
    { href: lang === "tr" ? "/tr#contact" : "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href={b || "/"} aria-label={t.nav.home} className="wide text-xl font-black tracking-tight">
          AFG
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {nav.map((n) => {
            const on = n.href.endsWith("/projects") && path.includes("/projects");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-3 py-1.5 transition md:px-4 ${on ? "text-ink" : "text-ink-2 hover:text-ink"}`}
              >
                {n.label}
              </Link>
            );
          })}
          <span className="mx-1 h-4 w-px bg-line-2 md:mx-2" />
          <div className="mono flex items-center text-[11px]" aria-label="Language">
            {(["en", "tr"] as Lang[]).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="px-1 text-ink-3">/</span>}
                <Link
                  href={swapPath(path, l)}
                  hrefLang={l}
                  aria-current={l === lang ? "true" : undefined}
                  className={`transition ${l === lang ? "text-signal" : "text-ink-3 hover:text-ink"}`}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const lang = useLang();
  const t = DICT[lang];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:items-end md:px-8">
        <div>
          <div className="wide text-2xl font-black">AFG</div>
          <p className="mono mt-2 text-[11px] leading-relaxed text-ink-3">
            {t.builtBy}
            <br />
            ANKARA · 39.93°N 32.86°E · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="mono flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-2 md:justify-center">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-signal">GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal">LinkedIn</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-signal">Email</a>
        </div>
        <div className="md:text-right">
          <ReplayIntro label={t.replay} home={base(lang) || "/"} />
        </div>
      </div>
    </footer>
  );
}
