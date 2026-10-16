import HomePage from "@/components/pages/HomePage";
import { ui } from "@/data/ui";
import { routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  locale: "en",
  title: ui.en.meta.homeTitle,
  description: ui.en.meta.homeDescription,
  paths: routes.home,
  absoluteTitle: true,
  type: "profile",
});

export default function Page() {
  return <HomePage locale="en" />;
}
