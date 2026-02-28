"use client";
import { useState } from "react";

export default function Setup() {
  const [volumeSpike, setVolumeSpike] = useState(100);
  const [volatility, setVolatility] = useState(15);
  const [confidence, setConfidence] = useState(92);
  
  return (
    <div>
      
<div className="flex flex-col h-full grow">
{/* Header */}

{/* Main Content */}
<div className="pt-24 pb-12 px-4 md:px-10 flex flex-1 justify-center">
<div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
{/* Page Title */}
<div className="flex flex-col gap-2 mb-10">
<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Sentinel Setup Wizard</h1>
<p className="text-text-secondary text-lg font-normal leading-normal">Configure your autonomous protocol guardian in 3 simple steps.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
{/* Vertical Stepper */}
<div className="hidden lg:flex flex-col h-fit sticky top-32">
{/* Step 1 Indicator */}
<div className="group flex gap-4">
<div className="flex flex-col items-center">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-background-dark font-bold">1</div>
<div className="w-[2px] h-16 bg-primary my-2"></div>
</div>
<div className="pt-1">
<p className="text-primary font-bold text-sm uppercase tracking-wide">Vault Connection</p>
<p className="text-text-secondary text-xs mt-1">Active</p>
</div>
</div>
{/* Step 2 Indicator */}
<div className="group flex gap-4">
<div className="flex flex-col items-center">
<div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border-dark text-text-secondary font-bold bg-surface-dark">2</div>
<div className="w-[2px] h-16 bg-border-dark my-2"></div>
</div>
<div className="pt-1">
<p className="text-white font-medium text-sm uppercase tracking-wide opacity-60">Configuration</p>
<p className="text-text-secondary text-xs mt-1">Pending</p>
</div>
</div>
{/* Step 3 Indicator */}
<div className="group flex gap-4">
<div className="flex flex-col items-center">
<div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-border-dark text-text-secondary font-bold bg-surface-dark">3</div>
</div>
<div className="pt-1">
<p className="text-white font-medium text-sm uppercase tracking-wide opacity-60">Authorization</p>
<p className="text-text-secondary text-xs mt-1">Locked</p>
</div>
</div>
</div>
{/* Steps Content Container */}
<div className="flex flex-col gap-10">
{/* Step 1 Card */}
<div className="bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">link</span>
                                        Vault Connection
                                    </h3>
<p className="text-text-secondary text-sm">Connect the smart contract you wish to protect.</p>
</div>
<span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase">Step 1</span>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex flex-col gap-4">
<label className="flex flex-col">
<span className="text-white text-sm font-medium mb-2">Vault Smart Contract Address</span>
<div className="relative">
<input className="w-full bg-background-dark border border-border-dark rounded-lg px-4 py-3 text-white placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm" placeholder="0x..." value="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"/>
<span className="material-symbols-outlined absolute right-3 top-3 text-primary cursor-pointer text-lg">check_circle</span>
</div>
</label>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-text-secondary">Network: <span className="text-white font-mono">Ethereum Mainnet</span></span>
</div>
</div>
{/* Live Scan Card */}
<div className="bg-background-dark/50 rounded-lg border border-border-dark p-4 flex flex-col justify-between">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-bold uppercase text-text-secondary tracking-wider">Live Scan</span>
<span className="material-symbols-outlined text-text-secondary text-lg">radar</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end">
<span className="text-sm text-text-secondary">Balance</span>
<span className="text-lg font-mono font-bold text-white">1,240.54 ETH</span>
</div>
<div className="w-full bg-border-dark h-[1px]"></div>
<div className="flex justify-between items-end">
<span className="text-sm text-text-secondary">Chain ID</span>
<span className="text-sm font-mono font-bold text-primary">1 (Mainnet)</span>
</div>
</div>
</div>
</div>
</div>
{/* Step 2 Card */}
<div className="bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary">tune</span>
                                        Threshold Configuration
                                    </h3>
<p className="text-text-secondary text-sm">Set parameters for autonomous intervention.</p>
</div>
<span className="bg-border-dark text-text-secondary text-xs font-bold px-2 py-1 rounded uppercase">Step 2</span>
</div>
<div className="space-y-8">
{/* Slider 1 */}
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-white">Transaction Volume Spike</label>
<span className="text-sm font-bold text-primary bg-primary/10 px-2 rounded font-mono">{volumeSpike}%</span>
</div>
<input className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value={volumeSpike} onChange={(e) => setVolumeSpike(Number(e.target.value))} />
<p className="text-xs text-text-secondary mt-1">Trigger alerts when volume exceeds average by this percentage.</p>
</div>
{/* Slider 2 */}
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-white">Price Volatility Floor</label>
<span className="text-sm font-bold text-primary bg-primary/10 px-2 rounded font-mono">{volatility}%</span>
</div>
<input className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value={volatility} onChange={(e) => setVolatility(Number(e.target.value))} />
<p className="text-xs text-text-secondary mt-1">Halt protocols if asset price drops more than x% within 1 block.</p>
</div>
{/* Slider 3 */}
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-white flex items-center gap-2">
                                            AI Confidence Score 
                                            <span className="material-symbols-outlined text-xs text-text-secondary" title="Minimum confidence required for autonomous action">info</span>
</label>
<span className="text-sm font-bold text-primary bg-primary/10 px-2 rounded font-mono">{confidence}/100</span>
</div>
<input className="w-full h-2 bg-border-dark rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value={confidence} onChange={(e) => setConfidence(Number(e.target.value))} />
<p className="text-xs text-text-secondary mt-1">Gemini AI must be this confident to execute emergency pause.</p>
</div>
</div>
</div>
{/* Step 3 Card */}
<div className="bg-surface-dark border border-border-dark rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 opacity-90">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-text-secondary">shield_lock</span>
                                        Authorize Sentinel Link
                                    </h3>
<p className="text-text-secondary text-sm">Deploy the guardian to the network.</p>
</div>
<span className="bg-border-dark text-text-secondary text-xs font-bold px-2 py-1 rounded uppercase">Step 3</span>
</div>
<div className="bg-background-dark/30 rounded-lg p-5 border border-dashed border-border-dark flex flex-col items-center justify-center text-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-border-dark flex items-center justify-center">
<span className="material-symbols-outlined text-text-secondary">smart_toy</span>
</div>
<div>
<h4 className="text-white font-medium">Ready to Deploy</h4>
<p className="text-text-secondary text-xs max-w-sm mx-auto mt-1">This will initialize the Gemini Agent and set up the on-chain listeners for the specified vault.</p>
</div>
{/* Fake Progress Bar State (Simulating 'Deploying') */}
<div className="w-full max-w-sm mt-2">
<div className="flex justify-between text-xs text-text-secondary mb-1">
<span>Deploying CRE Workflow...</span>
<span>45%</span>
</div>
<div className="w-full bg-background-dark rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full w-[45%] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_1s_infinite] transform -skew-x-12 translate-x-[-100%]"></div>
</div>
</div>
<div className="flex justify-start gap-2 mt-2 text-[10px] text-text-secondary font-mono">
<span className="text-primary">&gt; Initializing Gemini Agent</span>
</div>
</div>
</div>
<div className="flex justify-end gap-4">
<button className="px-6 py-2.5 rounded-lg border border-border-dark text-white font-medium hover:bg-border-dark transition-colors">
                                    Back
                                </button>
<button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-background-dark font-bold transition-all shadow-[0_0_15px_rgba(0,255,149,0.2)] hover:shadow-[0_0_20px_rgba(0,255,149,0.4)] flex items-center gap-2">
                                    Activate Sentinel CRE
                                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Animation Styles for shimmer */}
<style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    ` }} />

    </div>
  );
}
