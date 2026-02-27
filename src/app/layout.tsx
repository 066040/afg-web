import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmet Furkan Göktaş",
  description: "Computer Engineering Student · Software Developer. Articles, projects and ideas.",
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="font-semibold tracking-tight">
              <span className="text-white">Ahmet Furkan</span>{" "}
              <span className="text-white/60">Göktaş</span>
            </a>

            <nav className="flex items-center gap-6 text-sm">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {i.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Ahmet Furkan Göktaş</p>
            <div className="flex gap-4">
              <a className="hover:text-white transition" href="https://github.com/" target="_blank">
                GitHub
              </a>
              <a className="hover:text-white transition" href="https://www.linkedin.com/" target="_blank">
                LinkedIn
              </a>
              <a className="hover:text-white transition" href="mailto:peakyembed@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}