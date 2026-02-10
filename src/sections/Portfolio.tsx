import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    image: '/images/project-1.jpg',
    category: 'Branding',
    title: 'Brand Identity System',
    views: '12.5',
    likes: '2.8',
  },
  {
    image: '/images/project-2.jpg',
    category: 'Social Media',
    title: 'Social Media Campaign',
    views: '10.2',
    likes: '2.1',
  },
  {
    image: '/images/project-3.jpg',
    category: 'Editorial',
    title: 'Book Cover Design',
    views: '8.9',
    likes: '1.9',
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 bg-gradient-to-br from-[#FFF0F0] via-[#FFF5F5] to-[#FFF8F8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              Latest <span className="text-primary">Work</span>
            </h2>
            <p className="text-foreground/60 mt-3 max-w-md">
              Explore my recent projects showcasing creativity and innovation
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              views={project.views}
              likes={project.likes}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-white transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
