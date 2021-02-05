# YourTurn Token

[![Master Status](https://github.com/kinggs/your-turn-contract/workflows/master/badge.svg)](https://github.com/kinggs/your-turn-contract/actions)

A nonsensical token set meant to test and play with Ethereum Smart Contracts. We played with ERC20 initially, and then migrated to ERC721.

The hypothetical situation is that an individual can mint a 'Your Turn' token, and then send it to another individual. For example:

- Alice mints a Your Turn token with the purpose 'Buy Coffee'
- Alice and Bob goes for coffee. Alice pays, and now sends the token to Bob
- Bob now ows the Your Turn Token. Next time they go for coffee, either Alice or Bob (or anybody in the world really) can query ownership of the Your Turn Token to see who has to pay, and then appropriately transfer the token again

Initially built from the basic Waffle 'Getting Started' guide (<https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html>) with some additional dotfiles, linting & prettier.

## Usage

### General

```sh
# build
yarn build
# flatten
yarn flatten
# test (using waffle)
yarn test
# migrate (using truffle - default network: development - needs a running Ganache on 127.0.01.:7545)
yarn migrate
# console (using truffle - default network: development - needs a running Ganache on 127.0.01.:7545)
yarn console
```

### YourTurnToken ERC20 example on Truffle Develop)

Simple example of migrating contract, and transferring 10 tokens to an account

```sh
# For Development Environment
yarn truffle
# For Ganache, get ganache up in a seperate terminal (or desktop), then run yarn truffle:gc or truffle:gd, e.g.
migrate
# Test
let token = await YourTurnToken.deployed()
token.name()
token.decimals()
let accounts = await web3.eth.getAccounts()
let tx = token.transfer(accounts[1], 10)
(await token.balanceOf(accounts[0])).toNumber()
(await token.balanceOf(accounts[1])).toNumber()
```

### YourTurnToken ERC721 example on Truffle Ganache:CLI)

Simple example of migrating contract, and transferring 10 tokens to an account

```sh
# In seperate terminal, run ganache
yarn ganache
# Start truffle, pointing at ganache cli
yarn truffle:gc
# Do stuff
migrate
let token = await YourTurnNft.deployed()
token.name()
let accounts = await web3.eth.getAccounts()
token.mint(accounts[1], 1, "Your turn to buy beer")
await token.ownerOf(1)
await token.transfer(accounts[1], accounts[2], 1)
await token.ownerOf(1)
```

## Contributors

| [![Kenny Inggs][kinggs_avatar]][kinggs_homepage] | [![Jen Wynne][jenwynne_avatar]][jenwynne_homepage] |
| :----------------------------------------------: | :------------------------------------------------: |
|          [Kenny Inggs][kinggs_homepage]          |           [Jen Wynne][jenwynne_homepage]           |

[kinggs_homepage]: https://github.com/kinggs
[kinggs_avatar]: https://github.com/kinggs.png?size=150
[jenwynne_homepage]: https://github.com/jenwynne
[jenwynne_avatar]: https://github.com/jenwynne.png?size=150
