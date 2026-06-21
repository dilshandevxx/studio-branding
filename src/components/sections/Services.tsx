"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "001",
    name: "AI & ENGINEERING",
    desc: "We build custom artificial intelligence solutions, from predictive models to advanced natural language processing. Our engineering team integrates cutting-edge AI directly into your core business infrastructure.",
    tags: ["Machine Learning", "Data Science", "LLMs"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "002",
    name: "AGENTIC & AUTOMATION SYSTEMS",
    desc: "Deploy autonomous agentic workflows that operate seamlessly in the background. We automate your most complex, time-consuming operations so your team can focus on high-level strategy.",
    tags: ["Autonomous Agents", "Workflow Automation", "RPA"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "003",
    name: "SOFTWARE DEVELOPMENT",
    desc: "End-to-end software engineering for web, mobile, and desktop. We focus on scalable architectures, high performance, and flawless security to bring your digital products to life.",
    tags: ["Web Apps", "Mobile Apps", "Architecture"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "004",
    name: "UI/UX DESIGN",
    desc: "We design intuitive, award-winning interfaces that feel effortless to use. Our design process merges deep user research with high-end visual aesthetics to maximize engagement.",
    tags: ["Interface Design", "User Experience", "Prototyping"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "005",
    name: "CLOUD & DEVOPS",
    desc: "Modernize your infrastructure with secure, scalable cloud environments. We implement CI/CD pipelines, containerization, and continuous monitoring to ensure zero downtime.",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      
      {/* Standard Header - Constrained */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mb-24">
        <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-4 font-medium flex items-center gap-3">
          <span className="w-6 h-px bg-white/30 inline-block" />
          What we do
        </p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white tracking-tighter leading-none uppercase">
          What we do
        </h2>
      </div>

      {/* Clean Minimalist Accordion List - FULL BLEED */}
      <div className="border-t border-white/[0.05] w-full">
        {services.map((svc, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={svc.num}
              className="group border-b border-white/[0.05] transition-colors duration-500 hover:bg-white/[0.02]"
            >
              {/* Inner Content - Constrained back to max-w for text alignment */}
              <div 
                className="py-8 md:py-10 cursor-pointer w-full flex flex-col justify-center max-w-[1440px] mx-auto px-8 md:px-16"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                
                {/* Row Content */}
                <div className="flex items-center w-full">
                  
                  {/* Number - Far Left */}
                  <div className="w-[80px] md:w-[150px] shrink-0">
                    <span className="font-mono text-[10px] md:text-xs text-white/40 tracking-widest">
                      ({svc.num})
                    </span>
                  </div>

                  {/* Title - Middle */}
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-[22px] uppercase tracking-wide transition-colors duration-500 ${isOpen ? 'text-white font-semibold' : 'text-white/70 group-hover:text-white font-medium'}`}>
                      {svc.name}
                    </h3>
                  </div>

                  {/* Toggle Button - Far Right */}
                  <div className="shrink-0 pl-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? "border-white/40 bg-white/10 text-white rotate-45" 
                        : "border-white/10 text-white/50 group-hover:border-white/40 group-hover:text-white"
                    }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Expandable Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      {/* 
                        Added massive left margin to perfectly align with the title.
                        Added top/bottom padding for luxurious breathing room.
                      */}
                      <div className="pt-12 pb-8 ml-0 md:ml-[150px] flex flex-col lg:flex-row gap-12 lg:gap-20">
                        
                        {/* Left Side: Typography & Actions (Takes up less width) */}
                        <div className="w-full lg:w-[45%] flex flex-col justify-between">
                          
                          <div>
                            {/* Beautiful, larger editorial typography for the description */}
                            <p className="text-white/80 text-base md:text-xl leading-[1.8] font-light max-w-xl">
                              {svc.desc}
                            </p>
                            
                            {/* Sophisticated Tags */}
                            <div className="mt-8 flex flex-wrap gap-2">
                              {svc.tags.map(tag => (
                                <span 
                                  key={tag} 
                                  className="text-white/50 text-[10px] uppercase font-mono tracking-[0.2em] border border-white/[0.08] px-4 py-2 rounded-full hover:border-white/30 hover:text-white transition-colors duration-300 cursor-default"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Call to action link */}
                          <div className="mt-12 lg:mt-0">
                            <a href="#" className="group/link inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white">
                              <span className="border-b border-white/30 group-hover/link:border-white pb-1 transition-colors">
                                Explore {svc.name.split(' ')[0]}
                              </span>
                              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all">
                                →
                              </span>
                            </a>
                          </div>

                        </div>

                        {/* Right Side: Cinematic Image (Takes up more width) */}
                        <div className="w-full lg:w-[55%]">
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            exit={{ scale: 0.95, opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full aspect-[16/9] md:aspect-[3/2] rounded-sm overflow-hidden bg-surface relative group/img"
                          >
                            <img
                              src={svc.image}
                              alt={svc.name}
                              className="w-full h-full object-cover scale-105 group-hover/img:scale-100 grayscale opacity-70 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-[1.5s] ease-[0.22,1,0.36,1]"
                            />
                            {/* Subtle dark gradient overlay to make it look premium */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                          </motion.div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
