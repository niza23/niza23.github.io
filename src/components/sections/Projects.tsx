'use client'
import { motion } from "framer-motion";

export default function Projects() {
  const awardsList = [
    { title: "HashiCorp Terraform Associate", desc: "Certified Infrastructure as Code Professional.", icon: "📜" },
    { title: "WomenTech Network", desc: "Global Ambassador promoting women in technology.", icon: "🌍" },
    { title: "IBM Mentor Badge", desc: "Mentored 35+ undergrads and junior engineers.", icon: "🤝" },
    { title: "People's Choice Award", desc: "Jumpstart Programme Hackathon Winner.", icon: "🏆" },
    { title: "CSR Volunteer Award 2024", desc: "Corporate Social Responsibility leader.", icon: "🌟" },
    { title: "Encode (CS Club) & IEEE", desc: "General Secretary (Encode) & IEEE Treasurer.", icon: "🏛️" }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4 border-t border-white/5">
      <div className="mb-16">
        <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-2">Ecosystem & Awards</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Leadership, Community, & Certs.
        </h2>
      </div>

      {/* Skills Matrix */}
      <div className="mb-16 glass-bento p-8 rounded-3xl">
        <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
        <div className="flex flex-wrap gap-3">
          {["Ansible", "GitOps", "ArgoCD", "Python", "Shell", "AWS", "Kubernetes", "Docker", "Terraform", "Grafana", "Prometheus", "Instana", "OpenShift", "Pandas", "NumPy", "scikit-learn"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-sm font-mono text-sky-300 hover:bg-sky-900/30 hover:border-sky-500/50 transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsList.map((award, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/30 transition-all text-left flex flex-col gap-3"
          >
            <div className="text-3xl">{award.icon}</div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">{award.title}</h4>
              <p className="text-sm text-slate-400">{award.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}