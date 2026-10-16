import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { profile } from "@/data/profile";
import { ui } from "@/data/ui";
import { anchors } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default function Contact({ locale }: { locale: Locale }) {
  const { sections: s, contact, project } = ui[locale];
  return (
    <section id={anchors.contact} aria-labelledby="contact-title" className="container-page py-20 md:py-28">
      <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-accent-strong/15 blur-[110px]" />
        <div className="relative">
          <p className="eyebrow">{ui[locale].nav.contact}</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight text-fg md:text-5xl">
            {s.contact}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-muted">{s.contactText}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block break-all font-mono text-base text-fg underline decoration-accent underline-offset-4 hover:text-accent sm:text-lg"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              <Mail size={18} aria-hidden="true" /> {contact.email}
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external newTabLabel={project.opensInNewTab} variant="secondary">
              <LinkedInIcon size={18} /> LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.github} external newTabLabel={project.opensInNewTab} variant="secondary">
              <GitHubIcon size={18} /> GitHub
            </ButtonLink>
            {profile.links.whatsapp && (
              <ButtonLink href={profile.links.whatsapp} external newTabLabel={project.opensInNewTab} variant="ghost">
                <WhatsAppIcon size={18} /> {contact.whatsapp}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
