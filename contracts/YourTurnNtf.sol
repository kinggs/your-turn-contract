// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// Main YourTurnNft
contract YourTurnNft is ERC721 {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;
  constructor(uint256 initialBalance) ERC721("YourTurnNft", "YTN") {
  }
  function mint(address to, uint256 tokenId, string memory name) public {
    _mint(to, tokenId);    
    _setTokenURI(tokenId, name);
    _tokenIdTracker.increment();
  }
  
  function transfer(address from, address to, uint256 tokenId) public {
    _transfer(from, to, tokenId);
  }  
}