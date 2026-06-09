'use client'
import { motion } from "framer-motion";

export default function Timeline() {
  const milestones = [
    {
      role: "Infrastructure / Site Reliability Engineer",
      team: "IBM India Software Labs (Pune)",
      date: "Jun 2023 – Present",
      bullets: [
        "Led FinOps cloud optimization architecture strategies cutting cloud systems evaluation configurations by 50% ($78,000 optimized baseline execution annually) through automated cluster right-sizing algorithms.",
        "Built resilient multinode container systems using customized Terraform provisioning parameters across secure enterprise VPC configurations.",
        "Engineered reliable declarative GitOps software release management frameworks running active ArgoCD loops paired with Jenkins pipelines."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      team: "IBM India Software Labs (Gandhinagar)",
      date: "Jan 2023 – Jun 2023",
      bullets: [
        "Eliminated 30% of manual environment configuration operations tasks by establishing automated infrastructure script tracking hooks written in Python and Bash shell environments.",
        "Drafted architectural troubleshooting guides mapping failure root causes to minimize repeat incident frequencies."
      ]
    }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-800/40">
      <h2 className="text-2xl md:text-3xl font-bold mb-16 text-white tracking-tight">
        <span className="text-cyanNeon font-mono text-lg">01.</span> Operational Evolution Journey
      </h2>
      <div className="relative border-l border-gray-800 ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
        {milestones.map((m, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian border border-cyanNeon flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cyanNeon" />
            </div>
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{m.role}</h3>
                  <p className="text-xs text-cyanNeon font-mono mt-0.5">{m.team}</p>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-gray-900 text-gray-400 border border-gray-800">{m.date}</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-400 pl-0 list-none">
                {m.bullets.map((b, bi) => (
                  <li key={bi} className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-cyanNeon">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}