"use client";

import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Code2, Layers, CheckCircle2, Clock } from 'lucide-react';
import Logo from '@/components/Logo';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Dicionário de interface para a página de Detalhes do Projeto
const uiStrings = {
  pt: {
    backBtn: "Voltar para Projetos",
    statusComplete: "Concluído",
    statusDev: "Em Desenvolvimento",
    techTitle: "Tecnologias Utilizadas",
    aboutTitle: "Sobre o Projeto",
    galleryTitle: "Galeria",
    visitProject: "Acessar Projeto",
    langBtn: "EN 🇺🇸",
  },
  en: {
    backBtn: "Back to Projects",
    statusComplete: "Completed",
    statusDev: "In Development",
    techTitle: "Technologies Used",
    aboutTitle: "About the Project",
    galleryTitle: "Gallery",
    visitProject: "Visit Project",
    langBtn: "PT 🇧🇷",
  }
};

export default function ClientPage({ id }: { id: string }) {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  
  const ui = uiStrings[lang];
  // Busca o projeto de acordo com o ID e o idioma atual
  const project = portfolioData[lang].projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-600 selection:text-white">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/projetos"
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
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="shadow-[0_0_12px_rgba(239,68,68,0.5)] text-red-500 border border-red-500/50 rounded-full px-4 py-1.5 text-sm font-bold hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all animate-pulse hover:animate-none"
            aria-label="Mudar idioma"
          >
            {ui.langBtn}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
           {/* Cabeçalho do Projeto */}
           <div className="mb-12">
             <span className="text-red-600 font-mono text-sm mb-4 font-bold tracking-widest block uppercase">
               {project.category}
             </span>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
             {project.details?.subtitle && (
               <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                 {project.details.subtitle}
               </p>
             )}
             
             <div className="flex flex-wrap gap-4 items-center">
               <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${project.status === 'Concluído' || project.status === 'Completed' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                 {project.status === 'Concluído' || project.status === 'Completed' ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                 {project.status}
               </div>

               {/* Botão de Ação */}
               {project.details?.actionLink && (
                 <a 
                   href={project.details.actionLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-all font-bold tracking-wider hover:scale-105"
                 >
                   {project.details.actionText || ui.visitProject} <ExternalLink size={16} />
                 </a>
               )}
               {project.siteLink && !project.details?.actionLink && (
                 <a 
                   href={project.siteLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition-all font-bold tracking-wider hover:scale-105"
                 >
                   {ui.visitProject} <ExternalLink size={16} />
                 </a>
               )}
             </div>
           </div>

           {/* Imagem Principal */}
           <div className="relative aspect-video rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl mb-16">
             <Image src={project.image} alt={project.title} fill className="object-cover" />
           </div>

           {/* Tecnologias */}
           <div className="mb-16">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
               <Code2 className="text-red-500" /> {ui.techTitle}
             </h2>
             <div className="flex flex-wrap gap-3">
               {project.tech.map((t) => (
                 <span key={t} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300">
                   {t}
                 </span>
               ))}
             </div>
           </div>

           {/* Seções de Detalhes */}
           {project.details?.sections && (
             <div className="space-y-12 mb-16">
               <h2 className="text-2xl font-bold flex items-center gap-3">
                 <Layers className="text-red-500" /> {ui.aboutTitle}
               </h2>
               
               {project.details.sections.map((section, idx) => (
                 <div key={idx} className={`p-8 rounded-3xl ${section.isHighlight ? 'bg-red-950/20 border border-red-900/30' : 'bg-neutral-900 border border-neutral-800'}`}>
                   <h3 className="text-xl font-bold mb-6 text-white">{section.title}</h3>
                   <ul className="space-y-4">
                     {section.content.map((item, i) => (
                       <li key={i} className="flex gap-4 text-neutral-400 leading-relaxed">
                         <span className="text-red-500 mt-1.5">•</span>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
           )}

           {/* Galeria */}
           {project.details?.gallery && project.details.gallery.length > 0 && (
             <div className="mb-16">
               <h2 className="text-2xl font-bold mb-6">{ui.galleryTitle}</h2>
               <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                 {project.details.gallery.map((img, idx) => (
                   <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800">
                     <Image src={img} alt={`${project.title} galeria ${idx + 1}`} fill className="object-cover" />
                   </div>
                 ))}
               </div>
             </div>
           )}

           {/* Disclaimer */}
           {project.details?.disclaimer && (
             <div className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 text-center">
               <p className="text-neutral-500 italic text-sm">{project.details.disclaimer}</p>
             </div>
           )}

        </motion.div>
      </main>
    </div>
  );
}