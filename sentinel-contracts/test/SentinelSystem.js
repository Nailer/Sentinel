const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sentinel CRE System", function () {
  let Vault, vault;
  let Sentinel, sentinel;
  let owner, forwarder, user, attacker;

  before(async function () {
    [owner, forwarder, user, attacker] = await ethers.getSigners();

    Vault = await ethers.getContractFactory("Vault");
    vault = await Vault.deploy();
    await vault.waitForDeployment();

    Sentinel = await ethers.getContractFactory("Sentinel");
    sentinel = await Sentinel.deploy(forwarder.address, vault.target);
    await sentinel.waitForDeployment();

    await vault.setSentinel(sentinel.target);
  });

  describe("Test Scenario A: Initial state and Deposit", function () {
    it("Should allow a user to deposit funds into the Vault", async function () {
      const depositAmount = ethers.parseEther("1.0");
      await vault.connect(user).deposit({ value: depositAmount });

      const balance = await vault.balances(user.address);
      expect(balance).to.equal(depositAmount);
    });

    it("Should allow a user to withdraw funds normally", async function () {
      const withdrawAmount = ethers.parseEther("0.5");
      await vault.connect(user).withdraw(withdrawAmount);

      const balance = await vault.balances(user.address);
      expect(balance).to.equal(ethers.parseEther("0.5"));
    });
  });

  describe("Test Scenario C: Attempt emergencyPause from non-sentinel", function () {
    it("Attempt to call emergencyPause from a non-sentinel address and verify it reverts", async function () {
      await expect(vault.connect(attacker).emergencyPause())
        .to.be.revertedWith("Vault: caller is not the sentinel");
    });
  });

  describe("Test Scenario B: Autonomous Risk Mitigation (Hack Detected)", function () {
    it("Mock Chainlink Forwarder calls onReport on Sentinel with isHackDetected = true", async function () {
      const workflowId = ethers.id("test-workflow");
      const isHackDetected = true;

      const report = ethers.AbiCoder.defaultAbiCoder().encode(
        ["bytes32", "bool"],
        [workflowId, isHackDetected]
      );

      await expect(sentinel.connect(forwarder).onReport(report))
        .to.emit(sentinel, "ReportReceived")
        .withArgs(workflowId, true);

      const isPaused = await vault.paused();
      expect(isPaused).to.be.true;
    });

    it("Verify user cannot withdraw funds while paused", async function () {
      const withdrawAmount = ethers.parseEther("0.1");
      await expect(vault.connect(user).withdraw(withdrawAmount))
        .to.be.revertedWithCustomError(vault, "EnforcedPause");
    });

    it("Verify user cannot deposit funds while paused", async function () {
      const depositAmount = ethers.parseEther("0.1");
      await expect(vault.connect(user).deposit({ value: depositAmount }))
        .to.be.revertedWithCustomError(vault, "EnforcedPause");
    });
  });

  describe("Resume Operations", function () {
    it("Verify only the original Owner can call resume()", async function () {
      await expect(vault.connect(attacker).resume())
        .to.be.revertedWithCustomError(vault, "OwnableUnauthorizedAccount");

      await expect(vault.connect(forwarder).resume())
        .to.be.revertedWithCustomError(vault, "OwnableUnauthorizedAccount");

      await expect(vault.connect(owner).resume()).to.not.be.reverted;
      const isPaused = await vault.paused();
      expect(isPaused).to.be.false;
    });

    it("User can withdraw funds again normally", async function () {
      const withdrawAmount = ethers.parseEther("0.1");
      await expect(vault.connect(user).withdraw(withdrawAmount)).to.not.be.reverted;
    });
  });
});
