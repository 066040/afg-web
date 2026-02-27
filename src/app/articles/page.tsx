export default function ArticlesPage() {
    return (
        <section className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">Articles</h1>
            <p className="text-white/60">
                Yakında burada yazılarımı paylaşacağım. (MDX sistemi birazdan ekleyeceğiz.)
            </p>

            <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Coming soon</p>
                    <h2 className="mt-2 text-xl font-semibold">İlk makale</h2>
                    <p className="mt-2 text-white/60">
                        Bu alan, makaleler hazır olduğunda otomatik listelenecek.
                    </p>
                </div>
            </div>
        </section>
    );
}