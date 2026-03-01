"use client";
import { useState } from "react";

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tvlDrop, setTvlDrop] = useState(20);
  const [withdrawalAlert, setWithdrawalAlert] = useState(100);
  const [vaultContract, setVaultContract] = useState("0x71C7656EC7ab88b098defB751B7401B5f6d8976F");
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <div className="flex-1 flex justify-center py-8 md:py-12 px-4 md:px-8">
      <div className="flex flex-col w-full max-w-5xl gap-8">
        {/* Title & Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">Setup Wizard</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Configure autonomous risk protection for your protocol.</p>
          </div>
          <div className="flex items-center gap-2 text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 text-xs font-mono uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>
        </div>

        {/* Dynamic Stepper */}
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <span className={`font-bold tracking-wider text-[11px] sm:text-xs uppercase transition-colors ${currentStep >= 1 ? 'text-primary' : 'text-slate-500'}`}>Target</span>
            <span className={`font-bold tracking-wider text-[11px] sm:text-xs uppercase transition-colors text-center ${currentStep >= 2 ? 'text-primary' : 'text-slate-500'}`}>Rules</span>
            <span className={`font-bold tracking-wider text-[11px] sm:text-xs uppercase transition-colors text-right ${currentStep >= 3 ? 'text-primary' : 'text-slate-500'}`}>Link</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
            <div className={`h-full transition-all duration-700 ease-in-out relative ${currentStep >= 1 ? 'bg-primary shadow-[0_0_10px_rgba(0,255,153,0.8)] w-1/3' : 'w-0'}`}>
                {currentStep === 1 && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-2 bg-white/50 blur-[2px] animate-pulse"></div>}
            </div>
            <div className={`h-full transition-all duration-700 ease-in-out delay-100 relative ${currentStep >= 2 ? 'bg-primary shadow-[0_0_10px_rgba(0,255,153,0.8)] w-1/3' : 'w-0'}`}>
                {currentStep === 2 && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-2 bg-white/50 blur-[2px] animate-pulse"></div>}
            </div>
            <div className={`h-full transition-all duration-700 ease-in-out delay-200 relative ${currentStep >= 3 ? 'bg-primary shadow-[0_0_10px_rgba(0,255,153,0.8)] w-1/3' : 'w-0'}`}>
                {currentStep === 3 && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-2 bg-white/50 blur-[2px] animate-pulse"></div>}
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Steps */}
          <div className="lg:col-span-8 flex flex-col gap-8 relative overflow-hidden min-h-[400px]">
            
            {/* Step 1: Target */}
            <div className={`absolute inset-0 transition-form-step ${currentStep === 1 ? 'opacity-100 translate-x-0 pointer-events-auto relative' : 'opacity-0 -translate-x-full pointer-events-none absolute'}`}>
                <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">1. Vault Configuration</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Specify the smart contract address you wish to protect.</p>
                      </div>
                      <span className="material-symbols-outlined text-primary text-3xl opacity-50">security</span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Vault Contract Address</span>
                        <div className="relative group/input">
                          <input 
                            type="text" 
                            className="w-full bg-slate-100 dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600 pl-11" 
                            value={vaultContract}
                            onChange={(e) => {
                                setVaultContract(e.target.value);
                                setIsVerified(false);
                            }}
                          />
                          <span className={`material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg transition-colors ${isVerified ? "text-primary" : "text-slate-400 dark:text-slate-500"}`}>token</span>
                          <button 
                            onClick={() => setIsVerified(true)}
                            className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                              isVerified 
                              ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_10px_rgba(0,255,153,0.2)] hover:bg-primary/20" 
                              : "bg-slate-200/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500"
                            }`}
                          >
                            <span className="material-symbols-outlined text-sm">{isVerified ? "check_circle" : "verified_user"}</span>
                            {isVerified ? "Verified" : "Verify"}
                          </button>
                        </div>
                      </label>

                      {isVerified && (
                        <div className="flex flex-wrap gap-4 mt-1 transition-all duration-500 opacity-100 translate-y-0">
                          <div className="bg-slate-100 dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-lg p-3 flex-1 min-w-[140px]">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Network</p>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white">Ethereum Mainnet</p>
                            </div>
                          </div>
                          <div className="bg-slate-100 dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-lg p-3 flex-1 min-w-[140px]">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Current Balance</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white font-mono">1,240.55 ETH</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                    <button 
                        onClick={() => setCurrentStep(2)}
                        className="bg-primary hover:bg-[#33ffad] active:bg-[#00cc7a] text-background-dark px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:shadow-[0_0_20px_rgba(0,255,153,0.5)] flex items-center gap-2"
                    >
                        Continue to Rules
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Step 2: Rules */}
            <div className={`absolute inset-0 transition-form-step ${currentStep === 2 ? 'opacity-100 translate-x-0 pointer-events-auto relative' : (currentStep < 2 ? 'opacity-0 translate-x-full pointer-events-none absolute' : 'opacity-0 -translate-x-full pointer-events-none absolute')}`}>
                <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/70"></div>
                  <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">2. Risk Sensitivity Rules</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Configure automated triggers based on on-chain anomalies.</p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-600 text-3xl">tune</span>
                    </div>

                    <div className="space-y-8">
                      {/* Slider 1 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-end">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">TVL Drop Threshold (24h)</label>
                          <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-0.5 rounded border border-primary/20">&gt; {tvlDrop}%</span>
                        </div>
                        <input 
                            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer range-slider" 
                            max="100" min="1" type="range" 
                            value={tvlDrop}
                            onChange={(e) => setTvlDrop(Number(e.target.value))}
                        />
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-600 font-mono">
                          <span>Strict (5%)</span>
                          <span>Loose (50%)</span>
                        </div>
                      </div>

                      {/* Slider 2 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-end">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Large Withdrawal Alert</label>
                          <span className="text-primary font-mono font-bold bg-primary/10 px-2 py-0.5 rounded border border-primary/20">&gt; {withdrawalAlert} ETH</span>
                        </div>
                        <input 
                            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer range-slider" 
                            max="1000" min="10" type="range" 
                            value={withdrawalAlert}
                            onChange={(e) => setWithdrawalAlert(Number(e.target.value))}
                        />
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-600 font-mono">
                          <span>10 ETH</span>
                          <span>1000 ETH</span>
                        </div>
                      </div>

                      {/* Checkbox */}
                      <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#1A1A1A]/50 cursor-pointer hover:border-primary/50 dark:hover:border-primary/50 transition-colors group">
                        <div className="relative flex items-center">
                          <input defaultChecked className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 checked:border-primary checked:bg-primary transition-all" type="checkbox" />
                          <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white dark:text-background-dark opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">Auto-Pause Protocol</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">If thresholds are breached, immediately pause contract.</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button 
                        onClick={() => setCurrentStep(1)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back
                    </button>
                    <button 
                        onClick={() => setCurrentStep(3)}
                        className="bg-primary hover:bg-[#33ffad] active:bg-[#00cc7a] text-background-dark px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:shadow-[0_0_20px_rgba(0,255,153,0.5)] flex items-center gap-2"
                    >
                        Finalize Link
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Step 3: Link */}
            <div className={`absolute inset-0 transition-form-step ${currentStep === 3 ? 'opacity-100 translate-x-0 pointer-events-auto relative' : 'opacity-0 translate-x-full pointer-events-none absolute'}`}>
                <div className="bg-gradient-to-br from-white/5 to-primary/5 dark:from-white/5 dark:to-primary/5 backdrop-blur-md border border-primary/30 p-6 md:p-8 rounded-xl flex flex-col gap-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-3 border-b border-primary/10 pb-4">
                    <div className="bg-primary/20 p-2.5 rounded-lg text-primary">
                      <span className="material-symbols-outlined text-[28px]">link</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">3. Sentinel Link</h3>
                      <p className="text-sm font-medium text-primary tracking-wide">Ready for Activation</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-black/20 p-6 rounded-lg border border-slate-200/50 dark:border-white/5">
                    <p className="mb-4 text-base">You are about to deploy autonomous safeguarding for <span className="font-mono text-xs bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">0x71C7...976F</span>.</p>
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-0.5 text-[14px]">check</span>
                        Rules configuration saved
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-0.5 text-[14px]">check</span>
                        Gas fees estimated: <span className="text-slate-900 dark:text-white font-mono font-bold">0.004 ETH</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-0.5 text-[14px]">check</span>
                        Guardian multisig authorization linked
                      </li>
                    </ul>
                  </div>
                  
                  <button className="group w-full bg-primary hover:bg-[#33ffad] active:bg-[#00cc7a] text-background-dark h-14 md:h-16 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(0,255,153,0.3)] hover:shadow-[0_0_30px_rgba(0,255,153,0.5)] mt-4">
                    <span className="material-symbols-outlined text-[24px]">power_settings_new</span>
                    <span>Activate Sentinel Shield</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 uppercase tracking-[0.2em] font-medium">Secure • Autonomous • Instant</p>
                </div>
                
                <div className="flex justify-start mt-6">
                    <button 
                        onClick={() => setCurrentStep(2)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Rules
                    </button>
                </div>
            </div>

          </div>

          {/* Right Column: Mini Support Info (Visible on larger screens) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-6 sticky top-24">
            <div className="bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-xl">
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-3">Need Help?</h4>
              <div className="flex flex-col gap-3">
                <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm group" href="#">
                  <span className="bg-slate-100 dark:bg-[#1A1A1A] p-1.5 rounded border border-slate-200 dark:border-white/10 group-hover:border-primary/50 text-slate-400 dark:text-slate-300 group-hover:text-primary material-symbols-outlined text-sm transition-colors">library_books</span>
                  Read Integration Docs
                </a>
                <a className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm group" href="#">
                  <span className="bg-slate-100 dark:bg-[#1A1A1A] p-1.5 rounded border border-slate-200 dark:border-white/10 group-hover:border-primary/50 text-slate-400 dark:text-slate-300 group-hover:text-primary material-symbols-outlined text-sm transition-colors">support_agent</span>
                  Contact Support
                </a>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl flex items-start gap-4">
                 <span className="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
                 <div className="flex flex-col">
                     <p className="text-sm font-bold text-primary mb-1">Step {currentStep} of 3</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                         {currentStep === 1 && "Start by identifying the specific smart contract vault you wish to protect."}
                         {currentStep === 2 && "Carefully tune the anomaly triggers. Tighter spreads mean faster autonomous response."}
                         {currentStep === 3 && "Review gas estimations and confirm deployment to initialize autonomous overwatch."}
                     </p>
                 </div>
            </div>
          </div>
        </div>

        {/* Background Decoration Image */}
        <div className="fixed bottom-0 left-0 w-full h-[300px] pointer-events-none -z-10 opacity-10 dark:opacity-20 overflow-hidden">
             {/* Gradient Mask for the image blending into light/dark theme */}
             <div className="absolute inset-0 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark dark:to-transparent z-10 block pointer-events-none h-full w-full"></div>
             {/* Abstract Grid background instead of external broken image */}
             <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0, 255, 153, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 153, 0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(100px) translateZ(-200px)',
             }}></div>
        </div>
      </div>
      </div>
      
      {/* Scope specific styling for smooth step transitions and range sliders */}
      <style dangerouslySetInnerHTML={{__html: `
        .transition-form-step {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #00ff99;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 255, 153, 0.5);
            transition: transform 0.1s, box-shadow 0.1s;
        }
        
        .range-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(0, 255, 153, 0.8);
        }
      `}} />
    </>
  );
}
