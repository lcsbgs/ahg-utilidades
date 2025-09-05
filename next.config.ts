import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.com'], // Se você usar imagens externas, adicione os domínios aqui
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;