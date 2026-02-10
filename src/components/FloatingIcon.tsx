import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingIcon({
  children,
  delay = 0,
  duration = 3,
  className = '',
}: FloatingIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
