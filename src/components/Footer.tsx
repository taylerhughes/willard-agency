"use client";

import Link from "next/link";

/** Inverse corner SVG — fills top-left with concave arc */
function CornerTL({ className = "" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
  },
];

const LEARN_LINKS = [
  { label: "About", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Processes", href: "/processes" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
];

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full p-4 -mt-4 rounded-t-2xl lg:rounded-t-3xl lg:p-6 lg:-mt-6 xl:p-10 xl:-mt-10 bg-white">
      <div className="w-full relative bg-gray-600 rounded-bl-2xl rounded-tr-2xl pt-3 pb-16 overflow-hidden lg:rounded-tr-none lg:pb-10 lg:pt-16 lg:rounded-b-3xl">

        {/* ===== Social icons notch — top left ===== */}
        <div className="absolute top-0 left-0 pr-5 pb-5 z-30 bg-white">
          {/* Inverse corner: right side of notch (dark square with rounded-tl cutout) */}
          <div className="absolute top-0 left-0 transform translate-x-full w-full bg-white z-20">
            <div className="w-full aspect-square bg-gray-600 rounded-tl-2xl lg:rounded-tl-3xl" />
          </div>
          {/* Inverse corner: bottom-right of notch */}
          <div className="absolute bottom-0 right-0 transform w-full bg-gray-600 z-20">
            <div className="w-full aspect-square bg-white rounded-br-2xl lg:rounded-br-3xl" />
          </div>
          {/* Inverse corner: below the notch */}
          <div className="absolute bottom-0 left-0 transform translate-y-full w-full bg-white z-20">
            <div className="w-full aspect-square bg-gray-600 rounded-tl-2xl lg:rounded-tl-3xl" />
          </div>

          {/* Social icons */}
          <div className="relative z-20">
            <div className="flex flex-col items-start space-y-1.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-primary-500 text-gray-600 rounded-full w-8 h-8 transition-colors duration-400 hover:bg-gray-600 hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Back-to-top notch — bottom right ===== */}
        <div className="absolute bottom-0 right-0 bg-white flex justify-center pl-4 rounded-tl-2xl lg:rounded-tl-none lg:top-0 lg:bottom-auto lg:rounded-bl-3xl lg:px-0 lg:w-full lg:max-w-sm">
          {/* Desktop inverse corners */}
          <div className="absolute top-0 left-0 transform -translate-x-full w-12 hidden lg:block bg-white z-20">
            <div className="w-full aspect-square bg-gray-600 rounded-tr-2xl lg:rounded-tr-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 transform translate-y-full w-12 hidden lg:block bg-white z-20">
            <div className="w-full aspect-square bg-gray-600 rounded-tr-2xl lg:rounded-tr-3xl" />
          </div>

          {/* Mobile inverse corners */}
          <CornerTL className="w-10 h-10 text-white absolute left-px -bottom-px transform -translate-x-full rotate-180 lg:hidden" />
          <CornerTL className="w-10 h-10 text-white absolute -right-px top-px transform -translate-y-full rotate-180 lg:hidden" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center space-x-1 font-light group transition-none pt-3 pb-1.5 lg:pt-1.5 lg:pb-3"
          >
            <span className="text-xs lg:text-base">
              I&apos;ve gone too far, send me back up
            </span>
            <span className="animate-bounce">👆</span>
          </button>
        </div>

        {/* ===== Main footer content ===== */}
        <div className="w-full flex flex-wrap justify-between mb-10 ml-20 pt-4 relative z-30 md:mb-16 md:ml-28 md:pt-8 lg:pt-0 lg:mb-20 lg:flex-nowrap lg:ml-28 xl:ml-40">
          {/* CTA column */}
          <div className="w-full mb-10 flex flex-wrap flex-col md:flex-row md:flex-nowrap md:mb-24 lg:items-start lg:justify-start lg:flex-col lg:flex-wrap lg:pl-0 lg:mb-0 lg:w-7/16 xl:w-6/16">
            <h2 className="text-xl md:text-2xl xl:text-3xl tracking-tight text-white leading-tight max-w-xs mb-5 pr-10 lg:max-w-xs">
              Do you like <br />
              what you see?
            </h2>
            <div className="flex items-start flex-col space-y-5 md:mt-1 md:flex-row md:items-center md:space-y-0 md:space-x-5 lg:mt-0 lg:space-y-5 lg:space-x-0 lg:items-start lg:flex-col xl:w-full xl:items-center xl:flex-row xl:space-y-0 xl:space-x-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-500 text-gray-600 py-2 px-5 rounded-full leading-tight flex-shrink-0 transition-transform hover:scale-105"
              >
                Start a project
                <svg className="w-3 h-3 fill-current ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Learn column */}
          <div className="w-8/16 relative z-20 transform -translate-x-12 md:w-4/16 lg:w-4/16 xl:w-3/16">
            <div className="text-gray-200 font-light mb-3 text-sm md:text-base">Learn</div>
            <ul className="space-y-1">
              {LEARN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white text-sm md:text-base hover:text-gray-200 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore column */}
          <div className="w-8/16 relative z-20 transform -translate-x-12 md:w-4/16 lg:w-4/16 xl:w-3/16">
            <div className="text-gray-200 font-light mb-3 text-sm md:text-base">Explore</div>
            <ul className="space-y-1">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white text-sm md:text-base hover:text-gray-200 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="w-full mt-5 max-w-xs transform -translate-x-12 md:mt-0 xl:max-w-sm">
            <div className="flex flex-col items-start">
              <div className="text-gray-200 font-light mb-3 text-sm md:text-base">Get in touch</div>
              <a href="mailto:hello@willard.agency" className="inline-flex items-center space-x-4 text-white hover:text-gray-100 mb-1">
                <svg className="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 64h512v80L256 320 0 144V64zm0 384V182.8l237.9 163.6 18.1 12.4 18.1-12.5L512 182.8V448H0z" />
                </svg>
                <span className="text-sm md:text-base">hello@willard.agency</span>
              </a>
              <div className="flex space-x-4 mt-6 mb-1 lg:mb-2">
                <svg className="w-3 h-3 fill-current text-white mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192c0 112 192 320 192 320zm0-384a64 64 0 110 128 64 64 0 110-128z" />
                </svg>
                <p className="text-sm md:text-base text-white font-light leading-7">
                  Willard Agency<br />123 Creative Street<br />Your City, ST 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large decorative text */}
        <div className="w-full justify-center mb-10 hidden lg:flex lg:mb-5">
          <div className="text-white leading-none tracking-tight text-3xl text-center lg:text-[10vw]">
            Crafting since 2012
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-wrap items-center justify-between px-6 lg:px-20 xl:px-24">
          <div className="inline-flex flex-row items-start pr-8 lg:space-x-5 lg:items-center">
            <span className="text-white font-medium text-lg tracking-tighter hidden lg:inline-block mb-1">
              willard<span className="text-primary-500">.</span>
            </span>
            <div className="inline-flex flex-row text-gray-200 w-auto text-xs lg:text-sm">
              <div>&copy; Willard Agency {new Date().getFullYear()}</div>
            </div>
          </div>
          <div className="inline-flex flex-row text-gray-200 w-auto text-xs lg:text-sm">
            <Link href="/" className="hover:text-white transition-colors">Web Design Agency</Link>
            <div className="mx-2 lg:mx-5">|</div>
            <div>All Rights Reserved</div>
            <div className="mx-2 lg:mx-5">|</div>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
