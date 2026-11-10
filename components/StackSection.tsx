'use client';

import { Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { STACK_DATA } from '@/data/stack';

const StackSection = () => {
  return (
    <section id="stack" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-(--border-sub)">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-(--accent) mb-2 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--content-primary)">
            Core Tech Stack
          </h2>
        </div>
        <p className="text-sm text-(--content-secondary) max-w-md">
          A toolkit built around robust type-safety, maintainable component
          architecture, and scalable server-side systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STACK_DATA.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.65,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col rounded-3xl bg-(--surface) border border-(--border-sub) p-7 transition-all duration-300 hover:border-(--accent-border) hover:shadow-[0_0_25px_rgba(139,30,45,0.1)]">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-(--accent-sub) border border-(--accent-border) flex items-center justify-center text-(--accent) shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-(--content-primary) group-hover:text-white transition-colors">
                {category.title}
              </h3>
            </div>

            <p className="text-xs text-(--content-secondary) leading-relaxed mb-6">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-xs font-medium rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-primary) transition-colors hover:border-(--accent) hover:text-white">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default StackSection;
