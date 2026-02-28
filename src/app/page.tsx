
export default function LandingPage() {
  return (
    <div>
      
<div className="relative flex min-h-screen w-full flex-col group/design-root">
{/* Top Navigation */}

{/* Main Layout Container */}
<main className="flex-grow flex flex-col items-center w-full">
<div className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 flex flex-col">
{/* Hero Section */}
<div className="@container py-12 md:py-24">
<div className="flex flex-col gap-10 lg:flex-row lg:items-center">
{/* Hero Content */}
<div className="flex flex-col gap-8 lg:w-1/2 lg:pr-10">
<div className="flex flex-col gap-4 text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
<span className="size-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-primary text-xs font-bold uppercase tracking-wider">Protocol Guardian Active</span>
</div>
<h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                                Autonomous Safeguards for the New Financial Era
                            </h1>
<p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
                                Institutional-grade DeFi security platform for autonomous protocol guardianship using Chainlink and Gemini AI.
                            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,255,149,0.3)]">
<span className="truncate">Register Protocol Vault</span>
<span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</button>
<button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors">
<span className="truncate">View Documentation</span>
</button>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mt-2">
<div className="flex -space-x-2">
<div className="size-8 rounded-full bg-slate-200 dark:bg-surface-dark border-2 border-background-light dark:border-background-dark flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-xs">verified</span>
</div>
<div className="size-8 rounded-full bg-slate-200 dark:bg-surface-dark border-2 border-background-light dark:border-background-dark flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-xs">shield</span>
</div>
<div className="size-8 rounded-full bg-slate-200 dark:bg-surface-dark border-2 border-background-light dark:border-background-dark flex items-center justify-center overflow-hidden">
<span className="material-symbols-outlined text-xs">lock</span>
</div>
</div>
<p>Securing $4.2B+ in Total Value Locked</p>
</div>
</div>
{/* Hero Visual */}
<div className="lg:w-1/2 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-surface-dark rounded-xl overflow-hidden border border-border-dark shadow-2xl flex items-center justify-center" data-alt="Abstract 3D visualization of a shielded digital vault with glowing green geometric patterns representing security" style={{background: `radial-gradient(circle at center, #163328 0%, #0f231b 100%)`}}>
{/* Abstract Representation of 3D Vault using CSS/SVG */}
<div className="relative size-64 md:size-80 animate-[spin_20s_linear_infinite]">
<svg className="w-full h-full text-primary/20 fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M100 10 L190 50 L190 150 L100 190 L10 150 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path d="M100 20 L180 55 L180 145 L100 180 L20 145 L20 55 Z" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="1"></path>
<circle className="animate-pulse" cx="100" cy="100" fill="currentColor" opacity="0.3" r="40"></circle>
</svg>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-6xl text-primary drop-shadow-[0_0_15px_rgba(0,255,149,0.8)]">security</span>
</div>
{/* Glassmorphism Card Overlay */}
<div className="absolute bottom-6 left-6 right-6 bg-background-dark/40 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Current Status</p>
<p className="text-sm text-white font-mono">System Nominal • 99.9% Uptime</p>
</div>
<div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#00ff95]"></div>
</div>
</div>
</div>
</div>
</div>
{/* Trust Section */}
<div className="flex flex-col gap-10 py-16 border-t border-slate-200 dark:border-border-dark @container">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight max-w-[500px]">
                        Trusted Infrastructure by Industry Leaders
                    </h2>
<p className="text-slate-500 dark:text-slate-400 max-w-sm text-right">
                        Our security architecture relies on the most robust decentralized networks and cloud providers.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{/* Partner 1 */}
<div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark/30 hover:bg-slate-50 dark:hover:bg-surface-dark transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-background-light dark:bg-background-dark flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">link</span>
</div>
<div>
<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Chainlink</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">Decentralized Oracle Network for tamper-proof data inputs.</p>
</div>
<div className="w-full h-32 mt-2 rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Abstract digital network visualization representing blockchain connections" style={{backgroundImage: `linear-gradient(to bottom right, rgba(15, 35, 27, 0.8), rgba(0, 255, 149, 0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-cFXcdKI9stOEibE5CdxXb3ToG6Zc7BlTCdtj37eD7G806JL6gllJAw7di7dNfg63QPy1G7K6e6rTu86u-VC64MKjlos_kGy8DcM9UCd5oQnaYBVNiZCAyAB7RfHu5N01qaoCzfM9oSpWfRe87Q_QlZRfAZDykS6Se5oEga0KbUvfoyWQO4gf9GWoyZgMF7yDGfWh0RDRSQ9RWpgp6Mh89MYzyUB6zNCtrEictQKL4FiDEQ_-YFRj10ghq0teshtWQ8vc2IkMGg")`}}></div>
</div>
{/* Partner 2 */}
<div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark/30 hover:bg-slate-50 dark:hover:bg-surface-dark transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-background-light dark:bg-background-dark flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">layers</span>
</div>
<div>
<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Lisk</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">Scalable Blockchain Application Platform for high throughput.</p>
</div>
<div className="w-full h-32 mt-2 rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Abstract geometric shapes representing modular blockchain architecture" style={{backgroundImage: `linear-gradient(to bottom right, rgba(15, 35, 27, 0.8), rgba(0, 255, 149, 0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxsEhKEj_uWdXguPsQugf_-RdPF59a8lJBpXaiTKW8_v3u83m2JfeXjHijAuo58cVAILHOXFjdkFfXHx-wDQcZKX3wujAit0OjCsaejUCTI7YtkZ5s--PuW_Z6sVl90DxZJ9T2bQokkHK-FbRoXFK6MqBM7Fko-10kLMtXdzLp6hlUdiVOUW7Fmf7RG-_Lm8jep8BZBLpYBkVdcGRsm0cZYTxRX8GRFR_7JoB0Xv3SdgF_epH-6hP-KVkLCCwNqjxjgyjJP9n7Gw")`}}></div>
</div>
{/* Partner 3 */}
<div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark/30 hover:bg-slate-50 dark:hover:bg-surface-dark transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-background-light dark:bg-background-dark flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl">cloud</span>
</div>
<div>
<h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1">Google Cloud</h3>
<p className="text-slate-500 dark:text-slate-400 text-sm">Enterprise-grade cloud infrastructure ensuring 24/7 reliability.</p>
</div>
<div className="w-full h-32 mt-2 rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Abstract visualization of cloud data centers and connectivity" style={{backgroundImage: `linear-gradient(to bottom right, rgba(15, 35, 27, 0.8), rgba(0, 255, 149, 0.1)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxnXIyOU-y44nL0ZHQe9b4U2REgzD7zWRowi-qrYViqrOofhBvw1X90XB5izx-7PNG4ltibXJpHzZWaCEtk78_zOBRUDtMkzHH6SGm6BnNuPlETxV9cGz-US_GFWde9STFgxxPXv9q3wnGKIYcq2kuurtX6Zf9p9jdVj9E0TKjAVjcihLf-m8FJW_yBcXjz6RjZTEuhon227AoI-jXC6bJseUP9GYj4DCULMgRHTlAwU18HVy1dg1y8Eni47NQYDjtV5TpE0-4Lw")`}}></div>
</div>
</div>
</div>
{/* Feature Snapshot (Extra Contextual Element) */}
<div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative rounded-xl overflow-hidden border border-border-dark shadow-2xl group">
<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
<div className="w-full aspect-video bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" data-alt="Data dashboard displaying real-time security metrics and graphs" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrAwUYBKGCmckmvoBPqp7Q26p-4ScTbcRzPYAv_fkVEz2uh0u2oa7WKXnJDZbQKt9S4L6BSmsFu-LxP50hrfr8OaeJeirfiMSwyuQX-xHJm0W1K9Da4l21K-YII2EtozVDggTZtRYfyhyCRfCuWT-iLXrTWyDIXr1_ev1h3v99XUURsKzdj-VhFeYqra0raDeHoXf3-hYYrQu6hUrR7u2onM6zLgEgOV5FQYq2YsSrQSpNlz8nNjqife7OjzbqQXcezb1Ikkrv8A")`}}>
</div>
<div className="absolute bottom-4 left-4 z-20">
<div className="flex items-center gap-2 mb-1">
<span className="size-2 rounded-full bg-primary"></span>
<span className="text-primary text-xs font-bold uppercase">Live Monitoring</span>
</div>
<p className="text-white font-bold text-lg">Real-time Threat Detection</p>
</div>
</div>
<div className="order-1 md:order-2 flex flex-col gap-6">
<h2 className="text-slate-900 dark:text-white text-3xl font-bold">AI-Driven Threat Analysis</h2>
<p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        Our Gemini AI integration continuously scans for vulnerabilities and anomalous transaction patterns, executing preemptive safeguards before exploits can occur.
                    </p>
<ul className="flex flex-col gap-3">
<li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Zero-day exploit prevention</span>
</li>
<li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Automated circuit breakers</span>
</li>
<li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>Cross-chain monitoring</span>
</li>
</ul>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="border-t border-slate-200 dark:border-border-dark bg-background-light dark:bg-background-dark w-full flex justify-center mt-auto">
<div className="w-full max-w-[1280px] flex flex-col gap-6 px-6 py-10 text-center md:px-10 lg:px-40">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">verified_user</span>
<span className="text-slate-900 dark:text-white font-bold text-lg">Sentinel CRE</span>
</div>
<div className="flex flex-wrap items-center justify-center gap-6">
<a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-normal" href="#">Privacy Policy</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-normal" href="#">Terms of Service</a>
<a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-normal" href="#">Contact Support</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 border-t border-slate-200 dark:border-slate-800 pt-6">
<p className="text-slate-400 dark:text-slate-500 text-sm font-normal">© 2026 Sentinel CRE. All rights reserved.</p>
<div className="flex gap-4">
{/* Social Placeholders */}
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">chat</span></a>
<a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
</div>
</div>
</div>
</footer>
</div>

    </div>
  );
}
