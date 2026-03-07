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
} from '@chainlink/cre-sdk'
import { type Address, decodeFunctionResult, encodeFunctionData, zeroAddress } from 'viem'
import { z } from 'zod'
// Update your imports to match your new ABIs folder
import { Sentinel, Vault, IERC20 } from '../contracts/abi'

const configSchema = z.object({
  schedule: z.string(),
  geminiApiKey: z.string(), // Added for the AI
  vaultAddress: z.string(),
  sentinelAddress: z.string(),
  chainSelectorName: z.string(),
  gasLimit: z.string(),
})

type Config = z.infer<typeof configSchema>

// The AI Role: It receives the current state and decides if a hack is occurring
const analyzeRiskWithGemini = (runtime: Runtime<Config>, balance: bigint): boolean => {
  const httpClient = new cre.capabilities.HTTPClient();

  // We prompt Gemini as a security expert
  const prompt = `You are a DeFi Security Agent. The current vault balance is ${balance.toString()} units. 
    Earlier today the balance was higher. If this looks like an abnormal drain, reply ONLY with the word "DANGER". 
    Otherwise, reply "SAFE".`;

  const response = httpClient.sendRequest(runtime, (req) => {
    return req.sendRequest({
      method: 'POST',
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${runtime.config.geminiApiKey}`,
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }).result();
  }, ConsensusAggregationByFields({
    body: (values: any[]) => values[0].body
  }))().result() as { body: Uint8Array };

  const body = JSON.parse(Buffer.from(response.body).toString());
  const aiText = body.candidates[0].content.parts[0].text.trim();

  runtime.log(`Gemini Security Analysis: ${aiText}`);
  return aiText.includes("DANGER");
}

const getVaultBalance = (runtime: Runtime<Config>): bigint => {
  const network = getNetwork({ chainFamily: 'evm', chainSelectorName: runtime.config.chainSelectorName, isTestnet: true })!;
  const evmClient = new cre.capabilities.EVMClient(network.chainSelector.selector);

  const callData = encodeFunctionData({
    abi: IERC20, // Vaults are usually ERC20 or have a balance function
    functionName: 'balanceOf',
    args: [runtime.config.vaultAddress as Address]
  });

  const result = evmClient.callContract(runtime, {
    call: encodeCallMsg({ from: zeroAddress, to: runtime.config.vaultAddress as Address, data: callData }),
    blockNumber: LAST_FINALIZED_BLOCK_NUMBER
  }).result();

  return decodeFunctionResult({ abi: IERC20, functionName: 'balanceOf', data: bytesToHex(result.data) });
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

const onCronTrigger = (runtime: Runtime<Config>, payload: CronPayload): string => {
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

const initWorkflow = (config: Config) => {
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



