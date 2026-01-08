import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/rise-and-fall-podcast',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
