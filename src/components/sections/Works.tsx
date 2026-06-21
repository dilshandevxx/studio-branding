"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const works = [
  {
    title: "Webflow Template",
    category: "Development",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Kendrick Agency",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Vision Pro",
    category: "3D Animation",
    year: "2023",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Lobby Inc.",
    category: "Branding",
    year: "2023",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Oasis",
    category: "UI/UX",
    year: "2023",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Vanguard",
    category: "Strategy",
    year: "2022",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Works() {
  // Split works for true masonry columns
  const leftColumn = works.filter((_, idx) => idx % 2 === 0);
  const rightColumn = works.filter((_, idx) => idx % 2 !== 0);

  const ProjectCard = ({ work, idx, delayOffset }: { work: any, idx: number, delayOffset: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (idx * 0.1) + delayOffset, ease: [0.22, 1, 0.36, 1] }}
      className="w-full aspect-square overflow-hidden bg-[#111] relative group cursor-pointer"
    >
      {/* Image */}
      <img 
        src={work.image} 
        alt={work.title} 
        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.22,1,0.36,1]" 
      />

      {/* Dark Gradient Overlay for solid text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Bottom Text Area (Left: Title/Category, Right: Arrow) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end z-10">
        
        {/* Title & Category */}
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-[11px] md:text-xs font-bold uppercase tracking-wider">
            {work.title}
          </h3>
          <p className="text-white/60 text-[9px] font-mono uppercase tracking-[0.2em] group-hover:text-white/90 transition-colors">
            {work.category}
          </p>
        </div>

        {/* Arrow Icon */}
        <div className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

      </div>

    </motion.div>
  );

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      
      {/* Ultra Clean Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
          
          <div className="flex flex-col gap-6">
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full inline-block shadow-[0_0_10px_rgba(0,255,102,0.3)]"></span>
              Portfolio
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tighter leading-none uppercase">
              Selected Works
            </h2>
          </div>
          
          <div className="pb-2">
            <Link 
              href="#" 
              className="text-white/40 hover:text-white uppercase tracking-[0.2em] text-[10px] font-mono transition-colors border-b border-transparent hover:border-white pb-1"
            >
              View All (24)
            </Link>
          </div>
        </div>
      </div>

      {/* Tight Masonry Gallery */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-row gap-4 md:gap-8 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-8 w-1/2">
            {leftColumn.map((work, idx) => (
              <ProjectCard key={`left-${idx}`} work={work} idx={idx} delayOffset={0} />
            ))}
          </div>

          {/* Right Column (Staggered Down) */}
          <div className="flex flex-col gap-4 md:gap-8 w-1/2 mt-16 md:mt-32">
            {rightColumn.map((work, idx) => (
              <ProjectCard key={`right-${idx}`} work={work} idx={idx} delayOffset={0.15} />
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
