// Gera public/og.png (1200x630), a imagem de compartilhamento (Open Graph/Twitter).
// Rode de novo se mudar nome, cargo ou foto:  node scripts/generate-og.mjs
//
// Usa o ImageResponse que já vem dentro do Next (next/og) e o sharp para ler a
// foto. A rota opengraph-image do App Router não serve aqui: no export estático
// ela gera um arquivo sem extensão, que o GitHub Pages serve com o tipo errado.
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";
import sharp from "sharp";
import fs from "node:fs";

const RED = "#ef4444";
const photo = await sharp("public/images/profile.webp").resize(300, 300).png().toBuffer();
const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

const h = (type, style, ...children) => ({ type, props: { style, children: children.length === 1 ? children[0] : children } });

const tree = h(
  "div",
  {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 88px",
    gap: 64,
    color: "#fafafa",
    backgroundColor: "#0a0a0a",
    backgroundImage: "radial-gradient(circle at 85% 15%, rgba(239,68,68,0.28), transparent 45%)",
  },
  h(
    "div",
    { display: "flex", flexDirection: "column", flex: 1 },
    h("div", { display: "flex", fontSize: 30, color: RED, letterSpacing: 2 }, "</>  PORTFÓLIO"),
    h("div", { display: "flex", fontSize: 104, lineHeight: 1.05, marginTop: 20, letterSpacing: -3 }, "Lucas Lira"),
    h("div", { display: "flex", fontSize: 42, marginTop: 18, color: "#e5e5e5" }, "Desenvolvedor Full Stack"),
    h("div", { display: "flex", fontSize: 30, marginTop: 10, color: "#a3a3a3" }, "Sistemas de Informação · CEFET/RJ"),
    h("div", { display: "flex", width: 120, height: 6, backgroundColor: RED, marginTop: 40, borderRadius: 3 }, ""),
    h("div", { display: "flex", fontSize: 28, marginTop: 28, color: "#a3a3a3" }, "lucaslira11.github.io"),
  ),
  {
    type: "img",
    props: { src: photoSrc, width: 300, height: 300, style: { borderRadius: 32, border: `6px solid ${RED}` } },
  },
);

const res = new ImageResponse(tree, { width: 1200, height: 630 });
const png = Buffer.from(await res.arrayBuffer());
fs.writeFileSync("public/og.png", await sharp(png).png({ compressionLevel: 9, palette: true }).toBuffer());
console.log(`public/og.png gerado (${Math.round(fs.statSync("public/og.png").size / 1024)} KB)`);
