"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Layout, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black selection:bg-[#a9503a] selection:text-white">
      
      {/* Background Image with Cinematic Slow Zoom */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" 
          alt="Studio Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Advanced gradient overlay for dramatic lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </motion.div>

      {/* Top Navigation Bar exactly like screenshot */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 w-full h-[70px] md:h-[80px] flex z-50 shadow-2xl"
      >
        
        {/* Left & Middle: Terracotta background */}
        <div className="flex-1 bg-[#a9503a] flex items-center justify-between px-6 md:px-12 text-white">
          
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="font-bold text-xl md:text-2xl tracking-widest uppercase font-serif">STUDIO SIZZE</span>
            <span className="text-xs md:text-sm font-medium border-l border-white/20 pl-4 opacity-80 group-hover:opacity-100 transition-opacity hidden sm:block uppercase tracking-wider">
              IT Solutions
            </span>
          </div>
          
          {/* Links */}
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-semibold tracking-wider uppercase">
            <a href="#" className="hover:text-white/60 transition-colors">Case Studies</a>
            <a href="#" className="hover:text-white/60 transition-colors">About</a>
            <a href="#" className="hover:text-white/60 transition-colors">Careers</a>
            <a href="#" className="hover:text-white/60 transition-colors">Insights</a>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white/60 transition-colors border-l border-white/20 pl-10">
              <span>EN</span>
              <ChevronDown size={14} />
            </div>
          </nav>
        </div>
        
        {/* Right: Dark background */}
        <div className="w-[140px] md:w-[240px] bg-[#1a1a1a] flex items-center justify-center cursor-pointer group hover:bg-[#222] transition-colors relative overflow-hidden">
          <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] relative z-10 group-hover:scale-105 transition-transform duration-500">Contact Us</span>
        </div>

      </motion.header>

      {/* Center Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-24 px-4">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tight mb-12 text-center drop-shadow-2xl"
        >
          What are you looking to build?
        </motion.h1>
        
        {/* Search Pill Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl"
        >
          <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl md:rounded-full p-2.5 gap-2 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            
            {/* Dropdown 1 */}
            <div className="flex-1 w-full md:w-auto flex items-center gap-4 px-6 md:px-8 py-4 cursor-pointer hover:bg-gray-50 rounded-t-2xl md:rounded-l-full md:rounded-tr-none transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-100 group">
                <MapPin size={20} className="text-gray-400 group-hover:text-[#a9503a] transition-colors shrink-0" />
                <span className="text-gray-800 font-semibold text-sm md:text-[15px] whitespace-nowrap tracking-wide">Any Industry</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-800 transition-colors ml-auto shrink-0" />
            </div>

            {/* Dropdown 2 */}
            <div className="flex-1 w-full md:w-auto flex items-center gap-4 px-6 md:px-8 py-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-none md:rounded-none group">
                <Layout size={20} className="text-gray-400 group-hover:text-[#a9503a] transition-colors shrink-0" />
                <span className="text-gray-800 font-semibold text-sm md:text-[15px] whitespace-nowrap tracking-wide">Any Service</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-800 transition-colors ml-auto shrink-0" />
            </div>

            {/* Submit Button */}
            <button className="w-full md:w-auto bg-[#a9503a] hover:bg-[#8a402e] text-white px-10 py-5 rounded-xl md:rounded-full flex items-center justify-center gap-3 transition-all duration-300 font-semibold text-sm md:text-[15px] whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <Search size={18} />
                Find Solutions
            </button>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
