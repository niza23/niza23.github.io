'use client'
import { motion } from "framer-motion";

export default function SkillsNodes() {
  const skillsList = [
    { category: "Cloud & IaC", icon: "☁️", items: [
      { name: "AWS (EC2, S3, IAM, VPC)", logo: "🟧" },
      { name: "Terraform", logo: "🟪" },
      { name: "Ansible", logo: "🔴" }
    ]},
    { category: "Containers & Orchestration", icon: "☸️", items: [
      { name: "Kubernetes", logo: "🟦" },
      { name: "OpenShift", logo: "🟥" },
      { name: "Docker & Helm", logo: "🐋" }
    ]},
    { category: "Monitoring & CI/CD", icon: "📊", items: [
      { name: "Prometheus & Grafana", logo: "📈" },
      { name: "Instana & CloudWatch", logo: "👁️" },
      { name: "Jenkins & ArgoCD (GitOps)", logo: "⚙️" }
    ]},
    { category: "Programming & Core", icon: "💻", items: [
      { name: "Python", logo: "🐍" },
      { name: "Shell Scripting / Linux", logo: "🐧" },
      { name: "C++ & DSA", logo: "⚙️" }
    ]}
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-900/50">
      <div className="mb-12 text-left">
        <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <span className="text-cyanNeon font-mono text-xl">01.</span> Technical Capabilities
        </h2>
        <p className="text-sm text-gray-400 mt-2">Core tools and frameworks I use to build resilient systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsList.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-cyanNeon/50 transition-all text-left"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
              <span>{skillGroup.icon}</span> {skillGroup.category}
            </h3>
            <div className="flex flex-col gap-3">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-950 p-2.5 rounded-lg border border-gray-800/80">
                  <span className="text-xl">{item.logo}</span>
                  <span className="text-sm font-mono text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}