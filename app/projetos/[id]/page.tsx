import ClientPage from './ClientPage';
import { portfolioData } from '@/data/portfolioData';

// 1. Esta função diz ao Next.js quais URLs gerar na hora do build
export function generateStaticParams() {
  // Como os IDs são os mesmos nas duas línguas, podemos pegar da lista em 'pt'
  return portfolioData.pt.projects.map((project) => ({
    id: project.id,
  }));
}

// 2. O Componente da página em si
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // No Next.js mais recente, o params é uma Promise, então precisamos extrair o ID com o await
  const { id } = await params;
  
  return <ClientPage id={id} />;
}