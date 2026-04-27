import { getBlogSectionPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import TickerCTA from "@/components/TickerCTA";
import BlogSection from "@/components/BlogSection";
import AiSection from "@/components/AiSection";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WorkSection />
        <ServicesSection />
        <TestimonialSection />

        {/* Sharing the love / About copy */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24">
          <div className="px-2 lg:px-3 xl:px-4 w-full flex flex-wrap items-start justify-between relative z-10">
            <div className="w-full flex flex-wrap lg:mb-0 lg:w-9/16">
              <div>
                <div className="inline-flex items-center w-auto mb-3">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Sharing the love
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none mb-3 text-balance lg:pr-16">
                  A design partner for founders at the earliest, scrappiest
                  stage of the journey.
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-7/16">
              <div className="w-full relative mb-10 xl:pr-10">
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-6">
                  Willard is an equity-aligned design studio. We embed as your
                  fractional design and product lead — taking equity up front,
                  with a retainer that activates when you raise funding or
                  start earning revenue.
                </p>
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-6">
                  Product, brand, launch, and fundraising materials — one
                  partner across the whole surface, from first pixel to pitch
                  deck.
                </p>
              </div>
              <Button href="/about" variant="primary">
                About Willard
              </Button>
            </div>
          </div>
        </section>

        <TickerCTA />
        <BlogSection posts={getBlogSectionPosts()} />
        <AiSection />
      </main>
      <Footer />
    </>
  );
}
