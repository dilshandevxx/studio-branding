"use client";

import { motion } from "framer-motion";

export default function Headline() {
  return (
    <section className="bg-background pt-32 pb-32 md:pt-48 md:pb-48 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/[0.05]">
      
      {/* Top Badge Eyebrow */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-10 md:mb-12"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] shadow-[0_0_12px_rgba(0,255,102,0.6)]"></span>
        <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono font-medium">
          Design Anything. Build Everything.
        </span>
      </motion.div>

      {/* Main Massive Heading - Single Line Style */}
      <div className="w-full px-4 flex flex-col items-center text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl sm:text-5xl md:text-[5vw] lg:text-[4.5vw] font-bold uppercase tracking-tighter leading-[1.1] text-center max-w-[95vw]"
        >
          Build smooth creative sites with us.
        </motion.h1>
      </div>

      {/* Minimal Rectangular Border CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 md:mt-20"
      >
        <button className="px-10 py-5 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-500 ease-out text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">
          Talk Today
        </button>
      </motion.div>

    </section>
  );
}
