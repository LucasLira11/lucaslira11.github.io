import type { ReactNode } from "react";
import { ui } from "@/data/ui";
import type { Locale } from "@/types/content";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import type { Page } from "./nav";

/** Estrutura comum das páginas: link "pular para o conteúdo", header, main e footer. */
export default function PageShell({
  locale,
  page,
  alternateHref,
  children,
}: {
  locale: Locale;
  page: Page;
  /** Mesma página no outro idioma (botão PT/EN). */
  alternateHref: string;
  children: ReactNode;
}) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-accent-strong focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        {ui[locale].nav.skip}
      </a>
      <SiteHeader locale={locale} page={page} alternateHref={alternateHref} />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <SiteFooter locale={locale} page={page} />
    </>
  );
}
