// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault is Pausable, Ownable {
    address public sentinel;

    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event SentinelSet(address indexed sentinel);

    constructor() Ownable(msg.sender) {}

    modifier onlyGuardian() {
        require(msg.sender == sentinel, "Vault: caller is not the sentinel");
        _;
    }

    function setSentinel(address _sentinel) external onlyOwner {
        require(
            _sentinel != address(0),
            "Vault: sentinel cannot be zero address"
        );
        sentinel = _sentinel;
        emit SentinelSet(_sentinel);
    }

    function emergencyPause() external onlyGuardian {
        _pause();
    }

    function resume() external onlyOwner {
        _unpause();
    }

    function deposit() external payable whenNotPaused {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external whenNotPaused {
        require(balances[msg.sender] >= amount, "Vault: insufficient balance");
        balances[msg.sender] -= amount;

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Vault: withdrawal failed");

        emit Withdraw(msg.sender, amount);
    }
}
