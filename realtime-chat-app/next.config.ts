import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    optimizePackageImports: ["tailwindcss"]
  }
}

export default nextConfig;
