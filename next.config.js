/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    // config.optimization.minimizer = []; // todo: remove once opensea works correctly -> https://github.com/ProjectOpenSea/opensea-js/issues/451
    return config;
  }
}

module.exports = nextConfig
