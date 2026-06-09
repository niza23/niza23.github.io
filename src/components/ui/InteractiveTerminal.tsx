'use client'
import { useState, useRef, useEffect } from "react";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<string[]>([
    "Initializing SRE-Core OS v2.26.0-LTS...",
    "Connection authenticated securely to node: niza23.github.io",
    "Type 'help' or 'get skills' to interrogate active metrics logs.",
    ""
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = [`niza23@infra-ops:~$ ${input}`];

    if (cmd === "help") {
      response.push("Supported commands: help, clear, get skills, check uptime, telemetry");
    } else if (cmd === "get skills") {
      response.push(
        " -> Compute & Orchestration: AWS (EC2, S3, IAM, VPC), Core Kubernetes, OpenShift, Docker, Helm",
        " -> Infrastructure as Code: Terraform, Ansible, GitOps Flow (ArgoCD, Jenkins)",
        " -> Systems Monitoring: Prometheus, Grafana metrics pipelines, Instana, CloudWatch telemetry",
        " -> Automation Logic: Python scripting modules, Shell parsing utilities, Linux platforms, C++ algorithms"
      );
    } else if (cmd === "check uptime") {
      response.push(" -> Cluster Health: STABLE // All 10+ core production application nodes report healthy status.", " -> Telemetry Target: 99.9% service availability matrix verified successfully.");
    } else if (cmd === "telemetry") {
      response.push(" -> Financial Optimizations: Decreased global AWS monitoring configurations budget by 50% ($78,000 saved baseline metrics annually).", " -> Performance Scaling: Reduced standard document latency parameters securely by 40%.");
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cmd !== "") {
      response.push(`bash: token identification exception failed for command: '${cmd}'. Execute 'help' blueprint.`);
    } else {
      return;
    }

    setHistory([...history, ...response, ""]);
    setInput("");
  };

  return (
    <div className="w-full bg-[#090d16] border border-gray-800 rounded-lg overflow-hidden font-mono shadow-2xl text-left">
      <div className="bg-[#111827] px-4 py-2.5 flex items-center gap-2 border-b border-gray-800/80">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-xs text-gray-400 ml-2">telemetry_interrogator.sh</span>
      </div>
      <div className="p-4 h-64 overflow-y-auto text-xs text-gray-300 space-y-1.5 bg-[#030712]/60">
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">{line}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleCommand} className="flex bg-[#030712] border-t border-gray-800 px-4 py-3 items-center">
        <span className="text-xs text-cyanNeon mr-2">niza23@infra-ops:~$</span>
        <input
          type="text"
          className="bg-transparent focus:outline-none text-xs text-white flex-grow font-mono"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          aria-label="Terminal Shell Entry Line"
        />
      </form>
    </div>
  );
}