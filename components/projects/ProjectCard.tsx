import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Tag } from "@/components/ui";
import { ui } from "@/data/ui";
import { projectPath, t } from "@/lib/i18n";
import type { Locale, Project } from "@/types/content";
import { ProjectCover, ProjectLinks, StatusBadge } from "./ProjectParts";

/**
 * Card de projeto. `layout="wide"` coloca a capa ao lado do texto (usado no
 * primeiro destaque). O título é o link para a página do projeto.
 */
export default function ProjectCard({
  project,
  locale,
  layout = "default",
  headingLevel = "h3",
}: {
  project: Project;
  locale: Locale;
  layout?: "default" | "wide";
  headingLevel?: "h2" | "h3";
}) {
  const p = ui[locale].project;
  const href = projectPath(project.id, locale);
  const title = t(project.title, locale);
  const Heading = headingLevel;
  const wide = layout === "wide";
  const maxStack = 5;

  return (
    <article
      className={`reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${
        wide ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <Link href={href} tabIndex={-1} aria-hidden="true" className={`block shrink-0 ${wide ? "lg:w-[55%]" : ""}`}>
        <ProjectCover
          project={project}
          locale={locale}
          sizes={wide ? "(min-width: 1024px) 620px, 100vw" : "(min-width: 768px) 560px, 100vw"}
          className={`aspect-video transition-transform duration-500 group-hover:scale-[1.02] ${wide ? "lg:aspect-auto lg:h-full" : ""}`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <StatusBadge status={project.status} locale={locale} />
          <span className="font-mono text-xs text-fg-subtle">{t(project.context, locale)}</span>
        </div>

        <Heading className="mt-4 text-2xl font-bold tracking-tight text-fg">
          <Link href={href} className="underline-offset-4 hover:text-accent hover:underline">
            {title}
          </Link>
        </Heading>
        <p className="mt-3 leading-relaxed text-fg-muted">{t(project.summary, locale)}</p>

        {project.highlights && (
          <ul className="mt-4 space-y-2">
            {project.highlights[locale].map((h) => (
              <li key={h} className="flex gap-2 text-sm font-medium text-fg">
                <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={p.stack}>
          {project.stack.slice(0, maxStack).map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
          {project.stack.length > maxStack && (
            <li>
              <Tag>+{project.stack.length - maxStack}</Tag>
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <Link
            href={href}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-fg px-4 text-xs font-semibold text-bg transition-colors hover:bg-fg-muted"
          >
            {p.details}
            <span className="sr-only">: {title}</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <ProjectLinks project={project} locale={locale} size="sm" />
        </div>
      </div>
    </article>
  );
}
