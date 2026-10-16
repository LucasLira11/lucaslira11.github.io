// Confere o build estático (out/) como o GitHub Pages vai servir.
// Uso: npm run build && npm run check   (ou: node scripts/check-site.mjs [--external])
//
// Falha (exit 1) se encontrar:
// - link interno ou asset que não resolve para um arquivo em out/
// - página sem lang, title, description, canonical ou og:image
// - title repetido entre páginas do mesmo idioma
// - sitemap.xml ausente, ou URL do sitemap que não existe no build
// - robots.txt sem a linha Sitemap
// Com --external, também testa os links externos (rede).
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const SITE = "https://lucaslira11.github.io";
const checkExternal = process.argv.includes("--external");

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);

if (!fs.existsSync(OUT)) {
  console.error("out/ não existe. Rode `npm run build` antes.");
  process.exit(1);
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

const files = walk(OUT);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const rel = (f) => "/" + path.relative(OUT, f).split(path.sep).join("/");

// Resolve uma URL do site para um arquivo, com as regras do GitHub Pages
function resolve(urlPath) {
  let p;
  try {
    p = decodeURIComponent(urlPath.split("#")[0].split("?")[0]);
  } catch {
    return null;
  }
  if (p === "") return null;
  const target = path.join(OUT, p);
  const isFile = (f) => fs.existsSync(f) && fs.statSync(f).isFile();
  if (p.endsWith("/")) return isFile(path.join(target, "index.html")) ? path.join(target, "index.html") : null;
  if (isFile(target)) return target;
  if (isFile(target + ".html")) return target + ".html";
  if (isFile(path.join(target, "index.html"))) return path.join(target, "index.html"); // 301 → /rota/
  return null;
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const externalLinks = new Map();
const titles = new Map();

for (const file of htmlFiles) {
  const page = rel(file);
  const html = fs.readFileSync(file, "utf8");
  const is404 = /\/(404|_not-found)(\/index)?\.html$/.test(page);

  // Metadados obrigatórios
  const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!lang) fail(`${page}: <html> sem lang`);
  if (!title) fail(`${page}: sem <title>`);
  if (!is404) {
    if (!/<meta name="description" content="[^"]+"/.test(html)) fail(`${page}: sem meta description`);
    if (!/<link rel="canonical" href="[^"]+"/.test(html)) fail(`${page}: sem canonical`);
    if (!/<meta property="og:image" content="[^"]+"/.test(html)) fail(`${page}: sem og:image`);
    // Nomes próprios (ex.: "BusAI") podem repetir entre PT e EN; a checagem é por idioma
    if (title) titles.set(`${lang} | ${title}`, [...(titles.get(`${lang} | ${title}`) ?? []), page]);
  }

  // Links e assets
  const tags = html.match(/<(a|link|img|script|source|meta)\b[^>]*>/g) ?? [];
  for (const tag of tags) {
    const urls = [attr(tag, "href"), attr(tag, "src"), ...(attr(tag, "srcset")?.split(",").map((s) => s.trim().split(/\s+/)[0]) ?? [])];
    if (tag.startsWith("<meta") && /property="og:image"|name="twitter:image"/.test(tag)) urls.push(attr(tag, "content"));
    for (const raw of urls) {
      if (!raw) continue;
      const url = raw.replace(/&amp;/g, "&");
      if (/^(mailto:|tel:|data:|#|javascript:)/.test(url)) continue;
      if (url.startsWith(SITE)) {
        if (!resolve(url.slice(SITE.length) || "/")) fail(`${page}: URL absoluta quebrada ${url}`);
        continue;
      }
      if (/^https?:\/\//.test(url)) {
        if (tag.startsWith("<a")) externalLinks.set(url, page);
        continue;
      }
      if (url.startsWith("/")) {
        if (!resolve(url)) fail(`${page}: link/asset quebrado ${url}`);
        continue;
      }
      warnings.push(`${page}: URL relativa ${url}`);
    }
  }

  // Imagens pesadas referenciadas
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    const src = attr(tag, "src");
    const f = src?.startsWith("/") && resolve(src);
    if (f && fs.statSync(f).size > 300 * 1024) warnings.push(`${page}: imagem pesada ${src} (${Math.round(fs.statSync(f).size / 1024)} KB)`);
  }
}

for (const [title, pages] of titles) if (pages.length > 1) fail(`title repetido "${title}" em ${pages.join(", ")}`);

// Sitemap e robots
const sitemap = path.join(OUT, "sitemap.xml");
if (!fs.existsSync(sitemap)) fail("sitemap.xml ausente");
else {
  const locs = [...fs.readFileSync(sitemap, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) fail("sitemap.xml sem URLs");
  for (const loc of locs) if (!loc.startsWith(SITE) || !resolve(loc.slice(SITE.length) || "/")) fail(`sitemap: URL inexistente ${loc}`);
}
const robots = path.join(OUT, "robots.txt");
if (!fs.existsSync(robots) || !/Sitemap: https?:\/\//.test(fs.readFileSync(robots, "utf8"))) fail("robots.txt ausente ou sem linha Sitemap");

if (checkExternal) {
  for (const [url, page] of externalLinks) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (check-site)" }, signal: AbortSignal.timeout(20000) });
      // LinkedIn responde 999 para robôs
      if (!res.ok && res.status !== 999) fail(`${page}: link externo ${res.status} ${url}`);
    } catch (e) {
      fail(`${page}: link externo falhou ${url} (${e.message})`);
    }
  }
}

console.log(`${htmlFiles.length} páginas HTML, ${externalLinks.size} links externos${checkExternal ? " testados" : " (use --external para testar)"}`);
for (const w of warnings) console.log(`aviso: ${w}`);
for (const e of errors) console.log(`ERRO:  ${e}`);
if (errors.length) {
  console.log(`\n${errors.length} erro(s).`);
  process.exit(1);
}
console.log("OK: build estático consistente.");
