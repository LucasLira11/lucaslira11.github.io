// Tipos do conteúdo do site. Os dados ficam em data/*.ts.
// Texto traduzível usa Localized: { pt: "...", en: "..." }.
// Texto igual nos dois idiomas (nomes próprios, tecnologias) pode ser string simples.

export type Locale = "pt" | "en";
export type Localized<T = string> = Record<Locale, T>;
/** Texto que pode ser igual nos dois idiomas (string) ou traduzido. */
export type Text = string | Localized;

export interface Image {
  /** Caminho a partir de public/, ex.: "/images/projects/busai-cover.webp" */
  src: string;
  width: number;
  height: number;
  alt: Localized;
}

export interface Profile {
  name: string;
  fullName: string;
  role: Localized;
  education: Localized;
  location: Localized;
  /** Uma ou duas frases para o topo da home e para o SEO. */
  summary: Localized;
  /** Parágrafos da seção "Sobre". */
  about: Localized<string[]>;
  photo: Image;
  email: string;
  links: {
    github: string;
    linkedin: string;
    /** Opcional: deixe undefined para não mostrar. */
    whatsapp?: string;
  };
}

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export type ProjectStatus = "production" | "live" | "published" | "completed" | "in-development";

export interface ProjectSection {
  title: Localized;
  items: Localized<string[]>;
  highlight?: boolean;
}

export interface Project {
  /** Vira a URL: /projetos/<id>/ e /en/projects/<id>/ */
  id: string;
  title: Text;
  /** Uma frase para o card. */
  summary: Localized;
  /** Ex.: "Freelance", "Pesquisa acadêmica — CEFET/RJ". */
  context: Localized;
  status: ProjectStatus;
  /** Aparece na home e no topo de /projetos. A ordem do array é a ordem de exibição. */
  featured: boolean;
  stack: string[];
  /** Resultados e marcos (números, prêmios, publicação). */
  highlights?: Localized<string[]>;
  /** Sem capa, o card usa uma capa tipográfica. */
  cover?: Image;
  links?: {
    live?: string;
    repo?: string;
    paper?: string;
    download?: { href: string; label: Localized };
  };
  /** true = mostra o selo "Código privado" no lugar do link do repositório. */
  privateRepo?: boolean;
  /** Liga o projeto a uma publicação de data/publications.ts. */
  publicationId?: string;
  sections?: ProjectSection[];
  gallery?: (Image & { caption?: Localized })[];
  note?: Localized;
}

export interface Publication {
  id: string;
  /** Título como publicado (no idioma original). */
  title: string;
  titleLang: "pt" | "en";
  authors: string[];
  /** Nome do autor do site, para destacar na lista. */
  highlightAuthor: string;
  kind: Localized;
  venue: Localized;
  publisher: string;
  year: number;
  /** Data de publicação (AAAA-MM-DD), usada nos dados estruturados. */
  date: string;
  pages?: string;
  doi: string;
  url: string;
  pdf?: string;
  projectId?: string;
}

export type IssuerId = "ibm" | "aws" | "cisco" | "esri" | "hackerrank" | "scrumstudy" | "enap";

export interface Issuer {
  name: string;
  logo: string;
}

export type CertificationCategory = "ai" | "cloud" | "security" | "gis" | "software-engineering" | "web" | "programming" | "backend" | "agile" | "processes";

export interface Certification {
  id: string;
  title: Text;
  issuer: IssuerId;
  /** Mês de emissão no formato AAAA-MM. */
  issued: string;
  category: CertificationCategory;
  skills: Text[];
  description?: Localized;
  url?: string;
  /** Aparece na home. */
  featured?: boolean;
}
