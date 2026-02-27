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
        <main className="min-h-screen bg-black text-white px-6 py-24">
            <section className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
                <p className="text-gray-400 mb-10 max-w-2xl">
                    Thoughts, learnings, and notes on computer engineering, backend systems, and app development.
                </p>

                <div className="grid gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="block rounded-2xl border border-white/10 p-6 hover:border-white/30 transition group"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h2 className="text-xl md:text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h2>

                                <div className="text-xs text-white/50 flex gap-2">
                                    <time dateTime={article.date}>
                                        {new Date(article.date).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{article.readingTime}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">{article.description}</p>

                            <div className="mt-4 text-sm text-blue-400/80 group-hover:text-blue-400 transition-colors">
                                Read →
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}