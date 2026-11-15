import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import Intro from "@/components/Intro";
import Reveal from "@/components/Reveal";
import ReplayIntro from "@/components/ReplayIntro";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Embedded & Automotive Software`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Ahmet Furkan Göktaş",
    "Computer Engineer",
    "Embedded Systems",
    "Automotive Software",
    "STM32",
    "ESP32",
    "CAN Bus",
    "Vehicle Telemetry",
    "Garaj178",
    "Ankara",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Embedded & Automotive Software`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Embedded & Automotive Software`,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

// Runs before paint: skip the intro for this session / reduced motion.
const introGate = `try{var h=document.documentElement;if(sessionStorage.getItem('afg-intro')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches){h.classList.add('intro-seen','site-on')}}catch(e){}`;

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/projects", label: "Index" },
  { href: "/#garage", label: "Garage" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: "Computer Engineer",
    alumniOf: "OSTIM Technical University",
    address: { "@type": "PostalAddress", addressLocality: "Ankara", addressCountry: "TR" },
    sameAs: [SITE.github, SITE.linkedin, SITE.youtube],
  };

  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script dangerouslySetInnerHTML={{ __html: introGate }} />
        <noscript>
          <style>{`#afg-intro{display:none}.after-intro,.reveal,.rise>span{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body className="grain flex min-h-screen flex-col">
        <Intro />
        <Reveal />

        <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
            <Link href="/" aria-label="Home" className="group flex items-baseline gap-2">
              <span className="wide text-xl font-black tracking-tight">AFG</span>
              <span className="mono text-[11px] text-ink-3 transition group-hover:text-signal">/178</span>
            </Link>

            <nav aria-label="Main" className="flex items-center gap-1 text-sm">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-3 py-1.5 text-ink-2 transition hover:text-ink md:px-4 ${
                    n.label === "Index" ? "hidden sm:block" : ""
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mono hidden items-center gap-2 text-[11px] text-ink-2 lg:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              {SITE.status}
            </div>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:items-end md:px-8">
            <div>
              <div className="wide text-2xl font-black">AFG</div>
              <p className="mono mt-2 text-[11px] leading-relaxed text-ink-3">
                DESIGNED &amp; BUILT BY AHMET FURKAN GÖKTAŞ
                <br />
                ANKARA · 39.93°N 32.86°E · © {new Date().getFullYear()}
              </p>
            </div>
            <div className="mono flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-2 md:justify-center">
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-signal">GitHub</a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal">LinkedIn</a>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-signal">YouTube</a>
              <a href={`mailto:${SITE.email}`} className="hover:text-signal">Email</a>
            </div>
            <div className="md:text-right">
              <ReplayIntro />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
