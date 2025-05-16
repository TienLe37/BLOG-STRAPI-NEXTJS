import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['127.0.0.1'],
    domains: ["localhost", "127.0.0.1", "your-strapi-domain.com","bizweb.dktcdn.net"],
  },
  /* config options here */
};

export default nextConfig;
