/** @type {import('next').NextConfig} */

const API_URL = process.env.APP_ENV === 'develop' ? 'http://127.0.0.1:4000' : ''
const nextConfig = {
  reactStrictMode: false,
  // 环境变量
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  async rewrites() {
    return [
      {
				source: '/:path*',
				destination: `${API_URL}/:path*`,
			},
    ]
  }
};

module.exports = nextConfig;
