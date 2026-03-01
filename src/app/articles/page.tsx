import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";

export const metadata = {
    title: "Articles | Ahmet Furkan Göktaş",
    description:
        "Articles about computer engineering, backend systems, mobile development, and building scalable applications.",
};

export default function ArticlesPage() {
    const articles = getAllArticles();

    return (
        <main className="min-h-screen px-6 py-16 md:py-20">
            <section className="max-w-5xl mx-auto">
                <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                        Writing
                    </div>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        Articles
                    </h1>
                    <p className="mt-3 text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Thoughts, learnings, and practical notes on computer engineering,
                        backend systems, and building scalable applications.
                    </p>
                </div>

                <div className="grid gap-4">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group block rounded-3xl border border-slate-200 bg-white/70 p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                                <div className="min-w-0">
                                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                                        {article.title}
                                    </h2>

                                    <p className="mt-2 text-slate-600 leading-relaxed max-w-3xl">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="shrink-0 text-sm text-slate-500 flex items-center gap-2 md:gap-3">
                                    <time dateTime={article.date}>
                                        {new Date(article.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </time>
                                    <span className="text-slate-300">•</span>
                                    <span>{article.readingTime}</span>
                                </div>
                            </div>

                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                                Read article <span aria-hidden>→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}