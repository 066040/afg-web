import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Projects | Ahmet Furkan Göktaş',
    description: 'A selection of high-impact projects I have built.',
};

export default function ProjectsPage() {
    const projects = [
        {
            title: "AutoVibe",
            description:
                "A car-focused social media platform combining feeds, short videos, events and communities for automotive enthusiasts. Built for high concurrency and real-time video delivery.",
            stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
            metrics: ["10k+ Active Users", "Used in 5+ countries", "Sub-50ms Feed latency"],
            github: "https://github.com/afurkangoktas",
            live: "https://autovibe.example.com",
            image: "/og.png"
        },
        {
            title: "YourEvent",
            description:
                "An event discovery and creation platform that allows people to organize, join and manage public or private events with real-time ticketing.",
            stack: ["Flutter", "Node.js", "Express", "MongoDB"],
            metrics: ["500+ Events Created", "Real-time QR scanning", "99.9% Uptime"],
            github: "https://github.com/afurkangoktas",
            live: "#",
            image: "/og.png"
        },
        {
            title: "Sanaiyi",
            description:
                "A location-based service comparison app that helps users find better prices and quality through ratings and reviews for automotive repair shops.",
            stack: ["React Native", "Next.js", "Supabase"],
            metrics: ["Top 50 Navigation Apps", "Automated Matching", "500+ Shops Listed"],
            github: "https://github.com/afurkangoktas",
            image: "/og.png"
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white px-6 py-24">
            <section className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Featured Projects
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl">
                        A selection of high-impact applications I've designed, architected, and built from the ground up.
                    </p>
                </div>

                <div className="flex flex-col gap-16">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group relative flex flex-col md:flex-row gap-8 items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                        >
                            {/* Visual */}
                            <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-white/20 transition-colors">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 flex flex-col gap-5">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Metrics */}
                                {project.metrics && (
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Key Impact</h3>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            {project.metrics.map(metric => (
                                                <li key={metric} className="flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                                                    {metric}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                            GitHub
                                        </Link>
                                    )}
                                    {project.live && project.live !== "#" && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}