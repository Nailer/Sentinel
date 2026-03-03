"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/lib/client";

export default function Header() {
  const pathname = usePathname();
  const account = useActiveAccount();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "History", href: "/history" },
    { name: "Reasoning Lab", href: "/ai-logs" },
    { name: "Setup", href: "/wizard" }
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 md:px-10 lg:px-40">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-8 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary flex items-center justify-center transition-all group-hover:scale-105 group-hover:bg-primary group-hover:text-white shadow-sm ring-1 ring-primary/20">
            <span className="material-symbols-outlined text-[20px]">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Sentinel CRE</h2>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        {account && (
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide leading-normal transition-all hover:-translate-y-0.5 relative group ${
                  pathname === link.href 
                  ? "text-slate-900 dark:text-white" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                )}
                {pathname !== link.href && (
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-slate-300 dark:bg-slate-600 transition-all group-hover:w-full rounded-full" />
                )}
              </Link>
            ))}
          </nav>
        )}
        <ConnectButton
          client={client} 
          connectButton={{ label: "Connect Admin Wallet" }}
          appMetadata={{
            name: "Sentinel CRE",
            url: "https://sentinel.cre",
          }} 
        />
      </div>
      <button className="md:hidden text-slate-900 dark:text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
