import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXContent } from "@/components/MDXContent";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Willard Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full pt-28 pb-10 lg:pt-40 lg:pb-16 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-4/16">
                <Link
                  href="/blog"
                  className="inline-flex items-center space-x-2 mb-4 group"
                >
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 group-hover:text-gray-600 transition-colors transform group-hover:-translate-x-1 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7l45.2 45.3-22.6 22.6-89.4 89.4H448v64H125.3l89.4 89.4 22.5 22.6-45.2 45.3-22.6-22.6-144-144z" />
                  </svg>
                  <span className="font-light text-sm lg:text-base text-gray-400 group-hover:text-gray-600 transition-colors">
                    Back to blog
                  </span>
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-50 text-gray-600 text-xs rounded-full pt-1.5 pb-1 px-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mb-2 text-sm text-gray-400">
                  <span className="font-light">{post.readTime}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span className="font-light">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <div className="text-sm text-gray-400 font-light">
                  By {post.author}
                </div>
              </div>

              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-12/16 mt-6 lg:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-none tracking-tight text-gray-600 mb-8 text-balance">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-10 lg:pb-16">
          <div className="px-2 lg:px-3 xl:px-4">
            <div className="w-full rounded-2xl lg:rounded-3xl overflow-hidden">
              <div
                className="relative w-full"
                style={{ paddingTop: "40%" }}
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article content */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-4/16" />
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-8/16">
              <article className="prose prose-lg max-w-none">
                <MDXContent source={post.content} />
              </article>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-4/16" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
