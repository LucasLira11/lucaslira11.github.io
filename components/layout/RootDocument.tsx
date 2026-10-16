import type { ReactNode } from "react";
import { inter } from "@/lib/fonts";
import { htmlLang } from "@/lib/i18n";
import type { Locale } from "@/types/content";

/**
 * <html> e <body> do site. Cada idioma tem o próprio root layout
 * (app/(pt)/layout.tsx e app/(en)/layout.tsx) para o atributo lang sair certo
 * no HTML estático.
 */
export default function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
