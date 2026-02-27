export default function ContactPage() {
    const email = "goktas.afurkan@outlook.com"; // istersen değiştir
    const githubUrl = "https://github.com/066040";
    const linkedinUrl =
        "https://www.linkedin.com/in/ahmet-furkan-g%C3%B6kta%C5%9F-913a44247"; // senin profil

    return (
        <main className="min-h-screen bg-black text-white px-6 py-24">
            <section className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
                <p className="text-gray-400 mb-10">
                    If you want to reach me for collaboration, internships, or project ideas:
                </p>

                <div className="rounded-2xl border border-white/10 p-6">
                    <div className="grid gap-5">
                        <div>
                            <div className="text-sm text-white/60 mb-1">Email</div>
                            <a
                                className="text-lg underline decoration-white/20 hover:decoration-white/60 transition"
                                href={`mailto:${email}`}
                            >
                                {email}
                            </a>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-xl border border-white/10 p-4 hover:border-white/30 transition"
                            >
                                <div className="text-sm text-white/60">GitHub</div>
                                <div className="font-semibold mt-1">
                                    Open profile{" "}
                                    <span className="text-white/60 group-hover:text-white transition">→</span>
                                </div>
                            </a>

                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-xl border border-white/10 p-4 hover:border-white/30 transition"
                            >
                                <div className="text-sm text-white/60">LinkedIn</div>
                                <div className="font-semibold mt-1">
                                    Open profile{" "}
                                    <span className="text-white/60 group-hover:text-white transition">→</span>
                                </div>
                            </a>
                        </div>

                        <div className="text-xs text-white/50">
                            Prefer email? Just click the address above.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}