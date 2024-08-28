/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/:path*',
            destination: '/api/index',
          },
        ]
      },
};

export default nextConfig;
