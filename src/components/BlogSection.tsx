"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Button from "./Button";

interface BlogPost {
  title: string;
  readTime: string;
  excerpt: string;
  href: string;
  gradient: string;
}

const POSTS: BlogPost[] = [
  {
    title: "Why we chose to stay small as a web design agency",
    readTime: "10 min read",
    excerpt: "Co-Founder explains why we haven't turned our digital agency of 10 staff into 30.",
    href: "/blog/staying-small",
    gradient: "from-gray-500 to-gray-400",
  },
  {
    title: "Our culture, our values & our studio",
    readTime: "6 min read",
    excerpt: "In our own words, how important culture, values and studio environment is to us.",
    href: "/blog/culture",
    gradient: "from-gray-400 to-gray-300",
  },
  {
    title: "Types of clients we want to work with",
    readTime: "6 min read",
    excerpt: "Here's a list of the types of clients we want to work with and why.",
    href: "/blog/ideal-clients",
    gradient: "from-primary-700 to-primary-500",
  },
  {
    title: "Why our studio location works for us",
    readTime: "4 min read",
    excerpt: "Why we chose our studio location and how it benefits our work and our clients.",
    href: "/blog/studio-location",
    gradient: "from-gray-600 to-gray-500",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="w-full">
      <Link href={post.href} className="flex flex-col items-start group">
        {/* Image */}
        <div className="w-full relative mb-5">
          <div className="w-full relative overflow-hidden rounded-bl-xl mb-3 pl-px lg:rounded-bl-2xl">
            <div className="w-full relative z-10 rounded-2xl overflow-hidden bg-gray-50 lg:rounded-3xl">
              <div className="w-full transform scale-110 transition-transform xl:group-hover:-translate-y-2.5">
                <div className="relative overflow-hidden w-full" style={{ paddingTop: "56.25%" }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="inline-flex items-center space-x-2 mb-1">
          <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
          <div className="font-light text-sm lg:text-base text-gray-600">
            {post.readTime}
          </div>
        </div>

        {/* Title */}
        <div className="text-lg md:text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight text-pretty pr-8 mb-5 lg:pr-16">
          {post.title}
        </div>

        {/* Excerpt */}
        <div className="font-light text-base lg:text-lg text-gray-400 line-clamp-2 text-balance">
          {post.excerpt}
        </div>
      </Link>
    </div>
  );
}

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="pl-2 sm:pl-6 xl:pl-12 2xl:pl-20">
        <div className="w-full flex flex-wrap justify-between">
          {/* Left header */}
          <div className="px-2 lg:px-3 xl:px-4 inline-flex flex-row items-end justify-between w-full mb-10 md:pr-6 lg:pr-0 lg:flex-col lg:items-start lg:justify-between lg:w-4/16 lg:mb-0">
            <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
              <div className="inline-flex items-center space-x-2">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Blog
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-xs lg:max-w-sm">
                The latest from our design studio
              </h2>
              <Button href="/blog" variant="primary">
                View the blog
              </Button>
            </div>
          </div>

          {/* Blog posts — draggable horizontal scroll */}
          <div className="w-full lg:w-12/16">
            <div
              ref={scrollRef}
              className={`w-full overflow-x-auto scrollbar-hide ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="flex gap-4 lg:gap-6 pr-4 sm:pr-6 xl:pr-12 2xl:pr-20">
                {POSTS.map((post) => (
                  <div
                    key={post.title}
                    className={`flex-shrink-0 w-[75vw] sm:w-[55vw] lg:w-[35vw] xl:w-[30vw] ${isDragging ? "pointer-events-none" : ""}`}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
