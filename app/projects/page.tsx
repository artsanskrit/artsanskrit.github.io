"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const categories = [
    "All Work",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Work") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-[#F5EFEB] min-h-screen py-16">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white shadow px-5 py-2 rounded-full text-sm font-medium hover:shadow-md transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm mb-6">
          <span className="text-red-500">●</span>
          <span>{projects.length}+ Projects Completed</span>
        </div>

        <h1 className="text-5xl font-bold text-neutral-900">
          My <span className="underline decoration-red-400">Portfolio</span>
        </h1>

        <p className="mt-4 text-neutral-600">
          Explore my creative journey through diverse projects spanning
          branding, digital design, and visual storytelling.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto px-6 mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeFilter === filter
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 shadow-sm"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <ProjectCard
                image={project.image}
                category={project.category}
                title={project.title}
                views={project.views}
                likes={project.likes}
                delay={index * 0.05}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <CTASection
          heading="Have a Project in Mind?"
          description="Let's collaborate and bring your vision to life."
          backgroundGradient="linear-gradient(to right, #FF5F6D, #FF7A45)"
          buttonText="Get in Touch"
        />
      </div>
    </section>
  );
}
