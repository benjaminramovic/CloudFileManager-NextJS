import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  }
};

export default nextConfig;
