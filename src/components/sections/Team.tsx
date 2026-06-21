"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Emma Wilson",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Our Minds
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-6 bg-surface">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-accent text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
