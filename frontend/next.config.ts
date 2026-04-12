import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.iranipplus.com",
        pathname: "/media/**",
      },
    ],
  },

  // Farsi/Persian locale support
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
    localeDetection: false,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
