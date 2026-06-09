'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden border-b border-gray-800/40">
      <div className="max-w-5xl w-full z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-emeraldUptime font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emeraldUptime animate-pulse" />
          Systems Online // Operating Production Infrastructure at IBM India Software Labs
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Keeping Production <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyanNeon to-blue-500">
            Reliable at Scale
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed"
        >
          I design, automate, and operate enterprise cloud infrastructure, eliminate system operational toil, and construct robust container tracking layers capable of executing missions safely.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-20"
        >
          <a href="#projects" className="px-5 py-2.5 rounded-lg bg-cyanNeon text-white font-medium text-sm hover:bg-cyanNeon/80 transition-all shadow-lg shadow-cyanNeon/20">
            View Cloud Projects
          </a>
          <a href="https://www.linkedin.com/in/nidhi-zala-2307/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg glass-panel text-white font-medium text-sm glow-hover transition-all">
            Connect on LinkedIn
          </a>
        </motion.div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Production Uptime", value: "99.9%", text: "Maintained Across Systems" },
            { label: "Cloud Cost Efficiency", value: "$78K+", text: "Saved Annually via FinOps" },
            { label: "Application Latency", value: "-40%", text: "Optimized Cloud Migration" },
            { label: "On-Call MTTR Metric", value: "< 15m", text: "PagerDuty Orchestration" }
          ].map((m, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl text-left glow-hover transition-all">
              <div className="text-2xl md:text-3xl font-extrabold font-mono text-cyanNeon mb-1">{m.value}</div>
              <div className="text-xs font-semibold text-gray-200 mb-0.5">{m.label}</div>
              <div className="text-[10px] text-gray-400 font-mono">{m.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}