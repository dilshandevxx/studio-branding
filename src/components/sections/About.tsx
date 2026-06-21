"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
              Back to the simple, <br />
              <span className="text-secondaryText">intuitive, and</span> <br />
              inspiring.
            </h2>
            <div className="w-20 h-1 bg-accent mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-xl md:text-2xl text-secondaryText leading-relaxed">
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </p>
            <p className="text-lg text-secondaryText/80">
              Great design has no expiration date. It lasts for years and inspires instantly. Our creative freedom enables us to spend more time on fewer projects and focus on the intellectual, functional, and artistic aspects of business.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-white-8 pt-8">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">12+</h4>
                <p className="text-secondaryText uppercase tracking-wider text-sm font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">240</h4>
                <p className="text-secondaryText uppercase tracking-wider text-sm font-medium">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
