'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { certifications, institutionLogos } from '@/data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CertificacoesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = useMemo(
    () => ['Todas', ...Array.from(new Set(certifications.map((c) => c.category)))],
    []
  );

  const filtered =
    activeCategory === 'Todas'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-600 selection:text-white">
      <nav className="fixed w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors font-medium"
          >
            <ArrowLeft size={18} /> Voltar
          </Link>
        </div>
      </nav>

      <main className="pt-40 pb-32 px-6 max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-red-600 font-mono mb-4 text-sm font-semibold tracking-widest">03.</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Todas as <span className="text-neutral-500 italic">certificações.</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mb-14">
            {certifications.length} certificações conquistadas em desenvolvimento, IA, cloud, GIS e metodologias ágeis.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all border ${
                activeCategory === cat
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-red-600/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-red-600/50 transition-colors duration-300 overflow-hidden flex flex-col"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl p-2 group-hover:shadow-lg group-hover:shadow-red-600/20 transition-shadow">
                    {institutionLogos[cert.institution] ? (
                      <Image
                        src={institutionLogos[cert.institution]}
                        alt={cert.institution}
                        width={28}
                        height={28}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <Award className="text-red-600" size={22} />
                    )}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-neutral-950 rounded-full border border-neutral-800 text-neutral-500">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-snug">{cert.title}</h3>
                <span className="text-xs text-red-500 font-mono uppercase tracking-widest mb-4">
                  {cert.institution} · {cert.issuedDate}
                </span>

                {cert.description && (
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{cert.description}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-neutral-950 rounded-lg border border-neutral-800 text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-xs font-bold text-red-500 hover:text-white transition-colors"
                  >
                    Ver credencial <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}