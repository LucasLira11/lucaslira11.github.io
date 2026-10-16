import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { issuers } from "@/data/certifications";
import { ui } from "@/data/ui";
import { formatMonth, t } from "@/lib/i18n";
import type { Certification, Locale } from "@/types/content";

/**
 * Card de certificação. `compact` é a versão da home (logo, título, emissor);
 * a completa mostra descrição e habilidades.
 */
export default function CertificationCard({
  cert,
  locale,
  compact = false,
}: {
  cert: Certification;
  locale: Locale;
  compact?: boolean;
}) {
  const c = ui[locale].certificationsPage;
  const issuer = issuers[cert.issuer];
  const title = t(cert.title, locale);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
          <Image src={issuer.logo} alt="" width={128} height={128} className="size-full object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className={`font-semibold leading-snug text-fg ${compact ? "text-base" : "text-lg"}`}>{title}</h3>
          <p className="mt-1 text-sm text-fg-subtle">
            {issuer.name} · <time dateTime={cert.issued}>{formatMonth(cert.issued, locale)}</time>
          </p>
        </div>
      </div>

      {!compact && cert.description && <p className="mt-4 text-sm leading-relaxed text-fg-muted">{t(cert.description, locale)}</p>}

      {!compact && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {cert.skills.map((s) => (
            <li key={t(s, locale)} className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-fg-muted">
              {t(s, locale)}
            </li>
          ))}
        </ul>
      )}

      {cert.url && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-accent underline-offset-4 hover:underline ${
            compact ? "mt-3" : "mt-auto pt-4"
          }`}
        >
          {c.viewCredential}
          <span className="sr-only">
            : {title} {ui[locale].project.opensInNewTab}
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
