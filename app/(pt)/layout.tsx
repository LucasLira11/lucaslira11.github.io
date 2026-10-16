import RootDocument from "@/components/layout/RootDocument";
import { rootMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata = rootMetadata("pt");

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
