import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.donaghey.ie' }],
        destination: 'https://donaghey.ie/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.localhost:3000' }],
        destination: 'http://localhost:3000/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
