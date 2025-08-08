import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/ai-social-media-suite",
        destination: "/products/trusocial",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
