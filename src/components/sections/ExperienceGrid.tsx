'use client'
import { motion } from "framer-motion";

export default function ExperienceGrid() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-900/50">
      <div className="mb-12 text-left">
        <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <span className="text-cyanNeon font-mono text-xl">02.</span> Professional Experience
        </h2>
      </div>

      <div className="space-y-6">
        {/* Current Role */}
        <motion.div className="p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950 border border-gray-800 hover:border-cyanNeon/50 transition-all text-left">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Infrastructure / Site Reliability Engineer</h3>
              <p className="text-cyanNeon font-mono text-sm mt-1">IBM India Software Labs • Pune, Maharashtra</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-gray-400 mt-3 md:mt-0 w-max">
              Jun 2023 – Present
            </span>
          </div>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Led FinOps initiative reducing AWS monitoring costs by 50% ($78K annually) through infrastructure right-sizing.
            </li>
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Deployed scalable cloud infrastructure using Terraform; built OpenShift clusters and provisioned MongoDB Atlas, AWS MSK, and PostgreSQL.
            </li>
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Implemented GitOps workflows using Jenkins and ArgoCD for Kubernetes deployments and automated release pipelines.
            </li>
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Maintained 99.9% uptime by defining SLIs/SLOs and error budgets for 10+ production services using Prometheus, Grafana, and PagerDuty.
            </li>
          </ul>
        </motion.div>

        {/* Intern Role */}
        <motion.div className="p-8 rounded-xl bg-gray-900/40 border border-gray-800 text-left">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Software Development Engineer Intern</h3>
              <p className="text-cyanNeon font-mono text-sm mt-1">IBM India Software Labs • Gandhinagar, Gujarat</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-gray-400 mt-3 md:mt-0 w-max">
              Jan 2023 – Jun 2023
            </span>
          </div>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Streamlined health checks and monitoring workflows using Python and Shell scripts, reducing manual effort by 30%.
            </li>
            <li className="flex gap-2">
              <span className="text-cyanNeon">▹</span> Upgraded 6+ OpenShift clusters with minimal downtime and developed RCA runbooks for incident management.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}