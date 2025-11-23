"use client";

import { useState } from "react";
import ProjectShowcase from "../components/ProjectShowcaseComponent";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col w-full items-center gap-8">
      {/* Centered title */}
      <h2 className="text-4xl text-center text-white">
        My Recent <span className="text-newGreen">Works</span>
      </h2>

      {/* Project showcases */}
      <div className="flex flex-wrap justify-center pt-14 gap-20 w-full">
        <ProjectShowcase
          apiUrl="https://thankful-hero-4616e7e174.strapiapp.com/api/projects?populate=Cover"
          isDimmed={false}
          onHover={() => {}}
          onHoverLeave={() => {}}
        />
      </div>
    </div>
  );
};

export default Projects;
