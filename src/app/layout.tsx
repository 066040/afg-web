import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://afurkangoktas.com";
const SITE_NAME = "Ahmet Furkan Göktaş";
const AUTHOR_NAME = "Ahmet Furkan Göktaş";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Computer Engineer`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Computer Engineer building scalable mobile and web applications. Flutter, Next.js, backend systems, and databases.",

  applicationName: SITE_NAME,

  keywords: [
    "Computer Engineer",
    "Computer Engineering",
    "Flutter",
    "Next.js",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "Backend Systems",
    "Mobile App Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Computer Engineer`,
    description:
      "Computer Engineer building scalable mobile and web applications. Flutter, Next.js, backend systems, and databases.",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Open Graph Image`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Computer Engineer`,
    description:
      "Computer Engineer building scalable mobile and web applications. Flutter, Next.js, backend systems, and databases.",
    images: ["/og.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    jobTitle: "Computer Engineer",
    description:
      "Computer Engineer building scalable mobile and web applications. Flutter, Next.js, backend systems, and databases.",
    sameAs: [
      "https://github.com/066040",
      "https://www.linkedin.com/in/ahmet-furkan-g%C3%B6kta%C5%9F-913a44247",
    ],
  };

  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body className="antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-slate-900">
        {/* Top glow divider (subtle) */}
        <div className="pointer-events-none fixed inset-x-0 top-0 h-24 -z-10 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(59,130,246,0.14),transparent_60%)]" />

        {/* HEADER */}
        <header className="w-full px-6 py-6 md:py-7">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-4 py-2 font-extrabold text-lg tracking-tight text-slate-900 shadow-sm hover:shadow-md hover:-translate-y-[1px] hover:text-blue-700 transition"
              aria-label="Home"
            >
              AFG
            </a>

            <nav
              className="flex items-center gap-2 sm:gap-3 text-sm font-semibold"
              aria-label="Global Navigation"
            >
              <a
                href="/projects"
                className="rounded-full px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition"
              >
                Projects
              </a>
              <a
                href="/articles"
                className="rounded-full px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition"
              >
                Articles
              </a>
              <a
                href="/contact"
                className="rounded-full px-4 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* subtle divider */}
          <div className="max-w-5xl mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </header>

        {/* CONTENT */}
        <div className="flex-1 w-full">{children}</div>

        {/* FOOTER */}
        <footer className="w-full mt-auto">
          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                &copy; {new Date().getFullYear()} Ahmet Furkan Göktaş. All rights
                reserved.
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/066040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmet-furkan-g%C3%B6kta%C5%9F-913a44247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}