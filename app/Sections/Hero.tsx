"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import CoolButton from '../components/CoolButton';
import FloatingCard from '../components/FloatingCard';
import { TextAnimate } from '@/components/ui/text-animate';
import { gsap } from 'gsap';
import ParticleComponent from '../components/ParticlesHero';
import IconButton from '../components/SocialButton';

const Hero = () => {
  const loremRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      loremRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <section className="relative bg-[#20272f] px-6 overflow-hidden">
      {/* particle layer, we want it to be between our content and the background*/}
      <ParticleComponent className="absolute inset-0 z-10" />

      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 z-20">
        {/* left part will be text, button, etc. */}
        <div className="md:w-1/2 text-center md:text-left border-l-4 pl-4 pb-4 border-b-4 border-newGreen">
          <TextAnimate className="text-5xl font-bold mb-4 text-white">
            Hello I'm
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-gray-700 mb-6 text-newGreen text-6xl"
            delay={1}
          >
            Jason Priskomatis
          </TextAnimate>

          <p ref={loremRef} className="text-[#9a9ea1] mb-6 text-md text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            ornare nisl. Nunc iaculis orci ut elit ullamcorper, vitae tempus
            enim cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
            ornare nisl. Nunc iaculis orci ut elit ullamcorper, vitae tempus
            enim cursus.
          </p>

          <CoolButton />

          <div className="flex flex-row items-center gap-2 pt-16">
            <div className="text-white pr-8 text-xl">Check out my</div>
            <IconButton src="/images/icons/linkedin.png" alt='Linkedin' href='https://www.linkedin.com/in/jason-priskomatis-746781266/' size={40}></IconButton>
            <IconButton src="/images/icons/git.png" alt='Github' href='https://github.com/JPriskomatis' size={40}></IconButton>
            <IconButton src="/images/icons/steam.png" alt='Steam' href='https://store.steampowered.com/app/3537620/Friday_Night/'size={40}></IconButton>
          </div>
        </div>

        {/* right part will be my image*/}
        <FloatingCard className="rounded-xl w-[600px] h-[600px] relative z-30">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-xl shadow-lg shadow-newGreen-500/50"
          />
        </FloatingCard>
      </div>
    </section>
  );
};

export default Hero;
