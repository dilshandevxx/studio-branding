"use client";

import { motion } from "framer-motion";

export default function SimpleInspiring() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Top Headline Standardized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4 font-medium flex items-center gap-3">
            <span className="w-6 h-px bg-white/30 inline-block" />
            Our Approach
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tighter leading-none uppercase max-w-5xl">
            We build digital experiences that are simple & inspiring.
          </h2>
        </motion.div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Animated Overlapping Cards */}
          <div className="relative w-full h-[250px] flex items-center justify-start ml-4 md:ml-0">
            
            {/* Back Card (Blue) */}
            <motion.div 
              initial={{ x: 0, rotate: 0, opacity: 0, scale: 0.9 }}
              whileInView={{ x: 160, rotate: 8, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              className="absolute w-[200px] h-[140px] md:w-[240px] md:h-[160px] bg-[#1a65f8] rounded-xl md:rounded-2xl shadow-lg z-0 left-0"
            />
            
            {/* Middle Card (Red) */}
            <motion.div 
              initial={{ x: 0, rotate: 0, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 80, rotate: 3, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.15, type: "spring", stiffness: 60 }}
              className="absolute w-[200px] h-[140px] md:w-[240px] md:h-[160px] bg-[#EA281E] rounded-xl md:rounded-2xl shadow-xl z-10 left-0 flex items-center justify-center gap-2 border border-white/5"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M14.5 3L23 21H17.5L14.5 13.5L11.5 21H6L14.5 3Z"/>
                 <path d="M2.5 21L8.5 8.5L10 12.5L5.5 21H2.5Z"/>
              </svg>
              <span className="text-white font-bold tracking-tight text-lg md:text-xl">Adobe</span>
            </motion.div>
            
            {/* Front Card (White) */}
            <motion.div 
              initial={{ x: -20, opacity: 0, scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
              className="absolute w-[200px] h-[140px] md:w-[240px] md:h-[160px] bg-white rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-20 left-0 flex items-center justify-center"
            >
              <span className="text-black font-black text-xl md:text-2xl tracking-tighter">Hï IBIZA</span>
              {/* Fake logo dot */}
              <span className="absolute top-[35%] right-[22%] w-1.5 h-1.5 bg-black rounded-full" />
            </motion.div>
            
          </div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-10 lg:pl-16 max-w-lg mt-8 lg:mt-0"
          >
            <p className="text-white/90 text-lg md:text-[1.1rem] font-medium leading-[1.6] tracking-tight">
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </p>
            
            <div className="flex items-center gap-4 cursor-pointer group w-fit">
              <span className="text-white font-semibold text-sm tracking-wide">Let's talk</span>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                <span className="text-white/50 group-hover:text-white text-xs transition-colors">&rarr;</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
