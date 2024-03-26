/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Josh\'s Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://josh.github.io/kasm-registry/',
    contactUrl: 'https://github.com/josh/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
