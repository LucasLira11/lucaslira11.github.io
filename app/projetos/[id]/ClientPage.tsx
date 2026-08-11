// src/app/projetos/[id]/ClientPage.tsx
'use client';

import { projects } from '@/data/portfolioData';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Logo from '@/components/Logo';

export default function ClientPage({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project || !project.details) {
    notFound();
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-white selection:bg-red-600">
      <header className="max-w-4xl mx-auto px-6 py-10 flex justify-between items-center">
        <Link href="/"><Logo /></Link>
        <Link href="/projetos" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-mono text-sm uppercase">
          <FiArrowLeft /> Arquivo
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full h-64 md:h-[500px] relative rounded-[2.5rem] overflow-hidden mb-12 border border-neutral-800">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className="text-red-600 font-mono font-bold tracking-widest text-sm uppercase">{project.category}</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter mt-2">{project.title}</h1>
          <p className="text-xl text-neutral-400 mb-10 leading-relaxed">{project.details.subtitle}</p>
        </motion.div>

        {project.details.gallery && (
          <div className="grid grid-cols-1 gap-10 mb-20">
            {project.details.gallery.map((img, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative h-64 md:h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-neutral-800 group">
                <Image src={img} alt={`Galeria ${index}`} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-20">
          {project.details.sections.map((section, idx) => (
            <div key={idx} className={section.isHighlight ? "p-10 bg-neutral-900/50 rounded-[2rem] border border-red-600/20" : ""}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-neutral-400 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-10 border-t border-neutral-900">
            <p className="text-sm text-neutral-500 italic mb-12">* {project.details.disclaimer}</p>
            {project.details.actionLink && (
              <a href={project.details.actionLink} target="_blank" className="inline-flex items-center gap-3 bg-white text-black hover:bg-red-600 hover:text-white px-10 py-5 rounded-full font-black text-lg transition-all transform hover:-translate-y-2">
                {project.details.actionText} <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}