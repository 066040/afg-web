import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmet Furkan Göktaş | Computer Engineer",
  description: "Computer Engineer. Articles, projects and ideas.",
  alternates: { canonical: "/" },
};
export default function Page() {
  return (
    <main className="w-full px-6">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black" />

      <section className="mx-auto max-w-4xl pt-8 md:pt-12 pb-24 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 border border-white/10 shadow-2xl bg-gray-900">
          <Image src="/og.png" alt="Ahmet Furkan Göktaş" fill className="object-cover" priority />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Ahmet Furkan Göktaş
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          Computer Engineer <br className="hidden md:block" />
          Articles, projects and ideas.
        </p>

        <nav className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center" aria-label="Call to Actions">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </Link>

          <Link
            href="/articles"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            Read Articles
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-full border border-white/10 text-white/90 font-semibold hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}