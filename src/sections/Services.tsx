"use client";

import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    description: 'Creating unique visual identities that make your brand unforgettable',
  },
  {
    icon: '📱',
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that users love to interact with',
  },
  {
    icon: '✨',
    title: 'Video Editing',
    description: 'Bringing designs to life with stunning animations and effects',
  },
  {
    icon: '📸',
    title: 'Social Media',
    description: 'Crafting engaging content that resonates with your audience',
  },
];

export function Services() {
  return (
    <section
      id="services"
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
            What I Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
