import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // @ts-ignore
    eslint: {
    // Warning: disabling ESLint during build
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
