import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative w-full px-6">
      {/* Premium light background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(99,102,241,0.14),transparent_50%),radial-gradient(900px_circle_at_50%_95%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <section className="mx-auto max-w-5xl pt-10 md:pt-14 pb-16">
        {/* Hero */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-14">
          <div className="w-full md:flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Available for internships & collaboration
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Ahmet Furkan Göktaş
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Computer Engineer building scalable mobile & web products.
              <br className="hidden md:block" />
              Flutter, Next.js, backend systems & databases.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                View Projects
              </Link>

              <Link
                href="/articles"
                className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition"
              >
                Read Articles
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition"
              >
                Contact
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm">
                <div className="text-sm text-slate-500">Focus</div>
                <div className="mt-1 font-semibold text-slate-900">Full-stack products</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm">
                <div className="text-sm text-slate-500">Stack</div>
                <div className="mt-1 font-semibold text-slate-900">Flutter • Next.js • Node</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm">
                <div className="text-sm text-slate-500">Goal</div>
                <div className="mt-1 font-semibold text-slate-900">Build real products</div>
              </div>
            </div>
          </div>

          {/* Photo card */}
          <div className="w-full md:w-[360px] flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)] blur-2xl" />
              <div className="relative rounded-[32px] border border-slate-200 bg-white/70 p-5 shadow-sm">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.18)] bg-white">
                  <Image
                    src="/profile.jpg"
                    alt="Ahmet Furkan Göktaş"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-5 text-center">
                  <div className="text-sm font-semibold text-slate-900">Computer Engineer</div>
                  <div className="mt-1 text-sm text-slate-600">Articles • Projects • Ideas</div>

                  <div className="mt-4 flex items-center justify-center gap-3">
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
            </div>
          </div>
        </div>

        {/* Featured (short) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-sm text-slate-500">Featured</div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Projects that prove impact</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I build products end-to-end: UI/UX, backend APIs, databases, and performance.
              Clean architecture and real-world scalability first.
            </p>
            <div className="mt-5">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700 transition"
              >
                Explore Projects →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-sm text-slate-500">Writing</div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Articles for clarity</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I share notes on engineering decisions, architecture, and the lessons learned while building.
              Short, readable, and practical.
            </p>
            <div className="mt-5">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700 transition"
              >
                Read Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}