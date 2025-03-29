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
  },
  
  // Configure headers for improved security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
