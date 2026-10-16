// Converte uma imagem para WebP no tamanho certo para o site.
// Usa o sharp que já vem instalado com o Next (sem dependência nova).
//
// Uso:
//   node scripts/optimize-images.mjs <entrada> <saída.webp> [--width 1280] [--height N] [--fit inside|contain|cover] [--quality 80] [--bg #ffffff]
//
// Exemplos:
//   capa de projeto (16:9):  node scripts/optimize-images.mjs ~/Downloads/tela.png public/images/projects/meu-projeto.webp --width 1280
//   logo de instituição:     node scripts/optimize-images.mjs logo.png public/images/logos/minha-org.webp --width 128 --height 128 --fit contain --bg #ffffff
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const [input, output, ...rest] = process.argv.slice(2);
if (!input || !output || !output.endsWith(".webp")) {
  console.error("Uso: node scripts/optimize-images.mjs <entrada> <saída.webp> [--width N] [--height N] [--fit inside|contain|cover] [--quality 80] [--bg #ffffff]");
  process.exit(1);
}

const opt = (name, fallback) => {
  const i = rest.indexOf(`--${name}`);
  return i === -1 ? fallback : rest[i + 1];
};
const width = Number(opt("width", 1280)) || undefined;
const height = Number(opt("height", 0)) || undefined;
const fit = opt("fit", "inside");
const quality = Number(opt("quality", 80));
const background = opt("bg", "#00000000");

fs.mkdirSync(path.dirname(output), { recursive: true });

const before = fs.statSync(input).size;
let img = sharp(input, { limitInputPixels: false, density: 300 }).rotate();
img = img.resize({ width, height, fit, background, withoutEnlargement: fit === "inside" });
if (fit === "contain" && background !== "#00000000") img = img.flatten({ background });
const info = await img.webp({ quality, effort: 6 }).toFile(output);

const kb = (n) => `${Math.round(n / 1024)} KB`;
console.log(`${path.basename(input)} (${kb(before)}) → ${output} ${info.width}x${info.height} (${kb(info.size)})`);
