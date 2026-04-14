"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 10);

    if (currentY > 400) {
      setHidden(currentY > lastScrollY);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-500 ${
        hidden && !mobileMenuOpen
          ? "pointer-events-none -translate-y-16 lg:-translate-y-28"
          : "translate-y-0"
      }`}
    >
      <div className="relative inline-flex justify-center z-20 py-2 lg:py-3 w-full">
        <header
          className={`flex flex-wrap items-center justify-between relative z-30 pl-2 pr-2 transition-all duration-500 lg:p-4 ${
            mobileMenuOpen
              ? "rounded-2xl bg-gray-50"
              : scrolled
                ? "rounded-full bg-gray-50/90 backdrop-blur-xl"
                : "rounded-3xl"
          }`}
          style={{
            width: mobileMenuOpen
              ? "94vw"
              : scrolled
                ? "min(60rem, 99vw)"
                : "99vw",
          }}
        >
          {/* Logo */}
          <div className="ml-2 relative z-10 lg:ml-4 lg:mr-6">
            <Link
              href="/"
              className="text-gray-600 transition-none font-medium text-xl lg:text-2xl tracking-tighter"
            >
              willard<span className="text-primary-500">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:inline-flex">
            <ul className="flex space-x-7 xl:space-x-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className="font-light leading-tight text-gray-600 hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="pr-2 inline-flex items-center relative z-10 lg:space-x-2">
            {/* Mobile menu toggle */}
            <div className="inline-flex lg:hidden">
              <button
                className="inline-flex items-center justify-center w-10 h-12"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="flex w-5 h-3.5 flex-col items-start justify-between">
                  <div
                    className={`w-full h-0.5 bg-gray-600 transition-transform duration-500 ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-1.5"
                        : "rotate-0"
                    }`}
                  />
                  <div
                    className={`w-full h-0.5 bg-gray-600 transition-opacity duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`w-full h-0.5 bg-gray-600 transition-transform duration-500 ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "rotate-0"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:inline-flex">
              <Button href="/contact" variant="primary">
                Start a project
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`w-full relative z-10 lg:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
            style={{ height: mobileMenuOpen ? "27.5rem" : 0 }}
          >
            <div className="w-full px-2 pt-8 pb-3">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="bg-gray-600 w-1.5 h-1.5 rounded-full" />
                <div className="font-light text-sm text-gray-600">
                  Have a look around...
                </div>
              </div>
              <ul className="flex flex-col items-start">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className="text-4xl tracking-tight leading-none text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-full mt-6">
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
