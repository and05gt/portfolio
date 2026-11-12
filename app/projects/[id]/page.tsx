import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import ProjectPageClient from './ProjectPage.client';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  return PROJECTS.map(project => ({
    id: project.id,
  }));
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
};
export default ProjectPage;
