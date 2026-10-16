import ProjectsPage from "@/components/pages/ProjectsPage";
import { ui } from "@/data/ui";
import { routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "pt",
  title: ui.pt.meta.projectsTitle,
  description: ui.pt.meta.projectsDescription,
  paths: routes.projects,
});

export default function Page() {
  return <ProjectsPage locale="pt" />;
}
