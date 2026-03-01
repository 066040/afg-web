import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projects | Ahmet Furkan Göktaş",
    description: "A selection of high-impact projects I have built.",
};

type Project = {
    title: string;
    description: string;
    stack: string[];
    metrics: string[];
    github?: string;
    live?: string;
    image: string;
    slug: string;
    accent: "blue" | "indigo" | "emerald";
};

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            title: "AutoVibe",
            description:
                "A car-focused social media platform combining feeds, short videos, events and communities. Built with scalability and real-world performance in mind.",
            stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
            metrics: ["High concurrency", "Real-time UX", "Scalable backend"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png",
            slug: "autovibe",
            accent: "indigo",
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
            accent: "blue",
        },
        {
            title: "Sanaiyi",
            description:
                "A service comparison platform helping users find better price/quality with reviews, ratings, and location-based discovery.",
            stack: ["React Native", "Next.js"],
            metrics: ["Local discovery", "Reviews + ratings", "Marketplace-ready"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png",
            slug: "sanaiyi",
            accent: "emerald",
        },
    ];

    const accentGlow = (accent: Project["accent"]) => {
        if (accent === "blue")
            return "bg-[radial-gradient(600px_circle_at_15%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(500px_circle_at_85%_80%,rgba(99,102,241,0.16),transparent_55%)]";
        if (accent === "indigo")
            return "bg-[radial-gradient(650px_circle_at_20%_15%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(500px_circle_at_90%_80%,rgba(59,130,246,0.14),transparent_55%)]";
        return "bg-[radial-gradient(650px_circle_at_20%_15%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(520px_circle_at_90%_80%,rgba(59,130,246,0.12),transparent_55%)]";
    };

    const chipColor = (accent: Project["accent"]) => {
        if (accent === "blue") return "bg-blue-600/10 border-blue-600/20 text-blue-800";
        if (accent === "indigo") return "bg-indigo-600/10 border-indigo-600/20 text-indigo-800";
        return "bg-emerald-600/10 border-emerald-600/20 text-emerald-800";
    };

    const dotColor = (accent: Project["accent"]) => {
        if (accent === "blue") return "bg-blue-600";
        if (accent === "indigo") return "bg-indigo-600";
        return "bg-emerald-500";
    };

    return (
        <main className="min-h-screen px-6 py-16 md:py-20">
            <section className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                        Portfolio
                    </div>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Projects
                    </h1>

                    <p className="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Selected projects I designed, built, and iterated on — focused on clean
                        architecture, real users, and scalable systems.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-5">
                    {projects.map((p) => (
                        <article
                            key={p.slug}
                            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/65 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition"
                        >
                            {/* Tech glow */}
                            <div className={`pointer-events-none absolute inset-0 ${accentGlow(p.accent)} opacity-70`} />
                            <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(15,23,42,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />

                            <div className="relative p-6 md:p-7">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                    {/* Image */}
                                    <div className="relative w-full md:w-[360px] aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-white">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 360px"
                                            priority={p.slug === "autovibe"}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                                                    {p.title}
                                                </h2>
                                                <p className="mt-3 text-slate-600 leading-relaxed">
                                                    {p.description}
                                                </p>
                                            </div>

                                            {/* Top actions (desktop) */}
                                            <div className="hidden md:flex items-center gap-2 shrink-0">
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

                                        {/* Stack */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {p.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${chipColor(
                                                        p.accent
                                                    )}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Metrics */}
                                        <div className="mt-5">
                                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                Key points
                                            </div>
                                            <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                                                {p.metrics.map((m) => (
                                                    <li key={m} className="flex items-center gap-2">
                                                        <span className={`h-2 w-2 rounded-full ${dotColor(p.accent)}`} />
                                                        {m}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Bottom actions */}
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

                                        {/* Subtle footer line */}
                                        <div className="mt-6 h-px w-full bg-slate-200/70" />
                                        <div className="mt-4 text-xs text-slate-500">
                                            Built with focus on UX, architecture, and production readiness.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}