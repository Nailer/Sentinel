
export default function AILogs() {
  return (
    <div>
      
{/* Top Navigation */}

{/* Main Content Area */}
<main className="flex-1 flex flex-col md:flex-row  relative overflow-hidden">
{/* Background decorative elements */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[80px]"></div>
</div>
{/* Left Side: Terminal */}
<section className="flex-1 flex flex-col p-6 md:p-8 min-w-0 z-10 border-r border-surface-border bg-background-dark/50 backdrop-blur-sm">
<div className="flex flex-col gap-2 mb-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-2xl">terminal</span>
<h1 className="text-3xl font-black tracking-tight text-white">Live Reasoning Logs</h1>
</div>
<p className="text-emerald-400/80 font-medium">Monitoring Node: GEMINI-ALPHA-04 // Active Trace</p>
</div>
{/* Terminal Window */}
<div className="glass-panel flex-1 rounded-xl overflow-hidden flex flex-col shadow-2xl shadow-emerald-900/20">
{/* Terminal Header */}
<div className="bg-surface-dark border-b border-surface-border px-4 py-2 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="text-xs font-mono text-emerald-400/60 flex items-center gap-2">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        LIVE STREAM
                    </div>
</div>
{/* Logs Area */}
<div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed">
<div className="flex flex-col gap-3">
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.002</span>
<span className="text-emerald-500 font-bold">&gt; SYSTEM:</span>
<span>Initializing active scan on Pool #0x82...B2</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.150</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span className="text-white">Analyzing liquidity pattern...</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.320</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span>Detecting anomalous velocity spike (Z-score: 4.2).</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.412</span>
<span className="text-blue-400 font-bold">&gt; ORACLE:</span>
<span>Chainlink price feed update verified. No deviation.</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.500</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span>Cross-referencing historical flash loan vectors...</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:45.880</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span className="text-yellow-400">WARNING: Interaction pattern matches &apos;Sandwich Attack&apos; heuristic (Confidence: 89%).</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:46.105</span>
<span className="text-purple-400 font-bold">&gt; GUARDIAN:</span>
<span>Pre-arming pause module. Awaiting final confirmation...</span>
</div>
<div className="flex gap-3 text-slate-400">
<span className="text-slate-600 shrink-0 select-none">14:02:46.220</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span>Evaluating Economic Shift... TVL delta is within safe bounds for now.</span>
</div>
<div className="flex gap-3 text-slate-400 opacity-50">
<span className="text-slate-600 shrink-0 select-none">14:02:46.400</span>
<span className="text-primary font-bold">&gt; GEMINI-AI:</span>
<span>Continuing monitoring loop...</span>
</div>
<div className="flex gap-3 text-slate-400 animate-pulse">
<span className="text-slate-600 shrink-0 select-none">14:02:46.450</span>
<span className="text-primary font-bold">&gt; _</span>
</div>
</div>
</div>
</div>
</section>
{/* Right Side: Detective&apos;s Report */}
<section className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto custom-scrollbar z-10 bg-background-light dark:bg-background-dark">
<div className="max-w-2xl mx-auto w-full">
<div className="flex items-center justify-between mb-8">
<div className="flex flex-col">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white">Detective&apos;s Report</h2>
<span className="text-slate-500 dark:text-slate-400 text-sm">Incident ID: #8829-ALPHA</span>
</div>
<div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center gap-2">
<span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
<span className="text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">Elevated Risk</span>
</div>
</div>
{/* Risk Markers Cards */}
<div className="space-y-6">
{/* Velocity Marker */}
<div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
<span className="material-symbols-outlined">speed</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Velocity Spike</h3>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    Funds moved through the liquidity pool <strong>420% faster</strong> than the 24-hour moving average. This rapid turnover suggests automated high-frequency bot activity often associated with manipulation attempts.
                                </p>
</div>
</div>
</div>
{/* Interaction Marker */}
<div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm ring-1 ring-yellow-500/20">
<div className="flex items-start gap-4">
<div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-600 dark:text-yellow-400">
<span className="material-symbols-outlined">hub</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Suspicious Interaction</h3>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    The contract interaction pattern mimics a classic <strong>sandwich attack</strong> vector. A large buy order was detected immediately preceding a user transaction, followed by an immediate sell order.
                                </p>
</div>
</div>
</div>
{/* Economic Shift Marker */}
<div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-purple-500/10 rounded-lg text-purple-500 dark:text-purple-400">
<span className="material-symbols-outlined">query_stats</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Economic Shift</h3>
<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    Total Value Locked (TVL) experienced a temporary <strong>2.5% deviation</strong>. While currently within safe bounds, the correlation with the velocity spike warrants closer observation of the protocol&apos;s solvency.
                                </p>
</div>
</div>
</div>
</div>
{/* Action Area */}
<div className="mt-8 pt-8 border-t border-slate-200 dark:border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-slate-500 dark:text-slate-400">
                        Analysis powered by <span className="text-slate-900 dark:text-white font-semibold">Gemini 1.5 Pro</span>
</div>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/5">
<span className="material-symbols-outlined text-[20px]">troubleshoot</span>
                        View Trace in Opik
                    </button>
</div>
</div>
</section>
</main>

    </div>
  );
}
