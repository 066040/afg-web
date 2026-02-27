export default function ArticlesPage() {
    const articles = [
        {
            title: "Building products step by step",
            date: "2026",
            description:
                "How I approach turning ideas into real projects with clean architecture and iterative development.",
            href: "#",
        },
        {
            title: "Backend + Mobile: A practical workflow",
            date: "2026",
            description:
                "Notes on building a Flutter app with a NestJS backend and PostgreSQL in a scalable way.",
            href: "#",
        },
        {
            title: "Lessons from debugging",
            date: "2026",
            description:
                "The small mistakes that cost the most time — and the habits that fixed them.",
            href: "#",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white px-6 py-24">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
                <p className="text-gray-400 mb-10 max-w-2xl">
                    Short notes about software, products, and the things I learn while building.
                </p>

                <div className="grid gap-6">
                    {articles.map((a) => (
                        <a
                            key={a.title}
                            href={a.href}
                            className="block rounded-2xl border border-white/10 p-6 hover:border-white/30 transition"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-xl md:text-2xl font-semibold">{a.title}</h2>
                                <span className="text-xs text-white/50">{a.date}</span>
                            </div>

                            <p className="text-gray-400 mt-2 max-w-3xl">{a.description}</p>

                            <div className="mt-4 text-sm text-white/70">Read →</div>
                        </a>
                    ))}
                </div>

                <div className="mt-10 text-sm text-white/50">
                    (Later) We can turn these into real pages using MDX.
                </div>
            </section>
        </main>
    );
}