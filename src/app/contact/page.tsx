"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const HEAR_ABOUT_OPTIONS = [
  "Select an option",
  "Google",
  "Friend or family",
  "Instagram",
  "LinkedIn",
  "Word of mouth",
  "Newsletter",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hearAbout: "",
    message: "",
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an API endpoint
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="w-full pt-28 pb-10 lg:pt-40 lg:pb-20 xl:pt-48">
          <div className="px-2 sm:px-6 xl:px-12 2xl:px-20">
            <div className="w-full flex flex-wrap justify-between">
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                  <div className="font-light text-sm lg:text-base text-gray-600">
                    Contact
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-11/16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-none tracking-tight text-gray-600 mb-6 text-balance lg:indent-48">
                  It&apos;s nice to meet ya
                </h1>
                <p className="text-base xl:text-lg text-gray-400 font-light leading-7 max-w-lg lg:ml-48">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours. Or if you prefer, drop us an email directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="px-2 sm:px-6 xl:px-12 2xl:px-20 pb-20 lg:pb-32">
          <div className="w-full flex flex-wrap justify-between">
            {/* Sidebar — contact info */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-5/16 mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-32">
                <div className="mb-8">
                  <div className="text-sm text-gray-300 font-light mb-2">
                    Email us directly
                  </div>
                  <a
                    href="mailto:hello@willard.agency"
                    className="text-lg lg:text-xl text-gray-600 tracking-tight hover:text-primary-600 transition-colors"
                  >
                    hello@willard.agency
                  </a>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-gray-300 font-light mb-2">
                    Call us
                  </div>
                  <a
                    href="tel:+441234567890"
                    className="text-lg lg:text-xl text-gray-600 tracking-tight hover:text-primary-600 transition-colors"
                  >
                    +44 1234 567 890
                  </a>
                </div>

                <div className="mb-8">
                  <div className="text-sm text-gray-300 font-light mb-2">
                    Visit us
                  </div>
                  <p className="text-base text-gray-400 font-light leading-7">
                    Willard Agency
                    <br />
                    123 Creative Street
                    <br />
                    Your City, ST 12345
                  </p>
                </div>

                <div>
                  <div className="text-sm text-gray-300 font-light mb-3">
                    Follow us
                  </div>
                  <div className="flex gap-2">
                    {["LinkedIn", "X", "Instagram"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="inline-flex items-center justify-center bg-gray-50 text-gray-600 rounded-full w-9 h-9 text-xs font-medium transition-colors hover:bg-primary-500"
                      >
                        {s[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-2 lg:px-3 xl:px-4 w-full lg:w-10/16">
              {submitted ? (
                <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-10 lg:p-16 text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h2 className="text-2xl md:text-3xl tracking-tight text-gray-600 mb-3">
                    Thanks for getting in touch!
                  </h2>
                  <p className="text-base text-gray-400 font-light leading-7">
                    We&apos;ll review your message and get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-400 font-light mb-2"
                      >
                        Name <span className="text-gray-300">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-400 font-light mb-2"
                      >
                        Email Address <span className="text-gray-300">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-gray-400 font-light mb-2"
                      >
                        Phone{" "}
                        <span className="text-gray-300">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+44 7000 000000"
                      />
                    </div>

                    {/* How did you hear about us */}
                    <div>
                      <label
                        htmlFor="hearAbout"
                        className="block text-sm text-gray-400 font-light mb-2"
                      >
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                      >
                        {HEAR_ABOUT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt === "Select an option" ? "" : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-400 font-light mb-2"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border-none rounded-xl px-4 py-3 text-base text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      placeholder="Give us a brief overview of your project, goals, and timeline..."
                    />
                  </div>

                  {/* Newsletter checkbox */}
                  <div className="mb-8">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter as boolean}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded border-gray-200 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-400 font-light leading-relaxed">
                        I&apos;d like to receive occasional emails about design
                        tips, new work, and agency updates. You can unsubscribe
                        at any time. See our{" "}
                        <a
                          href="/privacy"
                          className="underline hover:text-gray-600"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center bg-gray-600 text-white py-3 px-8 rounded-full text-base font-medium transition-all hover:bg-gray-500 hover:scale-105"
                  >
                    Send message
                    <svg
                      className="w-3 h-3 fill-current ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
