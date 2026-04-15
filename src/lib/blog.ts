import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
  gradient: string;
  image?: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      readTime: data.readTime || "5 min read",
      author: data.author || "Tayler Hughes",
      authorRole: data.authorRole || "Founder, Willard",
      tags: data.tags || [],
      gradient: data.gradient || "from-gray-500 to-gray-400",
      image: data.image || undefined,
      content,
    };
  });

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getBlogSectionPosts(): { title: string; readTime: string; excerpt: string; href: string; gradient: string; image?: string }[] {
  return getAllPosts().map((post) => ({
    title: post.title,
    readTime: post.readTime,
    excerpt: post.excerpt,
    href: `/blog/${post.slug}`,
    gradient: post.gradient,
    image: post.image,
  }));
}
