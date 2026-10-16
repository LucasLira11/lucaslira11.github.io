import Image from "next/image";
import { ArrowRight, BookOpen, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { anchors, routes, t } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default function Hero({ locale }: { locale: Locale }) {
  const { hero, project } = ui[locale];

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 size-[36rem] rounded-full bg-accent-strong/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
      />

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <MapPin size={14} aria-hidden="true" />
            {t(profile.location, locale)}
          </p>
          <h1 id="hero-title" className="mt-5 text-5xl font-bold tracking-tighter text-fg sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-fg sm:text-3xl">{t(profile.role, locale)}</p>
          <p className="mt-2 text-lg text-fg-muted">{t(profile.education, locale)}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{t(profile.summary, locale)}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={routes.projects[locale]} variant="primary">
              {hero.viewProjects} <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
              <Mail size={18} aria-hidden="true" /> {hero.email}
            </ButtonLink>
            <ButtonLink href={profile.links.github} external newTabLabel={project.opensInNewTab} variant="ghost">
              <GitHubIcon size={18} /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external newTabLabel={project.opensInNewTab} variant="ghost">
              <LinkedInIcon size={18} /> LinkedIn
            </ButtonLink>
          </div>

          <a
            href={`#${anchors.publications}`}
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface/80 px-4 text-sm text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
          >
            <BookOpen size={16} aria-hidden="true" className="text-accent" />
            {hero.publication}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="relative mx-auto w-52 sm:w-64 lg:w-72">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-accent-strong" />
          <Image
            src={profile.photo.src}
            alt={t(profile.photo.alt, locale)}
            width={profile.photo.width}
            height={profile.photo.height}
            sizes="(min-width: 1024px) 288px, 256px"
            preload
            className="relative aspect-square w-full rounded-3xl border border-line bg-surface-2 object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
