import { SectionHeading } from "@/components/ui";
import { skillGroups } from "@/data/skills";
import { ui } from "@/data/ui";
import { anchors, t } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default function Stack({ locale }: { locale: Locale }) {
  const s = ui[locale].sections;
  return (
    <section id={anchors.stack} aria-labelledby="stack-title" className="border-y border-line bg-surface/50">
      <div className="container-page py-20 md:py-24">
        <SectionHeading id="stack-title" eyebrow={ui[locale].nav.stack} title={s.stack} description={s.stackDescription} />
        <dl className="reveal divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
          {skillGroups.map((group) => (
            <div key={group.id} className="grid gap-3 px-5 py-5 sm:grid-cols-[13rem_1fr] sm:items-center sm:px-7">
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">{t(group.title, locale)}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
