"use client";

import { motion } from "framer-motion";

export default function StudioGallery() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 items-start">
            
            {/* Left: Square */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-3 aspect-square bg-white rounded-xl flex items-center justify-center p-[15%] group shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-1 w-full h-full">
                <div className="bg-[#0a0a0a] rounded-full w-full h-full group-hover:scale-[0.9] transition-transform duration-500 ease-out"></div>
                <div className="bg-[#0a0a0a] rounded-full w-full h-full group-hover:scale-[0.9] transition-transform duration-500 ease-out"></div>
                <div className="bg-[#0a0a0a] rounded-full w-full h-full group-hover:scale-[0.9] transition-transform duration-500 ease-out"></div>
                <div className="bg-[#0a0a0a] rounded-full w-full h-full group-hover:scale-[0.9] transition-transform duration-500 ease-out"></div>
              </div>
            </motion.div>

            {/* Middle: Portrait */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-3 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
                alt="Interior studio setup with lamp and chair" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Right: Landscape */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:col-span-4 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" 
                alt="Photography studio with person suspended in air" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

          {/* Text & Controls Row */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-6">
            
            {/* Arrows */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-3 flex items-start gap-3"
            >
              <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <span className="text-white/40 group-hover:text-white transition-colors">&larr;</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <span className="text-white/40 group-hover:text-white transition-colors">&rarr;</span>
              </button>
            </motion.div>

            {/* Text 1 & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3 flex flex-col gap-10"
            >
              <p className="text-white/90 text-lg md:text-[1.05rem] font-medium leading-[1.6] tracking-tight">
                Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects and
              </p>
              
              <div className="flex items-center gap-4 cursor-pointer group mt-auto">
                <span className="text-white font-semibold text-sm tracking-wide">About Studio</span>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                  <span className="text-white/50 group-hover:text-white text-xs transition-colors">&rarr;</span>
                </div>
              </div>
            </motion.div>

            {/* Text 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-4"
            >
              <p className="text-white/90 text-lg md:text-[1.05rem] font-medium leading-[1.6] tracking-tight md:pr-12">
                focus on the intellectual, functional, and artistic aspects of business. Looking to create profound ideas, timeless design, and beauty in everyday life.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
