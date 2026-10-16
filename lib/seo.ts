import type { Metadata } from "next";
import { profile, siteUrl } from "@/data/profile";
import { publications } from "@/data/publications";
import { skillGroups } from "@/data/skills";
import { htmlLang, ogLocale, otherLocale, t } from "@/lib/i18n";
import type { Locale, Localized, Publication } from "@/types/content";

const ogImage = { url: "/og.png", width: 1200, height: 630, alt: "Lucas Lira · Full Stack" };

/**
 * Metadados de uma página: title, description, canonical, hreflang,
 * Open Graph e Twitter Card. `paths` é o caminho da página em cada idioma.
 */
export function pageMetadata({
  locale,
  title,
  description,
  paths,
  absoluteTitle = false,
  type = "website",
}: {
  locale: Locale;
  title: string;
  description: string;
  paths: Localized;
  absoluteTitle?: boolean;
  type?: "website" | "article" | "profile";
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: { [htmlLang.pt]: paths.pt, [htmlLang.en]: paths.en, "x-default": paths.pt },
    },
    openGraph: {
      type,
      url: paths[locale],
      siteName: profile.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[otherLocale(locale)],
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}

/** Dados estruturados schema.org da pessoa (usado na home). */
export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.fullName,
    alternateName: profile.name,
    url: `${siteUrl}/`,
    image: `${siteUrl}${profile.photo.src}`,
    jobTitle: t(profile.role, locale),
    description: t(profile.summary, locale),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Nova Friburgo", addressRegion: "RJ", addressCountry: "BR" },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)",
    },
    knowsAbout: skillGroups.flatMap((g) => g.items),
    sameAs: [profile.links.github, profile.links.linkedin],
  };
}

/** Dados estruturados schema.org de um artigo. */
export function articleJsonLd(pub: Publication, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    inLanguage: pub.titleLang === "en" ? "en" : "pt-BR",
    author: pub.authors.map((name) =>
      name === pub.highlightAuthor ? { "@type": "Person", "@id": `${siteUrl}/#person`, name } : { "@type": "Person", name },
    ),
    datePublished: pub.date,
    publisher: { "@type": "Organization", name: "Sociedade Brasileira de Computação (SBC)" },
    isPartOf: { "@type": "PublicationIssue", name: t(pub.venue, locale) },
    pagination: pub.pages?.replace("–", "-"),
    identifier: { "@type": "PropertyValue", propertyID: "DOI", value: pub.doi },
    sameAs: pub.url,
    url: pub.url,
  };
}

export const allPublicationsJsonLd = (locale: Locale) => publications.map((p) => articleJsonLd(p, locale));
