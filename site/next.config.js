/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Josh Registry',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: ' https://josh171220.github.io/kasm-registry/1.0',
    contactUrl: 'https://github.com/josh171220/kasm-registry/issues',
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
