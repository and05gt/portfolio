'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-(--surface-sub) border border-(--border-sub) mb-8 flex flex-col">
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-[#0D0F14]/90 backdrop-blur-sm border-b border-(--border-sub)">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
            <span className="w-2.5 h-2.5 rounded-full bg-(--border-hover)" />
          </div>
          <span className="text-[11px] font-mono text-(--content-muted) tracking-wider uppercase">
            {project.subtitle}
          </span>
        </div>

        <div className="relative grow w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`${project.title} homepage screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-(--surface)/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
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
          <Link
            href={`/projects/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-(--accent) text-(--content-primary) text-xs font-medium hover:bg-(--accent-hover) transition-colors">
            View More
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

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
