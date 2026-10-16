import type { Metadata } from "next";
import { siteUrl } from "@/data/profile";
import { ui } from "@/data/ui";
import { inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: ui.pt.meta.homeTitle, template: "%s · Lucas Lira" },
  description: ui.pt.meta.homeDescription,
  authors: [{ name: "Lucas Pontes Lira", url: siteUrl }],
  creator: "Lucas Pontes Lira",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
