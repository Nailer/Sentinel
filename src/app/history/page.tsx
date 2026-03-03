"use client";

import React from "react";

export default function History() {
  return (
    <div className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Sentinel Ledger</h1>
            <p className="text-slate-500 dark:text-slate-400 text-base">Execution History & Compliance Logs</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded border border-gray-300 dark:border-border-dark bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-opacity-80 transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded bg-slate-900 dark:bg-surface-dark border border-transparent dark:border-primary/30 text-white text-sm font-bold hover:bg-slate-800 dark:hover:border-primary/60 transition-colors shadow-lg shadow-primary/5">
              <span className="material-symbols-outlined text-[20px] text-primary">download</span>
              Download Compliance Report
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Events</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">24,592</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Flagged Risks</p>
            <p className="text-2xl font-bold text-red-500 mt-1">142</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Auto-Paused</p>
            <p className="text-2xl font-bold text-yellow-500 mt-1">12</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">System Health</p>
            <p className="text-2xl font-bold text-primary mt-1">99.9%</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 dark:border-border-dark bg-white dark:bg-surface-dark shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 dark:bg-[#1a2c26] border-b border-gray-200 dark:border-border-dark">
                <tr>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400" scope="col">Timestamp</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400" scope="col">Event Type</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400" scope="col">Risk Score</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400" scope="col">Status</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400" scope="col">Tx Hash</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400 text-right" scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-border-dark">
                {/* Row 1 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-27 14:23:01</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Liquidity Spike</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-red-500 w-[85%]"></div>
                      </div>
                      <span className="text-xs font-bold text-red-500">85/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                      Paused
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x7d...3f2a</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-27 12:05:45</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Large Transfer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[42%]"></div>
                      </div>
                      <span className="text-xs font-bold text-yellow-500">42/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-slate-300 border border-gray-200 dark:border-white/10">
                      No Action
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x1a...9b4c</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-26 23:15:10</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Contract Upgrade</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-primary w-[15%]"></div>
                      </div>
                      <span className="text-xs font-bold text-primary">15/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-primary/10 dark:text-primary border border-green-200 dark:border-primary/20">
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x9c...1e5d</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-26 18:40:22</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Flash Loan</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-red-500 w-[92%]"></div>
                      </div>
                      <span className="text-xs font-bold text-red-500">92/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
                      Flagged
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x3b...8a7f</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Row 5 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-26 09:12:33</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Oracle Update</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-primary w-[5%]"></div>
                      </div>
                      <span className="text-xs font-bold text-primary">05/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-primary/10 dark:text-primary border border-green-200 dark:border-primary/20">
                      Normal
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x5e...2d90</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
                {/* Row 6 */}
                <tr className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-400">2023-10-26 08:02:11</td>
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Admin Change</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-black/40 overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[55%]"></div>
                      </div>
                      <span className="text-xs font-bold text-yellow-500">55/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                      Review
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-primary text-xs">0x8f...1c33</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-border-dark pt-4 px-2 mt-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">6</span> of <span className="font-medium text-slate-900 dark:text-white">24,592</span> results</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center size-8 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="flex items-center justify-center size-8 rounded bg-primary text-background-dark font-bold text-sm">1</button>
            <button className="flex items-center justify-center size-8 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors text-sm">2</button>
            <button className="flex items-center justify-center size-8 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors text-sm">3</button>
            <span className="text-slate-500 dark:text-slate-400 px-1">...</span>
            <button className="flex items-center justify-center size-8 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors text-sm">12</button>
            <button className="flex items-center justify-center size-8 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
