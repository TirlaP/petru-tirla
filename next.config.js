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
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

module.exports = nextConfig
