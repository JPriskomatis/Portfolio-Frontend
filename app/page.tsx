"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar"; // adjust path if needed
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import TrafficLightLoader from "./components/TrafficLightLoader";
import "./TrafficLightLoader.css";
import { gsap } from "gsap";
import Head from "next/head";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Animate content after loading
  useEffect(() => {
    if (!loading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "sine.in" }
      );
    }
  }, [loading]);

  return (
    <>
      {/* Correctly set title and favicon */}
      <Head>
        <title>Jason Priskomatis Portfolio</title>
        <link rel="icon" href="/images/icons/faviconLogo.ico" />
      </Head>

      {loading ? (
        <div className="w-full h-screen flex items-center justify-center bg-[#20272f]">
          <TrafficLightLoader />
        </div>
      ) : (
        <div ref={contentRef}>
          <Navbar />
          <main className="p-6 max-w-7xl mx-auto">
            <section id="hero">
              <Hero />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
