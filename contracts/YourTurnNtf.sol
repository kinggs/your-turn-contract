// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Main YourTurnNft
contract YourTurnNft is ERC721 {
  constructor(uint256 initialBalance) ERC721("YourTurnNft", "YTN") {
  }
  function mint(address to, uint256 tokenId, string memory name) public {
    _mint(to, tokenId);    
    _setTokenURI(tokenId, name);
  }
}