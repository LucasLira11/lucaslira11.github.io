import type { Publication } from "@/types/content";

// Dados conferidos na página do artigo na SBC OpenLib (metadados citation_*).
export const publications: Publication[] = [
  {
    id: "busai-wesaac-2025",
    title: "BusAI: An BDI-agent-based Urban Transport Information System",
    titleLang: "en",
    authors: ["Lucas Lira", "Andrei Serafim", "Nilson Lazarin", "Bruno Freitas", "Carlos Pantoja"],
    highlightAuthor: "Lucas Lira",
    kind: { pt: "Artigo em anais de evento", en: "Conference paper" },
    venue: {
      pt: "Anais do XIX Workshop-Escola de Sistemas de Agentes, seus Ambientes e Aplicações (WESAAC 2025)",
      en: "Proceedings of the 19th Workshop-School on Agents, Environments, and Applications (WESAAC 2025)",
    },
    publisher: "SBC",
    year: 2025,
    date: "2025-09-29",
    pages: "137–144",
    doi: "10.5753/wesaac.2025.37550",
    url: "https://doi.org/10.5753/wesaac.2025.37550",
    pdf: "https://sol.sbc.org.br/index.php/wesaac/article/download/37550/37332",
    projectId: "busai",
  },
];
