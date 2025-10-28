/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,

  output: "export",
  trailingSlash: true,
  outputFileTracingRoot: __dirname,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_LMS_API_URL: process.env.NEXT_PUBLIC_LMS_API_URL || "https://monorepo-lms.vercel.app",
  },

  compress: true,
};

module.exports = nextConfig;
