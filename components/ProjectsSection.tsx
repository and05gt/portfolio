import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-(--border-sub)">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-(--accent) mb-2 block">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--content-primary)">
            Selected Projects
          </h2>
        </div>
        <p className="text-sm text-(--content-secondary) max-w-md">
          A showcase of fullstack web applications, featuring modern system
          architecture, responsive UI, and clean data modeling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
export default ProjectsSection;
