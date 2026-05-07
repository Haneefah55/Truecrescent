import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*/',
        destination: '/:path*',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
