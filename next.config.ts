import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placeholder.com'], // Se você usar imagens externas, adicione os domínios aqui
  },
  reactStrictMode: true,
  // Remove swcMinify as it's deprecated in Next.js 15
};

export default nextConfig;