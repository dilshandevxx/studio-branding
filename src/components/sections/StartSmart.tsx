"use client";

import { motion } from "framer-motion";

export default function StartSmart() {
  return (
    <section className="bg-background pt-32 pb-32 relative overflow-hidden">
      
      {/* Background Abstract Gradient / Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent"></div>
        {/* Soft diagonal bands to mimic the screenshot's lighting */}
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rotate-45 transform blur-3xl"></div>
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent rotate-12 transform blur-3xl translate-x-1/4"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm bg-white/[0.02]">
              {/* Using a premium unsplash portrait to match the vibe */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                alt="Jessica Burns" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Right Side: Typography */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full inline-block shadow-[0_0_10px_rgba(0,255,102,0.3)]"></span>
                05 Easy First Step
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[5.5vw] font-bold text-white tracking-tighter leading-[0.9] uppercase mb-16"
            >
              Start Smart,<br />
              Start Small
            </motion.h2>

            {/* Paragraph with vertical line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-l border-white/20 pl-6 md:pl-8 py-2 max-w-lg"
            >
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8">
                Pick one routine task. We'll automate it end-to-end and keep everything else unchanged.
              </p>
              
              {/* Signature / Name */}
              <div className="flex flex-col gap-1">
                <p className="text-white text-[10px] font-mono uppercase tracking-widest">Jessica Burns</p>
                <p className="text-white/30 text-[9px] font-mono uppercase tracking-widest">Client Success Manager</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
