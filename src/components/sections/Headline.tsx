"use client";

import { motion } from "framer-motion";

export default function Headline() {
  return (
    <section className="bg-background pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Top Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-12 md:mb-20"
      >
        <span className="w-2 h-2 rounded-full bg-[#00FF66] shadow-[0_0_12px_rgba(0,255,102,0.6)] animate-pulse"></span>
        <span className="text-white/50 text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono font-medium">
          Available for new projects
        </span>
      </motion.div>

      {/* Main Massive Heading */}
      <div className="w-full px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[9vw] md:text-[7vw] font-bold uppercase tracking-tighter leading-[0.85] text-center w-full"
        >
          Build smooth<br />
          creative
          sites<br />
          with us.
        </motion.h1>
      </div>

      {/* Floating Magnetic-style Circular CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 md:mt-32 relative group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-colors duration-500"></div>
        <button className="relative w-32 h-32 md:w-40 md:h-40 bg-white text-black rounded-full flex items-center justify-center text-xs md:text-sm uppercase tracking-widest font-bold group-hover:scale-105 transition-transform duration-500 ease-out">
          <span className="group-hover:-rotate-12 transition-transform duration-500">Talk Today</span>
        </button>
      </motion.div>

    </section>
  );
}
