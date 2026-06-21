"use client";

import { motion } from "framer-motion";

const results = [
  {
    eyebrow: "ROI TIMELINE",
    desc: "Most clients recover their investment within 1.5 months.",
    bigNum: "/45",
    label: "AVG. ROI IN\n45 DAYS"
  },
  {
    eyebrow: "TIME SAVED",
    desc: "On average, clients reduce manual work by 35 hours/month.",
    bigNum: "/35+",
    label: "HOURS SAVED\nEVERY MONTH"
  },
  {
    eyebrow: "WORKFLOW IMPACT",
    desc: "We help businesses automate up to 60% of repetitive workflows.",
    bigNum: "/60",
    label: "% OF ROUTINE\nTASKS AUTOMATED"
  }
];

export default function WhyUs() {
  return (
    <section className="bg-background pt-32 pb-24 relative overflow-hidden">
      
      {/* Massive airy container */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        
        {/* Clean Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          
          <div className="flex flex-col">
            <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full inline-block shadow-[0_0_10px_rgba(0,255,102,0.3)]"></span>
              The Results
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-[5.5vw] font-bold text-white tracking-tighter leading-[0.9] uppercase">
              Why us
            </h2>
          </div>

          <div className="pb-2 md:pb-6 max-w-sm">
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
              We don't just build beautiful interfaces. We engineer systems that radically improve how your business operates.
            </p>
          </div>

        </div>

        {/* Minimal Content Grid - No borders, large gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mt-12">
          
          {/* Col 1: The Team Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="mb-12">
              <h3 className="text-white/80 text-2xl font-light tracking-tight mb-2">The team.</h3>
              <p className="text-white/30 text-xs font-mono tracking-widest uppercase">Studio Sizze</p>
            </div>
            
            <div className="flex flex-col gap-6 mt-auto">
              {/* Avatars */}
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-[3px] border-background overflow-hidden bg-white/10 z-30 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Team 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="w-12 h-12 rounded-full border-[3px] border-background overflow-hidden bg-white/10 z-20 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Team 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="w-12 h-12 rounded-full border-[3px] border-background overflow-hidden bg-white/10 z-10 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Team 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="w-12 h-12 rounded-full border-[3px] border-background bg-[#1a1a1a] flex items-center justify-center text-white/60 text-xs font-mono z-0 shadow-lg">
                  8+
                </div>
              </div>
              
              <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest leading-[1.8]">
                How we change the way<br/>your business works
              </p>
            </div>
          </motion.div>

          {/* Cols 2-4: The Metrics */}
          {results.map((res, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (idx + 1) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              
              {/* Massive Number - Moved to top for immediate impact */}
              <div className="mb-8">
                <h4 className="text-white/90 text-6xl lg:text-[5.5rem] font-light tracking-tighter transition-transform duration-500 origin-left group-hover:scale-105 group-hover:text-white">
                  {res.bigNum}
                </h4>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed max-w-[280px] group-hover:text-white/80 transition-colors duration-300">
                  {res.desc}
                </p>
              </div>

              {/* Eyebrow / Small header at bottom */}
              <div className="mt-auto pt-6 border-t border-white/[0.05]">
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center justify-between">
                  <span>{res.eyebrow}</span>
                  <span className="text-white/10 group-hover:text-[#00FF66] transition-colors duration-500">+</span>
                </p>
              </div>

            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
