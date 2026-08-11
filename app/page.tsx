"use client";

import { motion } from "framer-motion";
import { Monitor, Database, Smartphone, ExternalLink, Cloud } from 'lucide-react';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  personalInfo,
  skills,
  projects,
  certifications,
} from "@/data/portfolioData";
import { Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { institutionLogos } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconMap = { Monitor, Database, Smartphone, Cloud };

export default function Home() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#sobre" className="hover:text-red-500 transition-colors">
              Sobre
            </a>
            <a href="#skills" className="hover:text-red-500 transition-colors">
              Skills
            </a>
            <a
              href="#certificacoes"
              className="hover:text-red-500 transition-colors"
            >
              Certificações
            </a>
            <a
              href="#projetos"
              className="hover:text-red-500 transition-colors"
            >
              Projetos
            </a>
            <a href="#contato" className="hover:text-red-500 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-red-600 font-mono mb-4 text-lg font-semibold tracking-widest">
              WEB DEVELOPER @ TURINQ
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
              Criando <br />{" "}
              <span className="text-neutral-500 italic">facilidades.</span>
            </h1>
            <p className="text-neutral-400 text-xl max-w-2xl mb-10 leading-relaxed">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#projetos"
                className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-600/20"
              >
                Ver Portfólio
              </a>
              <div className="flex gap-6 text-neutral-400">
                <a
                  href="https://github.com/lucaslira11"
                  target="_blank"
                  className="hover:text-red-600 transition-colors"
                >
                  <FiGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-lira-79b339272/"
                  className="hover:text-red-600 transition-colors"
                >
                  <FiLinkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SOBRE */}
        <section
          id="sobre"
          className="py-32 px-6 max-w-6xl mx-auto border-t border-neutral-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="text-red-600 font-mono text-xl">01.</span>{" "}
                Sobre Mim
              </h2>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>
                  Sou o{" "}
                  <span className="text-white font-medium">Lucas Lira</span>,
                  desenvolvedor apaixonado por transformar problemas complexos
                  em interfaces fluidas e intuitivas.
                </p>
                <p>
                  Com experiência na{" "}
                  <span className="text-red-500">Turinq</span>, aprendi que o
                  segredo de um projeto perfeito está no equilíbrio entre uma
                  arquitetura backend sólida e um frontend que respira design.
                </p>
                <p>
                  Atualmente foco-me em aprofundar o meu conhecimento no sistema{" "}
                  <span className="text-white italic">
                    ArcGIS e em GeoTecnologia
                  </span>{" "}
                  em geral, explorando também o mundo dos sistemas inteligentes
                  e mobile.
                </p>
              </div>
            </motion.div>

            {/* Imagem com Hover a Preto e Branco, Redimensionada e com Zoom */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 border-2 border-red-600 rounded-3xl translate-x-25 translate-y-4 transition-transform duration-500 w-full h-full max-w-[280px]"></div>
              <div className="relative aspect-square bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 w-full max-w-[280px]">
                <Image
                  src="/fotoperfil.png"
                  alt="Lucas"
                  fill
                  className="object-cover object-top grayscale-0 group-hover:grayscale transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="py-32 px-6 max-w-6xl mx-auto border-t border-neutral-900 relative"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold mb-20"
          >
            <span className="text-red-600 font-mono text-xl">02.</span>{" "}
            Habilidades Técnicas
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {skills.map((skill, idx) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -12 }}
                  className="group relative p-10 rounded-[2.5rem] bg-neutral-900 border border-neutral-800 hover:border-red-600/40 transition-colors duration-300 overflow-hidden"
                >
                  {/* Blob de luz que reage ao hover */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Barra lateral que "acende" */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-red-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                  {/* Número de índice fantasma */}
                  <span className="absolute right-6 top-6 text-6xl font-black text-neutral-800/30 group-hover:text-red-600/10 transition-colors duration-500 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-300 shadow-lg shadow-red-600/0 group-hover:shadow-red-600/30"
                    >
                      <Icon
                        className="text-red-600 group-hover:text-white transition-colors duration-300"
                        size={32}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 bg-neutral-950 rounded-lg border border-neutral-800 text-red-500 group-hover:border-red-600/40 transition-colors"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CERTIFICAÇÕES (HOME) */}
        <section
          id="certificacoes"
          className="py-32 px-6 max-w-6xl mx-auto border-t border-neutral-900 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-red-600 font-mono text-xl">03.</span>{" "}
                  Certificações & Conquistas
                </h2>
                <p className="text-neutral-500 max-w-xl">
                  Um resumo do que já estudei e validei ao longo do caminho.
                </p>
              </div>
              <Link
                href="/certificacoes"
                className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-white transition-colors shrink-0 group"
              >
                Ver todas as certificações
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {certifications
                .filter((c) => c.featured)
                .map((cert, idx) => (
                  <motion.a
                    key={cert.id}
                    href={cert.credentialUrl}
                    target={cert.credentialUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-red-600/50 transition-colors duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <span className="absolute -right-2 -top-6 text-8xl font-black text-neutral-800/40 group-hover:text-red-600/10 transition-colors duration-500 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -6, 0],
                          scale: 1.15,
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 flex items-center justify-center mb-6 bg-white rounded-2xl p-2.5 group-hover:shadow-lg group-hover:shadow-red-600/20 transition-shadow"
                      >
                        {institutionLogos[cert.institution] ? (
                          <Image
                            src={institutionLogos[cert.institution]}
                            alt={cert.institution}
                            width={36}
                            height={36}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Award className="text-red-600" size={26} />
                        )}
                      </motion.div>

                      <h3 className="text-base font-bold text-white mb-1 leading-snug line-clamp-2">
                        {cert.title}
                      </h3>
                      <span className="text-xs text-red-500 font-mono uppercase tracking-widest mb-4">
                        {cert.institution}
                      </span>

                      <div className="mt-auto pt-4 border-t border-neutral-800 group-hover:border-red-600/30 transition-colors">
                        <div className="h-[2px] w-8 bg-red-600 group-hover:w-full transition-all duration-500 ease-out" />
                      </div>
                    </div>
                  </motion.a>
                ))}
            </motion.div>
          </motion.div>
        </section>

        {/* PROJETOS (HOME - Limitado a 4) */}
        <section
          id="projetos"
          className="py-32 px-6 max-w-6xl mx-auto border-t border-neutral-900"
        >
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-3xl font-bold">
              <span className="text-red-600 font-mono text-xl">04.</span> Tudo o
              que já construí
            </h2>
          </div>

          <div className="space-y-32">
            {/* O limitador de projetos foi aplicado utilizando a função .slice(0, 4) */}
            {projects.slice(0, 4).map((project, idx) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center group`}
              >
                <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                  {/* Badge de Em Desenvolvimento */}
                  {project.status === "Em Desenvolvimento" && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-red-950/80 backdrop-blur-md border border-red-800 text-red-400 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg">
                        Em Desenvolvimento
                      </span>
                    </div>
                  )}

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-red-950/20 group-hover:bg-transparent transition-all z-10" />
                </div>

                <div
                  className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-left" : "md:text-right md:items-end"} flex flex-col`}
                >
                  <span className="text-red-600 font-mono text-sm mb-2 font-bold tracking-widest">
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
                      VER DETALHES <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão Ver Todos Os Projetos */}
          {projects.length > 4 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20 flex justify-center"
            >
              <Link
                href="/projetos"
                className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:bg-red-600/10 text-white rounded-full font-bold transition-all hover:scale-105"
              >
                VER TODOS OS PROJETOS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="py-40 px-6 max-w-4xl mx-auto text-center border-t border-neutral-900"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">
              Vamos construir algo{" "}
              <span className="text-red-600 underline">juntos?</span>
            </h2>
            <p className="text-neutral-400 text-xl mb-12">
              Estou disponível para novos projetos e colaborações.
            </p>
            <a
              href="https://wa.me/5522997793222"
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-black hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-2"
            >
              ENTRAR EM CONTATO
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-10 border-t border-neutral-900 text-center text-neutral-600 font-mono text-xs uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Lucas Lira • Developed with Next.js
      </footer>
    </div>
  );
}