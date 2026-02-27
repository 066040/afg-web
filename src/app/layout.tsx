import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://afurkangoktas.com";
const SITE_NAME = "Afurkan Goktas";
const AUTHOR_NAME = "Afurkan Goktas";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Software Engineer`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Computer Engineering student building scalable mobile and web applications. Flutter, Node.js, NestJS, PostgreSQL.",

  applicationName: SITE_NAME,

  keywords: [
    "Software Engineer",
    "Computer Engineering",
    "Flutter",
    "Next.js",
    "NestJS",
    "PostgreSQL",
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
    title: `${SITE_NAME} | Software Engineer`,
    description:
      "Building scalable mobile and web apps. Flutter, Next.js, NestJS, PostgreSQL.",
    locale: "en_US",
    images: [
      {
        url: "/og.png", // (istersen sonra ekleriz) public/og.png
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Open Graph Image`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Software Engineer`,
    description:
      "Building scalable mobile and web apps. Flutter, Next.js, NestJS, PostgreSQL.",
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
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: AUTHOR_NAME,
              url: SITE_URL,
              jobTitle: "Software Engineer",
              description: "Computer Engineering student building scalable mobile and web applications. Flutter, Node.js, NestJS, PostgreSQL.",
              sameAs: [
                "https://github.com/afurkangoktas",
                "https://linkedin.com/in/afurkangoktas"
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased bg-black text-gray-100 min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-blue-100">
        <header className="w-full px-6 py-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tighter hover:text-blue-400 transition-colors">
              AFG.
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-300" aria-label="Global Navigation">
              <a href="/projects" className="hover:text-white transition-colors">Projects</a>
              <a href="/articles" className="hover:text-white transition-colors">Articles</a>
            </nav>
          </div>
        </header>
        <div className="flex-1 w-full">
          {children}
        </div>
        <footer className="w-full border-t border-white/10 py-8 mt-auto">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Afurkan Goktas. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}