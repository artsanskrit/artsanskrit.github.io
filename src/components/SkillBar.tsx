"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 100], ['0%', '100%']);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const progressControls = animate(progress, percentage, {
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1],
        });
        
        const countControls = animate(count, percentage, {
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1],
        });
        
        return () => {
          progressControls.stop();
          countControls.stop();
        };
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, percentage, progress, count, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-medium text-foreground">{name}</span>
        <div className="flex items-baseline gap-0.5">
          <motion.span className="text-2xl font-bold text-primary">
            {rounded}
          </motion.span>
          <span className="text-xl font-bold text-primary">%</span>
        </div>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          style={{ width }}
        />
      </div>
    </motion.div>
  );
}
