/* eslint-disable turbo/no-undeclared-env-vars -- idk */
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/duck-monorepo' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}
 
module.exports = nextConfig