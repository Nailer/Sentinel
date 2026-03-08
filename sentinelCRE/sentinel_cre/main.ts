import {
  bytesToHex,
  ConsensusAggregationByFields,
  type CronPayload,
  cre,
  encodeCallMsg,
  getNetwork,
  hexToBase64,
  LAST_FINALIZED_BLOCK_NUMBER,
  Runner,
  type Runtime,
  TxStatus,
  handler,
  CronCapability,
  ignore,
} from '@chainlink/cre-sdk'
import { type Address, decodeFunctionResult, encodeFunctionData, zeroAddress } from 'viem'
import { z } from 'zod'
// Update your imports to match your new ABIs folder
import { Sentinel, Vault, IERC20, BalanceReader } from '../contracts/abi'

const configSchema = z.object({
  schedule: z.string(),
  geminiApiKey: z.string(), // Added for the AI
  vaultAddress: z.string(),
  sentinelAddress: z.string(),
  balanceReaderAddress: z.string(),
  chainSelectorName: z.string(),
  gasLimit: z.string(),
  threshold: z.number(), // e.g., 10 for 10%
  baselineBalance: z.string().optional(),
})

export type Config = z.infer<typeof configSchema>

// The AI Role: It receives the current state and decides if a hack is occurring
const analyzeRiskWithGemini = (runtime: Runtime<Config>, currentBalance: bigint): boolean => {
  const httpClient = new cre.capabilities.HTTPClient();

  const userThreshold = runtime.config.threshold; // e.g., 10 for 10%
  const previousBalance = runtime.config.baselineBalance || currentBalance;

  // 2. The "Security Expert" Prompt
  // We give Gemini the math so it can provide the reasoning.
  const prompt = `You are the Sentinel DeFi Security Agent. 
    CONTEXT:
    - User's Risk Threshold: ${userThreshold}%
    - Previous Vault Balance: ${previousBalance.toString()}
    - Current Vault Balance: ${currentBalance.toString()}

    TASK:
    1. Calculate the percentage drop between the previous and current balance.
    2. If the drop is EQUAL TO or GREATER THAN ${userThreshold}%, reply exactly with "DANGER".
    3. If the drop is less than the threshold, reply "SAFE".
    4. Provide a brief 1-sentence technical reason for your decision.`;

  // 3. The HTTP Call (Using the CRE HTTP Capability)
  const aggregationResult = httpClient.sendRequest(runtime, (req) => {
    return req.sendRequest({
      method: 'POST',
      url: `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${runtime.config.geminiApiKey}`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }).result();
  }, ((values: any[]) => {
    // Simple consensus: take the first successful response
    if (!values || values.length === 0) return { body: new Uint8Array(), statusCode: 0 };
    return values[0];
  }) as any)().result() as { body: Uint8Array, statusCode: number };

  // 4. Response Handling & Logic
  if (aggregationResult.statusCode !== 200) {
    runtime.log(`Gemini API Error: Status ${aggregationResult.statusCode}`);
    return false; // Default to safe if API is down to prevent false positives
  }

  const rawBody = Buffer.from(aggregationResult.body).toString();
  const body = JSON.parse(rawBody);

  if (!body.candidates || body.candidates.length === 0) {
    runtime.log(`Gemini Response empty: ${rawBody}`);
    return false;
  }

  const aiText = body.candidates[0].content.parts[0].text.trim();

  // Log the AI's reasoning so it shows up in your Video Demo!
  runtime.log(`[SENTINEL AI ANALYSIS]: ${aiText}`);

  // Return true (HACK DETECTED) only if Gemini flags DANGER
  return aiText.toUpperCase().includes("DANGER");
}

const getVaultBalance = (runtime: Runtime<Config>): bigint => {
  const network = getNetwork({ chainFamily: 'evm', chainSelectorName: runtime.config.chainSelectorName, isTestnet: true })!;
  const evmClient = new cre.capabilities.EVMClient(network.chainSelector.selector);

  const callData = encodeFunctionData({
    abi: BalanceReader,
    functionName: 'getNativeBalances',
    args: [[runtime.config.vaultAddress as Address]]
  });

  const result = evmClient.callContract(runtime, {
    call: encodeCallMsg({ from: zeroAddress, to: runtime.config.balanceReaderAddress as Address, data: callData }),
    blockNumber: LAST_FINALIZED_BLOCK_NUMBER
  }).result();

  const balances = decodeFunctionResult({ abi: BalanceReader, functionName: 'getNativeBalances', data: bytesToHex(result.data) });
  return balances[0];
}

const triggerEmergencyAction = (runtime: Runtime<Config>, isHack: boolean) => {
  const network = getNetwork({ chainFamily: 'evm', chainSelectorName: runtime.config.chainSelectorName, isTestnet: true })!;
  const evmClient = new cre.capabilities.EVMClient(network.chainSelector.selector);

  // This calls YOUR Sentinel.sol onReport function
  const callData = encodeFunctionData({
    abi: Sentinel,
    functionName: 'onReport',
    args: [encodeFunctionData({
      abi: Sentinel,
      functionName: 'onReport',
      args: [isHack ? "0x01" : "0x00"] // Simplified boolean report
    })]
  });

  const report = runtime.report({
    encodedPayload: hexToBase64(callData),
    encoderName: 'evm',
    signingAlgo: 'ecdsa',
    hashingAlgo: 'keccak256'
  }).result();

  const tx = evmClient.writeReport(runtime, {
    receiver: runtime.config.sentinelAddress as Address,
    report: report,
    gasConfig: { gasLimit: runtime.config.gasLimit }
  }).result();

  if (tx.txStatus === TxStatus.SUCCESS) {
    runtime.log(`SENTINEL ACTION: Vault security status updated! Hash: ${bytesToHex(tx.txHash!)}`);
  }
}

export const onCronTrigger = (runtime: Runtime<Config>, payload: CronPayload): string => {
  runtime.log('Sentinel Patrol: Starting Security Scan...');

  // 1. Fetch current on-chain data
  const balance = getVaultBalance(runtime);
  runtime.log(`Vault Balance: ${balance.toString()}`);

  // 2. AI Analysis
  const isHackDetected = analyzeRiskWithGemini(runtime, balance);

  // 3. Take Action
  if (isHackDetected) {
    runtime.log('🚨 HACK DETECTED BY GEMINI! Triggering Emergency Pause...');
    triggerEmergencyAction(runtime, true);
  } else {
    runtime.log('✅ Vault is secure. No action needed.');
  }

  return "Scan Complete";
}

export const initWorkflow = (config: Config) => {
  const cron = new CronCapability()

  return [
    handler(
      cron.trigger({ schedule: config.schedule }),
      onCronTrigger
    ),
  ]
}

export async function main() {
  const runner = await Runner.newRunner<Config>({
    configSchema,
  })
  await runner.run(initWorkflow)
}



