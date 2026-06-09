'use client'
import { motion } from "framer-motion";

export default function ExperienceGrid() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-900/50">
      <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="text-cyanNeon font-mono text-xl">02.</span> Production Operations & Business Impact
          </h2>
          <p className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-wider text-cyanNeon">Site Reliability & Infrastructure Engineering Cluster</p>
        </div>
        
        {/* Company Identity Tag: Pulling official production SVG vectors for IBM branding */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gray-950 border border-gray-800">
          <svg role="img" viewBox="0 0 24 24" className="w-10 h-10 fill-[#052FAD]" xmlns="http://www.w3.org/2000/svg">
            <title>IBM</title>
            <path d="M0 2.9h6.3v1.6H0zm7.7 0h6.3v1.6H7.7zm7.7 0H24v1.6h-8.6zM0 6.1h6.3v1.6H0zm7.7 0h6.3v1.6H7.7zm7.7 0H24v1.6h-8.6zM0 9.2h6.3v1.6H0zm7.7 0h6.3v1.6H7.7zm7.7 0H24v1.6h-8.6zM0 12.4h6.3v1.6H0zm7.7 0h6.3v1.6H7.7zm7.7 0H24v1.6h-8.6zM0 15.5h6.3v1.7H0zm7.7 0h6.3v1.7H7.7zm7.7 0H24v1.7h-8.6zM0 18.7h6.3v1.6H0zm7.7 0h6.3v1.6H7.7zm7.7 0H24v1.6h-8.6zm0 3.1H24v1.6h-8.6zM0 21.8h6.3v1.6H0zm7.7 0h6.3v1.6H7.7z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs font-black text-white leading-none">IBM India Software Labs</div>
            <span className="text-[9px] font-mono text-gray-500">Infrastructure Core Track</span>
          </div>
        </div>
      </div>

      {/* Bento Layout Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Box 1: FinOps Cloud Cost Metric */}
        <div className="md:col-span-8 glass-panel p-6 rounded-xl text-left glow-cyan-hover transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-cyanNeon font-bold uppercase tracking-wide">// FinOps Track</span>
              <span className="text-[10px] font-mono text-emeraldUptime px-2 py-0.5 rounded bg-emeraldUptime/10 border border-emeraldUptime/20">50% Optimization</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">$78K Annualized Savings</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Pioneered an enterprise infrastructure right-sizing automation analysis workflow across active cloud environments. Eliminated massive compute allocation spillover, pruning metric tracking telemetry expenses by half while ensuring full performance baseline integrity.
            </p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono border-t border-gray-900/60 pt-4 mt-4">
            Targets: AWS Cost Controls // Metric Evaluation Logs Cleaned
          </div>
        </div>

        {/* Box 2: Public Conference / Speaking Demonstration Frame */}
        <div className="md:col-span-4 glass-panel p-4 rounded-xl flex flex-col justify-between text-left group border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900">
          <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-2">
            <span className="text-[10px] font-mono text-gray-400">Cloud Native Day Pune</span>
            <span className="text-[9px] text-amber-400 font-mono font-bold">[DEMO]</span>
          </div>
          
          <div className="flex-grow rounded-lg overflow-hidden relative min-h-[120px] bg-black/60 border border-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80"
              alt="Operational Proof: Nidhi presenting on Kubernetes at Cloud Native Day Pune"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center p-2 text-center pointer-events-none">
              <div>
                <p className="text-[11px] font-mono font-bold text-white">Operational Proof</p>
                <p className="text-[9px] font-mono text-gray-400 mt-0.5">Nidhi presenting cluster topology topologies.</p>
              </div>
            </div>
          </div>

          <div className="text-[9px] font-mono text-gray-500 text-center mt-2.5">
            Event Vector: Public Speaking Ecosystem Check
          </div>
        </div>

        {/* Box 3: Architecture & Multi-Region Deployments */}
        <div className="md:col-span-4 glass-panel p-6 rounded-xl text-left glow-cyan-hover transition-all flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wide block mb-3">// IaC Cluster Core</span>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">New Region Build-Out</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Deployed clean multi-region AWS network elements from scratch via modular Terraform. Configured high-performance database infrastructures including MongoDB Atlas, Redis clusters, and secure cluster message loops.
            </p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono border-t border-gray-900/60 pt-4 mt-4">
            Stack: Terraform // OpenShift Clusters
          </div>
        </div>

        {/* Box 4: Mitigation Toil Automation */}
        <div className="md:col-span-4 glass-panel p-6 rounded-xl text-left glow-cyan-hover transition-all flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wide block mb-3">// Runtime Scripting</span>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">40% Manual Toil Cut</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Constructed system automated task triggers and operational runbook loops using Python. Replaced repeated manually managed system checks to protect production continuity with zero configuration drift.
            </p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono border-t border-gray-900/60 pt-4 mt-4">
            Automation Engine: Python Core System Controllers
          </div>
        </div>

        {/* Box 5: Migration Metric Impact */}
        <div className="md:col-span-4 glass-panel p-6 rounded-xl text-left glow-cyan-hover transition-all flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-cyanNeon font-bold uppercase tracking-wide block mb-3">// Data Layer Migration</span>
            <h3 className="text-lg font-bold text-white tracking-tight mb-2">40% Latency Compression</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Successfully migrated active production instances securely from DocumentDB architectures to high-concurrency MongoDB Atlas frameworks, yielding a simultaneous 30% reduction in global system storage overhead expenses.
            </p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono border-t border-gray-900/60 pt-4 mt-4">
            Impact Payload: Performance & Cost Pruning Map
          </div>
        </div>

      </div>
    </section>
  );
}