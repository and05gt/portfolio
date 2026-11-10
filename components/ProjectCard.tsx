'use client';

import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col rounded-3xl bg-(--surface) border border-(--border-sub) p-6 sm:p-8 transition-all duration-300 hover:border-(--border-hover) hover:shadow-[0_0_30px_rgba(139,30,45,0.12)]">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-(--surface-sub) border border-(--border-sub) mb-8 flex flex-col justify-between p-5 transition-transform duration-500 group-hover:scale-[1.01]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
          </div>
          <span className="text-[11px] font-mono text-(--content-muted) tracking-wider uppercase">
            {project.subtitle}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="w-12 h-12 rounded-xl bg-(--accent-sub) border border-(--accent-border) flex items-center justify-center mb-3 text-(--accent) text-sm font-semibold">
            UI
          </div>
          <p className="text-xs font-mono text-(--content-muted)">
            Preview Mockup Placeholder
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-(--content-muted)">
          <span>STATUS: PRODUCTION</span>
          <span className="group-hover:text-(--accent) transition-colors">
            LIVE DEMO ↗
          </span>
        </div>
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-2xl font-bold tracking-tight text-(--content-primary) mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-(--content-secondary) leading-relaxed mb-6 grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-(--surface-sub) border border-(--border-sub) text-(--content-secondary)">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-(--border-sub)">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-(--accent) text-(--content-primary) text-xs font-medium hover:bg-(--accent-hover) transition-colors">
              Live Demo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-secondary) hover:text-(--content-primary) hover:border-(--border-hover) text-xs font-medium transition-colors">
              <Code2 className="w-3.5 h-3.5" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};
export default ProjectCard;
