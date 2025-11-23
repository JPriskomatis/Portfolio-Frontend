import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thankful-hero-4616e7e174.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
