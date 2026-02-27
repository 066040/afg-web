const projects = [
    {
        title: "Your Event",
        desc: "Etkinlik keşfetme & oluşturma platformu. Mobil (Flutter) + backend.",
    },
    {
        title: "PIXEL",
        desc: "Araba odaklı sosyal platform fikri: reels, topluluklar, etkinlik haritası.",
    },
];

export default function ProjectsPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-white/60">
                Üzerinde çalıştığım projeler ve kısa açıklamaları.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p) => (
                    <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h2 className="text-xl font-semibold">{p.title}</h2>
                        <p className="mt-2 text-white/60">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}