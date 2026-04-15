import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Willard",
  description: "The latest from our design studio.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Derive unique tags with counts
  const tagCounts: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const uniqueTags = Object.keys(tagCounts);

  return (
    <>
      <Header />
      <main>
        {/* Category filter header */}
        <section className="w-full pt-28 lg:pt-40 xl:pt-48 pb-6">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center mb-4">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    The Blog
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 pb-10 lg:pb-16">
                  <Link
                    href="/blog"
                    className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight lowercase text-gray-600 lg:indent-32 xl:indent-48"
                  >
                    explore all
                    <sup className="text-sm ml-1 relative -top-4 lg:-top-6 xl:-top-8">
                      {posts.length}
                    </sup>
                  </Link>
                  {uniqueTags.map((tag) => (
                    <Link
                      key={tag}
                      href="/blog"
                      className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight lowercase text-gray-200 hover:text-gray-600 transition-colors"
                    >
                      {tag}
                      <sup className="text-sm ml-1 relative -top-4 lg:-top-6 xl:-top-8">
                        {tagCounts[tag]}
                      </sup>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog card grid */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="px-2 lg:px-3 xl:px-4 w-full mb-12 md:mb-16 md:w-1/2 lg:w-1/3"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col items-start group"
                >
                  {/* Image with 16:9 aspect ratio */}
                  <div className="w-full relative mb-5">
                    <div className="w-full relative overflow-hidden rounded-2xl lg:rounded-3xl">
                      <div className="w-full relative z-10 rounded-2xl overflow-hidden bg-gray-50 lg:rounded-3xl">
                        <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
                          <div
                            className="relative overflow-hidden w-full"
                            style={{ paddingTop: "56.25%" }}
                          >
                            {post.image ? (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Read time */}
                  <div className="inline-flex items-center mb-1">
                    <div className="font-light text-sm lg:text-base text-gray-600">
                      {post.readTime}
                    </div>
                  </div>
                  {/* Title */}
                  <div className="text-lg md:text-xl tracking-tight text-gray-600 leading-tight text-pretty pr-8 mb-5 lg:pr-16">
                    {post.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
