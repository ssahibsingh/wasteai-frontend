/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.wasteai.co', 'media.giphy.com']
  }
}

module.exports = nextConfig
