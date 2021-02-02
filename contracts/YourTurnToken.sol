// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Main YourTurn Token
contract YourTurnToken is ERC20 {
  constructor(uint256 initialBalance) ERC20("YourTurn", "YTT") public {
    _mint(msg.sender, initialBalance);
  }
}