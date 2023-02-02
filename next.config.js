/** @type {import('next').NextConfig} */
const path = require('path')
const nextTranslate = require('next-translate')
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})

module.exports = nextConfig
