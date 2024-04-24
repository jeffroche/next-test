/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.VERCEL_GIT_COMMIT_SHA,
  },
};

module.exports = nextConfig;
