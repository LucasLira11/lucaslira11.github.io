"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";


// Importação corrigida: puxamos portfolioData e a interface Project
import { portfolioData, Project } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const uiStrings = {
  pt: {
    backBtn: "Voltar para o Início",
    title: "Meus Projetos",
    subtitle: "Explore os projetos que desenvolvi, desde aplicações móveis e sistemas web complexos até estudos acadêmicos e automações.",
    categoryLabel: "Filtrar por categoria:",
    allFilter: "Todos",
    detailsBtn: "VER DETALHES",
    langBtn: "EN 🇺🇸",
  },
  en: {
    backBtn: "Back to Home",
    title: "My Projects",
    subtitle: "Explore the projects I've developed, from mobile apps and complex web systems to academic studies and automations.",
    categoryLabel: "Filter by category:",
    allFilter: "All",
    detailsBtn: "VIEW DETAILS",
    langBtn: "PT 🇧🇷",
  }
};

export default function ProjetosPage() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  // 1. Carrega o idioma salvo quando a página abre
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang') as 'pt' | 'en';
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // 2. CORREÇÃO DO BUG: Garante que o filtro inicial seja 
  // sempre igual ao "Todos" / "All" do idioma correto
  useEffect(() => {
    setActiveCategory(uiStrings[lang].allFilter);
  }, [lang]);

  // 3. Função de trocar idioma simplificada (o useEffect acima já cuida do filtro)

  const ui = uiStrings[lang];
  // Puxando os projetos do idioma atual
  const { projects } = portfolioData[lang];

  // Extrair categorias únicas de acordo com o idioma selecionado
  const categories: string[] = [ui.allFilter, ...Array.from(new Set(projects.map((p: Project) => p.category))) as string[]];

  const filteredProjects =
    activeCategory === ui.allFilter
      ? projects
      : projects.filter((p: Project) => p.category === activeCategory);

  const handleLangToggle = () => {
    const newLang = lang === 'pt' ? 'en' : 'pt';
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-600 selection:text-white">
      <nav className="fixed w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium text-sm hidden sm:block">{ui.backBtn}</span>
          </Link>

          <Logo />

          <button
            onClick={handleLangToggle}
            className="shadow-[0_0_12px_rgba(239,68,68,0.5)] text-red-500 border border-red-500/50 rounded-full px-4 py-1.5 text-sm font-bold hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all animate-pulse hover:animate-none"
            aria-label="Mudar idioma"
          >
            {ui.langBtn}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{ui.title}</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mb-12">
            {ui.subtitle}
          </p>

          <div className="mb-16">
            <p className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-widest">
              {ui.categoryLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                      ? "bg-red-600 text-white"
                      : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-32">
          {filteredProjects.map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center group`}
            >
              <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-red-950/20 group-hover:bg-transparent transition-all z-10" />
              </div>

              <div
                className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-left" : "md:text-right md:items-end"
                  } flex flex-col`}
              >
                <span className="text-red-600 font-mono text-sm mb-2 font-bold tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-4xl font-bold mb-6">{project.title}</h3>
                <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-800 shadow-xl mb-8">
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    href={`/projetos/${project.id}`}
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-red-600 text-white text-sm rounded-full transition-all font-bold tracking-wider hover:scale-105"
                  >
                    {ui.detailsBtn} <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}