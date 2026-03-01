import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThirdwebProvider } from "@/components/ThirdwebProviderWrapper";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentinel CRE",
  description: "Sentinel CRE Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display antialiased min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100`}>
        <ThirdwebProvider>
          <Header />
          <AuthWrapper>
            <div className="flex-1 flex flex-col">
              {children}
            </div>
          </AuthWrapper>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
