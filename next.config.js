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
  
  // Disable Font Optimization to prevent issues - we'll handle fonts ourselves
  optimizeFonts: false,
}

module.exports = nextConfig
