import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Willard",
  description: "The latest from our design studio.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full pt-28 pb-10 lg:pt-40 lg:pb-16 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center mb-4">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Blog
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-6 text-balance lg:indent-48">
                  The latest from our design studio
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="px-2 lg:px-3 xl:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col items-start"
                >
                  {/* Thumbnail */}
                  <div className="w-full relative overflow-hidden mb-5 rounded-2xl lg:rounded-3xl bg-gray-50">
                    <div className="w-full transform scale-105 transition-transform duration-500 xl:group-hover:scale-110">
                      <div
                        className="relative overflow-hidden w-full"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-50 text-gray-600 text-xs rounded-full pt-1.5 pb-1 px-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="inline-flex items-center mb-1">
                    <div className="font-light text-sm lg:text-base text-gray-600">
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg md:text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-pretty pr-8 mb-3 group-hover:text-gray-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-light text-base text-gray-400 line-clamp-2 text-balance">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
