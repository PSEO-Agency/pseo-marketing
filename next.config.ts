import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/agency",
        destination: "https://programmaticseo.agency",
        permanent: false,
      },
      {
        source: "/agency/:path*",
        destination: "https://programmaticseo.agency/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
