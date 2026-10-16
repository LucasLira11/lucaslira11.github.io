import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/layout/PageShell";
import { ProjectCover, ProjectLinks, StatusBadge } from "@/components/projects/ProjectParts";
import PublicationCard from "@/components/PublicationCard";
import { Tag } from "@/components/ui";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { ui } from "@/data/ui";
import { otherLocale, projectPath, routes, t } from "@/lib/i18n";
import { articleJsonLd } from "@/lib/seo";
import type { Locale, Project } from "@/types/content";

export default function ProjectDetailPage({ project, locale }: { project: Project; locale: Locale }) {
  const p = ui[locale].project;
  const title = t(project.title, locale);
  const publication = publications.find((pub) => pub.id === project.publicationId);
  const index = projects.findIndex((x) => x.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <PageShell locale={locale} page="projects" alternateHref={projectPath(project.id, otherLocale(locale))}>
      {publication && <JsonLd data={articleJsonLd(publication, locale)} />}
      <article className="container-page max-w-5xl py-12 md:py-16">
        <Link
          href={routes.projects[locale]}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={16} aria-hidden="true" /> {p.back}
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <StatusBadge status={project.status} locale={locale} />
            <span className="font-mono text-xs text-fg-subtle">{t(project.context, locale)}</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-fg md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-fg-muted md:text-xl">{t(project.summary, locale)}</p>
          <div className="mt-7">
            <ProjectLinks project={project} locale={locale} />
          </div>
        </header>

        <ProjectCover
          project={project}
          locale={locale}
          sizes="(min-width: 1024px) 960px, 100vw"
          preload
          className="mt-10 aspect-video rounded-2xl border border-line"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_17rem]">
          <div className="space-y-6">
            {project.sections?.map((section) => (
              <section
                key={t(section.title, locale)}
                className={`rounded-2xl border p-6 sm:p-8 ${section.highlight ? "border-accent-strong/30 bg-accent-soft" : "border-line bg-surface"}`}
              >
                <h2 className="text-xl font-bold text-fg">{t(section.title, locale)}</h2>
                <ul className="mt-4 space-y-3">
                  {section.items[locale].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-fg-muted">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            {publication && (
              <section aria-labelledby="publication-title">
                <h2 id="publication-title" className="mb-4 text-xl font-bold text-fg">
                  {p.publication}
                </h2>
                <PublicationCard publication={publication} locale={locale} showProjectLink={false} />
              </section>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <section aria-labelledby="gallery-title">
                <h2 id="gallery-title" className="mb-4 text-xl font-bold text-fg">
                  {p.gallery}
                </h2>
                <div className="grid gap-6">
                  {project.gallery.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-2xl border border-line bg-surface">
                      <Image
                        src={img.src}
                        alt={t(img.alt, locale)}
                        width={img.width}
                        height={img.height}
                        sizes="(min-width: 1024px) 660px, 100vw"
                        className="mx-auto h-auto max-h-[42rem] w-auto"
                      />
                      {img.caption && <figcaption className="border-t border-line px-5 py-3 text-sm text-fg-muted">{t(img.caption, locale)}</figcaption>}
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {project.note && <p className="rounded-2xl border border-line bg-surface px-6 py-4 text-sm text-fg-muted">{t(project.note, locale)}</p>}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {project.highlights && (
              <div className="rounded-2xl border border-line bg-surface p-5">
                <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{p.highlights}</h2>
                <ul className="mt-3 space-y-2">
                  {project.highlights[locale].map((h) => (
                    <li key={h} className="flex gap-2 text-sm font-medium text-fg">
                      <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{p.stack}</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <nav aria-label={p.next} className="mt-16 border-t border-line pt-8">
          <Link
            href={projectPath(next.id, locale)}
            className="group flex flex-col gap-1 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{p.next}</span>
            <span className="inline-flex items-center gap-2 text-xl font-bold text-fg group-hover:text-accent">
              {t(next.title, locale)} <ArrowRight size={20} aria-hidden="true" />
            </span>
          </Link>
        </nav>
      </article>
    </PageShell>
  );
}
