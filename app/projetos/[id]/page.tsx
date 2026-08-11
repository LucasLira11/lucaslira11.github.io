// src/app/projetos/[id]/page.tsx
import { projects } from '@/data/portfolioData';
import ClientPage from './ClientPage';

// Gera as rotas no momento da build (necessário para o GitHub Pages)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ClientPage id={resolvedParams.id} />;
}