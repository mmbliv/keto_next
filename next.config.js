/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-west-004.backblazeb2.com",
        port: "",
        pathname: "/encurate/static/keto/**",
      },
    ],
  },
};

module.exports = nextConfig;
