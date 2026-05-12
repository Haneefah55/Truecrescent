import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
};

export default nextConfig;
