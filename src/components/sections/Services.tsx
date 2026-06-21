"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="mb-24">
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4 font-medium flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            What we do
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white tracking-tight leading-none">
            Services
          </h2>
        </div>

        {/* Architectural Grid Container */}
        <div className="relative border-y border-white/[0.08]">
          {/* Faint vertical guide lines */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/[0.04]" />
          <div className="absolute inset-y-0 right-0 w-px bg-white/[0.04]" />
          
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors duration-500"
            >
              {/* Intersection Pluses (+) */}
              <div className="absolute -top-[4px] -left-[4px] text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
              <div className="absolute -top-[4px] -right-[4px] text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
              
              {/* Last row bottom pluses */}
              {i === services.length - 1 && (
                <>
                  <div className="absolute -bottom-[4px] -left-[4px] text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                  <div className="absolute -bottom-[4px] -right-[4px] text-white/20 text-[8px] font-mono select-none pointer-events-none">+</div>
                </>
              )}

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 p-8 lg:p-12 items-center">
                
                {/* 1. Number */}
                <div className="md:col-span-1">
                  <span className="text-white/40 font-mono text-xs tracking-widest group-hover:text-accent transition-colors duration-300">
                    {svc.num}
                  </span>
                </div>

                {/* 2. Title */}
                <div className="md:col-span-3">
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase leading-[1.4] max-w-[200px]">
                    {svc.name}
                  </h3>
                </div>

                {/* 3. Image Container */}
                <div className="md:col-span-4">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-white/5 relative">
                    <img
                      src={svc.image}
                      alt={svc.name}
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
                  </div>
                </div>

                {/* 4. Description & Tags */}
                <div className="md:col-span-4 h-full flex flex-col justify-between py-2 md:pl-6">
                  <p className="text-white/40 text-[10px] md:text-[11px] uppercase leading-[1.8] font-mono tracking-wide">
                    {svc.desc}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4 text-white/30 text-[9px] uppercase font-mono tracking-widest">
                    {svc.tags.split(' ').map(tag => (
                      <span key={tag} className="group-hover:text-white/60 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
