'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = 'and05gt@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-(--surface) border border-(--border-sub) p-8 sm:p-12 relative overflow-hidden">
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-(--accent)/20 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="text-xs font-semibold tracking-widest uppercase text-(--accent) mb-2 block">
                Get in Touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-(--content-primary) mb-4">
                Let’s build something impactful together.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm text-(--content-secondary) leading-relaxed mb-8">
                I am actively exploring Junior & Trainee positions. Whether you
                have an open opportunity, an interesting project idea, or just
                want to connect — my inbox is always open.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-(--content-muted) block">
                Direct Contact
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-primary) text-sm font-medium hover:border-(--border-hover) transition-colors">
                  <Mail className="w-4 h-4 text-(--accent)" />
                  <span>{email}</span>
                </Link>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy email"
                  className="p-3 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-secondary) hover:text-white hover:border-(--border-hover) transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-(--surface-sub) border border-(--accent-border)">
                <div className="w-12 h-12 rounded-full bg-(--accent-sub) border border-(--accent) flex items-center justify-center text-(--accent) mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-(--content-primary) mb-2">
                  Message Sent
                </h3>
                <p className="text-xs text-(--content-secondary) max-w-xs">
                  Thank you for reaching out! I will get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-(--content-muted) mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-primary) placeholder:text-(--content-muted) text-sm focus:outline-none focus:border-(--accent) transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.05 }}>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-(--content-muted) mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-primary) placeholder:text-(--content-muted) text-sm focus:outline-none focus:border-(--accent) transition-colors"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-(--content-muted) mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello, I’d like to discuss an opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-(--surface-sub) border border-(--border-sub) text-(--content-primary) placeholder:text-(--content-muted) text-sm focus:outline-none focus:border-(--accent) transition-colors resize-none"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-linear-to-r from-[#9E2235] to-[#6A1320] text-(--content-primary) text-sm font-medium flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(184,46,68,0.3)] transition-all disabled:opacity-50">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
