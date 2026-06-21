"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    date: "MARCH 20, 2025",
    title: "5 Common Mistakes Businesses Make When Adopting AI."
  },
  {
    date: "APRIL 5, 2025",
    title: "How to Spot AI Automation Opportunities in Your Workflow."
  },
  {
    date: "APRIL 15, 2025",
    title: "How a Small Retail Business Saved 50+ Hours per Month."
  },
  {
    date: "APRIL 25, 2025",
    title: "Top 10 AI Tools Every Business Should Consider."
  },
];

export default function News() {
  return (
    <section className="bg-background pt-32 pb-32 relative overflow-hidden">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          
          <div className="flex flex-col max-w-2xl">
            <p className="text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#00FF66] rounded-full inline-block shadow-[0_0_10px_rgba(0,255,102,0.3)]"></span>
              Insights & News
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-[5.5vw] font-bold text-white tracking-tighter leading-[0.9] uppercase">
              Stay updated
            </h2>
          </div>

          <div className="pb-2 md:pb-6">
            <Link href="#" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white">
              <span className="border-b border-white/30 group-hover:border-white pb-1 transition-colors">
                All articles
              </span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                ↗
              </span>
            </Link>
          </div>

        </div>

        {/* Minimal Typographic List Area */}
        <div className="flex flex-col w-full border-t border-white/[0.05]">
          {articles.map((article, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-16 border-b border-white/[0.05] hover:border-white/20 transition-colors duration-500 cursor-pointer"
            >
              
              {/* Massive Title */}
              <div className="w-full lg:w-3/4 pr-0 lg:pr-12">
                <h3 className="text-white/60 group-hover:text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] transition-colors duration-500">
                  {article.title}
                </h3>
              </div>

              {/* Date & Icon */}
              <div className="w-full lg:w-1/4 flex items-center justify-between lg:justify-end gap-8 mt-8 lg:mt-0">
                <span className="text-white/30 group-hover:text-white/60 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-500">
                  {article.date}
                </span>
                
                {/* Arrow that moves and lights up on hover */}
                <span className="text-white/20 group-hover:text-[#00FF66] group-hover:translate-x-2 transition-all duration-500 text-xl font-light">
                  →
                </span>
              </div>
              
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
