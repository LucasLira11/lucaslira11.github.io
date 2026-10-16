import { ArrowRight } from "lucide-react";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Stack from "@/components/home/Stack";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/layout/PageShell";
import CertificationCard from "@/components/certifications/CertificationCard";
import ProjectCard from "@/components/projects/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { certifications } from "@/data/certifications";
import { featuredProjects } from "@/data/projects";
import { publications } from "@/data/publications";
import { ui } from "@/data/ui";
import { anchors, otherLocale, routes } from "@/lib/i18n";
import { allPublicationsJsonLd, personJsonLd } from "@/lib/seo";
import type { Locale } from "@/types/content";

export default function HomePage({ locale }: { locale: Locale }) {
  const { sections: s, nav } = ui[locale];
  const featuredCerts = certifications.filter((c) => c.featured);

  return (
    <PageShell locale={locale} page="home" alternateHref={routes.home[otherLocale(locale)]}>
      <JsonLd data={[personJsonLd(locale), ...allPublicationsJsonLd(locale)]} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Stack locale={locale} />

      <section id={anchors.projects} aria-labelledby="projects-title" className="container-page py-20 md:py-28">
        <SectionHeading
          id="projects-title"
          eyebrow={nav.projects}
          title={s.projects}
          description={s.projectsDescription}
          action={
            <ButtonLink href={routes.projects[locale]} variant="secondary">
              {s.allProjects} <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} locale={locale} layout={i === 0 ? "wide" : "default"} />
          ))}
        </div>
      </section>

      <section id={anchors.publications} aria-labelledby="publications-title" className="border-y border-line bg-surface/50">
        <div className="container-page py-20 md:py-24">
          <SectionHeading id="publications-title" eyebrow={s.publicationsEyebrow} title={s.publications} />
          <div className="grid gap-6">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section id={anchors.certifications} aria-labelledby="certifications-title" className="container-page py-20 md:py-28">
        <SectionHeading
          id="certifications-title"
          eyebrow={s.certificationsEyebrow}
          title={s.certifications}
          description={s.certificationsDescription}
          action={
            <ButtonLink href={routes.certifications[locale]} variant="secondary">
              {s.allCertifications(certifications.length)} <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          }
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCerts.map((cert) => (
            <li key={cert.id} className="reveal">
              <CertificationCard cert={cert} locale={locale} compact />
            </li>
          ))}
        </ul>
      </section>

      <Contact locale={locale} />
    </PageShell>
  );
}
