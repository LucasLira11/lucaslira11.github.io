import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import { getProject, projects } from "@/data/projects";
import { projectPath, t } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ id: string }> };

// Export estático: só existem as páginas listadas aqui
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return pageMetadata({
    locale: "pt",
    title: t(project.title, "pt"),
    description: t(project.summary, "pt"),
    paths: { pt: projectPath(id, "pt"), en: projectPath(id, "en") },
    type: "article",
  });
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  return <ProjectDetailPage project={project} locale="pt" />;
}
