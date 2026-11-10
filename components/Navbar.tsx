'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3.5 rounded-full bg-[#090A0D]/75 backdrop-blur-md border border-(--border-sub) shadow-xl">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wider text-(--content-primary) hover:text-white transition-colors">
          A<span className="text-(--accent)">. </span>DEMUS
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-(--content-secondary) font-medium">
          <Link
            href="#about"
            className="hover:text-(--content-primary) transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-(--content-primary) transition-colors">
            Projects
          </Link>
          <Link
            href="#stack"
            className="hover:text-(--content-primary) transition-colors">
            Stack
          </Link>
          <Link
            href="#contact"
            className="hover:text-(--content-primary) transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-(--accent-sub) border border-(--accent-border)">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-medium tracking-wide text-[#F08A99]">
            Open to Roles
          </span>
        </div>
      </nav>
    </motion.header>
  );
};
export default Navbar;
