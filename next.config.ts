import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera HTML/CSS/JS estáticos em out/ para o GitHub Pages
  output: "export",
  // Gera /rota/index.html: assim /rota e /rota/ funcionam no GitHub Pages
  // e os arquivos de prefetch do App Router batem com o que o cliente pede
  trailingSlash: true,
  // O GitHub Pages não roda o otimizador de imagens do Next; as imagens já
  // são otimizadas em public/ (ver scripts/optimize-images.mjs)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
