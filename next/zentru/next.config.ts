import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // distDir: "out",
  transpilePackages: ["common"],
  // The page moved from /fields to /services – links to the old address keep working
  async redirects() {
    return [
      { source: "/fields", destination: "/services", permanent: true },
      { source: "/:locale(en|de)/fields", destination: "/:locale/services", permanent: true },
      // No home page while the old one lives at /about. Not permanent: a 308 is cached by browsers and
      // search engines, and would keep sending people here after a home page exists again
      { source: "/", destination: "/project-management", permanent: false },
      { source: "/:locale(en|de)", destination: "/:locale/project-management", permanent: false },
      // Project Bootstrap was renamed to Project Management – links to the old address keep working
      { source: "/project-bootstrap/:path*", destination: "/project-management/:path*", permanent: true },
      { source: "/:locale(en|de)/project-bootstrap/:path*", destination: "/:locale/project-management/:path*", permanent: true },
    ];
  },
  allowedDevOrigins: [
    "10.0.1.102",
    "192.168.188.43"
  ],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      url: false,
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
