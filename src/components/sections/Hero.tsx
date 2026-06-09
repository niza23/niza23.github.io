'use client'
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 max-w-6xl mx-auto pt-24 pb-12 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bento text-xs font-semibold text-sky-400 tracking-wide mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_#38bdf8]" />
            {portfolio.title} @ {portfolio.company}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {/* Using the exact tagline from the spec */}
            {portfolio.tagline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl font-light"
          >
            {portfolio.about}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href={portfolio.assets.resume} target="_blank" rel="noreferrer"
               className="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-bold text-sm hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              Download Resume
            </a>
            <a href={`mailto:${portfolio.contact.email}`}
               className="px-8 py-3.5 rounded-xl glass-bento text-white font-bold text-sm transition-all hover:-translate-y-1">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Profile Image Slot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative w-full h-[400px] flex items-center justify-center group z-10"
        >
          <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[100px]" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-20 bg-slate-900 flex items-center justify-center group-hover:border-sky-400 transition-all">
            {/* Fallback styling in case public/nidhi.jpg is not uploaded yet */}
            <img 
              src={portfolio.assets.photo} 
              alt={portfolio.name}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-bg');
              }}
              className="w-full h-full object-cover"
            />
            <span className="absolute text-slate-500 font-mono text-xs text-center px-4 -z-10">
              Place photo at: <br/> public/nidhi.jpg
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}