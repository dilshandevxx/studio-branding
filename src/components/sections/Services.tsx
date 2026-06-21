"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    name: "Branding",
    desc: "Complete brand systems from visual identity to positioning. We build a clear plan that aligns with your goals and scales with your ambition.",
    tags: ["Strategy", "Identity"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "02",
    name: "Motion",
    desc: "Kinetic systems that bring your brand to life. From logo animations to full broadcast graphics packages, we streamline your visual presence.",
    tags: ["Animation", "3D"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "03",
    name: "Digital",
    desc: "Award-winning digital experiences tailored to your operations — built strictly with performance, accessibility, and craft in mind.",
    tags: ["Web Design", "UX/UI"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "04",
    name: "Content",
    desc: "Photorealistic 3D renders and animated brand worlds. We offer simple onboarding, documentation, and ongoing support for your team.",
    tags: ["CGI", "Art Direction"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <h2 className="text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white tracking-[-0.04em] leading-none uppercase">
            Services
          </h2>
          <p className="max-w-[280px] text-white/50 text-sm font-medium leading-[1.6]">
            We deliver premium design and technology solutions without the fluff. Flat, crisp, and beautifully effective.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col w-full relative border-t border-white/[0.08]">
          {services.map((svc, index) => {
            const isHovered = hovered === index;
            
            return (
              <div 
                key={svc.num}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group border-b border-white/[0.08] flex flex-col py-8 md:py-12 cursor-pointer"
              >
                {/* Top Row: Num, Title, Tags */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 md:gap-12">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isHovered ? "text-white" : "text-white/30"}`}>
                      {svc.num}
                    </span>
                    <h3 className={`text-[clamp(2.5rem,5vw,6rem)] font-bold uppercase tracking-[-0.02em] transition-all duration-500 ease-[0.22,1,0.36,1] ${isHovered ? "text-white translate-x-4 md:translate-x-8" : "text-white/80"}`}>
                      {svc.name}
                    </h3>
                  </div>

                  <div className="flex gap-3 pl-[3.5rem] md:pl-[4.5rem] lg:pl-0">
                    {svc.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-4 py-2 rounded-full border border-white/10 font-mono text-[10px] md:text-xs uppercase transition-all duration-300 ${isHovered ? "bg-white text-black border-white" : "bg-transparent text-white"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanding Content Row */}
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-[0.22,1,0.36,1] ${isHovered ? "max-h-[800px] mt-10 md:mt-16 opacity-100" : "max-h-0 mt-0 opacity-0"}`}
                >
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start pl-[3.5rem] md:pl-[4.5rem]">
                    {/* Description */}
                    <div className="lg:w-1/3">
                      <p className="text-white/80 text-lg md:text-xl leading-[1.6] font-medium">
                        {svc.desc}
                      </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1 w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden rounded-xl bg-white/5">
                      <img 
                        src={svc.image} 
                        alt={svc.name} 
                        className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${isHovered ? "scale-100" : "scale-110"}`} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
