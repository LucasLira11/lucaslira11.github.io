"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

// Nova importação corrigida
import { portfolioData, institutionLogos } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Textos da interface bilíngue
const uiStrings = {
  pt: {
    backBtn: "Voltar para o Início",
    title: "Todas as Certificações",
    subtitle: "O aprendizado contínuo é a base do meu desenvolvimento profissional.",
    categoryLabel: "Filtrar por categoria:",
    allFilter: "Todas",
    viewCredential: "Ver Credencial",
    langBtn: "EN 🇺🇸",
  },
  en: {
    backBtn: "Back to Home",
    title: "All Certifications",
    subtitle: "Continuous learning is the foundation of my professional development.",
    categoryLabel: "Filter by category:",
    allFilter: "All",
    viewCredential: "View Credential",
    langBtn: "PT 🇧🇷",
  }
};

export default function CertificacoesPage() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang') as 'pt' | 'en';
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);
  useEffect(() => {
    setActiveCategory(uiStrings[lang].allFilter);
  }, [lang]);


  const ui = uiStrings[lang];
  const { certifications } = portfolioData[lang];

  // Extrair categorias únicas (ajustado para funcionar com o idioma atual)
  const categories = [ui.allFilter, ...Array.from(new Set(certifications.map((c) => c.category)))];

  const filteredCerts =
    activeCategory === ui.allFilter
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  // Quando o idioma muda, precisamos resetar o filtro caso a categoria atual não exista no novo idioma
  const handleLangToggle = () => {
    const newLang = lang === 'pt' ? 'en' : 'pt';
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-600 selection:text-white">
      {/* Navbar Minimalista */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {ui.title}
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mb-12">
            {ui.subtitle}
          </p>

          {/* Filtros */}
          <div className="mb-12">
            <p className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-widest">
              {ui.categoryLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
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

        {/* Grid de Certificações */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeUp}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-red-600/30 transition-colors flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-inner">
                  {institutionLogos[cert.institution] ? (
                    <Image
                      src={institutionLogos[cert.institution]}
                      alt={cert.institution}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <Award className="text-red-600" size={24} />
                  )}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-red-500 transition-colors p-2"
                    title={ui.viewCredential}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <div className="mb-4 flex-grow">
                <span className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2 block">
                  {cert.institution}
                </span>
                <h3 className="text-xl font-bold mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {cert.issuedDate}
                </p>
                {cert.description && (
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-neutral-950 rounded border border-neutral-800 text-neutral-400 group-hover:border-neutral-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}