"use client";

import { useState } from "react";
import Button from "./Button";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "How long does a website project usually take?",
    answer:
      "Timelines depend on the scope, but as a guide: Shopify projects take around 4 weeks, custom websites take 5–8 weeks minimum, and branding projects usually take around 4 weeks. We'll give you a clear timeline once we understand your brief.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, so we don't have fixed prices. Once we've reviewed your brief, we'll provide a detailed quote with clear costs and timelines. We're always transparent about pricing — no hidden fees or surprises.",
  },
  {
    question: "We have a limited budget, will you still work with us?",
    answer:
      "We work with clients of all sizes, from startups to global brands. The best way to find out if we're a good fit is to tell us your budget upfront — that way we can advise the best way to spend it and deliver maximum value.",
  },
  {
    question: "Do you outsource any work?",
    answer:
      "All design and development is done in-house. The only things we occasionally outsource (with full project management) are photography, videography, and social media campaigns.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer branding, web design, web development, Shopify builds, eCommerce, SEO, hosting, ongoing support, content writing, and consulting. Everything you need to build and grow your digital presence.",
  },
  {
    question: "We're not based locally, does that matter?",
    answer:
      "Not at all — we work with clients across the UK and internationally. We communicate clearly via email and video calls at every stage. We're also happy to meet face-to-face when it makes sense.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Typically 50% upfront, 25% on design sign-off, and 25% on build completion. But we're flexible and happy to discuss terms that work for both sides.",
  },
  {
    question: "Can we arrange a call to discuss?",
    answer:
      "Absolutely. Drop us a message via the form or email and we'll schedule a call or video meeting at a time that works for you.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full rounded-2xl bg-gray-50 mb-4 lg:rounded-3xl">
      <button
        className="flex justify-between items-center text-left cursor-pointer w-full p-6 focus:outline-none"
        onClick={onToggle}
      >
        <h3 className="text-lg tracking-tight text-gray-600 leading-tight text-balance pr-10">
          {faq.question}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-3 h-3 text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full pl-6 pb-6 pr-6 lg:pr-28">
          <p className="text-base text-gray-400 font-light leading-7">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full pb-20 lg:pb-24 2xl:pb-32">
      <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
        <div className="w-full flex flex-wrap justify-between">
          {/* Left — sticky header */}
          <div className="px-2 lg:px-3 xl:px-4 w-full mb-10 lg:mb-0 lg:w-5/16 xl:w-5/16">
            <div className="w-full lg:sticky lg:top-32 lg:left-0">
              <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
                <div className="inline-flex items-center">
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Anything else?
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-tight text-gray-600 leading-none text-balance max-w-lg lg:max-w-none">
                  The answers to your questions.
                </h2>
                <Button href="/faqs" variant="primary">
                  View all FAQs
                </Button>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16 xl:w-9/16">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={activeIndex === i}
                onToggle={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
