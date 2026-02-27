import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmet Furkan Göktaş | Computer Engineering Student",
  description:
    "Computer Engineering student. Articles, projects and ideas about building products and learning software.",
  keywords: [
    "Ahmet Furkan Göktaş",
    "computer engineering",
    "next.js",
    "react",
    "flutter",
    "portfolio",
    "personal website",
  ],
  authors: [{ name: "Ahmet Furkan Göktaş" }],
  openGraph: {
    title: "Ahmet Furkan Göktaş",
    description: "Computer Engineering student. Articles, projects and ideas.",
    url: "https://www.afurkangoktas.com",
    siteName: "Ahmet Furkan Göktaş",
    locale: "en_US",
    type: "website",
  },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-white">Ahmet Furkan</span>{" "}
              <span className="text-white/60">Göktaş</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {i.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Let each page control its own vertical spacing */}
        <main className="mx-auto max-w-5xl px-6">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Ahmet Furkan Göktaş</p>

            <div className="flex gap-4">
              <a
                className="hover:text-white transition"
                href="https://github.com/066040"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="hover:text-white transition"
                href="https://www.linkedin.com/in/ahmet-furkan-göktaş-913a44247"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:text-white transition"
                href="mailto:goktas.afurkan@outlook.com"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}