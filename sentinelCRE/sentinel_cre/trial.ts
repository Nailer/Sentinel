import { CronCapability, handler, Runner, type Runtime } from "@chainlink/cre-sdk";
import { ethers } from "ethers";

export type Config = {
  schedule: string;
};


const DROP_THRESHOLD_PERCENT = 20;
const LARGE_WITHDRAWAL_ALERT_ETH = 10;


export const onCronTrigger = async (runtime: Runtime<Config>) => {


  const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
  const RPC_URL = process.env.RPC_URL || "https://ethereum-sepolia.publicnode.com";
  const VAULT_ADDRESS = process.env.VAULT_ADDRESS as string;
  const SENTINEL_ADDRESS = process.env.SENTINEL_ADDRESS as string;

  if (!PRIVATE_KEY || !VAULT_ADDRESS || !SENTINEL_ADDRESS) {
    runtime.log("❌ Missing required environment variables. Please check your .env file.");
    return;
  }

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const SENTINEL_ABI = ["function onReport(bytes calldata report) external"];
  const sentinelContract = new ethers.Contract(SENTINEL_ADDRESS, SENTINEL_ABI, wallet);

  try {
    runtime.log(`[${new Date().toLocaleTimeString()}] Polling chain...`);
    let currentBalanceWei = await provider.getBalance(VAULT_ADDRESS);
    let currentEth = parseFloat(ethers.formatEther(currentBalanceWei));

    runtime.log(`      Current Balance: ${currentEth.toFixed(4)} ETH`);











    let hackDetected = false;
    let triggerReason = "";








    if (hackDetected) {
      runtime.log(`🚨 CRITICAL EXPLOIT DETECTED AND CONFIRMED 🚨`);
      runtime.log(`⚡ Initiating CRE On-chain Intervention...`);

      const workflowId = ethers.id("sentinel-cre-test-workflow");
      const reportPayload = ethers.AbiCoder.defaultAbiCoder().encode(
        ["bytes32", "bool"],
        [workflowId, true]
      );

      runtime.log(`⏳ Sending onReport command from Wallet (${wallet.address})...`);

      const tx = await (sentinelContract as any).onReport(reportPayload);
      runtime.log(`   Broadcasted Tx: ${tx.hash}`);

      await tx.wait();
      runtime.log(`✅ PROTOCOL SUCCESSFULLY PAUSED AUTONOMOUSLY!`);
    }

  } catch (error) {
    runtime.log(`❌ Polling err: ${error}`);
  }
};

export const initWorkflow = (config: Config) => {
  const cron = new CronCapability();

  return [
    handler(
      cron.trigger(
        { schedule: config.schedule }
      ),
      onCronTrigger as any
    ),
  ];
};

export async function main() {
  const runner = await Runner.newRunner<Config>();
  await runner.run(initWorkflow);
}