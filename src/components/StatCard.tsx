"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export function StatCard({ value, label, suffix = '+', delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(count, value, {
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
        });
        return controls.stop;
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, count, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl px-6 py-5 shadow-soft min-w-[100px] text-center"
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <motion.span className="text-3xl font-bold text-primary">
          {rounded}
        </motion.span>
        <span className="text-2xl font-bold text-primary">{suffix}</span>
      </div>
      <p className="text-sm text-foreground/60 mt-1">{label}</p>
    </motion.div>
  );
}
