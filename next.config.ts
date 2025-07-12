import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  // Note: i18n config is not supported in Next.js App Router currently
  // Remove or comment out i18n config to avoid errors
  // i18n: {
  //   locales: ['es', 'en', 'pt'],
  //   defaultLocale: 'es',
  // },
}

export default nextConfig
