/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/SvenMC/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/Kobeboy15/**",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
