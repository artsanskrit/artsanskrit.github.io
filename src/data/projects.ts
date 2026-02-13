import projectsData from './projects.json';

export interface GalleryItem {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectDetails {
  client: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface ProjectTestimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

export interface ProjectCTA {
  heading: string;
  description: string;
  backgroundColor: string;
  buttonText?: string;
}

export interface Project {
  slug: string;
  image: string;
  category: string;
  title: string;
  views: string;
  likes: string;
  description?: string;
  gallery?: (string | GalleryItem)[];
  details?: ProjectDetails;
  testimonial?: ProjectTestimonial;
  cta?: ProjectCTA;
}

// this cast is safe because our JSON structure matches the interface
export const projects: Project[] = projectsData as Project[];
