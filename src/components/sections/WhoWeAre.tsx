"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-background pt-32 pb-32 relative overflow-hidden">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        
        {/* Top Eyebrow & Full-width Line */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-b border-white/[0.05] pb-6 mb-16 md:mb-24"
        >
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">
            [ WHO WE ARE ]
          </p>
        </motion.div>

        {/* Split Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Left Side: Massive Typography */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            
            {/* The Text Block */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[4vw] font-bold tracking-tighter leading-[1.15] uppercase pr-0 lg:pr-8"
            >
              <span className="text-white">We are a digital agency focused on building high-end web experiences.</span>
              <span className="text-white/30"> We blend design and technology to create premium identities for brands who want to stand out.</span>
            </motion.h2>

          </div>

          {/* Right Side: Portrait Image */}
          <div className="w-full lg:w-[40%] flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[500px] aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-white/[0.02]"
            >
              {/* Premium architectural image to match the reference vibe */}
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" 
                alt="Studio Architecture" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
