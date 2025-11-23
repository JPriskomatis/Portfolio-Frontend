"use client";
import Image from "next/image";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

interface Project {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  link?: string; // <-- add this field
  Cover?: {
    url: string;
    alternativeText?: string;
    formats?: {
      medium?: { url: string };
    };
  };
}

interface StrapiResponse {
  data: Project[];
}

interface ProjectShowcaseProps {
  apiUrl: string;
  className?: string;
}

export default function ProjectShowcase({ apiUrl, className = "" }: ProjectShowcaseProps) {
  const { data, loading, error } = useFetch(apiUrl) as {
    data: StrapiResponse | null;
    loading: boolean;
    error: any;
  };

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects.</p>;
  if (!data || !data.data.length) return <p>No projects found.</p>;

  return (
    <div className={`flex flex-wrap justify-center gap-20 w-full ${className}`}>
      {data.data.map((project) => {
        const imgPath = project.Cover?.formats?.medium?.url || project.Cover?.url;
        const imgSrc = imgPath || "";
        const alt = project.Cover?.alternativeText || project.Title;

        const isDimmed = hoveredId !== null && hoveredId !== project.id;

        return (
          <a
            key={project.id}
            href={project.link || "#"} // <-- navigate to the Strapi "link"
            target="_blank" // open in a new tab
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative duration-300 rounded-xl overflow-visible max-w-xs flex flex-col items-center p-4 text-center
              border border-black
              ${isDimmed ? "shadow-none opacity-50" : "shadow-lg shadow-newGreen opacity-100"}`}
          >
            <div className="relative w-full h-48 mb-14 overflow-visible">
              <div className="relative w-[120%] h-[120%] -translate-x-8 -translate-y-8 rotate-[-10deg] transform transition-all duration-500
                              group-hover:rotate-[-5deg] group-hover:scale-105">
                {imgSrc && (
                  <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-cover shadow-2xl shadow-black"
                  />
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 text-white">{project.Title}</h3>
            <p className="text-gray-400 mb-4">{project.Description}</p>
          </a>
        );
      })}
    </div>
  );
}
