// ParticleComponent.tsx
"use client";

import React from "react";
import { Particles } from "@/components/ui/shadcn-io/particles";

interface ParticleComponentProps {
  className?: string;
}

{/* we pass in a className as parameter so that we can add tailwind class from the Hero component,
   tbh I'm not sure if thats good practise:P */}

export default function ParticleComponent({ className }: ParticleComponentProps) {
  return (
    <div className={` inset-0 overflow-hidden ${className}`}>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        staticity={50}
        color="#8c00ffff"
        size={0.8}
      />
    </div>
  );
}
