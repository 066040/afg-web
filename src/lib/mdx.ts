import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
    title: string;
    description: string;
    date: string;
    slug: string;
    coverImage?: string;
    readingTime: string;
};

export type Article = {
    meta: ArticleMeta;
    content: string;
};

export function getArticleSlugs(): string[] {
    if (!fs.existsSync(articlesDirectory)) return [];
    return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getArticleBySlug(slug: string): Article | null {
    try {
        const realSlug = slug.replace(/\.mdx$/, "");
        const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const time = readingTime(content);

        return {
            meta: {
                title: data.title,
                description: data.description,
                date: data.date,
                slug: realSlug,
                coverImage: data.coverImage,
                readingTime: time.text,
            },
            content,
        };
    } catch (error) {
        return null;
    }
}

export function getAllArticles(): ArticleMeta[] {
    const slugs = getArticleSlugs();
    const articles = slugs
        .map((slug) => getArticleBySlug(slug))
        .filter((article): article is Article => article !== null)
        .map((article) => article.meta)
        .sort((a, b) => (new Date(b.date).getTime() > new Date(a.date).getTime() ? 1 : -1));

    return articles;
}
