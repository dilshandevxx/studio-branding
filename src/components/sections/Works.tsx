"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const works = [
  {
    title: "Secti Ante",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Phase Blend",
    category: "Packaging",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Vision Pro",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Lobby Inc.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
  }
];

const ProjectCard = ({ work, idx, delayOffset }: { work: any, idx: number, delayOffset: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the custom cursor movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delayOffset, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full aspect-square overflow-hidden bg-[#111] relative cursor-none group"
    >
      {/* Image */}
      <img 
        src={work.image} 
        alt={work.title} 
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-105" 
      />

      {/* Dark Gradient Overlay for solid text readability */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
      
      {/* Bottom Centered Text Area */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center z-10 pb-8 md:pb-12 pointer-events-none">
        <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-wider">
          {work.title}
        </h3>
        <p className="text-white/80 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] mt-1">
          {work.category}
        </p>
      </div>

      {/* Custom Cursor (VIEW PROJECT) */}
      <motion.div 
        className="absolute pointer-events-none z-50 flex flex-col items-center justify-center bg-black text-white rounded-full w-24 h-24 md:w-28 md:h-28 text-[9px] md:text-[10px] font-bold uppercase tracking-widest leading-tight text-center shadow-xl"
        style={{ x: mouseXSpring, y: mouseYSpring, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span>VIEW</span>
        <span>PROJECT</span>
      </motion.div>
    </motion.div>
  );
};

export default function Works() {
  const leftColumn = works.filter((_, idx) => idx % 2 === 0);
  const rightColumn = works.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      
      {/* Massive Header */}
      <div className="w-full max-w-6xl mx-auto mb-12 md:mb-20 px-8 md:px-24">
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-extrabold text-white tracking-tighter leading-none uppercase">
          OUR WORK
        </h2>
      </div>

      {/* Tight Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-row gap-6 md:gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:gap-16 w-1/2">
            {leftColumn.map((work, idx) => (
              <ProjectCard key={`left-${idx}`} work={work} idx={idx} delayOffset={0} />
            ))}
          </div>

          {/* Right Column (Staggered Down) */}
          <div className="flex flex-col gap-6 md:gap-16 w-1/2 mt-16 md:mt-32">
            {rightColumn.map((work, idx) => (
              <ProjectCard key={`right-${idx}`} work={work} idx={idx} delayOffset={0.2} />
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
