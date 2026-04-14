"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "dark" | "text";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
}

function ArrowIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center relative group outline-none focus:outline-none";

  const pillClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-primary-500 text-gray-600 py-2 px-5 rounded-full leading-tight shadow-none overflow-hidden",
    dark: "bg-gray-600 text-white py-2 px-5 rounded-full leading-tight shadow-none overflow-hidden",
    text: "text-gray-600 py-1 mt-1 pr-3 rounded-full leading-tight",
  };

  const arrowBgClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary-500",
    dark: "bg-gray-600",
    text: "text-gray-600",
  };

  const arrowTextClasses: Record<ButtonVariant, string> = {
    primary: "text-gray-600",
    dark: "text-white",
    text: "text-gray-600",
  };

  return (
    <div className={`relative group inline-flex items-center ${className}`}>
      <Link href={href} className={baseClasses}>
        <div
          className={`w-auto inline-flex items-center justify-center relative ${pillClasses[variant]}`}
        >
          <div className="relative inline-flex top-px flex-shrink-0">
            {children}
          </div>
        </div>
        {showArrow && variant !== "text" && (
          <div
            className={`${arrowBgClasses[variant]} flex-shrink-0 overflow-hidden flex items-center justify-center -ml-1 rounded-full w-9 h-9 transform transition-transform duration-500 xl:group-hover:translate-x-3 xl:group-hover:rotate-45`}
          />
        )}
      </Link>
      {showArrow && (
        <div
          className={`${variant !== "text" ? "w-9 h-9 absolute top-0 right-0" : "mt-1"} flex items-center justify-center z-20 transition-transform transform duration-500 ${variant !== "text" ? "xl:group-hover:translate-x-3 xl:group-hover:rotate-45" : ""}`}
        >
          <div className={`relative overflow-hidden ${arrowTextClasses[variant]}`}>
            <ArrowIcon />
          </div>
        </div>
      )}
    </div>
  );
}
