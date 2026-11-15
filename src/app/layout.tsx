import type { Metadata, Viewport } from "next";
import "./globals.css";
import Intro from "@/components/Intro";
import Reveal from "@/components/Reveal";
import { Footer, Header } from "@/components/Chrome";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Embedded & Automotive Software`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description.en,
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
    description: SITE.description.en,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Embedded & Automotive Software`,
    description: SITE.description.en,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: "Computer Engineer",
    alumniOf: "OSTIM Technical University",
    address: { "@type": "PostalAddress", addressLocality: "Ankara", addressCountry: "TR" },
    sameAs: [SITE.github, SITE.linkedin],
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

        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
