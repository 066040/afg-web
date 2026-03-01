import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Project = {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    stack: string[];
    highlights: string[];
    links: { label: string; href: string }[];
    image?: string;
};

const PROJECTS: Project[] = [
    {
        slug: "autovibe",
        title: "AutoVibe",
        tagline: "Car-focused social platform with scalable backend architecture",
        description:
            "AutoVibe is a car community product that blends feed + short videos + events. The focus is performance, clean UX, and scalable APIs with a strong database model.",
        stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
        highlights: [
            "Designed end-to-end architecture (UI, API, DB).",
            "Focused on performance and clean data modeling.",
            "Built with scalability and real users in mind.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/afurkangoktas" }],
        image: "/og.png",
    },
    {
        slug: "yourevent",
        title: "YourEvent",
        tagline: "Discover and create public/private events with modern UX",
        description:
            "YourEvent helps people discover, create, and manage events with a clean mobile experience and a structured backend. Includes public/private events and location-based discovery.",
        stack: ["Flutter", "NestJS", "PostgreSQL"],
        highlights: [
            "Location-first discovery experience.",
            "Authentication and protected flows.",
            "Clean architecture and maintainable modules.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/afurkangoktas" }],
        image: "/og.png",
    },
    {
        slug: "sanaiyi",
        title: "Sanaiyi",
        tagline: "Service comparison with ratings, reviews and local discovery",
        description:
            "Sanaiyi is a concept to help users compare local services with reviews and transparent pricing. Built around clarity, speed, and category/location filtering.",
        stack: ["React Native", "Next.js"],
        highlights: [
            "Designed for fast browsing and clean categories.",
            "Review + rating oriented discovery.",
            "Scalable to multiple service verticals.",
        ],
        links: [{ label: "GitHub", href: "https://github.com/afurkangoktas" }],
        image: "/og.png",
    },
];

export async function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) return {};
    return {
        title: `${project.title} | Ahmet Furkan Göktaş`,
        description: project.tagline,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: project.title,
            description: project.tagline,
            images: [{ url: project.image || "/og.png" }],
        },
    };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <main className="min-h-screen px-6 py-14 md:py-18">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                    >
                        <span aria-hidden>←</span> Back to Projects
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-5">
                    {/* Left */}
                    <div className="md:col-span-3">
                        <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm">
                            <div className="text-sm text-slate-500 font-semibold">Project</div>
                            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                                {project.title}
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                                {project.tagline}
                            </p>

                            {project.image && (
                                <div className="relative w-full aspect-video mt-7 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 900px"
                                        priority
                                    />
                                </div>
                            )}

                            <div className="mt-7">
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Overview
                                </div>
                                <p className="mt-3 text-slate-700 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-7">
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Highlights
                                </div>
                                <ul className="mt-3 grid gap-2 text-slate-700">
                                    {project.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2">
                                            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-2">
                        <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm">
                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Tech Stack
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-blue-600/10 border border-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Links
                                </div>
                                <div className="mt-3 grid gap-3">
                                    {project.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                                        >
                                            {l.label} <span className="text-slate-400">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Want a demo?
                                </div>
                                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                    If you want to see more details or discuss architecture, feel free to reach out.
                                </p>
                                <div className="mt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition"
                                    >
                                        Contact me
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom spacing */}
                <div className="h-10" />
            </div>
        </main>
    );
}