import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";
import { htmlLang, locales, projectPath, routes } from "@/lib/i18n";
import type { Localized } from "@/types/content";

// Export estático: o sitemap é gerado no build (out/sitemap.xml)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Localized[] = [
    routes.home,
    routes.projects,
    routes.certifications,
    ...projects.map((p) => ({ pt: projectPath(p.id, "pt"), en: projectPath(p.id, "en") })),
  ];

  // Uma entrada por página e idioma, com a versão no outro idioma como alternate
  return pages.flatMap((paths) =>
    locales.map((locale) => ({
      url: `${siteUrl}${paths[locale]}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteUrl}${paths[l]}`])),
      },
    })),
  );
}
