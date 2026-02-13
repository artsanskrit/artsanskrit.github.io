
import { notFound } from "next/navigation";
import { projects, type Project } from '@/data/projects';
import { ProjectDetailContent } from "@/components/ProjectDetail";

// using any here to satisfy Next.js build-time checks
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectDetail({ params }: any) {
  const project: Project | undefined = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) return notFound();

  return <ProjectDetailContent project={project} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// allow this route to be server-rendered on every request
export const dynamic = 'force-dynamic';