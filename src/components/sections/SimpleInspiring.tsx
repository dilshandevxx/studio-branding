"use client";

import { motion } from "framer-motion";

export default function SimpleInspiring() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
          
          {/* Left: Animated Overlapping Cards */}
          <div className="w-full flex justify-center lg:justify-start py-10 lg:py-0">
            {/* Wrapper exactly the size of one card, making it perfectly centerable */}
            <div className="relative w-[200px] h-[140px] md:w-[240px] md:h-[160px] xl:w-[280px] xl:h-[180px] lg:ml-4 xl:ml-8">
              
              {/* Back Card (Blue) */}
              <motion.div 
                initial={{ x: 0, rotate: 0, opacity: 0, scale: 0.9 }}
                whileInView={{ x: "50%", rotate: 12, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
                className="absolute inset-0 bg-[#1a65f8] rounded-xl shadow-[0_10px_30px_rgba(26,101,248,0.2)] z-0 origin-bottom-left"
              />
              
              {/* Middle Card (Red) */}
              <motion.div 
                initial={{ x: 0, rotate: 0, opacity: 0, scale: 0.95 }}
                whileInView={{ x: "25%", rotate: 6, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.15, type: "spring", stiffness: 60 }}
                className="absolute inset-0 bg-[#EA281E] rounded-xl shadow-[0_10px_30px_rgba(234,40,30,0.2)] z-10 origin-bottom-left"
              />
              
              {/* Front Card (White) */}
              <motion.div 
                initial={{ x: -20, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
                className="absolute inset-0 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center origin-bottom-left"
              >
                <span className="text-black font-black text-2xl md:text-3xl tracking-tighter">Hï IBIZA</span>
                {/* Fake logo dot exactly like the screenshot */}
                <span className="absolute top-[42%] right-[22%] w-1.5 h-1.5 bg-black rounded-full" />
              </motion.div>
              
            </div>
          </div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-10 lg:pl-16 max-w-lg mt-8 lg:mt-0"
          >
            <p className="text-white text-xl md:text-[22px] font-medium leading-[1.6] tracking-tight">
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </p>
            
            <div className="flex items-center gap-5 cursor-pointer group w-fit mt-2">
              <span className="text-white font-bold text-base tracking-wide">Let's talk</span>
              <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-[#222] transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white group-hover:translate-x-1 transition-all">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
