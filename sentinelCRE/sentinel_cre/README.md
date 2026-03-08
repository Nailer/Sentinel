# 🧠 Sentinel CRE: Autonomous Security Engine

This directory contains the core "brain" of the Sentinel project—the autonomous engine that runs on the **Chainlink Runtime Environment (CRE)**. It performs real-time security audits and executes on-chain protective actions.

---

## 🛠️ Getting Started (For Judges & Developers)

If you wish to test the security engine's logic independently of the web frontend, follow these steps:

### 1. Project Setup
Ensure you have [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) installed.

```bash
# Install the core dependencies
bun install
# or
npm install
```

### 2. Configure Environment
Create a `.env` file in this directory:
```bash
cp .env.example .env
```
Fill in the following:
- **PRIVATE_KEY**: A Funded Sepolia private key (without `0x`).
- **RPC_URL**: A Sepolia RPC provider URL.
- **VAULT_ADDRESS**: The target vault to monitor.
- **SENTINEL_ADDRESS**: Your deployed Sentinel guardian contract.

### 3. Setup AI Configuration
The engine uses **Gemini 2.0 Flash** for risk assessment. Open `config.staging.json` and insert your API key:
```json
{
  "geminiApiKey": "YOUR_GEMINI_API_KEY",
  ...
}
```

---

## 🧪 Simulation Mode

To see the Sentinel analyze risks and decide on protection strategies in real-time, run the simulation:

```bash
cre workflow simulate workflow.yaml --target=staging-settings
```

### What happens during simulation?
1. **Sync**: Fetches the latest on-chain state from Sepolia.
2. **Scan**: Uses `BalanceReader` capability to check for TVL drops.
3. **Reason**: Sends current vault state to Gemini AI.
4. **Decide**: The AI determines if a "Safe" or "Danger" state exists based on your threshold.
5. **Protect**: If danger is detected, it simulates an on-chain `guardianAction` transaction to secure the vault.

---

## 📂 Key Files
- `main.ts`: The primary logic governing the security loop and AI reasoning.
- `workflow.yaml`: Defines the trigger schedule and capability requirements.
- `config.staging.json`: Persistence settings including thresholds and target addresses.

---

## 🏛️ Competitive Note
Sentinel CRE is one of the first implementations to leverage **AI Decision Logic** inside a **Chainlink Runtime Environment**. This creates a "Smart Circuit Breaker" that understands context, not just simple math.
