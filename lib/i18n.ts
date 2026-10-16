import type { Locale, Localized, Text } from "@/types/content";

export const locales: Locale[] = ["pt", "en"];

/** Valor do atributo lang do <html>. */
export const htmlLang: Localized = { pt: "pt-BR", en: "en" };
export const ogLocale: Localized = { pt: "pt_BR", en: "en_US" };

export const otherLocale = (locale: Locale): Locale => (locale === "pt" ? "en" : "pt");

/** Lê um texto no idioma pedido (aceita string simples ou { pt, en }). */
export function t(text: Text, locale: Locale): string {
  return typeof text === "string" ? text : text[locale];
}

/** Rotas do site em cada idioma (sempre com barra no fim: trailingSlash). */
export const routes = {
  home: { pt: "/", en: "/en/" },
  projects: { pt: "/projetos/", en: "/en/projects/" },
  certifications: { pt: "/certificacoes/", en: "/en/certifications/" },
} satisfies Record<string, Localized>;

export const projectPath = (id: string, locale: Locale) => `${routes.projects[locale]}${id}/`;

/** Âncoras da home (iguais nos dois idiomas para facilitar links). */
export const anchors = {
  about: "sobre",
  stack: "stack",
  projects: "projetos",
  publications: "publicacoes",
  certifications: "certificacoes",
  contact: "contato",
} as const;

export const homeAnchor = (anchor: keyof typeof anchors, locale: Locale) => `${routes.home[locale]}#${anchors[anchor]}`;

/** "2026-08" → "ago. de 2026" / "Aug 2026" */
export function formatMonth(isoMonth: string, locale: Locale): string {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat(htmlLang[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
