import { getArticleBySlug, getArticleSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const slugs = getArticleSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = getArticleBySlug(params.slug);
    if (!article) return {};

    const title = `${article.meta.title} | Ahmet Furkan Göktaş`;

    return {
        title,
        description: article.meta.description,
        alternates: {
            canonical: `/articles/${params.slug}`,
        },
        openGraph: {
            title: article.meta.title,
            description: article.meta.description,
            type: "article",
            publishedTime: article.meta.date,
            images: [
                {
                    url: article.meta.coverImage || "/og.png",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.meta.title,
            description: article.meta.description,
            images: [article.meta.coverImage || "/og.png"],
        },
    };
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = getArticleBySlug(params.slug);

    if (!article) return notFound();

    return (
        <main className="min-h-screen px-6 py-14 md:py-18">
            <div className="max-w-3xl mx-auto">
                {/* Back link */}
                <div className="mb-8">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                    >
                        <span aria-hidden>←</span> Back to Articles
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-8 md:mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                        {article.meta.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                        <time dateTime={article.meta.date}>
                            {new Date(article.meta.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                        <span className="text-slate-300">•</span>
                        <span>{article.meta.readingTime}</span>
                    </div>

                    {article.meta.description && (
                        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                            {article.meta.description}
                        </p>
                    )}
                </header>

                {/* Cover */}
                {article.meta.coverImage && (
                    <div className="relative w-full h-[260px] md:h-[360px] mb-10 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                        <Image
                            src={article.meta.coverImage}
                            alt={article.meta.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                )}

                {/* Article content */}
                <article
                    className="
            prose prose-slate prose-lg max-w-none
            prose-headings:font-extrabold prose-headings:tracking-tight
            prose-p:leading-relaxed
            prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900
            prose-code:text-slate-900
            prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:rounded-2xl
            prose-hr:border-slate-200
            prose-blockquote:border-slate-200 prose-blockquote:text-slate-700
          "
                >
                    <MDXRemote source={article.content} />
                </article>

                {/* Bottom CTA */}
                <div className="mt-12 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
                    <div className="text-sm text-slate-500">Want to talk?</div>
                    <div className="mt-2 text-xl font-bold text-slate-900">
                        Let’s build something together.
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition"
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}