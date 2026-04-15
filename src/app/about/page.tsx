import { getBlogSectionPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";
import Button from "@/components/Button";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import ValuesAccordion from "@/components/ValuesAccordion";
import AboutHero from "@/components/AboutHero";
import LogoCarousel from "@/components/LogoCarousel";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TEAM = [
  { name: "Alex Carter", role: "Co-Founder & Creative Director", initials: "AC", color: "bg-primary-500" },
  { name: "Jordan Mills", role: "Co-Founder & Technical Lead", initials: "JM", color: "bg-gray-600" },
  { name: "Sam Reeves", role: "Senior Designer", initials: "SR", color: "bg-gray-400" },
  { name: "Taylor Hughes", role: "Lead Developer", initials: "TH", color: "bg-primary-500" },
  { name: "Morgan Blake", role: "Project Manager", initials: "MB", color: "bg-gray-600" },
  { name: "Casey Lin", role: "UI/UX Designer", initials: "CL", color: "bg-gray-400" },
  { name: "Riley Scott", role: "Frontend Developer", initials: "RS", color: "bg-primary-500" },
  { name: "Jamie Parker", role: "SEO Strategist", initials: "JP", color: "bg-gray-600" },
  { name: "Drew Lawson", role: "Content Writer", initials: "DL", color: "bg-gray-400" },
  { name: "Avery Chen", role: "Motion Designer", initials: "AV", color: "bg-primary-500" },
];

const AWARDS = [
  { name: "CSS Design Awards", type: "Site of the Day", year: "2024" },
  { name: "Awwwards", type: "Honorable Mention", year: "2024" },
  { name: "CSS Design Awards", type: "UI Design Award", year: "2023" },
  { name: "Awwwards", type: "Mobile Excellence", year: "2023" },
  { name: "CSS Design Awards", type: "UX Design Award", year: "2023" },
  { name: "Awwwards", type: "Honorable Mention", year: "2022" },
  { name: "CSS Design Awards", type: "Special Kudos", year: "2022" },
  { name: "Awwwards", type: "Mobile Excellence", year: "2021" },
];

const STATS = [
  { number: "120+", label: "Clients", description: "Businesses we've partnered with since day one." },
  { number: "94%", label: "Referrals", description: "Of our clients come through word of mouth." },
  { number: "10", label: "Team members", description: "Small team, big ambitions." },
  { number: "12", label: "Years", description: "Crafting digital experiences since 2012." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {

  return (
    <>
      <Header />
      <main>
        {/* ========================================================== */}
        {/*  HERO — arched image carousel                              */}
        {/* ========================================================== */}
        <AboutHero />

        {/* ========================================================== */}
        {/*  ABOUT COPY                                                */}
        {/* ========================================================== */}
        <section id="about-content" className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-6 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Who we are
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                Expert designers &amp; developers you can trust.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-6 max-w-2xl">
                Willard is a small, focused digital agency. We specialise in
                brand identity, web design, eCommerce, and SEO &mdash; working
                with businesses of all sizes, from startups to established
                brands looking to level up their digital presence.
              </p>
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 mb-8 max-w-2xl">
                We keep our team small on purpose. It means every client gets
                senior-level attention, and every project is led by people who
                genuinely care about the outcome. No account managers, no
                juniors learning on your budget &mdash; just experienced
                designers and developers doing what they do best.
              </p>
              <Button href="/work" variant="primary">
                See our work
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  CLIENT LOGO BAR                                           */}
        {/* ========================================================== */}
        <section className="pb-10 lg:pb-16">
          <LogoCarousel />
        </section>

        {/* ========================================================== */}
        {/*  TEAM GRID                                                 */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Our Team
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance mb-5">
                Multiple personalities, no egos.
              </h2>
              <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-sm">
                A tight-knit team of designers, developers, and strategists who
                love what they do.
              </p>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                {TEAM.map((member) => (
                  <div key={member.name} className="group">
                    <div
                      className={`w-full aspect-square rounded-2xl lg:rounded-3xl ${member.color} flex items-center justify-center mb-3 transition-transform duration-300 xl:group-hover:scale-95`}
                    >
                      <span className="text-white text-2xl lg:text-3xl font-light tracking-tight">
                        {member.initials}
                      </span>
                    </div>
                    <div className="text-sm lg:text-base text-gray-600 leading-tight">
                      {member.name}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-400 font-light">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  STATS                                                     */}
        {/* ========================================================== */}
        <div className="w-full py-0">
          <div className="px-0">
            <div className="w-full py-16 lg:py-24 2xl:py-32 bg-gray-600 rounded-2xl lg:rounded-3xl">
              <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
                <div className="w-full flex flex-wrap justify-between items-end mb-10 lg:mb-16">
                  <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-auto">
                    <div className="inline-flex items-center mb-4">
                      <div className="font-light text-sm lg:text-base text-white">
                        By the numbers
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-white leading-none text-balance max-w-md">
                      Small team, big results.
                    </h2>
                  </div>
                </div>
                <div className="w-full flex flex-wrap">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="px-2 lg:px-3 xl:px-4 w-1/2 lg:w-1/4 mb-8 lg:mb-0"
                    >
                      <div className="border-t border-gray-400 pt-6">
                        <div className="text-4xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-none mb-2">
                          {stat.number}
                        </div>
                        <div className="text-base lg:text-lg text-white mb-1">
                          {stat.label}
                        </div>
                        <div className="text-sm text-white font-light opacity-60">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/*  TESTIMONIAL                                               */}
        {/* ========================================================== */}
        <TestimonialSection />

        {/* ========================================================== */}
        {/*  VALUES                                                    */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            <div className="px-2 lg:px-3 xl:px-4 w-full mb-10 lg:mb-0 lg:w-5/16">
              <div className="w-full lg:sticky lg:top-32 lg:left-0">
                <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                  <div className="inline-flex items-center">
                    <div className="font-light text-sm lg:text-base text-gray-600">
                      Our values
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-lg lg:max-w-none">
                    What we believe in.
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16 xl:w-9/16">
              <ValuesAccordion />
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  CULTURE QUOTE                                             */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between">
            {/* Image */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-8/16 mb-10 lg:mb-0">
              <div className="w-full relative aspect-square md:aspect-video lg:aspect-auto lg:h-full">
                <div className="w-full h-full rounded-2xl lg:rounded-3xl bg-gray-100 overflow-hidden" />
              </div>
            </div>

            {/* Content */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-8/16 flex items-center">
              <div className="w-full space-y-8 lg:max-w-xl xl:max-w-2xl">
                <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                  <div className="inline-flex items-center">
                    <div className="font-light text-sm lg:text-base text-gray-600">
                      Our Culture
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl xl:text-3xl tracking-tight text-gray-600 leading-none text-balance">
                    We&apos;ve created an environment where everyone feels
                    comfortable and open, but we can have a laugh along the way.
                  </h2>
                </div>

                <p className="text-base xl:text-lg text-gray-400 font-light leading-7">
                  We produce good work for good people, with the belief that happy
                  teams and happy clients lead to the best outcomes. That energy
                  comes back around &mdash; whether through referrals or long-term
                  partnerships.
                </p>

                {/* Quote card */}
                <div className="w-full bg-primary-500 rounded-2xl p-6 relative">
                  <svg
                    className="text-gray-600 fill-current w-5 h-5 mb-3 opacity-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 11"
                  >
                    <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z" />
                  </svg>
                  <p className="text-lg md:text-xl xl:text-2xl tracking-tight text-gray-600 leading-tight">
                    My vision has always been to look after the clients we work
                    with, but to also look after the team just as much. That will
                    get the best results for everyone.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-gray-600 flex items-center justify-center text-white text-sm">
                      AC
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm text-gray-600">Alex Carter</div>
                      <div className="text-xs text-gray-400 font-light">
                        Co-Founder
                      </div>
                    </div>
                  </div>
                </div>

                <Button href="/about" variant="dark">
                  Learn about our culture
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  AWARDS / RECOGNITION                                      */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between items-end mb-10">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-auto">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  We don&apos;t pay for awards
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-md xl:max-w-2xl">
                We win awards and get recognised for our work.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 mt-4 lg:mt-0">
              <Button href="/contact" variant="primary">
                You could be next
              </Button>
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide -mx-2 px-2">
            <div className="flex gap-4 lg:gap-6 w-max lg:w-full lg:flex-wrap lg:grid lg:grid-cols-4">
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-56 lg:w-auto bg-gray-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[200px]"
                >
                  <div>
                    <div className="text-xs text-gray-200 font-light mb-1">
                      {award.year}
                    </div>
                    <div className="text-white text-base lg:text-lg tracking-tight leading-tight mb-2">
                      {award.name}
                    </div>
                  </div>
                  <div className="text-primary-500 text-sm font-light">
                    {award.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  SHAMEFUL PLUG CTA                                         */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-24 2xl:pb-32">
          <div className="w-full flex flex-wrap justify-between items-end">
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-9/16 mb-6 lg:mb-0">
              <div className="inline-flex items-center mb-4">
                <div className="font-light text-sm lg:text-base text-gray-600">
                  Shameful plug
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-2xl">
                We work with start-up businesses through to global
                organisations.
              </h2>
            </div>
            <div className="px-2 lg:px-3 xl:px-4 flex-shrink-0">
              <Button href="/work" variant="primary">
                Join them
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  BLOG                                                      */}
        {/* ========================================================== */}
        <BlogSection posts={getBlogSectionPosts()} />
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
