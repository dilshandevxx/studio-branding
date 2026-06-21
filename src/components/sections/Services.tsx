"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "/01",
    name: "BRANDING & IDENTITY",
    desc: "WHETHER YOU'RE JUST EXPLORING POSSIBILITIES OR LOOKING TO SCALE EXISTING TOOLS, WE BUILD A CLEAR PLAN THAT ALIGNS WITH YOUR GOALS. COMPLETE BRAND SYSTEMS FROM VISUAL IDENTITY TO POSITIONING.",
    tags: "#BRANDING #STRATEGY",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    num: "/02",
    name: "MOTION GRAPHICS",
    desc: "WE DESIGN AND DEPLOY KINETIC SYSTEMS THAT BRING YOUR BRAND TO LIFE. FROM LOGO ANIMATIONS TO BROADCAST GRAPHICS, WE STREAMLINE YOUR VISUAL PRESENCE.",
    tags: "#MOTION #ANIMATION",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
  },
  {
    num: "/03",
    name: "WEB DESIGN & DIGITAL",
    desc: "NEED SOMETHING MORE SPECIFIC? WE DEVELOP AWARD-WINNING DIGITAL EXPERIENCES TAILORED TO YOUR OPERATIONS — BUILT WITH PERFORMANCE, ACCESSIBILITY, AND CRAFT IN MIND.",
    tags: "#WEBDESIGN #UIUX",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format&fit=crop",
  },
  {
    num: "/04",
    name: "3D & VISUALISATION",
    desc: "PHOTOREALISTIC 3D RENDERS AND ANIMATED BRAND WORLDS. WE OFFER SIMPLE ONBOARDING, DOCUMENTATION, AND ONGOING SUPPORT TO MAKE SURE EVERYONE FEELS CONFIDENT.",
    tags: "#3DRENDER #CGI",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-24">
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4 font-medium flex items-center gap-3">
            <span className="w-6 h-px bg-white/30 inline-block" />
            What we do
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white tracking-tight leading-none uppercase">
            Services
          </h2>
        </div>
      </div>

      {/* Architectural Grid Container - FULL WIDTH BLEED */}
      <div className="relative border-y border-white/[0.08] w-full">
        {services.map((svc, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group border-b border-white/[0.08] last:border-b-0 transition-colors duration-500 ${isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}`}
            >
              {/* Inner constraint container */}
              <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative">
                
                {/* Intersection Pluses (+) aligned to the content edges */}
                <div className="absolute -top-[4px] left-8 md:left-16 text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                <div className="absolute -top-[4px] right-8 md:right-16 text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                
                {/* Last row bottom pluses */}
                {i === services.length - 1 && (
                  <>
                    <div className="absolute -bottom-[4px] left-8 md:left-16 text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                    <div className="absolute -bottom-[4px] right-8 md:right-16 text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                  </>
                )}

                <div 
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 py-8 lg:py-12 items-center cursor-pointer min-h-[120px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  
                  {/* 1. Number (Hidden on mobile when closed for cleaner look, like screenshot) */}
                  <div className={`md:col-span-1 ${!isOpen && 'hidden md:block'}`}>
                    <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${isOpen ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                      {svc.num}
                    </span>
                  </div>

                  {/* 2. Title */}
                  <div className={`transition-all duration-500 ease-out ${isOpen ? "md:col-span-3" : "md:col-span-10"}`}>
                    <h3 className={`uppercase transition-all duration-500 ease-out ${
                      isOpen 
                        ? "text-white font-bold text-sm tracking-widest leading-[1.4] max-w-[200px]" 
                        : "text-white/50 group-hover:text-white font-medium text-xl md:text-3xl tracking-wide"
                    }`}>
                      {svc.name}
                    </h3>
                  </div>

                  {/* Expanded Content (Images & Description) */}
                  {isOpen && (
                    <>
                      {/* 3. Image Container */}
                      <motion.div 
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:col-span-4"
                      >
                        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/5 relative">
                          <img
                            src={svc.image}
                            alt={svc.name}
                            className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out"
                          />
                        </div>
                      </motion.div>

                      {/* 4. Description & Tags */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-3 h-full flex flex-col justify-between py-2 md:pl-6"
                      >
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase leading-[1.8] font-mono tracking-wide">
                          {svc.desc}
                        </p>
                        
                        <div className="mt-8 flex flex-wrap gap-4 text-white/40 text-[9px] uppercase font-mono tracking-widest">
                          {svc.tags.split(' ').map(tag => (
                            <span key={tag} className="hover:text-white transition-colors duration-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}

                  {/* 5. Toggle Button (+ / -) */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                      isOpen 
                        ? "border-white/50 bg-white/5 text-white" 
                        : "border-white/20 group-hover:border-white/50 text-white/50 group-hover:text-white"
                    }`}>
                      <span className="text-xl md:text-2xl font-light leading-none mb-0.5 md:mb-1">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
