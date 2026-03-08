const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = await Vault.deploy();
  await vault.waitForDeployment();
  console.log("Vault deployed to:", vault.target);

  const creForwarderAddress = process.env.CRE_FORWARDER_ADDRESS || "0x0000000000000000000000000000000000000000";
  console.log("Using CRE Forwarder address:", creForwarderAddress);

  const Sentinel = await hre.ethers.getContractFactory("Sentinel");
  const sentinel = await Sentinel.deploy(creForwarderAddress, vault.target);
  await sentinel.waitForDeployment();
  console.log("Sentinel deployed to:", sentinel.target);

  console.log("Setting Sentinel as Vault's guardian...");
  const tx = await vault.setSentinel(sentinel.target);
  await tx.wait();
  console.log("Guardian Handshake complete. Sentinel configured as active guardian.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
