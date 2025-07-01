/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Přidáme Content Security Policy headers pro povolení GTM a CMP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://app.usercentrics.eu https://www.youtube.com https://connect.facebook.net https://www.facebook.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://app.usercentrics.eu https://api.usercentrics.eu https://www.facebook.com https://connect.facebook.net",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.facebook.com",
              "object-src 'none'",
              "base-uri 'self'"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ]
  },
}

export default nextConfig
