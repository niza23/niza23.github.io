'use client'
import { motion } from "framer-motion";

export default function ExperienceGrid() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 border-t border-white/5">
      <div className="mb-16">
        <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-2">Experience Map</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          3.5+ Years of Engineering Evolution.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main IBM Professional Card */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} 
          className="md:col-span-2 glass-bento p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px]" />
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center text-xl">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">IBM India Software Labs</h3>
                  <p className="text-sky-400 font-mono text-xs mt-1">CloudOps & SRE Professional • Jul 2024 - Present</p>
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 mb-8 pl-4 list-disc marker:text-sky-500">
              <li>Built and operated OpenShift clusters, ensuring secure, resilient workloads for 40+ microservices.</li>
              <li>Improved application latency and reduced storage costs by migrating from Amazon DocumentDB to MongoDB Atlas.</li>
              <li>Led org-wide FinOps initiative reducing AWS monitoring costs through metric rationalization.</li>
              <li>Maintained MTTR &lt; 15 mins for critical incidents during 24x7 on-call rotations using PagerDuty.</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-sky-400 font-black text-2xl mb-1">99.9%</div>
              <p className="text-xs text-slate-400">Uptime across 10+ services</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-indigo-400 font-black text-2xl mb-1">CI/CD</div>
              <p className="text-xs text-slate-400">Jenkins, Docker, Helm & Git</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="text-emerald-400 font-black text-2xl mb-1">IaC</div>
              <p className="text-xs text-slate-400">Terraform Provisioning</p>
            </div>
          </div>
        </motion.div>

        {/* Previous IBM Role */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}}
          className="glass-bento p-6 rounded-3xl flex flex-col justify-between group">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-4 block">Jun 2023 - Jul 2024</span>
            <h3 className="text-xl font-bold text-white mb-2">Software Developer</h3>
            <p className="text-xs text-sky-400 font-mono mb-4">IBM India Software Labs</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Automated tasks using Shell scripting, reducing manual effort by 30%. Upgraded OpenShift clusters with minimal downtime and supported incident management via PagerDuty.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-700/50 text-xs text-slate-400 font-mono">
            Started as SDE Intern (Jan 2023) learning AWS & Docker.
          </div>
        </motion.div>

        {/* Data & Hardware Roots */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}}
          className="md:col-span-3 glass-bento p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
             <h3 className="text-lg font-bold text-white mb-2">Engineering Foundations & Data Science</h3>
             <p className="text-sm text-slate-300">
               Before cloud infrastructure, I built a <strong>Movie Recommendation Engine</strong> in Python (Pandas, scikit-learn) as an ML Intern at Candid Root Solutions. I also served as the <strong>DAQ Head for Team CZAR</strong>, designing Arduino Data Acquisition Systems for real-time telemetry at BAJA SAE India.
             </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-mono text-slate-300">Python</span>
            <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-mono text-slate-300">Arduino</span>
            <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-mono text-slate-300">Machine Learning</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}