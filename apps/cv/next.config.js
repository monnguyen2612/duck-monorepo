/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/duck-monorepo' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig