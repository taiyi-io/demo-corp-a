const nextConfig = {
  distDir: 'build',
  experimental: {
    appDir: true,
  },
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
