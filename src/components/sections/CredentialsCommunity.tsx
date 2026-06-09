'use client'
import { motion } from "framer-motion";

export default function CredentialsCommunity() {
  const awards = [
    { title: "HashiCorp Terraform Associate", desc: "Certified in Infrastructure as Code, automation, and cloud provisioning.", date: "Jun 2025", type: "Certification" },
    { title: "IBM Mentor Badge", desc: "Recognized for mentoring interns and new hires in professional programs.", date: "Jun 2025", type: "Leadership" },
    { title: "CSR Volunteer Award", desc: "Honored for contributions to community outreach and 6+ CSR initiatives.", date: "Jun 2024", type: "Volunteering" },
    { title: "People's Choice Award (Developer Jumpstart)", desc: "Created Verify Assistant for IBM internal hackathon.", date: "Dec 2024", type: "Hackathon" }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 pb-32">
      <div className="mb-12 text-left">
        <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <span className="text-cyanNeon font-mono text-xl">04.</span> Certifications & Extra-Curricular
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className="p-5 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-900/80 transition-all text-left flex items-start gap-4"
          >
            <div className="text-3xl">{award.type === "Certification" ? "📜" : award.type === "Leadership" ? "🤝" : award.type === "Hackathon" ? "🏆" : "🌍"}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-white">{award.title}</h3>
                <span className="text-[9px] font-mono text-gray-500 bg-gray-950 px-2 py-0.5 rounded">{award.date}</span>
              </div>
              <p className="text-sm text-gray-400">{award.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}