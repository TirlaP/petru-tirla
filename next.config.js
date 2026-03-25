/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath only needed for GitHub Pages, not Vercel
  basePath: '',
  trailingSlash: true,
  
  // Add pageExtensions to include mdx files
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  
  // Optimize images
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Ensure the build is clean
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 4,
  },
  
}

module.exports = nextConfig
