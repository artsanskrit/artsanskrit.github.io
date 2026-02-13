"use client";

import Link from "next/link";
import { useState } from "react";
import { CTASection } from "./CTASection";
import type { Project } from "@/data/projects";
import { projects as allProjects } from "@/data/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
  const [more] = useState<Project[]>(
    allProjects.filter((p) => p.slug !== project.slug)
  );

  return (
    <section className="bg-[#F5EFEB] min-h-screen">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 py-12">
        <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full text-sm mb-6">
          <span>📚</span>
          <span>{project.category}</span>
        </div>

        <h1 className="text-5xl font-bold text-neutral-800">
          {project.title}
        </h1>

        <p className="mt-4 text-neutral-600 leading-relaxed">
          {project.description ||
            "Creative book cover designs across various genres — bringing stories to life through visual storytelling."}
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {project.gallery?.map((item: string | { url: string; alt: string; width: number; height: number }, i: number) => {
            // Handle both string URLs and object format {url, alt, width, height}
            const imageUrl = typeof item === 'string' ? item : item.url;
            const altText = typeof item === 'string' ? `Gallery image ${i + 1}` : item.alt;
            
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-md break-inside-avoid"
              >
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>


      {/* Project Details & Testimonial */}
      {(project.details || project.testimonial) && (
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project Details */}
            {project.details && (
              <div className="bg-white rounded-3xl p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                <div className="space-y-4 text-neutral-700">
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Client</p>
                    <p className="text-lg">{project.details.client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Industry</p>
                    <p className="text-lg">{project.details.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Timeline</p>
                    <p className="text-lg">{project.details.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Challenge</p>
                    <p className="text-base leading-relaxed">{project.details.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Solution</p>
                    <p className="text-base leading-relaxed">{project.details.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-500 uppercase">Results</p>
                    <p className="text-base leading-relaxed">{project.details.results}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <div className=" rounded-3xl p-8 shadow-md text-white"
                style={{ background: project?.cta?.backgroundColor || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
                <blockquote className="text-lg leading-relaxed mb-8 italic">
                  "{project.testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{project.testimonial.author}</p>
                  <p className="text-white/90">{project.testimonial.role}</p>
                  <p className="text-white/80 text-sm">{project.testimonial.company}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      {project.cta && (
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <CTASection
            heading={project.cta.heading}
            description={project.cta.description}
            backgroundGradient={project.cta.backgroundColor}
            buttonText={project.cta.buttonText || "Start a Project"}
          />
        </div>
      )}

      {/* Fallback CTA if no custom CTA is provided */}
      {!project.cta && (
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <CTASection
            heading="Have a Similar Project in Mind?"
            description="Let's collaborate and bring your vision to life."
            buttonText="Start a Project"
          />
        </div>
      )}

      {/* More Projects (Optional) */}
      {more.length > 0 && (
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">
              More Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {more.slice(0, 3).map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <p className="text-sm text-neutral-500">{p.category}</p>
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
