import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projects | Ahmet Furkan Göktaş",
    description: "A selection of high-impact projects I have built.",
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "AutoVibe",
            description:
                "A car-focused social media platform combining feeds, short videos, events and communities for automotive enthusiasts. Built for scalable delivery and real-world performance.",
            stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
            metrics: ["High concurrency", "Real-time UX", "Scalable backend"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png",
            slug: "autovibe",
        },
        {
            title: "YourEvent",
            description:
                "An event discovery and creation platform to organize and join public/private events with modern UI and backend architecture.",
            stack: ["Flutter", "NestJS", "PostgreSQL"],
            metrics: ["Map + discovery", "Auth + roles", "Clean architecture"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png",
            slug: "yourevent",
        },
        {
            title: "Sanaiyi",
            description:
                "A service comparison platform that helps users find better prices and quality with ratings, reviews, and location-based discovery.",
            stack: ["React Native", "Next.js"],
            metrics: ["Local discovery", "Reviews + ratings", "Marketplace-ready"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png",
            slug: "sanaiyi",
        },
    ];

    return (
        <main className="min-h-screen px-6 py-16 md:py-20">
            <section className="max-w-5xl mx-auto">
                <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                        Portfolio
                    </div>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Projects
                    </h1>
                    <p className="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Selected projects I designed, built, and iterated on — focused on
                        real users, clean architecture, and scalability.
                    </p>
                </div>

                <div className="grid gap-4">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="rounded-3xl border border-slate-200 bg-white/70 p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="relative w-full md:w-[360px] aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 360px"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-3">
                                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                                            {p.title}
                                        </h2>

                                        <div className="hidden md:flex items-center gap-2">
                                            {p.github && (
                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                            {p.live && p.live !== "#" && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                                                >
                                                    Live
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="mt-3 text-slate-600 leading-relaxed">
                                        {p.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-blue-600/10 border border-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5">
                                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Key points
                                        </div>
                                        <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                                            {p.metrics.map((m) => (
                                                <li key={m} className="flex items-center gap-2">
                                                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                                    {m}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 flex flex-wrap items-center gap-3">
                                        <Link
                                            href={`/projects/${p.slug}`}
                                            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition"
                                        >
                                            View details
                                        </Link>

                                        <div className="md:hidden flex items-center gap-2">
                                            {p.github && (
                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                            {p.live && p.live !== "#" && (
                                                <a
                                                    href={p.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                                                >
                                                    Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}