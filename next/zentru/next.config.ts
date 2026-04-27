import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "out",
  transpilePackages: ["common"],
  allowedDevOrigins: [
    "10.0.1.102",
    "192.168.188.43"
  ]
};

export default nextConfig;
