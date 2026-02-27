export default function ProjectsPage() {
    const projects = [
        {
            title: "AutoVibe",
            description:
                "A car-focused social media platform combining feeds, short videos, events and communities for automotive enthusiasts.",
            stack: ["Flutter", "NestJS", "PostgreSQL"],
        },
        {
            title: "YourEvent",
            description:
                "An event discovery and creation platform that allows people to organize, join and manage public or private events.",
            stack: ["Flutter", "NestJS", "PostgreSQL"],
        },
        {
            title: "Sanaiyi",
            description:
                "A location-based service comparison app that helps users find better prices and quality through ratings and reviews.",
            stack: ["Mobile App", "Backend API", "Database"],
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white px-6 py-24">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-10">
                    Projects
                </h1>

                <div className="grid gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 mb-4 max-w-3xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}