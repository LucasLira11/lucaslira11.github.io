import { homeAnchor, routes } from "@/lib/i18n";
import { ui } from "@/data/ui";
import type { Locale } from "@/types/content";

export type Page = "home" | "projects" | "certifications" | "other";

export interface NavItem {
  href: string;
  label: string;
  /** Marca o item como página atual (aria-current). */
  current: boolean;
}

export function navItems(locale: Locale, page: Page): NavItem[] {
  const nav = ui[locale].nav;
  return [
    { href: homeAnchor("about", locale), label: nav.about, current: false },
    { href: routes.projects[locale], label: nav.projects, current: page === "projects" },
    { href: homeAnchor("publications", locale), label: nav.publications, current: false },
    { href: routes.certifications[locale], label: nav.certifications, current: page === "certifications" },
    { href: homeAnchor("contact", locale), label: nav.contact, current: false },
  ];
}
