export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  features: string[];
  role: string;
  status: 'Concluído' | 'Em Desenvolvimento' | 'Pausado';
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  institution: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description?: string;
  category: 'Desenvolvimento Web' | 'Cloud' | 'Inteligência Artificial' | 'Dados' | 'GIS' | 'Engenharia de Software' | 'Metodologias Ágeis' | 'Programação' | 'Backend' | 'Processos' | 'Outros';
  logoText: string; // Fallback visual case não haja logo
}