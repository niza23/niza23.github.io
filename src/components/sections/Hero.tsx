'use client'
import { motion } from "framer-motion";

export default function Hero() {
  const coreStats = [
    { value: "99.9%", label: "Infrastructure Uptime", desc: "Maintained At Scale" },
    { value: "$78K+", label: "FinOps Cost Savings", desc: "Optimized Annually" },
    { value: "40%", label: "Latency Improvement", desc: "Via Cloud Migration" },
    { value: "< 15m", label: "Incident MTTR", desc: "Sustained On-Call Peak" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto pt-28 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Data Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-emeraldUptime font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emeraldUptime animate-pulse" />
            Active SRE Platform // Production Environments Online
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]"
          >
            Keeping Production <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyanNeon via-blue-400 to-indigo-500">
              Reliable at Scale.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl"
          >
            I operate production-grade infrastructure, orchestrate complex cloud environments, automate operations, and implement observability frameworks to preserve high availability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10 w-full"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-cyanNeon text-white font-semibold text-sm hover:bg-cyanNeon/80 transition-all shadow-md shadow-cyanNeon/10">
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/nidhi-zala-2307/" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg glass-panel text-white font-semibold text-sm glow-cyan-hover transition-all">
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Multi-Monitor Workspace Visual Frame */}
        <div className="lg:col-span-5 w-full">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full aspect-[4/3] rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900/40 p-4 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-gray-900 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emeraldUptime/60" />
                <span className="text-[10px] text-gray-500 font-mono ml-1.5">workspace_telemetry.png</span>
              </div>
              <span className="text-[9px] font-mono text-cyanNeon bg-cyanNeon/10 px-2 py-0.5 rounded border border-cyanNeon/20">ZONE_01</span>
            </div>

            {/* High-Fidelity Active Placeholder Photo Frame */}
            <div className="flex-grow my-4 rounded-xl overflow-hidden relative border border-gray-800 bg-black/50 group-hover:border-cyanNeon/30 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80" 
                alt="Tactical Photo Proof: Engineer at detailed workspace with multiple monitors"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-[11px] font-mono font-bold text-white drop-shadow">Tactical Photo Proof</p>
                <p className="text-[9px] font-mono text-gray-400 drop-shadow-sm mt-0.5">SRE core monitoring deck tracking distributed computing clusters.</p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 font-mono text-left bg-gray-950/80 p-2 rounded border border-gray-900 flex justify-between items-center">
              <span>STATUS // SYSTEM OPERATOR IMAGE ACTIVE</span>
              <span className="text-amber-400 animate-pulse text-[9px] font-bold">[DEMO_PLACEHOLDER]</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Counter Dashboard */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {coreStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.08 }}
            className="glass-panel p-5 rounded-xl glow-cyan-hover transition-all text-left"
          >
            <div className="text-2xl md:text-4xl font-black font-mono text-cyanNeon tracking-tight mb-1">{stat.value}</div>
            <div className="text-xs font-bold text-gray-200 mb-0.5">{stat.label}</div>
            <div className="text-[10px] text-gray-400 font-mono">{stat.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}