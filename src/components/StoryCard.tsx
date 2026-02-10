import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StoryCardProps {
  icon: ReactNode;
  title?: string;
  description: string;
  highlight?: string;
  delay?: number;
}

export function StoryCard({ icon, title, description, highlight, delay = 0 }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          )}
          <p className="text-foreground/60 text-sm leading-relaxed">
            {highlight ? (
              <>
                {description.split(highlight)[0]}
                <span className="text-primary font-medium">{highlight}</span>
                {description.split(highlight)[1]}
              </>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
