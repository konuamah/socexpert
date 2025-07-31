/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing image configuration
  images: {
    domains: ['localhost'],
  },
  
  // Use SWC compiler for better performance
  swcMinify: true,
  
  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Modern JavaScript features
  experimental: {
    // Better tree shaking
    esmExternals: true,
  },
  
  // Optimize for modern browsers
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Reduce unnecessary polyfills for client bundles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

export default nextConfig