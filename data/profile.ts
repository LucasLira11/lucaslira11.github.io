import type { Profile } from "@/types/content";

// TODO(Lucas): Turinq — você ainda trabalha lá? Cargo e período? O site antigo
//   dizia "Web Developer @ Turinq". Saiu do topo até você confirmar.
// TODO(Lucas): disponibilidade — posso escrever "Aberto a estágio e vagas Full Stack"?
//   Presencial, híbrido ou remoto? Quando confirmar, acrescente uma frase em `summary`.
// TODO(Lucas): foco em ArcGIS/GeoTecnologia — o "Sobre" antigo citava. Saiu até você confirmar.

export const profile: Profile = {
  name: "Lucas Lira",
  fullName: "Lucas Pontes Lira",
  role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
  education: {
    pt: "Estudante de Sistemas de Informação no CEFET/RJ",
    en: "Information Systems student at CEFET/RJ",
  },
  location: { pt: "Nova Friburgo, RJ · Brasil", en: "Nova Friburgo, RJ · Brazil" },
  summary: {
    pt: "Desenvolvo aplicações web de ponta a ponta, da interface em React e Next.js à API, ao banco de dados e às automações com IA.",
    en: "I build web applications end to end, from React and Next.js interfaces to APIs, databases and AI-powered automations.",
  },
  about: {
    pt: [
      "Sou desenvolvedor Full Stack e estudante de Sistemas de Informação no CEFET/RJ, em Nova Friburgo (RJ).",
      "Gosto de software que resolve problemas reais: criei um pipeline de documentação clínica com transcrição por IA que reduziu em mais de 80% o tempo de criação de prontuários e, como freelancer, desenvolvi uma plataforma de associação e notícias que está em produção.",
      "Na universidade, publiquei pela SBC um artigo sobre agentes BDI aplicados ao transporte urbano e criei com a turma um site de conscientização no trânsito que foi apresentado à Prefeitura de Nova Friburgo. Hoje pesquiso segurança para desenvolvedores com o RepoGuard-Nudge.",
    ],
    en: [
      "I'm a Full Stack developer and an Information Systems student at CEFET/RJ, in Nova Friburgo, Brazil.",
      "I like software that solves real problems: I built a clinical documentation pipeline with AI transcription that cut the time to create medical records by more than 80%, and, as a freelancer, I developed a membership and news platform that is now in production.",
      "At university, I published a paper with the Brazilian Computer Society (SBC) on BDI agents for urban transport, and built with my class a road-safety awareness website that was presented to the Nova Friburgo city government. I'm currently researching developer security with RepoGuard-Nudge.",
    ],
  },
  photo: {
    src: "/images/profile.webp",
    width: 480,
    height: 480,
    alt: { pt: "Foto de Lucas Lira", en: "Photo of Lucas Lira" },
  },
  email: "lucasponteslira@gmail.com",
  links: {
    github: "https://github.com/LucasLira11",
    linkedin: "https://www.linkedin.com/in/lucas-lira-79b339272/",
    // TODO(Lucas): manter o WhatsApp público? Para remover, apague a linha abaixo.
    whatsapp: "https://wa.me/5522997793222",
  },
};

/** Repositório deste site (link no rodapé). */
export const siteRepo = "https://github.com/LucasLira11/lucaslira11.github.io";
export const siteUrl = "https://lucaslira11.github.io";
