
export default function Dashboard() {
  return (
    <div>
      
<div className="layout-container flex grow flex-col">
{/* Header */}

{/* Main Content Area */}
<main className="flex-1 px-6 py-8 md:px-10 lg:px-40 w-full max-w-[1600px] mx-auto">
{/* Page Header */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">ecg_heart</span>
<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Pulse Dashboard</h1>
</div>
<p className="text-secondary text-base font-normal leading-normal">Autonomous Protocol Guardianship Active • Chainlink Feeds Synced</p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-card-dark border border-border-dark">
<div className="size-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-xs font-mono text-secondary">LIVE UPDATES</span>
</div>
</div>
{/* Dashboard Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* Main Status Monitor (Dominant Center) */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/* Health Traffic Light */}
<div className="rounded-xl border border-border-dark bg-card-dark p-8 relative overflow-hidden group">
{/* Background Glow Effect */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="flex flex-col items-center justify-center text-center relative z-10">
<div className="mb-4 relative">
<div className="size-24 rounded-full border-4 border-primary/30 flex items-center justify-center bg-background-dark shadow-[0_0_30px_rgba(0,255,149,0.3)]">
<span className="material-symbols-outlined text-5xl text-primary drop-shadow-[0_0_10px_rgba(0,255,149,0.8)]">check_circle</span>
</div>
<div className="absolute inset-0 rounded-full border border-primary/50 animate-[ping_3s_ease-in-out_infinite]"></div>
</div>
<h2 className="text-primary tracking-widest text-3xl font-black uppercase mb-2 drop-shadow-md">System Nominal</h2>
<p className="text-secondary max-w-md mx-auto text-sm">All guardian protocols are operating within expected parameters. No anomalies detected in the last 24 hours.</p>
<div className="grid grid-cols-3 gap-8 mt-8 w-full max-w-lg">
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-secondary uppercase tracking-wider">Latency</span>
<span className="text-white font-mono font-bold">12ms</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-secondary uppercase tracking-wider">Uptime</span>
<span className="text-white font-mono font-bold">99.99%</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-xs text-secondary uppercase tracking-wider">Gas</span>
<span className="text-white font-mono font-bold">24 Gwei</span>
</div>
</div>
</div>
</div>
{/* Charts Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Vault Solvency Chart */}
<div className="rounded-xl border border-border-dark bg-card-dark p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-secondary text-sm font-medium mb-1">Vault Solvency Ratio</p>
<div className="flex items-baseline gap-2">
<h3 className="text-white text-3xl font-bold">142%</h3>
<span className="text-primary text-sm font-medium flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> +2.1%
                                        </span>
</div>
</div>
<button className="text-secondary hover:text-white"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="h-[180px] w-full relative">
{/* Mock Chart SVG */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 100">
<defs>
<linearGradient id="solvencyGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#00ff95" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#00ff95" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,60 200,60 C250,60 250,20 300,20 V100 H0 Z" fill="url(#solvencyGradient)"></path>
<path d="M0,80 C50,80 50,40 100,40 C150,40 150,60 200,60 C250,60 250,20 300,20" fill="none" stroke="#00ff95" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
</svg>
{/* Grid Lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-secondary font-mono">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
</div>
</div>
{/* Risk Metrics Chart */}
<div className="rounded-xl border border-border-dark bg-card-dark p-6 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-secondary text-sm font-medium mb-1">Risk Exposure Index</p>
<div className="flex items-baseline gap-2">
<h3 className="text-white text-3xl font-bold">Low</h3>
<span className="text-secondary text-sm font-medium">0.0% Change</span>
</div>
</div>
<button className="text-secondary hover:text-white"><span className="material-symbols-outlined">more_horiz</span></button>
</div>
<div className="h-[180px] w-full relative">
{/* Mock Chart SVG */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 100">
<defs>
<linearGradient id="riskGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#8dceb3" stopOpacity="0.2"></stop>
<stop offset="100%" stopColor="#8dceb3" stopOpacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,90 C40,90 60,85 100,85 C140,85 160,88 200,88 C240,88 260,82 300,82 V100 H0 Z" fill="url(#riskGradient)"></path>
<path d="M0,90 C40,90 60,85 100,85 C140,85 160,88 200,88 C240,88 260,82 300,82" fill="none" stroke="#8dceb3" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
</svg>
{/* Grid Lines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-secondary font-mono">
<span>00:00</span>
<span>06:00</span>
<span>12:00</span>
<span>18:00</span>
</div>
</div>
</div>
</div>
{/* Manual Override Sidebar */}
<div className="lg:col-span-4 flex flex-col h-full">
<div className="rounded-xl border border-border-dark bg-card-dark p-6 h-full flex flex-col">
<div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
<span className="material-symbols-outlined text-white">admin_panel_settings</span>
<h3 className="text-lg font-bold text-white">Manual Override</h3>
</div>
<div className="flex flex-col gap-6 flex-1">
<div className="bg-background-dark/50 p-4 rounded-lg border border-white/5">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1">smart_toy</span>
<div>
<h4 className="text-white text-sm font-bold mb-1">Gemini AI Guardian</h4>
<p className="text-secondary text-xs leading-relaxed">AI is currently monitoring 12 transaction vectors. Automated intervention is enabled.</p>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-center gap-6 py-4">
{/* Emergency Pause Button */}
<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-danger to-red-900 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
<button className="relative w-full flex items-center justify-between bg-background-dark border border-danger/50 text-danger hover:bg-danger hover:text-white px-6 py-5 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,59,48,0.3)]">
<div className="flex flex-col items-start">
<span className="text-lg font-black tracking-wider uppercase">Pause Protocol</span>
<span className="text-[10px] opacity-80 font-mono">EMERGENCY STOP</span>
</div>
<span className="material-symbols-outlined text-3xl">gpp_bad</span>
</button>
</div>
{/* Resume Button */}
<div className="group relative">
<div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-green-800 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
<button className="relative w-full flex items-center justify-between bg-background-dark border border-primary/50 text-primary hover:bg-primary hover:text-background-dark px-6 py-5 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,255,149,0.3)]">
<div className="flex flex-col items-start">
<span className="text-lg font-black tracking-wider uppercase">Resume Ops</span>
<span className="text-[10px] opacity-80 font-mono">NORMAL OPERATION</span>
</div>
<span className="material-symbols-outlined text-3xl">play_circle</span>
</button>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/10">
<h4 className="text-secondary text-xs font-bold uppercase tracking-wider mb-3">Recent Security Events</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-white">New Vault initialized</span>
<span className="text-secondary text-xs ml-auto">2m ago</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-white">Price Feed update</span>
<span className="text-secondary text-xs ml-auto">5m ago</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="size-2 rounded-full bg-secondary"></span>
<span className="text-secondary">Routine audit check</span>
<span className="text-secondary text-xs ml-auto">1h ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Bottom Ticker */}
<div className="mt-8 flex items-center gap-4 py-3 px-4 border-y border-white/5 bg-background-dark/30">
<span className="text-xs font-bold text-primary uppercase whitespace-nowrap">Latest Blocks:</span>
<div className="flex gap-8 overflow-hidden w-full relative">
<div className="flex gap-8 animate-marquee whitespace-nowrap text-xs font-mono text-secondary">
<span>BLOCK #18293049 [VALIDATED]</span>
<span>TX: 0x892...392 [SECURE]</span>
<span>ORACLE: ETH/USD $2,842.21 [SYNCED]</span>
<span>BLOCK #18293050 [MINING]</span>
<span>GEMINI AI: SENTIMENT NEUTRAL</span>
</div>
</div>
</div>
</main>
</div>


    </div>
  );
}
