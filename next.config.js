
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/book",
        destination: `https://books-api.nomadcoders.workers.dev/lists`,
      },
    ];
  },
};

module.exports = nextConfig;