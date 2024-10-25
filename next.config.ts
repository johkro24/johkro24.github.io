// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  basePath: '/johkro24.github.io', // For GitHub Pages
  assetPrefix: '/johkro24.github.io/', // For GitHub Pages
};

export default nextConfig;

