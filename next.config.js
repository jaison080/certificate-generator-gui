const nextConfig = {
  reactStrictMode: true,
  // Add your custom configurations here
  async rewrites() {
    return [
      {
        source: '/public/fonts/:path*',
        destination: '/public/fonts/:path*',
      },
    ];
  },
  // Add other custom configurations if needed
};

module.exports = nextConfig;