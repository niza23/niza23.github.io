'use client'
import { motion } from "framer-motion";

export default function ExperienceGrid() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      <div className="mb-16">
        <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-2">Experience Section</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Student &rarr; Intern &rarr; SRE &rarr; <br/>Cloud Infra Engineer at IBM.
        </h2>
      </div>

      {/* Bento Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        
        {/* Main IBM Card (Spans 2 columns) */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} 
          className="md:col-span-2 glass-bento p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center text-xl">🏢</div>
              <div>
                <h3 className="text-2xl font-bold text-white">IBM India Software Labs</h3>
                <p className="text-slate-400 text-sm">Site Reliability Engineer • Pune, India</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-xl mb-8">
              Led FinOps initiatives optimizing cloud resources. Deployed resilient multi-node container systems across secure enterprise VPCs using Terraform, ensuring zero-drift GitOps pipelines.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-sky-400 font-black text-2xl mb-1">FinOps</div>
              <p className="text-xs text-slate-400">$78K+ cost reduction annually</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-indigo-400 font-black text-2xl mb-1">New AWS</div>
              <p className="text-xs text-slate-400">Infrastructure build-out</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-emerald-400 font-black text-2xl mb-1">15 min</div>
              <p className="text-xs text-slate-400">MTTR Density Improvement</p>
            </div>
          </div>
        </motion.div>

        {/* Tactical Image Proof Card */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}}
          className="glass-bento p-4 rounded-3xl flex flex-col relative group">
          <div className="w-full h-48 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
            {/* Real placeholder simulating the exact image from your mockup */}
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Workspace" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          </div>
          <div className="mt-auto p-2">
            <h4 className="text-white font-bold mb-1">Operational Proof</h4>
            <p className="text-xs text-slate-400">Engineer at detailed workspace with multiple monitors.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}