// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
interface IVault {
    function emergencyPause() external;
}

interface IReceiver {
    function onReport(bytes calldata report) external;
}

contract Sentinel is IReceiver, Ownable {
    address public creForwarder;
    IVault public vault;

    event ReportReceived(bytes32 indexed workflowId, bool isHackDetected);
    event ForwarderSet(address indexed forwarder);
    event VaultSet(address indexed vault);

    constructor(address _creForwarder, address _vault) Ownable(msg.sender) {
        creForwarder = _creForwarder;
        vault = IVault(_vault);
    }

    modifier onlyForwarder() {
        require(
            msg.sender == creForwarder,
            "Sentinel: caller is not the CRE forwarder"
        );
        _;
    }

    function setForwarder(address _creForwarder) external onlyOwner {
        require(
            _creForwarder != address(0),
            "Sentinel: invalid forwarder address"
        );
        creForwarder = _creForwarder;
        emit ForwarderSet(_creForwarder);
    }

    function setVault(address _vault) external onlyOwner {
        require(_vault != address(0), "Sentinel: invalid vault address");
        vault = IVault(_vault);
        emit VaultSet(_vault);
    }

    function onReport(bytes calldata report) external override onlyForwarder {
        (bytes32 workflowId, bool isHackDetected) = abi.decode(
            report,
            (bytes32, bool)
        );

        emit ReportReceived(workflowId, isHackDetected);

        if (isHackDetected) {
            vault.emergencyPause();
        }
    }
}
