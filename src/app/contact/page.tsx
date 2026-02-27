export default function ContactPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
            <p className="text-white/60">
                Bana ulaşmak için aşağıdaki kanalları kullanabilirsin.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-3">
                <p>
                    <span className="text-white/50">Email:</span>{" "}
                    <a className="hover:underline" href="mailto:peakyembed@gmail.com">
                        peakyembed@gmail.com
                    </a>
                </p>
                <p>
                    <span className="text-white/50">GitHub:</span>{" "}
                    <a className="hover:underline" href="https://github.com/" target="_blank">
                        https://github.com/
                    </a>
                </p>
                <p>
                    <span className="text-white/50">LinkedIn:</span>{" "}
                    <a className="hover:underline" href="https://www.linkedin.com/" target="_blank">
                        https://www.linkedin.com/
                    </a>
                </p>
            </div>
        </section>
    );
}