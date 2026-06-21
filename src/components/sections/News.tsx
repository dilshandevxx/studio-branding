"use client";

import { motion } from "framer-motion";

const articles = [
  {
    date: "MARCH 20, 2025",
    title: "5 Common Mistakes Businesses Make When Adopting AI.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", 
  },
  {
    date: "APRIL 5, 2025",
    title: "How to Spot AI Automation Opportunities in Your Workflow.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    date: "APRIL 15, 2025",
    title: "How a Small Retail Business Saved 50+ Hours per Month with AI.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop", 
  },
  {
    date: "APRIL 25, 2025",
    title: "Top 10 AI Tools Every Business Should Consider.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop", 
  },
];

export default function News() {
  return (
    <section className="bg-background pt-32 pb-24 relative overflow-hidden">
      
      {/* Container with massive max-width for an airy feel */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        
        {/* Top Header Area - Clean and open */}
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
            <a href="#" className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white">
              <span className="border-b border-white/30 group-hover:border-white pb-1 transition-colors">
                All articles
              </span>
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                ↗
              </span>
            </a>
          </div>

        </div>

        {/* Articles Grid - Removed borders, added large gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              
              {/* Image Container - Slightly rounded, high-end hover */}
              <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-white/[0.02] relative mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s] ease-[0.22,1,0.36,1]"
                />
                {/* Subtle dark gradient overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Date Eyebrow */}
              <p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">
                {article.date}
              </p>

              {/* Title Content */}
              <h3 className="text-white/80 group-hover:text-white text-xl lg:text-2xl font-medium leading-[1.3] transition-colors duration-300">
                {article.title}
              </h3>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
