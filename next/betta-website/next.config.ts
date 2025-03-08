import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "../../static-files",
  transpilePackages: ["common"],
};

export default nextConfig;
