'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Code2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '@/data/projects';

interface ProjectPageClientProps {
  project: Project;
}

const ProjectPageClient = ({ project }: ProjectPageClientProps) => {
  return (
    <div className="min-h-screen bg-(--bg) text-(--content-primary) selection:bg-(--accent) selection:text-white">
      <main className="pt-12 pb-8 px-4 max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-(--content-muted) hover:text-(--content-primary) transition-colors mb-8">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-(--accent-border) bg-(--accent-sub) w-fit">
            <span className="text-[11px] font-mono tracking-wide text-[#F08A99] uppercase">
              {project.subtitle}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-(--content-primary) mb-6">
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-3xl mb-8">
            {project.overview}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-xl bg-(--surface) border border-(--border-sub) text-(--content-primary)">
                {tag}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#9E2235] to-[#6A1320] text-(--content-primary) font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(184,46,68,0.35)]">
                Live Application
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-(--surface) border border-(--border-sub) text-(--content-secondary) hover:text-(--content-primary) hover:border-(--border-hover) text-sm font-medium transition-colors">
                <Code2 className="w-4 h-4" />
                Repository
              </Link>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative aspect-video w-full overflow-hidden rounded-3xl bg-(--surface) border border-(--border-sub) mb-16 flex flex-col">
          <div className="relative z-10 flex items-center justify-between px-6 py-3.5 bg-[#0D0F14]/90 backdrop-blur-sm border-b border-(--border-sub)">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-(--border-hover)" />
              <span className="w-3 h-3 rounded-full bg-(--border-hover)" />
              <span className="w-3 h-3 rounded-full bg-(--border-hover)" />
            </div>
            <span className="text-xs font-mono text-(--content-muted)">
              {project.demoUrl
                ? project.demoUrl.replace(/^https?:\/\//, '')
                : 'PRODUCTION PREVIEW'}
            </span>
          </div>

          <div className="relative grow w-full">
            <Image
              src={project.imageUrl}
              alt={`${project.title} full preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-(--content-primary) mb-6 pb-4 border-b border-(--border-sub)">
            System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl bg-(--surface) border border-(--border-sub) p-6">
              <span className="text-xs font-mono uppercase text-(--accent) mb-2 block">
                Frontend & Rendering
              </span>
              <p className="text-sm text-(--content-secondary) leading-relaxed">
                {project.architecture.frontend}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-(--surface) border border-(--border-sub) p-6">
              <span className="text-xs font-mono uppercase text-(--accent) mb-2 block">
                Backend & Server Logic
              </span>
              <p className="text-sm text-(--content-secondary) leading-relaxed">
                {project.architecture.backend}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl bg-(--surface) border border-(--border-sub) p-6">
              <span className="text-xs font-mono uppercase text-(--accent) mb-2 block">
                Persistence & Schemas
              </span>
              <p className="text-sm text-(--content-secondary) leading-relaxed">
                {project.architecture.database}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-(--surface) border border-(--border-sub) p-6">
              <span className="text-xs font-mono uppercase text-(--accent) mb-2 block">
                Auth & Security
              </span>
              <p className="text-sm text-(--content-secondary) leading-relaxed">
                {project.architecture.authAndSecurity}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-(--content-primary) mb-6 pb-4 border-b border-(--border-sub)">
            Core Features & Functional Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-(--surface) border border-(--border-sub)">
                <CheckCircle2 className="w-5 h-5 text-(--accent) shrink-0 mt-0.5" />
                <span className="text-sm text-(--content-secondary)">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-(--content-primary) mb-6 pb-4 border-b border-(--border-sub)">
            Technical Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                key={i}
                className="rounded-2xl bg-(--surface) border border-(--border-sub) p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-[#F08A99] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase text-(--content-muted) block mb-1">
                      Challenge
                    </span>
                    <p className="text-sm font-medium text-(--content-primary)">
                      {item.problem}
                    </p>
                  </div>
                </div>
                <div className="pl-8 pt-3 border-t border-(--border-sub)/60">
                  <span className="text-xs font-mono uppercase text-(--accent) block mb-1">
                    Engineered Solution
                  </span>
                  <p className="text-sm text-(--content-secondary) leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default ProjectPageClient;
