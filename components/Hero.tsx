'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = 'and05gt@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 max-w-5xl mx-auto">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-105 h-105 bg-(--accent)/15 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-(--border-sub) bg-(--surface)/50 w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
        <span className="text-xs text-(--content-secondary) tracking-wide">
          M.Sc. in Computer Science — Software Eng. & AI
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-(--content-primary) leading-[1.08] mb-8">
        JUNIOR FULLSTACK <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-(--content-primary) via-[#E0B0B7] to-(--accent)">
          DEVELOPER & ARCHITECT
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-2xl text-base sm:text-lg text-(--content-secondary) leading-relaxed mb-10">
        Passionate about building responsive, scalable web applications and
        solving real-world problems through clean, efficient code. Eager to
        contribute to high-impact products and grow with cross-functional teams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#9E2235] to-[#6A1320] text-(--content-primary) font-medium text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(184,46,68,0.35)] hover:border-(--accent-border) border border-transparent">
          Selected Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-(--surface) border border-(--border-sub) text-(--content-secondary) hover:text-(--content-primary) hover:border-(--border-hover) transition-all text-sm font-medium">
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Email Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{email}</span>
            </>
          )}
        </button>
      </motion.div>
    </section>
  );
};
export default Hero;
