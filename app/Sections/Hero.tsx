"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import CoolButton from '../components/CoolButton';
import FloatingCard from '../components/FloatingCard';
import { TextAnimate } from '@/components/ui/text-animate';
import { gsap } from 'gsap';
import ParticleComponent from '../components/ParticlesHero';
import IconButton from '../components/SocialButton';
import i18n from '../Data/i18';
import {useTranslation} from 'react-i18next'



const Hero = () => {
  
  const {t} = useTranslation();


  const loremRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      loremRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <section className="relative bg-[#20272f] px-4 sm:px-6 lg:px-8 overflow-hidden py-16">
    {/* particles */}
    <ParticleComponent className="absolute inset-0 z-10" />

    <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-20">
      {/* Left side */}
      <div className="md:w-1/2 text-center md:text-left border-l-4 pl-4 pb-4 border-b-4 border-newGreen">
        
        <TextAnimate className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {t('greeting')}
        </TextAnimate>

        <TextAnimate
          animation="blurIn"
          as="h1"
          className="text-newGreen text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          delay={1}
        >
          Jason Priskomatis
        </TextAnimate>

        <p
          ref={loremRef}
          className="text-[#9a9ea1] mb-6 text-sm sm:text-base leading-relaxed"
        >
          {t('greetingExtra')}
        </p>

        <CoolButton />

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 pt-12">
          <div className="text-white sm:pr-8 text-lg">{t('checkOut')}</div>
          <div className="flex flex-row items-center gap-4">
            <IconButton src="/images/icons/linkedin.png" alt="Linkedin" href="https://www.linkedin.com/in/jason-priskomatis-746781266/" size={40} />
            <IconButton src="/images/icons/git.png" alt="Github" href="https://github.com/JPriskomatis" size={40} />
            <IconButton src="/images/icons/steam.png" alt="Steam" href="https://store.steampowered.com/app/3537620/Friday_Night/" size={40} />
          </div>
        </div>
      </div>

      {/* Right side image */}
      <FloatingCard className="rounded-xl w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] relative z-30">
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
