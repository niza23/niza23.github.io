'use client'
import { motion } from "framer-motion";

export default function CredentialsCommunity() {
  const credentialsList = [
    { title: "HashiCorp Terraform Associate", issuer: "Issued Jun 2025 // Verification Active", desc: "Certified professional infrastructure-as-code automation and declarative cloud orchestration topology models." },
    { title: "IBM Professional Mentor Badge", issuer: "Issued Jun 2025 // Executive Program", desc: "Recognized corporate leadership credit for training, evaluating, and technical coaching interns and software hires inside IBM professional teams." },
    { title: "Developer Jumpstart Innovation Award", issuer: "People's Choice Title // Dec 2024", desc: "Awarded top design honors for architecting 'Verify Assistant' AI tooling maps within an internal engineering hackathon track." }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 border-b border-gray-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column Credentials */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <span className="text-cyanNeon font-mono text-xl">05.</span> Verified Achievements
            </h2>
            <p className="text-xs text-gray-400 mt-1 font-mono mb-8">Professional honors, cloud technical certifications, and system validation records.</p>
          </div>

          {credentialsList.map((cred, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-5 rounded-xl glow-cyan-hover transition-all border border-gray-800/80"
            >
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="text-base font-bold text-white tracking-tight">{cred.title}</h3>
                <span className="text-[8px] font-mono text-cyanNeon uppercase tracking-widest px-2 py-0.5 rounded bg-cyanNeon/10 border border-cyanNeon/20">CRED_0{idx+1}</span>
              </div>
              <div className="text-[10px] text-emeraldUptime font-mono mb-2">{cred.issuer}</div>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">{cred.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: High-End Community Media Integration Cards */}
        <div className="lg:col-span-5 space-y-4 text-left lg:pt-20">
          
          {/* Box 1: CSR Impact Media Frame */}
          <div className="glass-panel p-4 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900/60 flex flex-col justify-between group min-h-[220px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-wider">// Social Impact Proof</span>
              <span className="text-[9px] font-mono text-amber-400 font-bold">[DEMO_IMAGE]</span>
            </div>
            
            {/* Live Visual Render */}
            <div className="h-24 rounded-lg overflow-hidden relative border border-gray-800 bg-black/40 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=400&q=80" 
                alt="Community Proof: IBM CSR Volunteering and Hackathon awards"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center pointer-events-none">
                <span className="text-[10px] font-mono text-gray-300 font-bold tracking-wide">Community Proof: IBM CSR & Hackathons</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Honored for driving execution across 6+ discrete IBM corporate social responsibility initiatives, managing group resources, and leading volunteer workflows.
            </p>
          </div>

          {/* Box 2: Mentorship Media Frame */}
          <div className="glass-panel p-4 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-950 to-gray-900/60 flex flex-col justify-between group min-h-[220px]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-cyanNeon font-bold uppercase tracking-wider">// Mentorship Ecosystem</span>
              <span className="text-[9px] font-mono text-amber-400 font-bold">[DEMO_IMAGE]</span>
            </div>
            
            {/* Live Visual Render */}
            <div className="h-24 rounded-lg overflow-hidden relative border border-gray-800 bg-black/40 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80" 
                alt="Mentorship Proof: Mentoring Interns and IBM Alumni mock interviews"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center pointer-events-none">
                <span className="text-[10px] font-mono text-gray-300 font-bold tracking-wide">Mentorship Proof: Tech Coaching Loops</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Conducted deep mock system technical evaluation loops for over 35+ undergraduate computing candidates, tracking code parameters and building interviewing readiness.
            </p>
          </div>

          <div className="p-2 rounded bg-gray-950 border border-gray-900 text-[10px] font-mono text-center text-gray-500">
            🔒 Production Media Placeholders Fully Configured
          </div>

        </div>
      </div>
    </section>
  );
}