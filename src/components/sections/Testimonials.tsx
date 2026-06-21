"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-background border border-white-8 flex items-center justify-center">
              <Quote className="w-6 h-6 text-accent" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12"
          >
            "StudioSize transformed our brand identity completely. Their attention to detail and creative vision delivered a digital experience that exceeded our wildest expectations."
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-bold text-xl">Michael Carter</h4>
            <p className="text-secondaryText">CEO, Alterscope</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
