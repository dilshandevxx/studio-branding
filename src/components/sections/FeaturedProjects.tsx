"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Divote",
    category: "Clean Korean cosmetics",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#EAEAEA]",
  },
  {
    id: 2,
    title: "Hot Type",
    category: "Red hot type animations",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#1A1A1A]",
  },
  {
    id: 3,
    title: "Alterscope",
    category: "Web3 risks in real time",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#00FF9D]",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Featured Work
          </h2>
          <Link href="#" className="hidden md:flex items-center gap-2 text-white hover:text-accent transition-colors border border-white-8 rounded-full px-6 py-2 hover:bg-surface">
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 ${project.color}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-secondaryText">{project.category}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link href="#" className="flex items-center gap-2 text-white hover:text-accent transition-colors border border-white-8 rounded-full px-8 py-3 bg-surface">
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
