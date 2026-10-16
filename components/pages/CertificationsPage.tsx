import CertificationCard from "@/components/certifications/CertificationCard";
import CertificationsExplorer from "@/components/certifications/CertificationsExplorer";
import PageShell from "@/components/layout/PageShell";
import { certificationCategories, certifications } from "@/data/certifications";
import { ui } from "@/data/ui";
import { otherLocale, routes } from "@/lib/i18n";
import type { CertificationCategory, Locale } from "@/types/content";

export default function CertificationsPage({ locale }: { locale: Locale }) {
  const c = ui[locale].certificationsPage;

  // Só mostra filtros de categorias que têm certificações, na ordem de data/certifications.ts
  const categories = (Object.keys(certificationCategories) as CertificationCategory[])
    .map((key) => ({
      key,
      label: certificationCategories[key][locale],
      count: certifications.filter((cert) => cert.category === key).length,
    }))
    .filter((cat) => cat.count > 0);

  // Textos de contagem já prontos (funções não podem ir para o componente cliente)
  const counts = Object.fromEntries(
    Array.from({ length: certifications.length + 1 }, (_, n) => [n, c.count(n)]),
  ) as Record<number, string>;

  return (
    <PageShell locale={locale} page="certifications" alternateHref={routes.certifications[otherLocale(locale)]}>
      <div className="container-page py-16 md:py-20">
        <header className="mb-10 max-w-3xl">
          <p className="eyebrow">{ui[locale].sections.certificationsEyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg md:text-5xl">{c.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{c.description}</p>
        </header>

        <CertificationsExplorer
          categories={categories}
          items={certifications.map((cert) => ({
            id: cert.id,
            category: cert.category,
            card: <CertificationCard cert={cert} locale={locale} />,
          }))}
          labels={{ filter: c.filterLabel, all: c.all, listTitle: c.title, counts }}
        />
      </div>
    </PageShell>
  );
}
