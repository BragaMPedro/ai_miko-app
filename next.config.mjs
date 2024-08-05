/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
          {
            source: '/server/:path*',
            destination:
              process.env.NODE_ENV === 'development'
                ? 'http://127.0.0.1:5328/server/:path*'
                : '/server/',
          },
        ]
      },
};

export default nextConfig;
