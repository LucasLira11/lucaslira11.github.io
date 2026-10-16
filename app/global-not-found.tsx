import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import { ButtonLink } from "@/components/ui";
import { ui } from "@/data/ui";
import { inter } from "@/lib/fonts";
import { routes } from "@/lib/i18n";
import "./globals.css";

// 404 do site inteiro (vira out/404.html). Como o site tem dois root layouts
// (pt e en), esta página monta o próprio <html> e mostra os dois idiomas.
export const metadata: Metadata = {
  title: `404 · ${ui.pt.notFound.title} · Lucas Lira`,
  description: ui.pt.notFound.text,
};

export default function GlobalNotFound() {
  const { pt, en } = ui;
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <div className="container-page flex min-h-dvh flex-col">
          <header className="flex h-16 items-center">
            <Logo href={routes.home.pt} label={pt.nav.home} />
          </header>
          <main className="flex flex-1 flex-col items-center justify-center py-16 text-center">
            <p className="font-mono text-7xl font-bold text-accent sm:text-8xl">404</p>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{pt.notFound.title}</h1>
            <p className="mt-3 text-lg text-fg-muted">{pt.notFound.text}</p>
            <p lang="en" className="mt-2 text-fg-subtle">
              {en.notFound.title}. {en.notFound.text}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink href={routes.home.pt} variant="primary">
                <ArrowLeft size={18} aria-hidden="true" /> {pt.notFound.back}
              </ButtonLink>
              <ButtonLink href={routes.home.en} variant="secondary" lang="en" hrefLang="en">
                {en.notFound.back}
              </ButtonLink>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
