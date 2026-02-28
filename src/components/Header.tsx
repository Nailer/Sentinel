"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Vaults", href: "/vaults" },
    { name: "Reasoning Lab", href: "/ai-logs" },
    { name: "Setup", href: "/setup" },
    { name: "Settings", href: "/settings" }
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 md:px-10 lg:px-40">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">shield_lock</span>
          </div>
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Sentinel CRE</h2>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === link.href 
                ? "text-primary dark:text-primary" 
                : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
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
