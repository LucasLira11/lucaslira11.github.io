import CertificationsPage from "@/components/pages/CertificationsPage";
import { ui } from "@/data/ui";
import { routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "pt",
  title: ui.pt.meta.certificationsTitle,
  description: ui.pt.meta.certificationsDescription,
  paths: routes.certifications,
});

export default function Page() {
  return <CertificationsPage locale="pt" />;
}
