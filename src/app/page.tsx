'use client'
import { config } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-12 md:py-24 gap-12">
      
      {/* Left Column: System Identity (Fixed on Desktop) */}
      <aside className="md:w-1/3 flex flex-col gap-8 md:sticky top-24 h-fit">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">{config.identity.name}</h1>
          <p className="text-sm text-zinc-400">{config.identity.role}</p>
          <p className="text-sm text-zinc-500">@ {config.identity.company}</p>
        </div>

        <div className="text-xs space-y-2 border-l border-zinc-800 pl-4">
          <p className="text-white">STATUS: <span className="text-emerald-500">ONLINE</span></p>
          <p>LOC: {config.identity.location}</p>
          <p>EDU: {config.identity.education}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm mt-8">
          <a href={`mailto:${config.identity.email}`} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <span className="text-zinc-600">&gt;</span> Email
          </a>
          <a href={`https://${config.identity.github}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <span className="text-zinc-600">&gt;</span> GitHub
          </a>
          <a href={`https://${config.identity.linkedin}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
            <span className="text-zinc-600">&gt;</span> LinkedIn
          </a>
        </div>
      </aside>

      {/* Right Column: Data Output Feed */}
      <main className="md:w-2/3 flex flex-col gap-16">
        
        <section>
          <h2 className="text-white text-sm font-bold border-b border-zinc-800 pb-2 mb-6 uppercase tracking-widest">~ / system_stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs text-zinc-500 mb-3">INFRASTRUCTURE</h3>
              <ul className="text-sm space-y-2 text-zinc-300">
                {config.system_stack.infrastructure.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 mb-3">AUTOMATION</h3>
              <ul className="text-sm space-y-2 text-zinc-300">
                {config.system_stack.automation.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 mb-3">OBSERVABILITY</h3>
              <ul className="text-sm space-y-2 text-zinc-300">
                {config.system_stack.observability.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white text-sm font-bold border-b border-zinc-800 pb-2 mb-6 uppercase tracking-widest">~ / execution_logs</h2>
          <div className="space-y-10">
            {config.logs.map((log, i) => (
              <div key={i} className="group">
                <span className="text-xs text-zinc-600 font-mono mb-2 block">{log.timestamp}</span>
                <h3 className="text-base text-zinc-200 mb-2 font-medium">{log.event}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{log.details}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
