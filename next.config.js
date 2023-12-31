/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const API_URL = process.env.APP_ENV === 'develop' ? 'http://127.0.0.1:4000/api/v1' : ''
const nextConfig = {
  // i18n,
  reactStrictMode: false,
  swcMinify: true,
  // 环境变量
  env: {
    APP_ENV: process.env.APP_ENV,
  },
  // async rewrites() {
  //   return [
  //     {
	// 			source: '/:path*',
	// 			destination: `${API_URL}/:path*`,
	// 		},
  //   ]
  // }
};

module.exports = nextConfig;
