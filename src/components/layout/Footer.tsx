import Link from "next/link";
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
              Let&apos;s create something <br />
              <span className="text-accent">timeless.</span>
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-accent transition-colors group"
            >
              Start a project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#services" className="text-secondaryText hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-secondaryText hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#about" className="text-secondaryText hover:text-white transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-secondaryText hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white-8 flex items-center justify-center text-secondaryText hover:text-white hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white-8 flex items-center justify-center text-secondaryText hover:text-white hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white-8 flex items-center justify-center text-secondaryText hover:text-white hover:border-accent transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white-8 flex items-center justify-center text-secondaryText hover:text-white hover:border-accent transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white-8">
          <p className="text-secondaryText text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} StudioSize. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-secondaryText text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-secondaryText text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
