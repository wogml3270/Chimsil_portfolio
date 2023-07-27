/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.notion.com/v1/databases/:path*',
      },
    ];
  },
}

module.exports = nextConfig
