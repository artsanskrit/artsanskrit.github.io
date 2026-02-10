import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
