import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: process.env.AI_TIMELINE_STATIC_EXPORT === '1' ? 'export' : undefined,
};

export default nextConfig;
