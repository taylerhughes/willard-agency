import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Willard",
  description:
    "We're a digital agency with expertise in web design, branding, eCommerce, and SEO.",
};

interface Service {
  number: string;
  name: string;
  href: string;
}

const DESIGN_SERVICES: Service[] = [
  { number: "01", name: "Brand Identity", href: "/services/branding" },
  { number: "02", name: "Web Design", href: "/services/web-design" },
  { number: "03", name: "eCommerce", href: "/services/ecommerce" },
  { number: "04", name: "Shopify", href: "/services/shopify" },
  { number: "05", name: "Graphic Design", href: "/services/graphic-design" },
];

const DEVELOP_SERVICES: Service[] = [
  { number: "01", name: "Web Development", href: "/services/web-development" },
  { number: "02", name: "Next.js", href: "/services/nextjs" },
  { number: "03", name: "Shopify Dev", href: "/services/shopify-dev" },
  { number: "04", name: "Headless CMS", href: "/services/headless-cms" },
  { number: "05", name: "eCommerce Dev", href: "/services/ecommerce-dev" },
  { number: "06", name: "Technical SEO", href: "/services/technical-seo" },
];

const SUPPORT_SERVICES: Service[] = [
  { number: "01", name: "SEO", href: "/services/seo" },
  { number: "02", name: "Web Hosting", href: "/services/hosting" },
  { number: "03", name: "Ongoing Support", href: "/services/support" },
  { number: "04", name: "PPC", href: "/services/ppc" },
  { number: "05", name: "Content Writing", href: "/services/content" },
  { number: "06", name: "Consulting", href: "/services/consulting" },
];

function ServiceList({
  services,
}: {
  services: Service[];
}) {
  return (
    <div className="w-full">
      {services.map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="flex items-center justify-between w-full py-4 lg:py-5 border-b border-gray-100 group transition-colors hover:border-gray-200"
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <span className="text-sm text-gray-300 font-light tabular-nums">
              {service.number}
            </span>
            <span className="text-lg lg:text-xl xl:text-2xl tracking-tight text-gray-600 group-hover:text-gray-400 transition-colors">
              {service.name}
            </span>
          </div>
          <svg
            className="w-3.5 h-3.5 fill-current text-gray-300 group-hover:text-gray-600 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
          </svg>
        </Link>
      ))}
    </div>
  );
}

function ServiceCategory({
  label,
  title,
  description,
  services,
}: {
  label: string;
  title: string;
  description: string;
  services: Service[];
}) {
  return (
    <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
      <div className="w-full flex flex-wrap justify-between">
        {/* Left side — label + description */}
        <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-8 lg:mb-0">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
            <div className="font-light text-sm lg:text-base text-gray-600">
              {label}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none mb-5 text-balance">
            {title}
          </h2>
          <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-sm">
            {description}
          </p>
        </div>

        {/* Right side — numbered service list */}
        <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
          <ServiceList services={services} />
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full pt-28 pb-16 lg:pt-40 lg:pb-24 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Services
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-8 text-balance lg:indent-48">
                  We&apos;re a digital agency with expertise
                </h1>
                <div className="flex flex-wrap items-start justify-between gap-8 lg:pl-48">
                  <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-lg">
                    We deliver design-focused digital solutions for brands who
                    want to stand out. From brand identity to web development and
                    ongoing support — we&apos;ve got you covered.
                  </p>
                  <Button href="/contact" variant="primary">
                    Start a project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service categories */}
        <ServiceCategory
          label="Design"
          title="Design"
          description="Our in-house brand and web designers create beautiful, functional designs that connect with your audience and drive results."
          services={DESIGN_SERVICES}
        />

        <ServiceCategory
          label="Develop"
          title="Develop"
          description="We build websites to the highest standards using modern technologies, ensuring fast load times, accessibility, and SEO best practices."
          services={DEVELOP_SERVICES}
        />

        <ServiceCategory
          label="Support"
          title="Support"
          description="Our team is on hand to provide ongoing support, from SEO and hosting to content writing and paid advertising."
          services={SUPPORT_SERVICES}
        />
      </main>
      <Footer />
    </>
  );
}
