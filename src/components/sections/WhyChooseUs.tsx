"use client";

import { motion } from "framer-motion";
import { Zap, Diamond, Award } from "lucide-react";

const advantages = [
  {
    icon: <Diamond className="w-8 h-8 text-accent" />,
    title: "Premium Quality",
    description: "We don't compromise on quality. Every pixel, every animation, and every line of code is crafted to perfection."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Lightning Fast",
    description: "Our digital experiences are optimized for speed, ensuring your users stay engaged without waiting."
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Award Winning",
    description: "Our work has been recognized by Awwwards, FWA, and CSS Design Awards for outstanding creativity."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-surface border-y border-white-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            The StudioSize Advantage
          </h2>
          <p className="text-xl text-secondaryText">
            We partner with ambitious brands to create digital experiences that truly matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background border border-white-8 p-10 rounded-2xl hover:border-white/20 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {adv.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{adv.title}</h3>
              <p className="text-secondaryText leading-relaxed">{adv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
