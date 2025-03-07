import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "./out",
  transpilePackages: ["common"],
};

export default nextConfig;
