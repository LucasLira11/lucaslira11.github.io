export const personalInfo = {
  name: "Lucas",
  fullName: "Lucas Lira",
  role: "Desenvolvedor Full-Stack",
  about: "Desenvolvedor na Turinq e estudante de Sistemas de Informação no CEFET/RJ. Especialista em criar soluções de alto desempenho, unindo lógica rigorosa a interfaces intuitivas e modernas.",
  email: "lucasponteslira@email.com",
};

export const skills = [
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
];

// Caminhos corrigidos com base na imagem da sua pasta public
export const institutionLogos: Record<string, string> = {
  "Esri": "/esri.png",
  "Amazon Web Services (AWS)": "/aws.png",
  "IBM": "/ibm.png", // Certifique-se de adicionar um ibm.png na sua pasta public
  "HackerRank": "/hackerrank.png",
  "Upskill with SCRUMStudy": "/SCRUMStudy.png",
  "Enap": "/logo-enap.png",
};

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

export const certifications: Certification[] = [
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
    id: "gis-basics",
    title: "GIS Basics",
    institution: "Esri",
    issuedDate: "Agosto de 2026",
    description: "Visão geral fundamental da teoria e princípios centrais de Sistemas de Informação Geográfica (SIG).",
    skills: ["SIG", "ArcGIS"],
    credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a789aa449e75b494f63bcdb/180",
    category: "GIS",
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
    id: "arcgis-pro-basics",
    title: "ArcGIS Pro Basics",
    institution: "Esri",
    issuedDate: "Agosto de 2026",
    description: "Conceitos centrais e workflows do ArcGIS Pro, principal software SIG de desktop da Esri.",
    skills: ["ArcGIS", "SIG"],
    credentialUrl: "https://www.esri.com/training/TrainingRecord/Certificate/lucasponteslira/6a78b5e751a2fb93cd5a17a7/180",
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
];

export const projects = [
  {
    id: "sistema-gattini",
    title: "Sistema Gattini - Automação com IA",
    description: "Automação de prontuários médicos integrando hardware de inteligência artificial (Plaud) com um servidor local seguro via Webhooks.",
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Ngrok", "Zapier"],
    image: "/clinica-thumb.jpg", 
    featured: true,
    category: "Full-Stack / Infraestrutura",
    status: "Concluído",
    details: {
      subtitle: "Revolucionando a rotina clínica com integração de hardware, IA e redes locais.",
      tags: ["Inteligência Artificial", "Webhooks", "Windows Server", "Regex"],
      gallery: ["/gattini (1).png","/gattini (2).png","/gattini (3).png"], 
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
    image: "/ia-thumb.jpg", 
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
    image: "/site.png", 
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
    image: "/banner-busai.png",
    featured: true,
    category: "Artigo Científico",
    status: "Concluído",
    details: {
      subtitle: "Arquiteturas de agentes inteligentes para mobilidade urbana.",
      tags: ["Inteligência Artificial", "Agentes BDI", "WESAAC 2025"],
      gallery: ["/professorpantoja.jpg"], 
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
    image: "/projetotransitoseguro.png",
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
    image: "/banner-hidratebem.png",
    featured: true,
    category: "Mobile App",
    status: "Concluído",
    details: {
      subtitle: "Demonstração de competências em desenvolvimento Android nativo.",
      tags: ["Kotlin", "Jetpack Compose", "DataStore"],
      gallery: ["/foto-hidrate.png"], 
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
    image: "/site1.png",
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
    image: "/capa-racing.png",
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
    image: "/capa-copa.png",
    featured: false,
    category: "Web",
    status: "Concluído",
    siteLink: "https://simulador-copa-2026.vercel.app/",
  }
];