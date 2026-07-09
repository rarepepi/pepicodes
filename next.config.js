/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [50, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io", // Microlink Image Preview
      },
    ],
  },
};

module.exports = nextConfig;
