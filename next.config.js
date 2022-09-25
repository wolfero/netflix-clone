/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: 'wolfero-netflix-clone.vercel.app',
  images: {
    domains: ['image.tmdb.org'],
    path: `${basePath}/_next/image`,
  }
}
