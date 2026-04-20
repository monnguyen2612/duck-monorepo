/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: '/duck-monorepo',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
}

module.exports = nextConfig