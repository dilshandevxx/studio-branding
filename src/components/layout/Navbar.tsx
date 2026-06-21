"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Case Studies", href: "/#work" },
  { label: "Company", href: "/#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <>
      <header className="absolute top-0 w-full z-50 py-8 md:py-12 bg-transparent mix-blend-difference">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-start justify-between">
          <Link href="/" className="flex flex-col text-white font-bold leading-[0.8] tracking-[-0.05em] text-2xl md:text-3xl hover:opacity-70 transition-opacity">
            <span>HOW</span>
            <span>HOW</span>
          </Link>

          {/* Minimalist Hamburger Menu */}
          <button
            className="text-white z-50 flex flex-col gap-[6px] mt-1 hover:opacity-70 transition-opacity p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-[30px] h-[2px] bg-white"></div>
            <div className="w-[30px] h-[2px] bg-white"></div>
          </button>
        </div>
      </header>

      {/* Full Screen Premium Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[100] flex flex-col justify-between"
          >
            
            {/* Top Bar inside Menu */}
            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 py-8 md:py-12 flex justify-between items-start">
              <span className="flex flex-col text-white font-bold leading-[0.8] tracking-[-0.05em] text-2xl md:text-3xl">
                <span>HOW</span>
                <span>HOW</span>
              </span>
              
              <button
                className="text-white flex flex-col items-center justify-center p-2 hover:opacity-70 transition-opacity group"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <div className="w-[30px] h-[2px] bg-white rotate-45 translate-y-[2px] group-hover:bg-[#ff3333] transition-colors"></div>
                <div className="w-[30px] h-[2px] bg-white -rotate-45 -translate-y-[0px] group-hover:bg-[#ff3333] transition-colors"></div>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="flex flex-col gap-4 md:gap-8 text-center">
                {navLinks.map((link, i) => (
                  <div key={link.label} className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className="text-5xl md:text-7xl lg:text-[7vw] font-black text-white tracking-tighter uppercase hover:italic hover:text-white/70 transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info inside Menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-[1600px] w-full mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-end md:items-center border-t border-white/10"
            >
              <div className="flex gap-12 text-white/50 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-8 md:mb-0">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
              </div>
              <div className="text-white/50 text-[10px] md:text-xs font-mono tracking-widest">
                HELLO@HOWHOW.TECH
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
