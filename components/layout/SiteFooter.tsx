import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile, siteRepo } from "@/data/profile";
import { ui } from "@/data/ui";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { navItems, type Page } from "./nav";

export default function SiteFooter({ locale, page }: { locale: Locale; page: Page }) {
  const { footer, nav, project } = ui[locale];
  const social = [
    { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
    { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div>
          <p className="text-lg font-bold text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-fg-muted">
            {t(profile.role, locale)} · {t(profile.location, locale)}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
        </div>

        <nav aria-label={nav.footer}>
          <ul className="grid grid-cols-2 gap-x-6 text-sm">
            {navItems(locale, page).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-fg-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2">
          {social.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
                <span className="sr-only">
                  {label} {project.opensInNewTab}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. {footer.rights}
          </p>
          <a href={siteRepo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline-offset-4 hover:text-fg hover:underline sm:min-h-0">
            {footer.source}
            <span className="sr-only"> {project.opensInNewTab}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
