import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Diz ao Next.js para gerar arquivos HTML/CSS estáticos
  output: 'export',
  // O GitHub Pages não suporta a otimização automática de imagens do Next.js
  images: {
    unoptimized: true,
  },
};

export default nextConfig;