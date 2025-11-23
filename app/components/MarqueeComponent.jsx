"use client";

import { useState } from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "../../components/ui/shadcn-io/marquee";
import { skillsItem } from "../Data/SkillsItemsData";

const MarqueeComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex w-full items-center justify-center bg-background relative">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent pauseOnHover={true}>
          {skillsItem.map((item, index) => (
            <MarqueeItem
              key={index}
              className="relative h-32 w-32 flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                alt={item.title}
                src={item.src}
                className={`overflow-hidden rounded-full transition-all duration-300 ${
                  hoveredIndex === index ? "grayscale" : ""
                }`}
              />

              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold rounded-full">
                  {item.title}
                </div>
              )}
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
