import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { ui } from "@/data/ui";
import { projectPath, t } from "@/lib/i18n";
import type { Locale, Publication } from "@/types/content";

export default function PublicationCard({
  publication: pub,
  locale,
  headingLevel = "h3",
  showProjectLink = true,
}: {
  publication: Publication;
  locale: Locale;
  headingLevel?: "h2" | "h3";
  showProjectLink?: boolean;
}) {
  const p = ui[locale].publication;
  const opens = ui[locale].project.opensInNewTab;
  const Heading = headingLevel;

  return (
    <article className="reveal relative overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-accent-strong" />
      <p className="eyebrow">
        {t(pub.kind, locale)} · {pub.publisher} · {pub.year}
      </p>
      <Heading lang={pub.titleLang === "en" ? "en" : "pt-BR"} className="mt-3 text-xl font-bold leading-snug tracking-tight text-fg sm:text-2xl">
        {pub.title}
      </Heading>
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">
        {pub.authors.map((author, i) => (
          <span key={author}>
            {author === pub.highlightAuthor ? <strong className="font-semibold text-fg">{author}</strong> : author}
            {i < pub.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-fg-subtle">
        <cite className="not-italic">{t(pub.venue, locale)}</cite>
        {pub.pages && (
          <>
            {" "}
            · {p.pages} {pub.pages}
          </>
        )}
      </p>
      <p className="mt-2 font-mono text-xs text-fg-subtle">
        {p.doi}: {pub.doi}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <ButtonLink href={pub.url} external newTabLabel={opens} variant="primary">
          {p.doi} <ArrowUpRight size={16} aria-hidden="true" />
        </ButtonLink>
        {pub.pdf && (
          <ButtonLink href={pub.pdf} external newTabLabel={opens} variant="secondary">
            <FileText size={16} aria-hidden="true" /> {p.pdf}
          </ButtonLink>
        )}
        {showProjectLink && pub.projectId && (
          <Link
            href={projectPath(pub.projectId, locale)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
          >
            {p.project} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
