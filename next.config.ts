import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors blocking the build
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
