/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rebrickable.com",
        port: "",
        pathname: "/media/sets/**",
      },
      {
        protocol: "https",
        hostname: "rebrickable.com",
        port: "",
        pathname: "/static/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
