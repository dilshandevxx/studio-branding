"use client";

import { motion } from "framer-motion";

export default function Headline() {
  return (
    <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Top Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.5)]"></span>
        <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono">
          Design anything, build everything.
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-white text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase tracking-tighter leading-[1.05] text-center max-w-[1200px] px-4"
      >
        Build smooth creative<br />sites with us.
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16"
      >
        <button className="border border-white/10 bg-transparent text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 px-10 py-5 text-[10px] uppercase tracking-[0.25em] font-medium">
          Talk Today
        </button>
      </motion.div>

    </section>
  );
}
