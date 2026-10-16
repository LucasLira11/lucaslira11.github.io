import Link from "next/link";
import Logo from "@/components/Logo";
import { ui } from "@/data/ui";
import { htmlLang, otherLocale, routes } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import MobileMenu from "./MobileMenu";
import { navItems, type Page } from "./nav";

export default function SiteHeader({ locale, page, alternateHref }: { locale: Locale; page: Page; alternateHref: string }) {
  const { nav, language } = ui[locale];
  const items = navItems(locale, page);
  const other = otherLocale(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="container-page relative flex h-16 items-center justify-between gap-4">
        <Logo href={routes.home[locale]} label={nav.home} />

        <nav aria-label={nav.label} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg aria-[current=page]:bg-surface-2 aria-[current=page]:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={alternateHref}
            hrefLang={htmlLang[other]}
            lang={htmlLang[other]}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line-strong px-3 font-mono text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            {language.label}
            <span className="sr-only"> · {language.aria}</span>
          </a>
          <MobileMenu items={items} openLabel={nav.openMenu} closeLabel={nav.closeMenu} navLabel={nav.label} />
        </div>
      </div>
    </header>
  );
}
