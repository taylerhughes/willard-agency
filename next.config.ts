import type { NextConfig } from "next";

/**
 * Map of retired service slugs → their replacement under the consolidated
 * 4-capability model. Used by `redirects()` to preserve SEO and inbound links
 * after the Willard repositioning.
 */
const SERVICE_REDIRECTS: Record<string, string> = {
  // → /services/product-design
  "web-design": "product-design",
  "web-development": "product-design",
  ecommerce: "product-design",
  "ecommerce-dev": "product-design",
  shopify: "product-design",
  "shopify-dev": "product-design",
  nextjs: "product-design",
  "headless-cms": "product-design",
  webflow: "product-design",
  wordpress: "product-design",
  framer: "product-design",

  // → /services/brand-and-positioning
  branding: "brand-and-positioning",
  "graphic-design": "brand-and-positioning",
  "logo-design": "brand-and-positioning",
  "brand-identity": "brand-and-positioning",

  // → /services/launch-and-gtm
  seo: "launch-and-gtm",
  "technical-seo": "launch-and-gtm",
  ppc: "launch-and-gtm",
  content: "launch-and-gtm",
  "content-writing": "launch-and-gtm",

  // → /services/fundraising-materials
  consulting: "fundraising-materials",
  support: "fundraising-materials",
  hosting: "fundraising-materials",
  "pitch-deck": "fundraising-materials",
  presentation: "fundraising-materials",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(SERVICE_REDIRECTS).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
