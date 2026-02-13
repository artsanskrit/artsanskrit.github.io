"use client";

import { motion } from 'framer-motion';
import { Download, ArrowRight, Instagram, Layers, Pen, Type, Brush } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { FloatingIcon } from '../components/FloatingIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#FFF8F8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Available Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for work
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-primary font-medium tracking-wide mb-2"
            >
              HELLO, I&apos;M
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2"
            >
              Saurabh Jha
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8"
            >
              Creative Designer
            </motion.h2>

            {/* Description Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-medium mb-8 max-w-xl"
            >
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                DESIGNING VISUAL IDENTITIES WITH SUPERHUMAN PRECISION
              </p>
              <p className="text-foreground/60">
                Crafting premium brand experiences that command attention and inspire action
                through bold design and strategic vision
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-soft text-sm font-medium hover:shadow-medium transition-shadow"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl shadow-soft text-sm font-medium hover:shadow-medium transition-shadow"
              >
                <Layers className="w-4 h-4" />
                Behance
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-glow hover:bg-primary-dark transition-colors"
              >
                Download CV
                <Download className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-white transition-colors"
              >
                My Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <StatCard value={64} label="Projects" delay={0.5} />
              <StatCard value={50} label="Clients" delay={0.6} />
              <StatCard value={6} label="Years" delay={0.7} />
            </motion.div>
          </motion.div>

          {/* Right Content - Character (visible on mobile with compact layout) */}
          <div className="absolute right-0 top-0 z-[11] mt-8 lg:relative lg:right-auto lg:top-auto block">
            {/* Main Character */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <motion.img
                src="/images/hero-character-1.png"
                alt="Saurabh Jha - Creative Designer"
                className="w-auto h-[30vh] md:h-[40vh] max-w-md lg:w-full lg:h-auto lg:max-w-lg mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Floating Icons */}
            <FloatingIcon
              delay={0.5}
              duration={3.5}
              className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-soft hidden sm:block"
            >
              <Layers className="w-6 h-6 text-primary" />
            </FloatingIcon>

            <FloatingIcon
              delay={0.7}
              duration={4}
              className="absolute top-2/3 lg:top-1/3 right-0 bg-white p-3 rounded-xl shadow-soft hidden sm:block"
            >
              <Pen className="w-5 h-5 text-foreground/60" />
            </FloatingIcon>

            <FloatingIcon
              delay={0.9}
              duration={3}
              className="absolute bottom-1/3 right-52 lg:right-5 bg-white p-3 rounded-xl shadow-soft hidden sm:block"
            >
              <Brush className="w-5 h-5 text-foreground/60" />
            </FloatingIcon>

            <FloatingIcon
              delay={1.1}
              duration={3.5}
              className="absolute right-[60%] bottom-5 lg:bottom-20 lg:right-20 bg-white p-3 rounded-xl shadow-soft hidden sm:block"
            >
              <Type className="w-6 h-6 text-foreground/60" />
            </FloatingIcon>

            {/* Satisfaction Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute lg:bottom-32 sm:-bottom-2 md:bottom-8 right-0 bg-white rounded-2xl p-4 shadow-medium hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">100%</p>
                  <p className="text-xs text-foreground/60">Satisfied</p>
                </div>
              </div>
            </motion.div>

            {/* Top Rated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute top-20 -left-8 lg:left-10 bg-white rounded-2xl p-4 shadow-medium hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Top Rated</p>
                  <p className="text-xs text-foreground/60">Designer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 tracking-widest uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
