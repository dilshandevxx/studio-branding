"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const works = [
  {
    title: "Aura Cosmetics",
    category: "Branding",
    year: "2024",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop",
    // Massive wide header image
    span: "md:col-span-8",
    aspect: "aspect-[4/3] md:aspect-[16/9]",
    offset: ""
  },
  {
    title: "Nova Tech",
    category: "Digital",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    // Tall portrait next to it
    span: "md:col-span-4",
    aspect: "aspect-[4/5] md:aspect-[3/4]",
    offset: "md:mt-32"
  },
  {
    title: "Lumina Studio",
    category: "Motion",
    year: "2023",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    // Smaller square on the left
    span: "md:col-span-5",
    aspect: "aspect-square",
    offset: ""
  },
  {
    title: "Echo Architecture",
    category: "3D",
    year: "2023",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    // Large landscape dominating the right
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    offset: "md:-mt-24"
  },
  {
    title: "Vanguard",
    category: "Strategy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    // Portrait on the left
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
    offset: "md:mt-16"
  },
  {
    title: "Oasis App",
    category: "UI/UX",
    year: "2022",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop",
    // Ultra-wide panoramic at the bottom right
    span: "md:col-span-8",
    aspect: "aspect-[4/3] md:aspect-[21/9]",
    offset: ""
  },
];

export default function Works() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      
      {/* Standard Header Area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-24">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 pb-8 border-b border-white/[0.05]">
          
          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4 font-medium flex items-center gap-3">
              <span className="w-6 h-px bg-white/30 inline-block" />
              Portfolio
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tighter leading-none uppercase">
              Selected Works
            </h2>
          </div>
          
          {/* Controls: View All Button */}
          <div className="flex items-center">
            <Link 
              href="#" 
              className="group flex items-center gap-3 text-white/60 hover:text-white uppercase tracking-[0.2em] text-[10px] font-bold transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-white transition-colors pb-1">
                View All Projects (24)
              </span>
              <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial Asymmetric Grid Area */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-6 md:gap-y-24 items-start">
          
          {works.map((work, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
              className={`${work.span} ${work.offset} flex flex-col group cursor-pointer w-full`}
            >
              {/* Image Card with specific aspect ratio */}
              <div className={`w-full overflow-hidden bg-surface relative rounded-sm ${work.aspect}`}>
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating overlay button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-[0.22,1,0.36,1]">
                  View
                </div>
              </div>
              
              {/* Minimal Info */}
              <div className="mt-5 flex justify-between items-start pt-5 border-t border-white/[0.05]">
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight">{work.title}</h3>
                  <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mt-2">{work.category}</p>
                </div>
                <div className="text-white/30 font-mono text-[10px]">
                  {work.year}
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
      
    </section>
  );
}
