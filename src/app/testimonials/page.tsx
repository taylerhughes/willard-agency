import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerCTA from "@/components/TickerCTA";

/* ------------------------------------------------------------------ */
/*  Testimonial data                                                   */
/* ------------------------------------------------------------------ */

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  initials: string;
  color: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Pete Gatenby",
    company: "Partner, Novus Strategy",
    quote:
      "Willard is one of the best design agencies we've worked with in my many, many years of leading digital product workstreams. Willard worked with us on client work on behalf of the business. Not only are they incredibly talented from a design standpoint, but also very personable and able to work collaboratively even in tough circumstances. I would not hesitate to recommend Willard to anyone who has a digital design need. They're top-tier.",
    initials: "PG",
    color: "bg-primary-500",
  },
  {
    name: "Robert Ross",
    company: "Founder & CEO, Dreamable",
    quote:
      "Willard's team quickly demonstrated strong product design instincts and a genuine commitment to understanding our users and problem space. Even in a short engagement, they integrated seamlessly into our team and contributed thoughtful, high-quality design work. They approached the work with care, curiosity, and professionalism.",
    initials: "RR",
    color: "bg-gray-600",
  },
  {
    name: "Ben Fox",
    company: "Founder, Digital Back Office",
    quote:
      "Aside from being talented designers, Willard are responsive, honest in their hours and fair in their pricing. Everything we could ever ask for in a design partner. Highly recommend!",
    initials: "BF",
    color: "bg-gray-400",
  },
];

/* ------------------------------------------------------------------ */
/*  Quote icon SVG                                                     */
/* ------------------------------------------------------------------ */

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 11"
      fill="none"
    >
      <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Inverse corner SVG                                                 */
/* ------------------------------------------------------------------ */

function CornerSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`fill-current ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonial card                                                   */
/* ------------------------------------------------------------------ */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-full relative">
      {/* Avatar card with colored background */}
      <div className={`w-full aspect-4/3 ${testimonial.color} relative rounded-2xl rounded-bl-none lg:aspect-square lg:rounded-3xl lg:rounded-bl-none flex items-center justify-center`}>
        <span className="text-white text-5xl lg:text-6xl font-light tracking-tight opacity-30">
          {testimonial.initials}
        </span>

        {/* Author badge — bottom left notch */}
        <div className="absolute -bottom-px pb-px left-0 z-20 bg-white rounded-tr-2xl pr-6 pt-3 flex lg:rounded-tr-3xl">
          {/* Inverse corners */}
          <CornerSVG className="w-10 h-10 lg:w-12 lg:h-12 text-white absolute top-px -left-px transform -translate-y-full rotate-180" />
          <CornerSVG className="w-10 h-10 lg:w-12 lg:h-12 text-white absolute bottom-0 right-px transform translate-x-full rotate-180" />

          <div className="flex items-end space-x-2 lg:space-x-3">
            <div className={`w-9 h-9 rounded-md lg:w-12 lg:h-12 lg:rounded-lg flex items-center justify-center ${testimonial.color} text-white text-xs lg:text-sm`}>
              {testimonial.initials}
            </div>
            <div className="leading-tight tracking-tight">
              <div className="text-gray-600">{testimonial.name}</div>
              <div className="font-light text-xs lg:text-sm text-gray-400">
                {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="w-full relative mt-8">
        <QuoteIcon className="text-gray-600 absolute top-0 left-0" />
        <h2 className="text-lg 4xl:text-xl font-sans tracking-tight text-gray-600 leading-tight text-balance indent-14">
          {testimonial.quote}
        </h2>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ========================================================== */}
        {/*  HEADER                                                    */}
        {/* ========================================================== */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pt-32 lg:pt-40 pb-16 lg:pb-20">
          <div className="w-full flex flex-wrap">
            <div className="px-2 lg:px-3 xl:px-4 w-full flex flex-col items-center">
              <div className="flex flex-col space-y-3 lg:space-y-5 items-center text-center">
                <h1 className="inline-flex items-center space-x-2">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Client Testimonials &amp; Reviews
                  </div>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-sans tracking-tight text-gray-600 leading-none text-balance text-center max-w-xl md:max-w-md xl:max-w-3xl">
                  What our happy clients say about us
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/*  TESTIMONIAL GRID                                          */}
        {/* ========================================================== */}
        <section className="w-full pb-20 lg:pb-24 2xl:pb-32">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="px-2 lg:px-3 xl:px-4 w-full mb-10 md:w-1/2 lg:w-1/3 lg:mb-20"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <TickerCTA />
      <Footer />
    </>
  );
}
