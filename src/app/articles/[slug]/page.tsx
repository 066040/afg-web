import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export async function generateStaticParams() {
    const slugs = getArticleSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = getArticleBySlug(params.slug);
    if (!article) return {};

    return {
        title: `${article.meta.title} | Afurkan Goktas`,
        description: article.meta.description,
        openGraph: {
            title: article.meta.title,
            description: article.meta.description,
            type: 'article',
            publishedTime: article.meta.date,
            images: [
                {
                    url: article.meta.coverImage || '/og.png',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.meta.title,
            description: article.meta.description,
            images: [article.meta.coverImage || '/og.png'],
        },
    };
}

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = getArticleBySlug(params.slug);

    if (!article) return notFound();

    return (
        <main className="max-w-3xl mx-auto px-6 py-20 min-h-screen">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    {article.meta.title}
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                    <time dateTime={article.meta.date}>
                        {new Date(article.meta.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </time>
                    <span>•</span>
                    <span>{article.meta.readingTime}</span>
                </div>
            </header>

            {article.meta.coverImage && (
                <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
                    <Image
                        src={article.meta.coverImage}
                        alt={article.meta.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <article className="prose prose-invert prose-lg max-w-none text-gray-300">
                <MDXRemote source={article.content} />
            </article>
        </main>
    );
}
