"use client";

export default function ContactPage() {
    const email = "goktas.afurkan@outlook.com";
    const githubUrl = "https://github.com/066040";
    const linkedinUrl =
        "https://www.linkedin.com/in/ahmet-furkan-g%C3%B6kta%C5%9F-913a44247";

    return (
        <main className="min-h-screen px-6 py-16 md:py-20">
            <section className="max-w-4xl mx-auto">
                <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                        Let’s connect
                    </div>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Contact
                    </h1>
                    <p className="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        If you want to reach me for collaboration, internships, or project
                        ideas — email is the fastest way.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {/* Email card */}
                    <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm">
                        <div className="text-sm font-semibold text-slate-500">Email</div>

                        <a
                            href={`mailto:${email}`}
                            className="mt-2 inline-flex items-center gap-2 text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 hover:text-blue-700 transition-colors break-all"
                        >
                            {email}
                            <span className="text-slate-400 text-base font-semibold">↗</span>
                        </a>

                        <p className="mt-4 text-slate-600 leading-relaxed">
                            I usually respond within 24 hours. If you have a project idea,
                            include a short summary and your timeline.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition"
                            >
                                Send Email
                            </a>
                        </div>
                    </div>

                    {/* Social cards */}
                    <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm">
                        <div className="text-sm font-semibold text-slate-500">Profiles</div>

                        <div className="mt-4 grid gap-3">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition"
                            >
                                <div className="text-sm text-slate-500">GitHub</div>
                                <div className="mt-1 font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                                    Open profile <span aria-hidden>→</span>
                                </div>
                            </a>

                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition"
                            >
                                <div className="text-sm text-slate-500">LinkedIn</div>
                                <div className="mt-1 font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                                    Open profile <span aria-hidden>→</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}