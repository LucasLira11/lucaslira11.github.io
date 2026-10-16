export const institutionLogos: Record<string, string> = {
  "Esri": "/images/logos/esri.webp",
  "Amazon Web Services (AWS)": "/images/logos/aws.webp",
  "IBM": "/images/logos/ibm.webp", 
  "HackerRank": "/images/logos/hackerrank.webp",
  "Upskill with SCRUMStudy": "/images/logos/scrumstudy.webp",
  "Enap": "/images/logos/enap.webp",
  "Cisco": "/images/logos/cisco.webp",
};

// --- ADICIONE ESTAS INTERFACES AQUI ---

export interface PersonalInfo {
  name: string;
  fullName: string;
  role: string;
  about: string;
  email: string;
}

export interface Skill {
  name: string;
  description: string;
  items: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  issuedDate: string;
  description?: string;
  skills: string[];
  credentialUrl?: string;
  category: string;
  featured?: boolean;
}

export interface ProjectSection {
  title: string;
  isHighlight: boolean;
  content: string[];
}

export interface ProjectDetails {
  subtitle?: string;
  tags?: string[];
  gallery?: string[];
  sections?: ProjectSection[];
  disclaimer?: string;
  actionLink?: string;
  actionText?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  featured: boolean;
  category: string;
  status: string;
  siteLink?: string;
  details?: ProjectDetails;
}

export interface PortfolioLanguageData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
}

export interface PortfolioData {
  pt: PortfolioLanguageData;
  en: PortfolioLanguageData;
}


export const portfolioData: PortfolioData = {
  pt: {
    personalInfo: {
      name: "Lucas",
      fullName: "Lucas Lira",
      role: "Desenvolvedor Full-Stack",
      about: "Desenvolvedor na Turinq e estudante de Sistemas de Informação no CEFET/RJ. Especialista em criar soluções de alto desempenho, unindo lógica rigorosa a interfaces intuitivas e modernas.",
      email: "lucasponteslira@email.com",
    },
    skills: [
      { 
        name: "Frontend", 
        description: "Interfaces modernas e responsivas", 
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], 
        icon: "Monitor" 
      },
      { 
        name: "Backend", 
        description: "Sistemas escaláveis e seguros", 
        items: ["Spring Boot", "Java", "Python", "Node.js", "MySQL"], 
        icon: "Database" 
      },
      { 
        name: "Cloud", 
        description: "Infraestrutura e serviços gerenciados", 
        items: ["AWS", "Firebase", "Supabase", "Vercel"], 
        icon: "Cloud" 
      }
    ],
    certifications: [
      {
        id: "ibm-build-ai-agent",
        title: "Build an AI Agent",
        institution: "IBM",
        issuedDate: "Agosto de 2026",
        description: "Conhecimento técnico e habilidades práticas para construir e otimizar agentes de IA usando IBM watsonx.ai. Inclui classificação de agentes baseados em tomada de decisão, estruturação de fluxos de trabalho e métricas de avaliação.",
        skills: ["Agentes de IA", "PWID-B1021600", "watsonx.ai"],
        credentialUrl: "https://www.credly.com/badges/a057036d-a6f5-476a-8714-05a83dc50ba5",
        category: "Inteligência Artificial",
        featured: true,
      },
      {
        id: "aws-cloud-101",
        title: "AWS Educate Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        issuedDate: "Agosto de 2026",
        description: "Compreensão fundamental dos serviços core da nuvem AWS e aplicações básicas em cloud computing.",
        skills: ["Computação em Nuvem", "Amazon Web Services"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/7625d3e9-cf8f-48da-b243-3d01df046c7a",
        category: "Cloud",
        featured: true,
      },
      {
        id: "cisco-intro-cybersecurity",
        title: "Introduction to Cybersecurity",
        institution: "Cisco",
        issuedDate: "Agosto de 2026",
        description: "Curso introdutório ao mundo da cibersegurança. Aborda os fundamentos para proteger a vida digital pessoal e os maiores desafios de segurança enfrentados por empresas, governos e instituições.",
        skills: ["Cibersegurança", "Privacidade dos Dados"],
        credentialUrl: "https://www.credly.com/badges/fca96f47-2ad1-4019-8a1a-1957d9f2281f",
        category: "Cibersegurança",
        featured: true,
      },
      {
        id: "arcgis-pro-basics",
        title: "ArcGIS Pro Basics",
        institution: "Esri",
        issuedDate: "Agosto de 2026",
        description: "Conceitos centrais e workflows do ArcGIS Pro, principal software SIG de desktop da Esri.",
        skills: ["ArcGIS", "SIG"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a78b5e751a2fb93cd5a17a7/180",
        category: "GIS",
        featured: true,
      },
      {
        id: "software-engineer",
        title: "Software Engineer",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        description: "Certificação técnica validando competências em desenvolvimento de software, resolução de problemas, SQL e REST APIs.",
        skills: ["Desenvolvimento de Software", "Problem Solving", "SQL", "REST API"],
        credentialUrl: "https://www.hackerrank.com/certificates/e77c8cbd793e",
        category: "Engenharia de Software",
        featured: true,
      },
      {
        id: "frontend-react",
        title: "Frontend Developer (React)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        description: "Validação prática de habilidades em desenvolvimento frontend com React, CSS e JavaScript.",
        skills: ["React", "CSS", "JavaScript", "Desenvolvimento Web"],
        credentialUrl: "https://www.hackerrank.com/certificates/ee2c89b92871",
        category: "Desenvolvimento Web",
        featured: true,
      },
      {
        id: "ibm-granite-code",
        title: "Code Generation and Optimization Using IBM Granite",
        institution: "IBM",
        issuedDate: "Dezembro de 2025",
        description: "Conhecimento técnico e prático no uso de modelos IBM Granite para geração de código, prompting e workflows de revisão e otimização de código gerado por IA.",
        skills: ["IA Prompting", "Revisão de Código", "IBM Granite"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/eb13d31f-cc07-4127-abdd-1d4e948bf8a6",
        category: "Inteligência Artificial",
        featured: true,
      },
      {
        id: "gis-basics",
        title: "GIS Basics",
        institution: "Esri",
        issuedDate: "Agosto de 2026",
        description: "Visão geral fundamental da teoria e princípios centrais de Sistemas de Informação Geográfica (SIG).",
        skills: ["SIG", "ArcGIS"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a789aa449e75b494f63bcdb/180",
        category: "GIS",
        featured: true,
      },
      {
        id: "arcgis-online-basics",
        title: "ArcGIS Online Basics",
        institution: "Esri",
        issuedDate: "Agosto de 2026",
        description: "Introdução às ferramentas e recursos fundamentais da plataforma de mapeamento em nuvem da Esri.",
        skills: ["ArcGIS", "Aplicações SIG"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a78a35051a2fb93cd57ec9d/180",
        category: "GIS",
      },
      {
        id: "ibm-granite-data",
        title: "Data Classification and Summarization Using IBM Granite",
        institution: "IBM",
        issuedDate: "Agosto de 2026",
        description: "Construção de prompts eficazes para classificar e sumarizar dados usando IBM Granite.",
        skills: ["IA Prompting", "Entrada de Dados", "IBM Granite"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/27b39d76-ee67-4758-8243-b3e52ec7fc39",
        category: "Inteligência Artificial",
      },
      {
        id: "hr-software-engineer-intern",
        title: "Software Engineer Intern",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["Solução de Problemas Técnicos", "SQL"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/e3318810e27f",
        category: "Engenharia de Software",
      },
      {
        id: "react-basic",
        title: "React (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["React.js"],
        credentialUrl: "https://www.hackerrank.com/certificates/ef95ceed6b65",
        category: "Desenvolvimento Web",
      },
      {
        id: "js-intermediate",
        title: "JavaScript (Intermediate)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["JavaScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/f663f6fcb018",
        category: "Desenvolvimento Web",
      },
      {
        id: "js-basic",
        title: "JavaScript (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["JavaScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/35de9399313a",
        category: "Desenvolvimento Web",
      },
      {
        id: "python-basic",
        title: "Python (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["Python"],
        credentialUrl: "https://www.hackerrank.com/certificates/3b0ba55e736b",
        category: "Programação",
      },
      {
        id: "node-basic",
        title: "Node (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["Node.js", "Desenvolvimento de Back-end"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/7e4c06d7d4ac",
        category: "Backend",
      },
      {
        id: "angular-intermediate",
        title: "Angular (Intermediate)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["Angular"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/a12534a711bd",
        category: "Desenvolvimento Web",
      },
      {
        id: "angular-basic",
        title: "Angular (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["AngularJS", "TypeScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/00e5d2131163",
        category: "Desenvolvimento Web",
      },
      {
        id: "css-basic",
        title: "CSS (Basic)",
        institution: "HackerRank",
        issuedDate: "Agosto de 2026",
        skills: ["CSS", "Desenvolvimento Web"],
        credentialUrl: "https://www.hackerrank.com/certificates/2fe0a5440a86",
        category: "Desenvolvimento Web",
      },
      {
        id: "scrum-fundamentals",
        title: "Scrum Fundamentals Certified (SFC)",
        institution: "Upskill with SCRUMStudy",
        issuedDate: "Outubro de 2025",
        skills: ["Scrum"],
        credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1112637",
        category: "Metodologias Ágeis",
      },
      {
        id: "enap-transformacao-digital",
        title: "Fundamentos da Transformação Digital: Mapeamento e Automação de Processos",
        institution: "Enap",
        issuedDate: "Agosto de 2023",
        skills: ["Análise de Processos"],
        category: "Processos",
      },
      {
        id: "enap-analise-processos",
        title: "Análise e Melhoria de Processos",
        institution: "Enap",
        issuedDate: "Agosto de 2023",
        skills: ["Análise de Processos"],
        category: "Processos",
      },
    ],
    projects: [
      {
        id: "sistema-gattini",
        title: "Sistema Gattini - Automação com IA",
        description: "Automação de prontuários médicos integrando hardware de inteligência artificial (Plaud) com um servidor local seguro via Webhooks.",
        tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Ngrok", "Zapier"],
        image: "/images/projects/gattini-cover.webp", 
        featured: true,
        category: "Full-Stack / Infraestrutura",
        status: "Concluído",
        details: {
          subtitle: "Revolucionando a rotina clínica com integração de hardware, IA e redes locais.",
          tags: ["Inteligência Artificial", "Webhooks", "Windows Server", "Regex"],
          gallery: ["/images/projects/gattini-login.webp","/images/projects/gattini-inbox.webp","/images/projects/gattini-admin.webp"], 
          sections: [
            {
              title: "Arquitetura e Fluxo de Dados",
              isHighlight: false,
              content: [
                "O dispositivo Plaud grava e transcreve a consulta via Bluetooth, enquanto o Zapier orquestra e envia o payload estruturado via Webhook.",
                "Um túnel Ngrok roteia o tráfego da nuvem com segurança para o servidor local da clínica.",
                "O Backend em Next.js valida a segurança da requisição, extrai os dados, formata fusos horários e salva no banco via Prisma."
              ]
            },
            {
              title: "Desafios Técnicos Solucionados",
              isHighlight: true,
              content: [
                "Construção de Webhook seguro e idempotente, garantindo proteção via headers (x-webhook-secret) e impedindo duplicação de registros.",
                "Lógica híbrida de extração temporal via Regex para contornar o 'Bug do Fuso Horário', ajustando a string ISO para a hora local.",
                "Bypass de segurança de navegador usando URI Schemes (ms-word:ofe|u|...) para abrir documentos na rede local direto no MS Word da máquina cliente.",
                "Resiliência de Infraestrutura (On-Premise) com scripts de inicialização silenciosa e gerenciamento de energia para garantir uptime 24/7."
              ]
            }
          ],
          disclaimer: "O sistema eliminou o trabalho manual de digitação, garantindo integridade de dados mesmo com oscilações de rede.",
        }
      },
      {
        id: "clinicasync",
        title: "ClinicaSync - Automação & LGPD",
        description: "Automação back-end em Python para clínica de psicologia, garantindo conformidade com a LGPD e gestão segura de arquivos.",
        tech: ["Python", "Windows Server", "NSSM", "JSON"],
        image: "/images/projects/clinicasync-cover.webp", 
        featured: true,
        category: "Backend / Automação",
        status: "Concluído",
        details: {
          subtitle: "Automação Segura de Prontuários e Conformidade LGPD em Ambiente de Servidor Local.",
          tags: ["Python", "Automação", "LGPD", "Windows Service"],
          gallery: [],
          sections: [
            {
              title: "Arquitetura e Fluxo de Dados",
              isHighlight: false,
              content: [
                "Aplicação atuando como barramento seguro e invisível entre a recepção (Inbox) e o cofre de dados (Vault).",
                "Inbox (Pasta Temporária): Diretório de entrada com permissões de leitura/escrita exclusivas para o grupo das secretárias.",
                "Vault (Definitivo): Armazenamento seguro e histórico com acesso restrito apenas a administradores e psicólogos.",
                "Worker (ClinicaSync): Serviço Python em background que valida dados, move arquivos e gerencia logs de auditoria."
              ]
            },
            {
              title: "Desafios Técnicos Solucionados",
              isHighlight: true,
              content: [
                "Roteamento Inteligente: Polling de diretório, identificação de paciente e criação dinâmica de hierarquia no Vault, preservando as pastas-raiz.",
                "Prevenção contra Sobrescrita: Algoritmo de resolução de conflitos de nomenclatura para proteger laudos e exames contra nomes genéricos.",
                "Configuração Desacoplada: Arquivo config.json (UTF-8) para parametrização de diretórios sem necessidade de alterar o código-fonte.",
                "Deployment e Resiliência: Serviço implantado via NSSM operando 24/7 em Stealth Mode, com tratamento de exceções (PermissionError) para arquivos em trânsito na rede."
              ]
            }
          ],
          disclaimer: "Fluxo 100% automatizado, economizando horas de trabalho e garantindo adequação total à LGPD.",
          actionLink: "#",
          actionText: "Acesso Restrito"
        }
      },
      {
        id: "clinica-gattini-lp",
        title: "Clínica Gattini - Landing Page",
        description: "Landing page institucional de alto padrão, focada em alta performance, SEO otimizado e UX premium para conversão.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "TanStack Start"],
        image: "/images/projects/gattini-landing-cover.webp", 
        featured: true,
        category: "Desenvolvimento Web",
        status: "Concluído",
        details: {
          subtitle: "Presença digital sofisticada e ultra-rápida com foco em conversão e usabilidade mobile.",
          tags: ["Frontend", "SEO", "UI/UX", "Performance"],
          gallery: [],
          sections: [
            {
              title: "Correções de Infraestrutura e Setup",
              isHighlight: false,
              content: [
                "Resolução de conflitos de servidor (SSR) e falhas de compilação 500 no Vite com remoção de middlewares obsoletos.",
                "Clean-up profundo: desvinculação de ferramentas de terceiros (Lovable), remoção de telemetria, rastreadores e arquivos desnecessários.",
                "Configuração de repositório com documentação técnica limpa para deploy seguro em plataformas como Vercel."
              ]
            },
            {
              title: "Refatoração de UI/UX e Conversão",
              isHighlight: true,
              content: [
                "Implementação de efeito Glassmorphism (backdrop-blur) e degradês para proteger a legibilidade de textos sobre fotografias.",
                "Layout dinâmico em zigue-zague para o corpo clínico, com reposicionamento inteligente de elementos flutuantes para não encobrir imagens.",
                "Otimização extrema de SEO local (lang='pt-BR'), favicons oficiais e tags Open Graph para compartilhamento em redes sociais.",
                "Integração direta com WhatsApp usando URLs parametrizadas e mensagens pré-preenchidas por profissional."
              ]
            }
          ],
          disclaimer: "Design visualmente impecável em qualquer dispositivo, facilitando a jornada do paciente e removendo atritos de contato.",
          actionLink: "https://gattini-ladingpage.vercel.app/",
          actionText: "Acessar o Site EM DESENVOLVIMENTO"
        }
      },
      {
        id: "busai",
        title: "Artigo sobre Agente BDI (busAI)",
        description: "Uma exploração profunda sobre arquiteturas de agentes inteligentes e tomada de decisão racional.",
        tech: ["IA", "Agentes BDI", "SBC"],
        image: "/images/projects/busai-cover.webp",
        featured: true,
        category: "Artigo Científico",
        status: "Concluído",
        details: {
          subtitle: "Arquiteturas de agentes inteligentes para mobilidade urbana.",
          tags: ["Inteligência Artificial", "Agentes BDI", "WESAAC 2025"],
          gallery: ["/images/projects/busai-poster.webp"], 
          sections: [
            {
              title: "Visão Geral",
              isHighlight: false,
              content: [
                "Este artigo explora como agentes autônomos podem tomar decisões e agir de forma racional em ambientes dinâmicos, utilizando a arquitetura BDI.",
                "O projeto 'busAI' serve como um estudo de caso prático aplicado ao gerenciamento de transporte público."
              ]
            },
            {
              title: "Reconhecimento Acadêmico",
              isHighlight: true,
              content: [
                "Publicado na revista da Sociedade Brasileira de Computação (SBC).",
                "Selecionado para apresentação no WESAAC 2025."
              ]
            }
          ],
          disclaimer: "Este projeto é de natureza acadêmica e demonstra a aplicação de conceitos de Inteligência Artificial.",
          actionLink: "https://sol.sbc.org.br/index.php/wesaac/article/view/37550",
          actionText: "Ler Artigo Online"
        }
      },
      {
        id: "transito-seguro",
        title: "Projeto Trânsito Seguro Friburgo",
        description: "Iniciativa de conscientização viária desenvolvida para a cidade de Nova Friburgo.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        image: "/images/projects/transito-cover.webp",
        featured: true,
        category: "Projeto Web / Social",
        status: "Concluído",
        details: {
          subtitle: "Um esforço coletivo para um trânsito mais seguro.",
          tags: ["HTML5", "CSS3", "JavaScript", "Conscientização"],
          sections: [
            {
              title: "O Problema e Missão",
              isHighlight: false,
              content: [
                "O site foi concebido devido aos alarmantes dados de acidentes em Nova Friburgo.",
                "Nosso objetivo é promover a conscientização e contribuir ativamente para a redução de acidentes."
              ]
            }
          ],
          disclaimer: "Projeto acadêmico desenvolvido no CEFET/RJ - Campus Nova Friburgo.",
          actionLink: "https://lucaslira11.github.io/transitoseguro/",
          actionText: "Acessar o Site"
        }
      },
      {
        id: "hidrate-bem",
        title: "Aplicativo HIDRATE BEM",
        description: "Sistema completo de monitoramento de hidratação diária com Android Nativo.",
        tech: ["Android Studio", "Kotlin", "Jetpack Compose"],
        image: "/images/projects/hidratebem-cover.webp",
        featured: true,
        category: "Mobile App",
        status: "Concluído",
        details: {
          subtitle: "Demonstração de competências em desenvolvimento Android nativo.",
          tags: ["Kotlin", "Jetpack Compose", "DataStore"],
          gallery: ["/images/projects/hidratebem-app.webp"], 
          sections: [
            {
              title: "Desenvolvimento",
              isHighlight: false,
              content: [
                "Aplicativo desenvolvido em Kotlin com Jetpack Compose, focado em uma interface intuitiva.",
                "Uso de AlarmManager e BroadcastReceiver para notificações e resets diários de consumo."
              ]
            }
          ],
          disclaimer: "Projeto focado em demonstrar competências técnicas em Android Nativo.",
          actionLink: "/hidratabem-v1.1.apk",
          actionText: "Baixar APK"
        }
      },
      {
        id: "sindiserfrj",
        title: "Site SINDISERF/RJ",
        description: "Site institucional com atualizações de notícias de forma contínua.",
        tech: ["PHP", "WordPress"],
        image: "/images/projects/associacao-cover.webp",
        featured: false,
        category: "Web",
        status: "Concluído",
        siteLink: "https://sindiserfrj.org.br",
      },
      {
        id: "racing",
        title: "Site modelo RACING",
        description: "Site profissional com informações gerais sobre oficina de carros.",
        tech: ["TypeScript", "React"],
        image: "/images/projects/racing-cover.webp",
        featured: false,
        category: "Web",
        status: "Concluído",
        siteLink: "https://modelo-racing.vercel.app/",
      },
      {
        id: "copa2026",
        title: "Simulador Copa 2026",
        description: "Site feito para simular confrontos da Copa com funcionalidade de simulação automática via IA.",
        tech: ["TypeScript", "IA"],
        image: "/images/projects/copa-cover.webp",
        featured: false,
        category: "Web",
        status: "Concluído",
        siteLink: "https://simulador-copa-2026.vercel.app/",
      }
    ]
  },
  en: {
    personalInfo: {
      name: "Lucas",
      fullName: "Lucas Lira",
      role: "Full-Stack Developer",
      about: "Developer at Turinq and Information Systems student at CEFET/RJ. Specialist in creating high-performance solutions, combining rigorous logic with intuitive and modern interfaces.",
      email: "lucasponteslira@email.com",
    },
    skills: [
      { 
        name: "Frontend", 
        description: "Modern and responsive interfaces", 
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], 
        icon: "Monitor" 
      },
      { 
        name: "Backend", 
        description: "Scalable and secure systems", 
        items: ["Spring Boot", "Java", "Python", "Node.js", "MySQL"], 
        icon: "Database" 
      },
      { 
        name: "Cloud", 
        description: "Infrastructure and managed services", 
        items: ["AWS", "Firebase", "Supabase", "Vercel"], 
        icon: "Cloud" 
      }
    ],
    certifications: [
      {
        id: "ibm-build-ai-agent",
        title: "Build an AI Agent",
        institution: "IBM",
        issuedDate: "August 2026",
        description: "This credential earner has the technical knowledge and practical skills to build an AI agent using IBM watsonx.ai and optimize the performance of an AI agent. The individual can classify AI agents based on their decision-making approach and describe the steps to structure an AI agent workflow.",
        skills: ["AI Agents", "PWID-B1021600", "watsonx.ai"],
        credentialUrl: "https://www.credly.com/badges/a057036d-a6f5-476a-8714-05a83dc50ba5",
        category: "Artificial Intelligence",
        featured: true,
      },
      {
        id: "cisco-intro-cybersecurity",
        title: "Introduction to Cybersecurity",
        institution: "Cisco",
        issuedDate: "August 2026",
        description: "This introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face.",
        skills: ["Cybersecurity", "Data Privacy"],
        credentialUrl: "https://www.credly.com/badges/fca96f47-2ad1-4019-8a1a-1957d9f2281f",
        category: "Cybersecurity",
        featured: true,
      },
      {
        id: "software-engineer",
        title: "Software Engineer",
        institution: "HackerRank",
        issuedDate: "August 2026",
        description: "Technical certification validating skills in software development, problem solving, SQL, and REST APIs.",
        skills: ["Software Development", "Problem Solving", "SQL", "REST API"],
        credentialUrl: "https://www.hackerrank.com/certificates/e77c8cbd793e",
        category: "Software Engineering",
        featured: true,
      },
      {
        id: "frontend-react",
        title: "Frontend Developer (React)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        description: "Practical validation of frontend development skills using React, CSS, and JavaScript.",
        skills: ["React", "CSS", "JavaScript", "Web Development"],
        credentialUrl: "https://www.hackerrank.com/certificates/ee2c89b92871",
        category: "Web Development",
      },
      {
        id: "ibm-granite-code",
        title: "Code Generation and Optimization Using IBM Granite",
        institution: "IBM",
        issuedDate: "December 2025",
        description: "Technical and practical knowledge in using IBM Granite models for code generation, prompting, and workflows for reviewing and optimizing AI-generated code.",
        skills: ["AI Prompting", "Code Review", "IBM Granite"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/eb13d31f-cc07-4127-abdd-1d4e948bf8a6",
        category: "Artificial Intelligence",
        featured: true,
      },
      {
        id: "aws-cloud-101",
        title: "AWS Educate Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        issuedDate: "August 2026",
        description: "Fundamental understanding of core AWS cloud services and basic cloud computing applications.",
        skills: ["Cloud Computing", "Amazon Web Services"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/7625d3e9-cf8f-48da-b243-3d01df046c7a",
        category: "Cloud",
        featured: true,
      },
      {
        id: "gis-basics",
        title: "GIS Basics",
        institution: "Esri",
        issuedDate: "August 2026",
        description: "Fundamental overview of the central theory and principles of Geographic Information Systems (GIS).",
        skills: ["GIS", "ArcGIS"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a789aa449e75b494f63bcdb/180",
        category: "GIS",
        featured: true,
      },
      {
        id: "arcgis-online-basics",
        title: "ArcGIS Online Basics",
        institution: "Esri",
        issuedDate: "August 2026",
        description: "Introduction to the fundamental tools and features of Esri's cloud mapping platform.",
        skills: ["ArcGIS", "GIS Applications"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a78a35051a2fb93cd57ec9d/180",
        category: "GIS",
        featured: true,
      },
      {
        id: "arcgis-pro-basics",
        title: "ArcGIS Pro Basics",
        institution: "Esri",
        issuedDate: "August 2026",
        description: "Core concepts and workflows of ArcGIS Pro, Esri's premier desktop GIS software.",
        skills: ["ArcGIS", "GIS"],
        credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a78b5e751a2fb93cd5a17a7/180",
        category: "GIS",
        featured: true,
      },
      {
        id: "ibm-granite-data",
        title: "Data Classification and Summarization Using IBM Granite",
        institution: "IBM",
        issuedDate: "August 2026",
        description: "Building effective prompts to classify and summarize data using IBM Granite.",
        skills: ["AI Prompting", "Data Entry", "IBM Granite"],
        credentialUrl: "https://www.credly.com/earner/earned/badge/27b39d76-ee67-4758-8243-b3e52ec7fc39",
        category: "Artificial Intelligence",
      },
      {
        id: "hr-software-engineer-intern",
        title: "Software Engineer Intern",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["Technical Problem Solving", "SQL"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/e3318810e27f",
        category: "Software Engineering",
      },
      {
        id: "react-basic",
        title: "React (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["React.js"],
        credentialUrl: "https://www.hackerrank.com/certificates/ef95ceed6b65",
        category: "Web Development",
      },
      {
        id: "js-intermediate",
        title: "JavaScript (Intermediate)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["JavaScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/f663f6fcb018",
        category: "Web Development",
      },
      {
        id: "js-basic",
        title: "JavaScript (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["JavaScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/35de9399313a",
        category: "Web Development",
      },
      {
        id: "python-basic",
        title: "Python (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["Python"],
        credentialUrl: "https://www.hackerrank.com/certificates/3b0ba55e736b",
        category: "Programming",
      },
      {
        id: "node-basic",
        title: "Node (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["Node.js", "Backend Development"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/7e4c06d7d4ac",
        category: "Backend",
      },
      {
        id: "angular-intermediate",
        title: "Angular (Intermediate)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["Angular"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/a12534a711bd",
        category: "Web Development",
      },
      {
        id: "angular-basic",
        title: "Angular (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["AngularJS", "TypeScript"],
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/00e5d2131163",
        category: "Web Development",
      },
      {
        id: "css-basic",
        title: "CSS (Basic)",
        institution: "HackerRank",
        issuedDate: "August 2026",
        skills: ["CSS", "Web Development"],
        credentialUrl: "https://www.hackerrank.com/certificates/2fe0a5440a86",
        category: "Web Development",
      },
      {
        id: "scrum-fundamentals",
        title: "Scrum Fundamentals Certified (SFC)",
        institution: "Upskill with SCRUMStudy",
        issuedDate: "October 2025",
        skills: ["Scrum"],
        credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1112637",
        category: "Agile Methodologies",
      },
      {
        id: "enap-transformacao-digital",
        title: "Fundamentals of Digital Transformation: Process Mapping and Automation",
        institution: "Enap",
        issuedDate: "August 2023",
        skills: ["Process Analysis"],
        category: "Processes",
      },
      {
        id: "enap-analise-processos",
        title: "Process Analysis and Improvement",
        institution: "Enap",
        issuedDate: "August 2023",
        skills: ["Process Analysis"],
        category: "Processes",
      },
    ],
    projects: [
      {
        id: "busai",
        title: "BDI Agent Article (busAI)",
        description: "A deep exploration into intelligent agent architectures and rational decision making.",
        tech: ["AI", "BDI Agents", "SBC"],
        image: "/images/projects/busai-cover.webp",
        featured: true,
        category: "Scientific Article",
        status: "Completed",
        details: {
          subtitle: "Intelligent agent architectures for urban mobility.",
          tags: ["Artificial Intelligence", "BDI Agents", "WESAAC 2025"],
          gallery: ["/images/projects/busai-poster.webp"], 
          sections: [
            {
              title: "Overview",
              isHighlight: false,
              content: [
                "This article explores how autonomous agents can make decisions and act rationally in dynamic environments using the BDI architecture.",
                "The 'busAI' project serves as a practical case study applied to public transport management."
              ]
            },
            {
              title: "Academic Recognition",
              isHighlight: true,
              content: [
                "Published in the Brazilian Computer Society (SBC) journal.",
                "Selected for presentation at WESAAC 2025."
              ]
            }
          ],
          disclaimer: "This project is of an academic nature and demonstrates the application of Artificial Intelligence concepts.",
          actionLink: "https://sol.sbc.org.br/index.php/wesaac/article/view/37550",
          actionText: "Read Article Online"
        }
      },
      {
        id: "sistema-gattini",
        title: "Gattini System - AI Automation",
        description: "Medical record automation integrating AI hardware (Plaud) with a secure local server via Webhooks.",
        tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Ngrok", "Zapier"],
        image: "/images/projects/gattini-cover.webp", 
        featured: true,
        category: "Full-Stack / Infrastructure",
        status: "Completed",
        details: {
          subtitle: "Revolutionizing clinical routines with hardware, AI, and local network integration.",
          tags: ["Artificial Intelligence", "Webhooks", "Windows Server", "Regex"],
          gallery: ["/images/projects/gattini-login.webp","/images/projects/gattini-inbox.webp","/images/projects/gattini-admin.webp"], 
          sections: [
            {
              title: "Architecture and Data Flow",
              isHighlight: false,
              content: [
                "The Plaud device records and transcribes the consultation via Bluetooth, while Zapier orchestrates and sends the structured payload via Webhook.",
                "An Ngrok tunnel securely routes cloud traffic to the clinic's local server.",
                "The Next.js Backend validates request security, extracts data, formats time zones, and saves it to the database via Prisma."
              ]
            },
            {
              title: "Technical Challenges Solved",
              isHighlight: true,
              content: [
                "Built a secure and idempotent Webhook, ensuring protection via headers (x-webhook-secret) and preventing record duplication.",
                "Hybrid temporal extraction logic via Regex to bypass the 'Time Zone Bug', adjusting the ISO string to local time.",
                "Browser security bypass using URI Schemes (ms-word:ofe|u|...) to open local network documents directly in the client machine's MS Word.",
                "Infrastructure resilience (On-Premise) with silent startup scripts and power management to ensure 24/7 uptime."
              ]
            }
          ],
          disclaimer: "The system eliminated manual typing work, ensuring data integrity even with network fluctuations.",
        }
      },
      {
        id: "clinicasync",
        title: "ClinicaSync - Automation & LGPD",
        description: "Python back-end automation for a psychology clinic, ensuring LGPD compliance and secure file management.",
        tech: ["Python", "Windows Server", "NSSM", "JSON"],
        image: "/images/projects/clinicasync-cover.webp", 
        featured: true,
        category: "Backend / Automation",
        status: "Completed",
        details: {
          subtitle: "Secure Record Automation and LGPD Compliance in a Local Server Environment.",
          tags: ["Python", "Automation", "LGPD", "Windows Service"],
          gallery: [],
          sections: [
            {
              title: "Architecture and Data Flow",
              isHighlight: false,
              content: [
                "Application acting as a secure, invisible bus between the reception (Inbox) and the data vault (Vault).",
                "Inbox (Temporary Folder): Input directory with exclusive read/write permissions for the secretaries' group.",
                "Vault (Definitive): Secure and historical storage with access restricted only to administrators and psychologists.",
                "Worker (ClinicaSync): Background Python service that validates data, moves files, and manages audit logs."
              ]
            },
            {
              title: "Technical Challenges Solved",
              isHighlight: true,
              content: [
                "Intelligent Routing: Directory polling, patient identification, and dynamic hierarchy creation in the Vault, preserving root folders.",
                "Overwrite Prevention: Naming conflict resolution algorithm to protect reports and exams against generic names.",
                "Decoupled Configuration: config.json file (UTF-8) for directory parameterization without needing to alter source code.",
                "Deployment and Resilience: Service deployed via NSSM operating 24/7 in Stealth Mode, with exception handling (PermissionError) for files in transit on the network."
              ]
            }
          ],
          disclaimer: "100% automated workflow, saving hours of work and ensuring full compliance with LGPD.",
          actionLink: "#",
          actionText: "Restricted Access"
        }
      },
      {
        id: "clinica-gattini-lp",
        title: "Gattini Clinic - Landing Page",
        description: "High-standard institutional landing page, focused on high performance, SEO optimization, and premium UX for conversion.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "TanStack Start"],
        image: "/images/projects/gattini-landing-cover.webp", 
        featured: true,
        category: "Web Development",
        status: "Completed",
        details: {
          subtitle: "Sophisticated and ultra-fast digital presence focused on conversion and mobile usability.",
          tags: ["Frontend", "SEO", "UI/UX", "Performance"],
          gallery: [],
          sections: [
            {
              title: "Infrastructure and Setup Fixes",
              isHighlight: false,
              content: [
                "Resolved server conflicts (SSR) and Vite 500 compilation failures by removing obsolete middlewares.",
                "Deep clean-up: unlinked third-party tools (Lovable), removed telemetry, trackers, and unnecessary files.",
                "Repository configuration with clean technical documentation for secure deployment on platforms like Vercel."
              ]
            },
            {
              title: "UI/UX Refactoring and Conversion",
              isHighlight: true,
              content: [
                "Implementation of Glassmorphism effect (backdrop-blur) and gradients to protect text legibility over photographs.",
                "Dynamic zigzag layout for the clinical staff, with intelligent repositioning of floating elements to avoid covering images.",
                "Extreme optimization of local SEO (lang='pt-BR'), official favicons, and Open Graph tags for social media sharing.",
                "Direct WhatsApp integration using parameterized URLs and pre-filled messages per professional."
              ]
            }
          ],
          disclaimer: "Visually flawless design on any device, easing the patient journey and removing contact friction.",
          actionLink: "https://gattini-ladingpage.vercel.app/",
          actionText: "Visit Site IN DEVELOPMENT"
        }
      },
      {
        id: "transito-seguro",
        title: "Safe Traffic Friburgo Project",
        description: "Road safety awareness initiative developed for the city of Nova Friburgo.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        image: "/images/projects/transito-cover.webp",
        featured: true,
        category: "Web / Social Project",
        status: "Completed",
        details: {
          subtitle: "A collective effort for safer traffic.",
          tags: ["HTML5", "CSS3", "JavaScript", "Awareness"],
          sections: [
            {
              title: "The Problem and Mission",
              isHighlight: false,
              content: [
                "The site was conceived due to alarming accident data in Nova Friburgo.",
                "Our goal is to promote awareness and actively contribute to accident reduction."
              ]
            }
          ],
          disclaimer: "Academic project developed at CEFET/RJ - Nova Friburgo Campus.",
          actionLink: "https://lucaslira11.github.io/transitoseguro/",
          actionText: "Visit Site"
        }
      },
      {
        id: "hidrate-bem",
        title: "HIDRATE BEM App",
        description: "Complete daily hydration monitoring system with Native Android.",
        tech: ["Android Studio", "Kotlin", "Jetpack Compose"],
        image: "/images/projects/hidratebem-cover.webp",
        featured: true,
        category: "Mobile App",
        status: "Completed",
        details: {
          subtitle: "Demonstration of skills in native Android development.",
          tags: ["Kotlin", "Jetpack Compose", "DataStore"],
          gallery: ["/images/projects/hidratebem-app.webp"], 
          sections: [
            {
              title: "Development",
              isHighlight: false,
              content: [
                "App developed in Kotlin with Jetpack Compose, focused on an intuitive interface.",
                "Use of AlarmManager and BroadcastReceiver for notifications and daily consumption resets."
              ]
            }
          ],
          disclaimer: "Project focused on demonstrating technical skills in Native Android.",
          actionLink: "/hidratabem-v1.1.apk",
          actionText: "Download APK"
        }
      },
      {
        id: "sindiserfrj",
        title: "SINDISERF/RJ Website",
        description: "Institutional website with continuous news updates.",
        tech: ["PHP", "WordPress"],
        image: "/images/projects/associacao-cover.webp",
        featured: false,
        category: "Web",
        status: "Completed",
        siteLink: "https://sindiserfrj.org.br",
      },
      {
        id: "racing",
        title: "RACING Template Site",
        description: "Professional website with general information about a car workshop.",
        tech: ["TypeScript", "React"],
        image: "/images/projects/racing-cover.webp",
        featured: false,
        category: "Web",
        status: "Completed",
        siteLink: "https://modelo-racing.vercel.app/",
      },
      {
        id: "copa2026",
        title: "World Cup 2026 Simulator",
        description: "Website built to simulate World Cup matches with automated AI simulation features.",
        tech: ["TypeScript", "AI"],
        image: "/images/projects/copa-cover.webp",
        featured: false,
        category: "Web",
        status: "Completed",
        siteLink: "https://simulador-copa-2026.vercel.app/",
      }
    ]
  }
};