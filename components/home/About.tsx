import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { anchors, t } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default function About({ locale }: { locale: Locale }) {
  const s = ui[locale].sections;
  const facts = [
    { Icon: GraduationCap, label: s.education, value: t(profile.education, locale) },
    { Icon: MapPin, label: s.location, value: t(profile.location, locale) },
  ];

  return (
    <section id={anchors.about} aria-labelledby="about-title" className="container-page py-20 md:py-28">
      <SectionHeading id="about-title" title={s.about} />
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-fg-muted">
          {profile.about[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="reveal space-y-4 self-start rounded-2xl border border-line bg-surface p-6">
          {facts.map(({ Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <Icon size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{label}</dt>
                <dd className="mt-1 text-fg">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
