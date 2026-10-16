import ProjectsPage from "@/components/pages/ProjectsPage";
import { ui } from "@/data/ui";
import { routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  title: ui.en.meta.projectsTitle,
  description: ui.en.meta.projectsDescription,
  paths: routes.projects,
});

export default function Page() {
  return <ProjectsPage locale="en" />;
}
