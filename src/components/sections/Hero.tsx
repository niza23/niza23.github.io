'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 max-w-5xl mx-auto pt-20 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/60 border border-gray-800 text-xs text-cyanNeon font-mono mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyanNeon animate-pulse" />
            Kubernetes & Cloud Infrastructure Node
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]"
          >
            Hi, I'm Nidhi Zala.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyanNeon via-blue-400 to-indigo-500">
              Site Reliability Engineer.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl"
          >
            Main production-grade cloud infrastructure (AWS) ko design, scale aur automate karti hu. Mera focus manual toil ko eliminate karna, Kubernetes clusters ko manage karna aur 99.9% uptime ensure karna hai. Let's build reliable systems together.
          </motion.p>

          {/* Interactive Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10 w-full"
          >
            {/* Interactive "Send me a message" Mailto Link */}
            <a href="mailto:nidhizala2307@gmail.com?subject=Hello%20Nidhi!&body=I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect." 
               className="px-6 py-3 rounded-lg bg-cyanNeon text-white font-semibold text-sm hover:bg-cyanNeon/80 transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] flex items-center gap-2">
              <span>✉️</span> Send me a message
            </a>
            <a href="https://www.linkedin.com/in/nidhi-zala-2307/" target="_blank" rel="noreferrer" 
               className="px-6 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white font-semibold text-sm hover:border-cyanNeon transition-all flex items-center gap-2">
              <span>💼</span> LinkedIn Profile
            </a>
            <a href="https://github.com/niza23" target="_blank" rel="noreferrer" 
               className="px-6 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white font-semibold text-sm hover:border-cyanNeon transition-all flex items-center gap-2">
              <span>💻</span> GitHub
            </a>
          </motion.div>
        </div>

        {/* Right Side Cloud Visual */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-sm aspect-square bg-gray-900/50 rounded-full border border-gray-800 flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.1)]"
          >
             <div className="text-center p-6">
                <div className="text-6xl mb-4 animate-bounce">☸️</div>
                <h3 className="text-lg font-mono text-cyanNeon font-bold mb-2">Cluster Architecture</h3>
                <p className="text-xs text-gray-500 font-mono">Automating AWS, EKS, and GitOps Workflows</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}