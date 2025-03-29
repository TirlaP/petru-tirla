/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This will properly configure GitHub Pages paths
  basePath: process.env.NODE_ENV === 'production' ? '/petru-tirla' : '',
  trailingSlash: true,
}

module.exports = nextConfig
