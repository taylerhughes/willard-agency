import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willard | Equity Design Studio for Early-Stage Founders",
  description:
    "Willard is a fractional design and product studio for pre-seed and seed startups. We trade equity for product, brand, and GTM work that helps founders ship, fundraise, and earn revenue.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
