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
    icon: "/favicon.ico",
  },
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // JSON-LD for SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>

      <body className="antialiased bg-black text-gray-100 min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-blue-100">
        <header className="w-full px-6 py-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a
              href="/"
              className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors"
              aria-label="Home"
            >
              AFG
            </a>

            <nav
              className="flex items-center gap-6 text-sm font-medium text-gray-300"
              aria-label="Global Navigation"
            >
              <a href="/projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="/articles" className="hover:text-white transition-colors">
                Articles
              </a>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <div className="flex-1 w-full">{children}</div>

        <footer className="w-full border-t border-white/10 py-8 mt-auto">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ahmet Furkan Göktaş. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}