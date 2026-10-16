# Portfólio — Lucas Lira

Site pessoal de Lucas Pontes Lira, desenvolvedor Full Stack e estudante de Sistemas de Informação no CEFET/RJ.

**No ar:** https://lucaslira11.github.io/ (português) · https://lucaslira11.github.io/en/ (inglês)

Next.js 16 (App Router, export estático) · React 19 · TypeScript · Tailwind CSS 4 · GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # gera o site estático em out/
npm run check    # confere o out/: links, imagens, metadados, sitemap
```

`node scripts/check-site.mjs --external` também testa os links externos (precisa de internet).

## Como atualizar o conteúdo

Todo o texto do site fica em `data/`. Não é preciso mexer no layout.

| O que mudar | Arquivo |
|---|---|
| Nome, cargo, resumo, "Sobre", e-mail, GitHub, LinkedIn, WhatsApp | `data/profile.ts` |
| Tecnologias da seção Stack | `data/skills.ts` |
| Projetos (destaques e outros) | `data/projects.ts` |
| Publicações | `data/publications.ts` |
| Certificações, emissores e categorias dos filtros | `data/certifications.ts` |
| Textos fixos da interface (botões, títulos) | `data/ui.ts` |

Texto traduzível usa `{ pt: "...", en: "..." }`. Nomes próprios e tecnologias podem ser uma string simples. Os tipos estão em `types/content.ts`; se faltar um campo obrigatório, o `npm run build` avisa.

Procure por `TODO(Lucas)` para ver os dados que ainda precisam de confirmação.

### Adicionar um projeto

1. Converta a imagem de capa (16:9 fica melhor):
   ```bash
   node scripts/optimize-images.mjs caminho/da/imagem.png public/images/projects/meu-projeto.webp --width 1280
   ```
   O script mostra a largura e a altura finais. Use esses números em `cover.width` e `cover.height`.
2. Acrescente um objeto em `data/projects.ts`. A posição no array é a ordem de exibição. Com `featured: true`, ele aparece na home.
3. A página é criada sozinha em `/projetos/<id>/` e `/en/projects/<id>/` e entra no sitemap.

Sem `cover`, o card usa uma capa tipográfica. Com `privateRepo: true`, aparece o selo "Código privado" no lugar do link do repositório.

### Adicionar uma certificação

Acrescente um objeto em `data/certifications.ts` (`issued` no formato `AAAA-MM`). Para um emissor novo, converta o logo e registre em `issuers`:

```bash
node scripts/optimize-images.mjs logo.png public/images/logos/emissor.webp --width 128 --height 128 --fit contain --bg "#ffffff"
```

### Imagem de compartilhamento

`public/og.png` (1200×630) é a prévia que aparece no LinkedIn, WhatsApp etc. Se mudar nome, cargo ou foto, gere de novo:

```bash
node scripts/generate-og.mjs
```

## Estrutura

```
app/(pt)/          páginas em português (root layout com lang="pt-BR")
app/(en)/en/       páginas em inglês (root layout com lang="en")
app/global-not-found.tsx   página 404 (bilíngue)
app/sitemap.ts, robots.ts  gerados no build
components/        layout, cards e seções
data/              conteúdo do site
lib/               idioma/rotas (i18n.ts), SEO (seo.ts), fontes
scripts/           checagem do build, otimização de imagens, imagem OG
```

## Deploy

Todo push na branch `main` roda o workflow `.github/workflows/nextjs.yml`: `npm ci` → lint → build → `npm run check` → publica `out/` no GitHub Pages. Pull requests rodam as mesmas checagens, sem publicar.

## Observações

- **Build local no Windows:** o Next 16 grava alguns arquivos de prefetch com o separador de pasta do Windows. Num `out/` gerado no Windows, o console mostra 404 em arquivos `__next.*.txt` ao navegar. O build do CI (Linux) gera os nomes certos, então o site publicado não é afetado.
- `experimental.globalNotFound` no `next.config.ts` é necessário para a página 404 própria, porque o site tem dois root layouts (um por idioma).
