"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-[#0d1117]">
      
      {/* Subtle radial gradient to match the studio lighting vibe without the woman */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1d2738] via-[#0d1117] to-[#0a0d14]" />
        {/* Soft bottom blue glow to replicate the floor lighting in the reference */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#415a77]/20 to-transparent" />
      </div>

      {/* Massive Headline */}
      <div className="relative z-10 w-full px-4 text-center mt-[-10vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#dcb8b2] text-[clamp(3.5rem,9vw,9rem)] font-bold tracking-tight leading-[0.95] uppercase max-w-[1400px] mx-auto"
        >
          ENGINEER THE SYSTEMS,<br />
          MAKE THEM<br />
          SCALE
        </motion.h1>
      </div>

      {/* Floating Video Thumbnail Widget (Bottom Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 md:bottom-20 left-6 md:left-12 z-20 group cursor-pointer"
      >
        <div className="w-[160px] md:w-[220px] aspect-[16/10] bg-black/60 rounded-xl border border-white/10 backdrop-blur-md overflow-hidden relative shadow-2xl">
          {/* Faint blue glow inside the video box to mimic the screen glow */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#8ab4f8]/30 to-transparent mix-blend-screen" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="black" className="ml-1">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            {/* The oval reflection under the play button shown in the image */}
            <div className="w-10 md:w-12 h-2 mt-2 bg-[#8ab4f8] rounded-[100%] opacity-50 blur-[3px]" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Border Text Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 w-full z-20 px-4 md:px-12 pb-6"
      >
        <div className="w-full border border-[#dcb8b2]/40 py-1.5 px-4 flex justify-between items-center text-[#dcb8b2]/60 text-[8px] md:text-[10px] font-mono tracking-widest uppercase">
          <span>STUDIO SIZZE EST. 2024</span>
          <span className="hidden sm:block">THINGS THAT YOU ARE NOT PROUD OF SHOULDN'T BE SIGNED BY YOUR NAME.</span>
        </div>
      </motion.div>

    </section>
  );
}
