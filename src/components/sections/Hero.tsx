'use client'
import { motion } from "framer-motion";

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
            CloudOps Engineer & SRE | 1x Terraform Certified
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Hi, I'm Nidhi Zala.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">
              Reliability at Scale.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-400 mb-10 leading-relaxed max-w-xl font-light"
          >
            I'm a CloudOps/Site Reliability Engineer at IBM with over 3.5 years of hands-on experience in DevOps and cloud infrastructure. I specialize in building scalable, observable, and cost-efficient systems. From migrating DocumentDB to MongoDB Atlas to sustaining 99.9% uptime across 10+ production services, I automate everything possible along the way.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} 
               className="px-8 py-3.5 rounded-xl bg-sky-500 text-white font-bold text-sm hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              View Architecture
            </button>
            <a href="mailto:nidhizala2307@gmail.com" 
               className="px-8 py-3.5 rounded-xl glass-bento text-white font-bold text-sm transition-all hover:-translate-y-1">
              nidhizala2307@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Right Content - CSS Isometric Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative w-full h-[500px] flex items-center justify-center group perspective-[1000px] z-10"
        >
          <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[100px]" />
          
          <div className="isometric-grid relative w-64 h-64">
            <div className="isometric-layer isometric-layer-1 absolute inset-0 bg-slate-800/80 border-2 border-slate-600 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-md">
              <span className="text-4xl transform -rotate-z-45 rotate-x-60">☁️</span>
            </div>
            <div className="isometric-layer isometric-layer-2 absolute inset-0 -top-8 -left-8 bg-indigo-900/60 border-2 border-indigo-400/50 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-md">
              <span className="text-5xl transform -rotate-z-45 rotate-x-60 drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]">☸️</span>
            </div>
            <div className="isometric-layer isometric-layer-3 absolute inset-0 -top-16 -left-16 bg-sky-900/60 border-2 border-sky-400/50 rounded-2xl shadow-[20px_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-md">
              <span className="text-5xl transform -rotate-z-45 rotate-x-60 font-mono font-black text-sky-300">{"</>"}</span>
            </div>
          </div>

          <div className="absolute -bottom-10 right-0 flex gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-700 backdrop-blur-xl">
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-bold border border-orange-500/30">AWS</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold border border-blue-500/30">Instana</span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs font-bold border border-purple-500/30">Terraform</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}