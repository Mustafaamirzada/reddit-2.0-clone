import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://1000logos.net')],
    // domains: ["https://1000logos.net"],
  }
};

export default nextConfig;
