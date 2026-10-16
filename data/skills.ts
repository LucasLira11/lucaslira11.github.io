import type { SkillGroup } from "@/types/content";

// TODO(Lucas): Spring Boot e AWS estavam no site antigo e não estão na lista nova.
//   Se quiser de volta, acrescente em "backend" e "infra".

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { pt: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Astro"],
  },
  {
    id: "backend",
    title: { pt: "Backend", en: "Backend" },
    items: ["Node.js", "Python", "Java", "PHP"],
  },
  {
    id: "data",
    title: { pt: "Dados", en: "Data" },
    items: ["MySQL", "Supabase", "Firebase", "Prisma"],
  },
  {
    id: "infra",
    title: { pt: "Infra e ferramentas", en: "Infra & tooling" },
    items: ["Docker", "Vercel", "Git"],
  },
  {
    id: "ai",
    title: { pt: "IA e automação", en: "AI & automation" },
    items: ["OpenAI API", "Zapier", "Webhooks"],
  },
];
