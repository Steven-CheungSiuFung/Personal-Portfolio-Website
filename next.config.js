/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    responseLimit: "8mb",
  },
  reactStrictMode: false,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
