"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              Let's talk <br />
              <span className="text-secondaryText">business.</span>
            </h2>
            <p className="text-xl text-secondaryText max-w-md mb-12">
              Have a project in mind? We'd love to hear about it. Drop us a line and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a href="mailto:hello@studiosize.com" className="text-secondaryText hover:text-accent transition-colors text-lg">hello@studiosize.com</a>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Office</h4>
                <p className="text-secondaryText text-lg">123 Creative Street<br />New York, NY 10001</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-12 rounded-3xl border border-white-8"
          >
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-secondaryText">Name</label>
                <input
                  type="text"
                  id="name"
                  className="bg-background border border-white-8 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-secondaryText">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-background border border-white-8 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-secondaryText">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-background border border-white-8 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-white text-background font-bold text-lg py-4 rounded-xl hover:bg-accent hover:text-white transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
