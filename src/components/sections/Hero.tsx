"use client";

import { motion } from "framer-motion";
import { Menu, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Using a highly cinematic architecture/abstract image */}
        <img 
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2564&auto=format&fit=crop" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Top Navbar */}
      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full relative z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center"
      >
        <span className="font-bold text-xl tracking-widest uppercase font-serif text-white">
          STUDIO SIZZE
        </span>
        
        <div className="flex items-center gap-4 cursor-pointer group">
          <span className="text-sm uppercase tracking-widest font-medium text-white group-hover:text-white/70 transition-colors hidden sm:block">Menu</span>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <Menu size={18} strokeWidth={1.5} />
          </div>
        </div>
      </motion.header>

      {/* Center Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto flex-1 pb-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm text-white/90 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium">
            Est. 2024 — Global
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.5rem,9vw,9rem)] font-bold text-white tracking-tighter leading-[0.95] uppercase"
        >
          Engineering<br />
          <span className="font-serif italic font-light lowercase text-white/90">the</span> Future
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-white/70 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
        >
          We build enterprise-grade software and award-winning digital experiences for ambitious brands worldwide.
        </motion.p>
        
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 w-full pb-8 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-3 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">Scroll to explore</span>
          <ArrowDown size={16} className="text-white" strokeWidth={1.5} />
        </div>
      </motion.div>

    </section>
  );
}
