// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Main YourTurn Token
contract YourTurnToken is ERC20 {
  constructor(uint256 initialBalance) ERC20("YourTurnToken", "YTT") public {
    _setupDecimals(0);
    _mint(msg.sender, initialBalance);
  }
}