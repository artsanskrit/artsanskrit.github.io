"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Eye, Heart } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  views: string;
  likes: string;
  delay?: number;
}

export function ProjectCard({
  image,
  category,
  title,
  views,
  likes,
  delay = 0,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const targetViews = parseFloat(views);
        const targetLikes = parseFloat(likes);
        
        const duration = 1500;
        const steps = 30;
        const interval = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          setViewCount(Math.round(targetViews * easeProgress * 10) / 10);
          setLikeCount(Math.round(targetLikes * easeProgress * 10) / 10);
          
          if (step >= steps) {
            clearInterval(timer);
            setViewCount(targetViews);
            setLikeCount(targetLikes);
          }
        }, interval);
        
        return () => clearInterval(timer);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, views, likes, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-6 py-3 bg-white text-foreground rounded-full font-medium text-sm"
            >
              View Project
            </motion.button>
          </div>
          
          {/* Stats Overlay */}
          <div className="absolute top-4 left-4 flex gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
              <Eye className="w-3.5 h-3.5" />
              {viewCount}k
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
              <Heart className="w-3.5 h-3.5" />
              {likeCount}k
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <span className="text-sm text-primary font-medium">{category}</span>
          <h3 className="text-lg font-semibold text-foreground mt-1">{title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
