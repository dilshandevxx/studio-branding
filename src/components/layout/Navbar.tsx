"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 py-10 bg-black">
      <div className="container mx-auto px-8 flex items-start justify-between">
        <Link href="/" className="flex flex-col text-white font-bold leading-[0.8] tracking-[-0.05em] text-[22px]">
          <span>HOW</span>
          <span>HOW</span>
        </Link>

        {/* Minimalist Hamburger Menu */}
        <button
          className="text-white z-50 flex flex-col gap-[6px] mt-1 hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-[22px] h-[2px] bg-white"></div>
          <div className="w-[22px] h-[2px] bg-white"></div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
            >
              <button
                className="absolute top-10 right-8 text-white z-50 p-2"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-6 h-[2px] bg-white rotate-45 translate-y-[1px]"></div>
                <div className="w-6 h-[2px] bg-white -rotate-45 -translate-y-[1px]"></div>
              </button>
              <div className="flex flex-col gap-6 items-center">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl text-white">Home</Link>
                <Link href="/work" onClick={() => setIsOpen(false)} className="text-3xl text-white">Work</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-3xl text-white">Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
