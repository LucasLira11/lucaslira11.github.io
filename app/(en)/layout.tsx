import RootDocument from "@/components/layout/RootDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata = rootMetadata("en");

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
