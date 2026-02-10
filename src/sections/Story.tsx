"use client";

import { motion } from 'framer-motion';
import { StoryCard } from '../components/StoryCard';

const storyItems = [
  {
    icon: '🎨',
    description:
      'My interest naturally gravitated toward brushes, pencils, and colors, where I found a different way to express and create',
    highlight: 'brushes, pencils, and colors',
  },
  {
    icon: '⚡',
    title: 'The Beginning',
    description:
      'Every great superhero has an origin story. Mine began with a simple belief: design has the power to change perceptions and create lasting impact.',
    highlight: 'design has the power to change perceptions and create lasting impact',
  },
  {
    icon: '🚀',
    title: 'The Approach',
    description:
      'Through years of honing my craft, I\'ve developed a unique approach that blends strategic thinking, bold creativity, and technical precision to deliver visual identities that don\'t just look good—they perform.',
    highlight: 'strategic thinking, bold creativity, and technical precision',
  },
  {
    icon: '🎯',
    title: 'The Mission',
    description:
      'My mission is to help ambitious brands stand out in a crowded marketplace, commanding attention and building loyalty through exceptional design.',
    highlight: 'ambitious brands stand out',
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="py-24 bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#FFF8F8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
            Origin Story
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            Transforming Brands{' '}
            <span className="text-primary">Into Icons</span>
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {storyItems.map((item, index) => (
            <StoryCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              highlight={item.highlight}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
