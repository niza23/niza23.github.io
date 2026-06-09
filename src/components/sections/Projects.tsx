'use client'
import { motion } from "framer-motion";

export default function Projects() {
  const projectsList = [
    {
      title: "AIOps Incident Response Assistant",
      tech: ["Python", "LangChain", "OpenAI API", "CloudWatch", "Prometheus"],
      date: "Feb 2026",
      desc: "Built an AI-powered incident assistant that ingests alerts, auto-generates root cause summaries, and delivers remediation steps via Slack. Reduced MTTR by 40% via PagerDuty webhook automation."
    },
    {
      title: "GitOps CI/CD Pipeline on EKS",
      tech: ["Jenkins", "ArgoCD", "Docker", "AWS EKS", "ALB", "IRSA"],
      date: "Aug 2025",
      desc: "Designed multi-stage pipeline for automated builds. Implemented ArgoCD with sync policies, drift detection, and self-healing for pull-based GitOps deployments on Kubernetes."
    },
    {
      title: "Kubernetes Monitoring on AWS EKS",
      tech: ["AWS", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      date: "Jun 2025",
      desc: "Engineered secure AWS EKS cluster with OIDC and IRSA. Reduced alert detection time by 30% by deploying custom observability dashboards via Helm."
    }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-900/50">
      <div className="mb-12 text-left flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="text-cyanNeon font-mono text-xl">03.</span> Core Engineering Projects
          </h2>
          <p className="text-sm text-gray-400 mt-2">Production-grade systems from my GitHub & professional lab.</p>
        </div>
        <a href="https://github.com/niza23" target="_blank" rel="noreferrer" className="text-xs font-mono text-cyanNeon hover:underline hidden md:block">
          View all on GitHub &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyanNeon transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] text-gray-500 font-mono mb-3">{project.date}</div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-1 bg-cyanNeon/10 text-cyanNeon rounded border border-cyanNeon/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}