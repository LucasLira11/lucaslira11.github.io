// src/app/projetos/page.tsx
'use client';

import { projects } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiInfo } from 'react-icons/fi';
import Image from 'next/image';

export default function AllProjects() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white p-8 md:p-16 selection:bg-red-600">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-20">
          <Link href="/"><Logo /></Link>
          <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-all font-mono text-sm uppercase">
            <FiArrowLeft /> Início
          </Link>
        </header>

        <h1 className="text-6xl font-bold mb-12 tracking-tighter italic">Arquivo.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-neutral-500 text-sm mb-8 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-neutral-800">
                  {project.details ? (
                    <Link href={`/projetos/${project.id}`} className="text-white hover:text-red-500 transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                      Ver Detalhes <FiInfo />
                    </Link>
                  ) : (
                    <a href={project.siteLink} target="_blank" className="text-red-500 hover:text-white transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                      Acessar Site <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}