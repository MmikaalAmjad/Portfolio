import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // The existing Vite eslint.config.js uses ESM syntax incompatible with CJS mode.
    // Linting is handled separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
