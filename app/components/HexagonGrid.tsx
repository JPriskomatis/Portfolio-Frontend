// app/components/HexagonGrid.tsx
'use client';

import Image from 'next/image';
import { skillsItem } from '../Data/SkillsItemsData';

export default function HexagonGrid() {
  return (
    <div className="flex flex-col items-center py-12">
      {Array.from({ length: Math.ceil(skillsItem.length / 4) }).map((_, rowIndex) => {
        const start = rowIndex * 4;
        const rowItems = skillsItem.slice(start, start + 4);
        return (
          <div
            key={rowIndex}
            className={`flex justify-center mb-[-8px] ${rowIndex % 2 === 1 ? 'ml-16' : ''}`}
          >
            {rowItems.map((item, index) => (
              <div
                key={index}
                className="relative w-32 h-32 mx-2 animate-float"
                style={{ animationDelay: `${(index + rowIndex * 4) * 0.1}s` }}
              >
                <div className="w-full h-full bg-gray-800 clip-hexagon overflow-hidden relative transition-transform duration-300 hover:scale-110">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-semibold text-sm text-center px-2">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
