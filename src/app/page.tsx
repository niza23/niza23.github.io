'use client'
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-200 relative selection:bg-sky-500/30">
      
      {/* Background Ambience */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="pt-16 relative z-10">
        <div id="hero"><Hero /></div>
        {/* Additional sections (About, Technical Expertise, IBM Experience, SRE Work, etc.) can be mapped here pulling from portfolio.ts */}
      </div>
    </main>
  );
}