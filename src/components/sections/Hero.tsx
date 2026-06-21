"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white pt-40 md:pt-48 pb-20 relative flex flex-col overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] pointer-events-none" />

      {/* Floating dot (Awwwards detail) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-36 right-[10%] md:right-[15%] w-3 h-3 bg-white rounded-full hidden md:block"
      />

      <div className="w-full flex-grow flex flex-col items-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1000px] text-center mb-16 md:mb-24 px-6 relative z-10"
        >
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-tight leading-[1.15]">
            A branding agency in London{" "}
            <br className="hidden sm:block" />
            and Los Angeles, liberating ideas{" "}
            <br className="hidden sm:block" />
            the world deserves
          </h1>
        </motion.div>

        {/* Artwork Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-[1200px] px-4 md:px-10 relative group cursor-pointer"
        >
          {/* Main Image Container */}
          <div className="w-full relative aspect-[16/9] rounded-xl overflow-hidden bg-surface border border-white/10 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/api/hero-image"
              alt="Two giant hands balancing a person between city and garden"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Inner vignette shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>

          {/* Glassmorphism "View All Work" circle */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-3 w-[72px] h-[72px] md:w-[90px] md:h-[90px] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-105 transition-all z-20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <span className="text-[8px] md:text-[9px] font-bold text-white uppercase text-center leading-[1.4] tracking-[0.08em]">
              View<br />All<br />Work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
