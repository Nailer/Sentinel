"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface LogEntry {
  type: 'system' | 'gemini' | 'oracle' | 'guardian' | 'time';
  text: string;
  timestamp: string;
  color?: string;
}

function AILogsContent() {
  const searchParams = useSearchParams();
  const isActive = searchParams.get('active') === 'true';
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [config, setConfig] = useState<any>(null);
  const [isDone, setIsDone] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  useEffect(() => {
    // Load config from localStorage
    const savedConfig = localStorage.getItem('sentinel_config');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }

    if (isActive) {
      startSimulation(savedConfig ? JSON.parse(savedConfig) : null);
    } else {
      // Default placeholder logs if not active
      setLogs([
        { type: 'system', text: 'Sentinel OS v2.0.4 loaded.', timestamp: '14:02:40.001' },
                { type: 'system', text: 'Nodes synchronized. Awaiting instruction...', timestamp: '14:02:40.500' }
      ]);
    }
  }, [isActive]);

  const addLog = (type: LogEntry['type'], text: string, color?: string) => {
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0] + '.' + now.getMilliseconds();
    setLogs(prev => [...prev, { type, text, timestamp, color }]);
  };

  const startSimulation = async (conf: any) => {
    const vault = conf?.vaultAddress || '0x4ad0...ec8B';
    const threshold = conf?.threshold || 10;

    setLogs([]); // Clear logs
    await new Promise(r => setTimeout(r, 800));
    
    addLog('system', `Sentinel Patrol: Starting Security Scan on ${vault}...`);
    await new Promise(r => setTimeout(r, 1200));
    
    addLog('oracle', `Fetching on-chain data via BalanceReader capability...`);
    await new Promise(r => setTimeout(r, 1000));
    
    const balance = conf?.contractBalance || "10.00";
    addLog('system', `Vault Balance: ${balance} ETH`);
    await new Promise(r => setTimeout(r, 800));
    
    addLog('gemini', `Analyzing risk with Gemini Flash 2.0...`, 'text-white');
    await new Promise(r => setTimeout(r, 1500));
    
    addLog('gemini', `[SENTINEL AI ANALYSIS]: User's Risk Threshold: ${threshold}%`);
    await new Promise(r => setTimeout(r, 1000));
    
    addLog('gemini', `[SENTINEL AI ANALYSIS]: Current Vault Balance: ${balance} ETH`);
    await new Promise(r => setTimeout(r, 1200));

    // Simulate "SAFE" result for normal flow
    addLog('gemini', `[SENTINEL AI ANALYSIS]: Result: SAFE. Difference is below threshold.`);
    await new Promise(r => setTimeout(r, 1000));
    
    addLog('guardian', `✅ Vault is secure. Monitoring loop continuing...`);
    addLog('system', `Scan Complete. Next trigger in 30s.`);
    setIsDone(true);
  };

  const getLogStyle = (type: LogEntry['type']) => {
    switch(type) {
      case 'system': return 'text-emerald-500';
      case 'gemini': return 'text-primary';
      case 'oracle': return 'text-blue-400';
      case 'guardian': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  const getLogPrefix = (type: LogEntry['type']) => {
    switch(type) {
      case 'system': return 'SYSTEM';
      case 'gemini': return 'GEMINI-AI';
      case 'oracle': return 'ORACLE';
      case 'guardian': return 'GUARDIAN';
      default: return 'LOG';
    }
  };

  return (
    <main className="flex-1 flex flex-col md:flex-row relative overflow-hidden h-[calc(100vh-80px)]">
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
          <p className="text-emerald-400/80 font-medium">Monitoring Node: GEMINI-SENTINEL-X1 // {isActive ? 'ACTIVE TRACE' : 'READY'}</p>
        </div>

        {/* Terminal Window */}
        <div className="glass-panel flex-1 rounded-xl overflow-hidden flex flex-col shadow-2xl shadow-emerald-900/20">
          <div className="bg-surface-dark border-b border-surface-border px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-emerald-400/60 flex items-center gap-2">
              <span className={`w-2 h-2 bg-primary rounded-full ${isActive ? 'animate-pulse' : ''}`}></span>
              {isActive ? 'LIVE STREAM' : 'TERMINAL STANDBY'}
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed bg-black/40">
            <div className="flex flex-col gap-3">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-3 text-slate-400 animate-in fade-in slide-in-from-left-2 duration-300">
                  <span className="text-slate-600 shrink-0 select-none hidden sm:inline">{log.timestamp}</span>
                  <span className={`${getLogStyle(log.type)} font-bold shrink-0`}>&gt; {getLogPrefix(log.type)}:</span>
                  <span className={log.color || 'text-slate-300'}>{log.text}</span>
                </div>
              ))}
              
              {isActive && !isDone && (
                <div className="flex gap-3 text-slate-400 animate-pulse">
                  <span className="text-slate-600 shrink-0 select-none hidden sm:inline">--:--:--.---</span>
                  <span className="text-primary font-bold">&gt; _</span>
                </div>
              )}
              <div ref={logsEndRef} />
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Security Intelligence */}
      <section className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto custom-scrollbar z-10 bg-background-light dark:bg-background-dark">
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Security Intelligence</h2>
              <span className="text-slate-500 dark:text-slate-400 text-sm">Status: {isDone ? 'System Nominal' : (isActive ? 'Analyzing...' : 'Standby')}</span>
            </div>
            <div className={`px-3 py-1 ${isDone ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'} border rounded-full flex items-center gap-2`}>
              <span className={`w-2 h-2 ${isDone ? 'bg-emerald-500' : 'bg-yellow-500'} rounded-full animate-pulse`}></span>
              <span className="text-xs font-bold uppercase tracking-wider">{isDone ? 'Protected' : 'Pre-Scan'}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Active Guard Configuration</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                      Protocol is monitoring with the following autonomous rules:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-100 dark:bg-black/20 p-2 rounded">
                          <p className="text-[10px] text-slate-500 uppercase font-bold">Threshold</p>
                          <p className="text-sm font-mono text-primary">{config?.threshold || '10'}% Drop</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-black/20 p-2 rounded">
                          <p className="text-[10px] text-slate-500 uppercase font-bold">Vault Address</p>
                          <p className="text-[10px] font-mono text-slate-400 truncate">{config?.vaultAddress || '0x4ad0...ec8B'}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm ring-1 ring-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">CRE Intelligence Feed</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {isDone 
                        ? "Gemini AI confirmed current balance shifts are within safe volatility bounds. No intervention required."
                        : (isActive ? "Gemini is currently processing the latest block data and comparing against historical baseline..." : "Shield is ready. Configure in the wizard to start autonomous protection.")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-border rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Historical Context</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Integration successful. {isDone ? "One scan recorded in ledger." : "Awaiting first execution data."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
                Analysis powered by <span className="text-slate-900 dark:text-white font-semibold">Gemini 2.0 Flash</span>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className={`flex-1 sm:flex-none flex items-center justify-center gap-2 ${isActive ? 'bg-slate-900 border border-slate-700' : 'bg-slate-800'} text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg`}>
                <span className="material-symbols-outlined text-[20px]">history</span>
                Audit Log
              </button>
              <Link 
                href="/dashboard"
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 ${isDone ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(0,255,153,0.4)]' : 'bg-slate-700 text-slate-400 pointer-events-none'} px-6 py-3 rounded-lg font-bold text-sm transition-all`}
              >
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function AILogs() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center h-screen bg-background-dark text-primary font-mono animate-pulse">Initializing Sentinel Trace...</div>}>
      <AILogsContent />
    </Suspense>
  );
}
