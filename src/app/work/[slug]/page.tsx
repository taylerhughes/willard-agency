import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_CASE_STUDIES } from "@/content/caseStudies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyPage from "@/components/CaseStudyPage";
import TickerCTA from "@/components/TickerCTA";

export async function generateStaticParams() {
  return Object.keys(ALL_CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = ALL_CASE_STUDIES[slug];
  if (!study) return {};

  return {
    title: study.metaTitle,
    description: study.metaDescription,
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = ALL_CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  // Build related projects — all other case studies, up to 6
  const relatedProjects = Object.values(ALL_CASE_STUDIES)
    .filter((s) => s.slug !== slug)
    .slice(0, 6)
    .map((s) => ({
      slug: s.slug,
      client: s.client,
      year: s.year,
      headline: s.headline,
      tags: s.tags,
      gradient: s.heroGradient,
    }));

  return (
    <>
      <Header />
      <CaseStudyPage caseStudy={study} relatedProjects={relatedProjects} />
      <TickerCTA />
      <Footer />
    </>
  );
}
