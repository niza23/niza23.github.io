'use client'
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AIOps Incident Response Assistant Architecture",
      stack: ["Python", "LangChain", "OpenAI API", "CloudWatch", "Prometheus", "Slack"],
      metrics: "Reduced system outage diagnostics MTTR cycles cleanly by 40%",
      desc: "Engineered and deployed an automated analysis system integrating LangChain pipelines with infrastructure notification channels. The setup listens for telemetry warning logs, analyzes data payloads, evaluates conditions automatically, and routes action reports directly to team communications targets.",
    },
    {
      title: "GitOps Declarative Orchestration Delivery Infrastructure",
      stack: ["Jenkins", "ArgoCD", "Docker", "AWS EKS", "ALB Ingress", "Kubernetes"],
      metrics: "Enforced configuration compliance state across AWS clusters",
      desc: "Constructed standard declarative continuous execution frameworks targeting elastic containers managed inside secure cloud boundaries. Linked runtime triggers to auto-scaling policies to maintain operational compliance targets smoothly during demand shifts.",
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-800/40">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 text-white tracking-tight">
        <span className="text-cyanNeon font-mono text-lg">02.</span> Core Architectural Engineering Projects
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass-panel p-6 rounded-xl glow-hover transition-all">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.stack.map((t, ti) => (
                <span key={ti} className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyanNeon/10 text-cyanNeon border border-cyanNeon/20">{t}</span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{p.title}</h3>
            <div className="text-[11px] text-emeraldUptime font-mono mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emeraldUptime" />{p.metrics}
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-normal mb-4">{p.desc}</p>
            <div className="border-t border-gray-800/60 pt-4 flex justify-between items-center text-[11px] font-mono">
              <span className="text-gray-500">Status // Verified Production State</span>
              <a href="https://github.com/niza23" target="_blank" rel="noreferrer" className="text-cyanNeon hover:underline">inspect_source_code() &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}