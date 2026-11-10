'use client';

import { GraduationCap, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-(--border-sub)">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-(--accent) mb-2 block">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--content-primary)">
            About Me
          </h2>
        </div>
        <p className="text-sm text-(--content-secondary) max-w-md">
          Combining academic rigor in Software Engineering & AI with practical
          fullstack product delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-2 rounded-3xl bg-(--surface) border border-(--border-sub) p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-(--accent-sub) border border-(--accent-border) flex items-center justify-center text-(--accent) mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-(--content-primary) mb-4">
              Passionate Problem Solver
            </h3>
            <p className="text-(--content-secondary) leading-relaxed text-sm sm:text-base mb-4">
              I am a creative and goal-oriented Junior Fullstack Developer
              pursuing an M.Sc. in Computer Science (Software Engineering &
              Artificial Intelligence). I thrive on building responsive,
              scalable web applications and solving real-world problems through
              clean, efficient code.
            </p>
            <p className="text-(--content-secondary) leading-relaxed text-sm sm:text-base">
              I actively seek dynamic environments where I can tackle
              challenging engineering tasks, expand my technical foundation, and
              deliver value within cross-functional teams.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-(--border-sub) flex flex-wrap items-center gap-6 text-xs text-(--content-muted)">
            <span>Specialization: Software Eng. & AI</span>
            <span>Focus: Clean Code & Architecture</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-3xl bg-(--surface) border border-(--border-sub) p-7">
            <div className="w-10 h-10 rounded-xl bg-(--surface-sub) border border-(--border-sub) flex items-center justify-center text-(--content-primary) mb-5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-(--content-primary) mb-2">
              Education
            </h4>
            <p className="text-xs text-(--content-secondary) leading-relaxed mb-3">
              M.Sc. in Computer Science
            </p>
            <span className="text-[11px] font-mono text-(--content-muted) block">
              Software Engineering & Artificial Intelligence
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-3xl bg-(--surface) border border-(--accent-border) p-7 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-(--accent-sub) border border-(--accent-border) flex items-center justify-center text-(--accent) mb-5">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-(--content-primary) mb-2">
              Target Roles
            </h4>
            <p className="text-xs text-(--content-secondary) leading-relaxed">
              Open to Junior / Trainee Fullstack or Frontend Developer roles
              where I can contribute to impactful products while continuing to
              grow as an engineer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
