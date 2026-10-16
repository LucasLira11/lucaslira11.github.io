import type { Project } from "@/types/content";

// Ordem do array = ordem de exibição.
// featured: true → aparece na home e em "Em destaque" na página de projetos.

export const projects: Project[] = [
  {
    id: "busai",
    title: "BusAI",
    summary: {
      pt: "Sistema de informação para transporte urbano baseado em agentes BDI (Jason/Javino), validado como prova de conceito em ambiente simulado.",
      en: "Urban transport information system built on BDI agents (Jason/Javino), validated as a proof of concept in a simulated environment.",
    },
    context: { pt: "Pesquisa acadêmica · CEFET/RJ", en: "Academic research · CEFET/RJ" },
    status: "published",
    featured: true,
    stack: ["Jason", "Javino", "AgentSpeak", "BDI"],
    highlights: {
      pt: ["Artigo publicado pela SBC nos Anais do XIX WESAAC (2025)"],
      en: ["Paper published by SBC in the proceedings of WESAAC 2025"],
    },
    cover: {
      src: "/images/projects/busai-cover.webp",
      width: 1024,
      height: 768,
      alt: { pt: "Logo do BusAI ao lado da primeira página do artigo", en: "BusAI logo next to the first page of the paper" },
    },
    links: { paper: "https://doi.org/10.5753/wesaac.2025.37550" },
    publicationId: "busai-wesaac-2025",
    sections: [
      {
        title: { pt: "Visão geral", en: "Overview" },
        items: {
          pt: [
            "Propõe um sistema de informação para transporte urbano baseado em um Sistema Multiagente Embarcado no modelo BDI (Belief-Desire-Intention).",
            "Os agentes, implementados em Jason e comunicando-se via Javino, gerenciam dados de ônibus em tempo real e interagem com pontos de informação virtuais.",
            "O objetivo é dar ao passageiro informação precisa sobre localização, lotação e previsão de chegada dos ônibus.",
          ],
          en: [
            "Proposes an urban transport information system based on an Embedded Multi-agent System using the BDI (Belief-Desire-Intention) model.",
            "Agents implemented in Jason, communicating through Javino, manage real-time bus data and interact with virtual information points.",
            "The goal is to give passengers accurate information on bus location, occupancy and estimated arrival times.",
          ],
        },
      },
      {
        title: { pt: "Resultado", en: "Outcome" },
        highlight: true,
        items: {
          pt: [
            "Prova de conceito em ambiente simulado que demonstra a viabilidade da abordagem multiagente.",
            "Artigo publicado pela Sociedade Brasileira de Computação (SBC) nos Anais do XIX WESAAC (2025), pp. 137–144.",
          ],
          en: [
            "Proof of concept in a simulated environment showing the viability of the multi-agent approach.",
            "Paper published by the Brazilian Computer Society (SBC) in the WESAAC 2025 proceedings, pp. 137–144.",
          ],
        },
      },
    ],
    // TODO(Lucas): confirmar a legenda da foto do pôster.
    gallery: [
      {
        src: "/images/projects/busai-poster.webp",
        width: 900,
        height: 1200,
        alt: {
          pt: "Prof. Carlos Pantoja ao lado do pôster do BusAI no WESAAC 2025",
          en: "Prof. Carlos Pantoja next to the BusAI poster at WESAAC 2025",
        },
        caption: {
          pt: "Pôster do BusAI no WESAAC 2025, em Fortaleza (CE), com o coautor Prof. Carlos Pantoja.",
          en: "The BusAI poster at WESAAC 2025 in Fortaleza, Brazil, with co-author Prof. Carlos Pantoja.",
        },
      },
    ],
  },
  {
    id: "transito-seguro",
    title: "Trânsito Seguro Nova Friburgo",
    summary: {
      pt: "Site de conscientização no trânsito com dados de acidentes de Nova Friburgo, do Corpo de Bombeiros via imprensa local.",
      en: "Road-safety awareness website with accident data for Nova Friburgo, from the Fire Department via local press.",
    },
    context: { pt: "Projeto acadêmico · CEFET/RJ", en: "Academic project · CEFET/RJ" },
    status: "live",
    featured: true,
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: {
      pt: ["Apresentado à Prefeitura de Nova Friburgo", "Tema de programa na rádio Comunidade 104,9 FM"],
      en: ["Presented to the Nova Friburgo city government", "Featured on a program at Comunidade 104.9 FM radio"],
    },
    cover: {
      src: "/images/projects/transito-cover.webp",
      width: 1280,
      height: 800,
      alt: {
        pt: "Página inicial do Trânsito Seguro com o título “Trânsito seguro salva vidas”",
        en: "Trânsito Seguro home page with the headline “Safe traffic saves lives”",
      },
    },
    links: {
      live: "https://transitoseguro.vercel.app",
      repo: "https://github.com/LucasLira11/transitoseguro",
    },
    sections: [
      {
        title: { pt: "O projeto", en: "The project" },
        items: {
          pt: [
            "Desenvolvido pela turma da disciplina de Jogos Cooperativos do CEFET/RJ, campus Nova Friburgo, para promover educação no trânsito.",
            "Reúne dados de acidentes do município (Corpo de Bombeiros, via imprensa local), dicas, placas, leis, contatos de emergência e um quiz.",
            "Reconstruído em Astro, TypeScript e Tailwind CSS e publicado na Vercel.",
          ],
          en: [
            "Built by the Cooperative Games class at CEFET/RJ, Nova Friburgo campus, to promote road-safety education.",
            "Brings together local accident data (Fire Department, via local press), tips, road signs, laws, emergency contacts and a quiz.",
            "Rebuilt with Astro, TypeScript and Tailwind CSS and deployed on Vercel.",
          ],
        },
      },
      {
        title: { pt: "Repercussão", en: "Reach" },
        highlight: true,
        items: {
          pt: ["Apresentado à Prefeitura de Nova Friburgo.", "Tema de programa na rádio Comunidade 104,9 FM."],
          en: ["Presented to the Nova Friburgo city government.", "Featured on a program at Comunidade 104.9 FM radio."],
        },
      },
    ],
    gallery: [
      {
        src: "/images/projects/transito-apresentacao.webp",
        width: 714,
        height: 498,
        alt: {
          pt: "Apresentação do Trânsito Seguro Nova Friburgo com o slide do projeto ao fundo",
          en: "Presentation of Trânsito Seguro Nova Friburgo with the project slide in the background",
        },
        caption: { pt: "Apresentação do projeto.", en: "Project presentation." },
      },
    ],
  },
  {
    id: "sistema-gattini",
    title: { pt: "Sistema Gattini", en: "Gattini System" },
    summary: {
      pt: "Pipeline de documentação clínica com transcrição por IA e automação de fluxos.",
      en: "Clinical documentation pipeline with AI transcription and workflow automation.",
    },
    context: { pt: "Sistema para clínica", en: "System for a clinic" },
    status: "completed",
    featured: true,
    // TODO(Lucas): confirmar a stack. OpenAI API, Zapier e Webhooks vêm da lista nova;
    //   Next.js, Node.js, Prisma e PostgreSQL vêm do site antigo.
    stack: ["OpenAI API", "Zapier", "Webhooks", "Next.js", "Node.js", "Prisma", "PostgreSQL"],
    highlights: {
      pt: ["Mais de 80% de redução no tempo de criação de prontuários"],
      en: ["More than 80% less time to create medical records"],
    },
    cover: {
      src: "/images/projects/gattini-cover.webp",
      width: 1280,
      height: 575,
      alt: {
        pt: "Caixa de entrada do Sistema Gattini com transcrições aguardando revisão",
        en: "Gattini System inbox with transcriptions awaiting review",
      },
    },
    privateRepo: true,
    sections: [
      {
        title: { pt: "Arquitetura e fluxo de dados", en: "Architecture and data flow" },
        items: {
          pt: [
            "O dispositivo Plaud grava e transcreve a consulta; o Zapier orquestra o fluxo e envia o conteúdo estruturado por Webhook.",
            // TODO(Lucas): confirmar o papel da OpenAI API no fluxo.
            "A transcrição é estruturada com IA (OpenAI API) e passa pela revisão do profissional antes de virar prontuário.",
            "Um túnel Ngrok leva o tráfego da nuvem com segurança até o servidor local da clínica.",
            "O backend em Next.js valida a requisição, extrai os dados, ajusta o fuso horário e grava no banco via Prisma.",
          ],
          en: [
            "A Plaud device records and transcribes the appointment; Zapier orchestrates the flow and sends the structured content via Webhook.",
            "The transcription is structured with AI (OpenAI API) and reviewed by the practitioner before it becomes a medical record.",
            "An Ngrok tunnel securely routes cloud traffic to the clinic's on-premise server.",
            "The Next.js backend validates the request, extracts the data, fixes time zones and stores it via Prisma.",
          ],
        },
      },
      {
        title: { pt: "Desafios técnicos", en: "Technical challenges" },
        highlight: true,
        items: {
          pt: [
            "Webhook seguro e idempotente, autenticado por header (x-webhook-secret) e sem registros duplicados.",
            "Extração de data e hora por Regex para corrigir o fuso horário da string ISO recebida.",
            "Abertura dos documentos da rede local direto no Microsoft Word a partir do navegador, via URI scheme (ms-word:).",
            "Servidor on-premise com inicialização silenciosa e gerenciamento de energia para funcionar 24/7.",
          ],
          en: [
            "Secure, idempotent webhook authenticated by header (x-webhook-secret), with no duplicate records.",
            "Regex-based date and time extraction to fix the time zone of the incoming ISO string.",
            "Opening network documents directly in Microsoft Word from the browser via a URI scheme (ms-word:).",
            "On-premise server with silent startup and power management to run 24/7.",
          ],
        },
      },
    ],
    // TODO(Lucas): as capturas mostram o nome "Carlos Gattini". Confirme se pode publicar.
    gallery: [
      {
        src: "/images/projects/gattini-inbox.webp",
        width: 1280,
        height: 703,
        alt: { pt: "Caixa de entrada com status de cada transcrição", en: "Inbox showing the status of each transcription" },
        caption: { pt: "Caixa de entrada: transcrições em análise, prontas para revisão e aprovadas.", en: "Inbox: transcriptions under analysis, ready for review and approved." },
      },
      {
        src: "/images/projects/gattini-admin.webp",
        width: 1280,
        height: 696,
        alt: { pt: "Painel administrativo com indicadores e log de auditoria", en: "Admin dashboard with metrics and audit log" },
        caption: { pt: "Painel administrativo com regra de edição e log de auditoria.", en: "Admin dashboard with an editing rule and audit log." },
      },
      {
        src: "/images/projects/gattini-login.webp",
        width: 851,
        height: 534,
        alt: { pt: "Tela de login do portal de prontuários", en: "Medical records portal sign-in screen" },
      },
    ],
    note: {
      pt: "Repositório privado: o código não é público.",
      en: "Private repository: the code is not public.",
    },
  },
  {
    id: "repoguard-nudge",
    title: "RepoGuard-Nudge",
    summary: {
      pt: "Extensão do VS Code contra o golpe do falso recrutador: desafios técnicos cujo repositório executa código malicioso. Roda os comandos em container e mostra alertas explicáveis.",
      en: "VS Code extension against the fake-recruiter scam: coding challenges whose repository runs malicious code. It runs commands in a container and shows explainable alerts.",
    },
    context: { pt: "Pesquisa acadêmica em andamento", en: "Ongoing academic research" },
    status: "in-development",
    featured: true,
    stack: ["TypeScript", "VS Code Extension API", "Docker", "Node.js"],
    // TODO(Lucas): sem imagem por enquanto — o card usa uma capa tipográfica.
    links: { repo: "https://github.com/LucasLira11/repoguard-nudge" },
    sections: [
      {
        title: { pt: "O problema", en: "The problem" },
        items: {
          pt: [
            "No golpe do falso recrutador, o atacante envia um “desafio técnico” cujo repositório executa código sozinho durante a preparação do ambiente, por exemplo em scripts do npm ou tarefas do VS Code, para roubar chaves SSH, credenciais de nuvem e variáveis de ambiente.",
          ],
          en: [
            "In the fake-recruiter scam, the attacker sends a “coding challenge” whose repository runs code on its own while the environment is being set up, for example through npm scripts or VS Code tasks, to steal SSH keys, cloud credentials and environment variables.",
          ],
        },
      },
      {
        title: { pt: "A abordagem", en: "The approach" },
        highlight: true,
        items: {
          pt: [
            "Contenção por padrão: todo comando do repositório roda num container efêmero que só enxerga uma cópia do projeto.",
            "Liberação informada: quando o desenvolvedor pede acesso a uma porta, pasta, variável ou à máquina, o alerta mostra as evidências encontradas pela análise estática.",
            "Abaixo do limiar de risco, a extensão fica em silêncio, para evitar a habituação a alertas.",
          ],
          en: [
            "Contained by default: every repository command runs in an ephemeral container that only sees a copy of the project.",
            "Informed release: when the developer asks for a port, folder, variable or host access, the alert shows the evidence found by static analysis.",
            "Below the risk threshold, the extension stays silent to avoid alert fatigue.",
          ],
        },
      },
    ],
    note: {
      pt: "Pesquisa em andamento, ainda não publicada.",
      en: "Ongoing research, not yet published.",
    },
  },
  {
    id: "plataforma-associacao",
    title: { pt: "Plataforma de associação e notícias", en: "Membership and news platform" },
    summary: {
      pt: "Plataforma de associação e notícias em produção para um grupo de servidores públicos federais no Rio de Janeiro.",
      en: "Membership and news platform in production for a group of federal public servants in Rio de Janeiro.",
    },
    context: { pt: "Freelance", en: "Freelance" },
    status: "production",
    featured: true,
    // TODO(Lucas): confirmar a stack (o site antigo dizia PHP e WordPress), se posso citar
    //   o nome do cliente e linkar o site. Existe /images/projects/associacao-cover.webp
    //   (screenshot com o nome) pronto para virar a capa.
    stack: ["PHP", "WordPress"],
    privateRepo: true,
  },

  // Outros projetos
  // TODO(Lucas): manter todos estes em /projetos? Algum sai?
  {
    id: "clinicasync",
    title: "ClinicaSync",
    summary: {
      pt: "Automação back-end em Python para uma clínica de psicologia, com gestão segura de arquivos e conformidade com a LGPD.",
      en: "Python back-end automation for a psychology clinic, with secure file management and LGPD (Brazilian data protection law) compliance.",
    },
    context: { pt: "Automação para clínica", en: "Automation for a clinic" },
    status: "completed",
    featured: false,
    stack: ["Python", "Windows Server", "NSSM"],
    cover: {
      src: "/images/projects/clinicasync-cover.webp",
      width: 1280,
      height: 720,
      alt: { pt: "Ilustração do ClinicaSync", en: "ClinicaSync illustration" },
    },
    privateRepo: true,
    sections: [
      {
        title: { pt: "Arquitetura", en: "Architecture" },
        items: {
          pt: [
            "Serviço em segundo plano entre a recepção (Inbox) e o arquivo definitivo (Vault).",
            "Inbox: pasta de entrada com leitura e escrita só para a equipe da recepção.",
            "Vault: armazenamento definitivo com acesso restrito a administradores e psicólogos.",
            "Worker em Python que valida os dados, move os arquivos e registra logs de auditoria.",
          ],
          en: [
            "Background service between the front desk (Inbox) and the permanent archive (Vault).",
            "Inbox: input folder with read/write access only for front-desk staff.",
            "Vault: permanent storage restricted to administrators and psychologists.",
            "Python worker that validates data, moves files and writes audit logs.",
          ],
        },
      },
      {
        title: { pt: "Desafios técnicos", en: "Technical challenges" },
        highlight: true,
        items: {
          pt: [
            "Roteamento por polling de diretório, identificação do paciente e criação dinâmica de pastas no Vault.",
            "Resolução de conflitos de nome para não sobrescrever laudos e exames.",
            "Configuração em config.json, sem precisar alterar o código.",
            "Serviço instalado via NSSM rodando 24/7, com tratamento de arquivos ainda em trânsito na rede (PermissionError).",
          ],
          en: [
            "Directory polling, patient identification and dynamic folder creation in the Vault.",
            "Name-conflict resolution so reports and exams are never overwritten.",
            "Configuration in config.json, with no code changes needed.",
            "Service installed via NSSM running 24/7, handling files still in transit on the network (PermissionError).",
          ],
        },
      },
    ],
  },
  {
    id: "clinica-gattini-lp",
    title: { pt: "Clínica Gattini — landing page", en: "Gattini Clinic — landing page" },
    summary: {
      pt: "Landing page institucional com foco em desempenho, SEO local e contato rápido pelo WhatsApp.",
      en: "Institutional landing page focused on performance, local SEO and quick contact via WhatsApp.",
    },
    context: { pt: "Site para clínica", en: "Website for a clinic" },
    // TODO(Lucas): o site antigo dizia "Concluído" e o botão "EM DESENVOLVIMENTO". Qual vale?
    status: "in-development",
    featured: false,
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "TanStack Start"],
    cover: {
      src: "/images/projects/gattini-landing-cover.webp",
      width: 847,
      height: 701,
      alt: { pt: "Página inicial da landing page da Clínica Gattini", en: "Gattini Clinic landing page" },
    },
    links: { live: "https://gattini-ladingpage.vercel.app/" },
    sections: [
      {
        title: { pt: "Infraestrutura", en: "Infrastructure" },
        items: {
          pt: [
            "Correção de conflitos de SSR e erros 500 de compilação no Vite com a remoção de middlewares obsoletos.",
            "Remoção de dependências de ferramentas de terceiros, telemetria, rastreadores e arquivos desnecessários.",
            "Repositório documentado para deploy na Vercel.",
          ],
          en: [
            "Fixed SSR conflicts and Vite 500 build errors by removing obsolete middlewares.",
            "Removed third-party tool dependencies, telemetry, trackers and unnecessary files.",
            "Documented repository for deployment on Vercel.",
          ],
        },
      },
      {
        title: { pt: "Interface e conversão", en: "Interface and conversion" },
        highlight: true,
        items: {
          pt: [
            "Glassmorphism e degradês para manter o texto legível sobre fotografias.",
            "Layout em zigue-zague para o corpo clínico, sem elementos flutuantes cobrindo as fotos.",
            "SEO local (lang pt-BR), favicons e Open Graph para compartilhamento.",
            "Links de WhatsApp com mensagem pré-preenchida por profissional.",
          ],
          en: [
            "Glassmorphism and gradients to keep text readable over photos.",
            "Zigzag layout for the clinical staff, with no floating elements covering photos.",
            "Local SEO (lang pt-BR), favicons and Open Graph for sharing.",
            "WhatsApp links with a pre-filled message per practitioner.",
          ],
        },
      },
    ],
  },
  {
    id: "hidrate-bem",
    title: "Hidrate Bem",
    summary: {
      pt: "Aplicativo Android nativo para acompanhar a hidratação diária, com lembretes.",
      en: "Native Android app to track daily hydration, with reminders.",
    },
    context: { pt: "Aplicativo Android", en: "Android app" },
    status: "completed",
    featured: false,
    stack: ["Kotlin", "Jetpack Compose", "DataStore", "Android Studio"],
    cover: {
      src: "/images/projects/hidratebem-cover.webp",
      width: 1024,
      height: 768,
      alt: { pt: "Banner do aplicativo Hidrate Bem", en: "Hidrate Bem app banner" },
    },
    links: {
      download: { href: "/hidratabem-v1.1.apk", label: { pt: "Baixar APK (12 MB)", en: "Download APK (12 MB)" } },
    },
    sections: [
      {
        title: { pt: "Desenvolvimento", en: "Development" },
        items: {
          pt: [
            "Interface em Kotlin com Jetpack Compose.",
            "AlarmManager e BroadcastReceiver para notificações e para zerar o consumo a cada dia.",
          ],
          en: [
            "Interface built in Kotlin with Jetpack Compose.",
            "AlarmManager and BroadcastReceiver for notifications and the daily reset.",
          ],
        },
      },
    ],
    gallery: [
      {
        src: "/images/projects/hidratebem-app.webp",
        width: 1280,
        height: 720,
        alt: { pt: "Telas do aplicativo Hidrate Bem", en: "Hidrate Bem app screens" },
      },
    ],
  },
  {
    id: "copa2026",
    title: { pt: "Simulador Copa 2026", en: "World Cup 2026 Simulator" },
    summary: {
      pt: "Site para simular os confrontos da Copa, com simulação automática por IA.",
      en: "Website to simulate World Cup matches, with automatic AI simulation.",
    },
    context: { pt: "Projeto pessoal", en: "Personal project" },
    status: "live",
    featured: false,
    stack: ["TypeScript"],
    cover: {
      src: "/images/projects/copa-cover.webp",
      width: 1280,
      height: 619,
      alt: { pt: "Tela do Simulador Copa 2026", en: "World Cup 2026 Simulator screen" },
    },
    links: { live: "https://simulador-copa-2026.vercel.app/" },
  },
  {
    id: "racing",
    title: { pt: "Site modelo Racing", en: "Racing template website" },
    summary: {
      pt: "Site institucional modelo para uma oficina mecânica.",
      en: "Template website for a car repair shop.",
    },
    context: { pt: "Site modelo", en: "Template website" },
    status: "live",
    featured: false,
    stack: ["React", "TypeScript"],
    cover: {
      src: "/images/projects/racing-cover.webp",
      width: 1280,
      height: 634,
      alt: { pt: "Página inicial do site Racing", en: "Racing website home page" },
    },
    links: { live: "https://modelo-racing.vercel.app/" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
export const getProject = (id: string) => projects.find((p) => p.id === id);
