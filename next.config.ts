import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

console.log('BASE PATH:', process.env.NEXT_PUBLIC_BASE_PATH);


export default nextConfig;

