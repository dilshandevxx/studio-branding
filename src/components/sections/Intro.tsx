"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background architectural lines */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.04] hidden lg:block" />
      <div className="absolute inset-y-0 left-[25%] w-px bg-white/[0.04] hidden lg:block" />
      <div className="absolute inset-y-0 right-[25%] w-px bg-white/[0.04] hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col lg:pr-16 lg:pt-12 relative z-10">
            {/* The Video Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-white/[0.08] p-5 md:p-6 bg-white/[0.01] mb-8"
            >
              {/* Intersection + marks */}
              <div className="absolute -top-[4px] -left-[4px] text-white/20 text-[8px] font-mono leading-none pointer-events-none">+</div>
              <div className="absolute -top-[4px] -right-[4px] text-white/20 text-[8px] font-mono leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-[4px] -left-[4px] text-white/20 text-[8px] font-mono leading-none pointer-events-none">+</div>
              <div className="absolute -bottom-[4px] -right-[4px] text-white/20 text-[8px] font-mono leading-none pointer-events-none">+</div>

              {/* Header */}
              <div className="flex justify-between items-center text-white/30 text-[9px] uppercase font-mono tracking-[0.2em] mb-8">
                <span>HOW WE WORK</span>
                <span>= 2:30</span>
              </div>
              
              <h3 className="text-white text-[13px] uppercase font-bold tracking-widest mb-6 leading-relaxed">
                HOW WE HELP YOU BUILD<br/>BRANDS WITHOUT THE HYPE
              </h3>

              {/* Video Thumbnail */}
              <div className="w-full aspect-[16/9] bg-surface relative rounded-sm overflow-hidden group cursor-pointer shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                  alt="Office meeting" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-400">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small text below box */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 text-[9px] md:text-[10px] uppercase font-mono tracking-widest leading-[1.8] text-right max-w-[340px] ml-auto"
            >
              WE'RE A HANDS-ON TEAM OF BRAND CONSULTANTS FOCUSED ON HELPING AMBITIOUS BUSINESSES USE DESIGN WHERE IT MATTERS MOST
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center relative z-10 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase font-mono tracking-[0.2em] mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>01 WHO WE ARE</span>
              </div>

              <h2 className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] uppercase">
                <span className="text-white block mb-2">WE'RE A HANDS-ON TEAM OF BRAND CONSULTANTS</span>
                <span className="text-white/25">
                  FOCUSED ON HELPING AMBITIOUS BUSINESSES USE DESIGN WHERE IT MATTERS MOST. WE CUT THROUGH THE NOISE AND CRAFT EXPERIENCES WITH LASTING IMPACT.
                </span>
              </h2>

              {/* Profile */}
              <div className="mt-16 flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                    alt="Jessica Burns"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">JESSICA BURNS</span>
                  <span className="text-white/30 text-[9px] uppercase font-mono tracking-widest">CLIENT SUCCESS MANAGER</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
