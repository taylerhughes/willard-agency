import { getBlogSectionPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_SERVICES } from "@/content/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePage from "@/components/ServicePage";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import TickerCTA from "@/components/TickerCTA";

export async function generateStaticParams() {
  return Object.keys(ALL_SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES[slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function IndividualServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServicePage service={service} />
      <TestimonialSection />
      <BlogSection posts={getBlogSectionPosts()} />
      <TickerCTA />
      <Footer />
    </>
  );
}
