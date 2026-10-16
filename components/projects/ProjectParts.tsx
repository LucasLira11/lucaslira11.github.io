import Image from "next/image";
import { ArrowUpRight, BookOpen, Download, Lock } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { ui } from "@/data/ui";
import { t } from "@/lib/i18n";
import type { Locale, Project, ProjectStatus } from "@/types/content";

const statusStyle: Record<ProjectStatus, string> = {
  production: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  published: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  completed: "border-line-strong bg-surface-2 text-fg-muted",
  "in-development": "border-amber-400/30 bg-amber-400/10 text-amber-200",
};

export function StatusBadge({ status, locale }: { status: ProjectStatus; locale: Locale }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyle[status]}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {ui[locale].project.status[status]}
    </span>
  );
}

/** Capa do projeto. Sem imagem, mostra uma capa tipográfica (nada de screenshot inventado). */
export function ProjectCover({
  project,
  locale,
  sizes,
  preload = false,
  className = "",
}: {
  project: Project;
  locale: Locale;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  if (project.cover) {
    return (
      <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
        <Image
          src={project.cover.src}
          alt={t(project.cover.alt, locale)}
          width={project.cover.width}
          height={project.cover.height}
          sizes={sizes}
          preload={preload}
          className="size-full object-cover object-top"
        />
      </div>
    );
  }
  // Monograma com as iniciais das duas primeiras palavras do título
  const monogram = t(project.title, locale)
    .split(/[\s-]+/)
    .filter((word) => word.length > 2)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden bg-surface-2 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 15%, rgb(220 38 38 / 0.35), transparent 55%), linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
        backgroundSize: "auto, 28px 28px, 28px 28px",
      }}
    >
      <span className="select-none bg-gradient-to-br from-fg/90 to-accent/70 bg-clip-text font-mono text-7xl font-bold tracking-tighter text-transparent sm:text-8xl">
        {monogram}
      </span>
    </div>
  );
}

/** Botões de ação do projeto: site, código (ou "Código privado"), artigo, download. */
export function ProjectLinks({ project, locale, size = "md" }: { project: Project; locale: Locale; size?: "sm" | "md" }) {
  const p = ui[locale].project;
  const links = project.links ?? {};
  const small = size === "sm" ? "min-h-10 px-4 text-xs" : "";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.live && (
        <ButtonLink href={links.live} external newTabLabel={p.opensInNewTab} variant="secondary" className={small}>
          {p.live} <ArrowUpRight size={16} aria-hidden="true" />
        </ButtonLink>
      )}
      {links.paper && (
        <ButtonLink href={links.paper} external newTabLabel={p.opensInNewTab} variant="secondary" className={small}>
          <BookOpen size={16} aria-hidden="true" /> {p.paper}
        </ButtonLink>
      )}
      {links.repo && (
        <ButtonLink href={links.repo} external newTabLabel={p.opensInNewTab} variant="secondary" className={small}>
          <GitHubIcon size={16} /> {p.code}
        </ButtonLink>
      )}
      {links.download && (
        <ButtonLink href={links.download.href} download variant="secondary" className={small}>
          <Download size={16} aria-hidden="true" /> {t(links.download.label, locale)}
        </ButtonLink>
      )}
      {project.privateRepo && !links.repo && (
        <span className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-dashed border-line-strong px-4 text-xs font-medium text-fg-subtle">
          <Lock size={14} aria-hidden="true" /> {p.privateCode}
        </span>
      )}
    </div>
  );
}
