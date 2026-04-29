import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // distDir: "out",
  transpilePackages: ["common"],
  allowedDevOrigins: [
    "10.0.1.102",
    "192.168.188.43"
  ]
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
