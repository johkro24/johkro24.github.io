// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',               // Enables static export
  distDir: 'docs',                // Specify docs as the output directory for GitHub Pages
  basePath: '/johkro24.github.io',  // Set this to the repository name
  assetPrefix: '/johkro24.github.io/' // Same as above for asset paths
};

export default nextConfig;
