"use client";

import { useEffect } from "react";
import { useActiveAccount, useActiveWalletConnectionStatus } from "thirdweb/react";
import { usePathname, useRouter } from "next/navigation";
import { AutoConnect } from "thirdweb/react";
import { client } from "@/lib/client";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const account = useActiveAccount();
  const status = useActiveWalletConnectionStatus(); // "connecting" | "connected" | "disconnected"
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if thirdweb definitively confirms we are totally disconnected.
    if (status === "disconnected" && !account && pathname !== "/") {
      router.replace("/");
    }
  }, [status, account, pathname, router]);

  // If still actively deciding local storage cache, wait before revealing or kicking
  if (status === "connecting" && pathname !== "/") {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary opacity-50 block">data_saver_on</span>
      </div>
    );
  }

  // If disconnected on a protected route, prevent rendering the page content while the router kicks in.
  if (status === "disconnected" && pathname !== "/") {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh]">
        <span className="material-symbols-outlined animate-spin text-4xl text-primary opacity-50 block">data_saver_on</span>
      </div>
    );
  }

  return (
    <>
      {/* Global auto-connect persistence for the entire application session */}
      <AutoConnect client={client} />
      {children}
    </>
  );
}
