/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows running a throwaway build/dev (e.g. for verification) in a separate
  // directory so it never clobbers the main `.next` of a running dev server.
  distDir: process.env.NEXT_DIST_DIR || ".next",
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
    ],
  },
};

module.exports = nextConfig;
