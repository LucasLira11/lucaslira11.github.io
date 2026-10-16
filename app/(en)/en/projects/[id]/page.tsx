import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import { getProject, projects } from "@/data/projects";
import { projectPath, t } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

// Static export: only the pages listed here exist
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps<"/en/projects/[id]">) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return pageMetadata({
    locale: "en",
    title: t(project.title, "en"),
    description: t(project.summary, "en"),
    paths: { pt: projectPath(id, "pt"), en: projectPath(id, "en") },
    type: "article",
  });
}

export default async function Page({ params }: PageProps<"/en/projects/[id]">) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return <ProjectDetailPage project={project} locale="en" />;
}
