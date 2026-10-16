import PageShell from "@/components/layout/PageShell";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ui } from "@/data/ui";
import { otherLocale, routes } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default function ProjectsPage({ locale }: { locale: Locale }) {
  const p = ui[locale].projectsPage;
  return (
    <PageShell locale={locale} page="projects" alternateHref={routes.projects[otherLocale(locale)]}>
      <div className="container-page py-16 md:py-20">
        <header className="max-w-3xl">
          <p className="eyebrow">{ui[locale].nav.projects}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg md:text-5xl">{p.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">{p.description}</p>
        </header>

        <section aria-labelledby="featured-title" className="mt-14">
          <h2 id="featured-title" className="mb-6 text-2xl font-bold tracking-tight text-fg">
            {p.featured}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} locale={locale} layout={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </section>

        {otherProjects.length > 0 && (
          <section aria-labelledby="others-title" className="mt-20">
            <h2 id="others-title" className="mb-6 text-2xl font-bold tracking-tight text-fg">
              {p.others}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
