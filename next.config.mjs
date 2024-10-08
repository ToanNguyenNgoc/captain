const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/thanh-toan-thanh-cong/:id',
        destination: '/paymentgateways/:id',
      },
    ]
  },
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leverage-topaz.vercel.app',
        port: '',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.baokhanhdev.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
}

export default nextConfig
