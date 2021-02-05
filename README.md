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

### YourTurnToken ERC20 example on Truffle Develop

Simple example of migrating contract, and transferring 10 tokens to an account

```sh
# Get Truffle Development running
yarn truffle
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

### YourTurnToken ERC721 example on Truffle Ganache:CLI

Simple example of migrating contract, and transferring 10 tokens to an account. We use GanacheCLI for this example (compared to Truffle Develop for the ERC20 above), and use a standard mnemonic to make development easier, resulting in a simple set of local development test accounts for our fictional characters.

```sh
# Addresses
0: Owner: 0x56a9FD7fA4c8a8553575e142df045f1B336E15cf
1: Alice: 0xf039EEC76f546185c067a627C3c92759538e86E7
2: Bob: 0xF385c8f337239983C0E286F78C3e1b11C9C940cf
3: Carlos: 0xF23A18Cd3426855862ecF374Ec8AEb77Af3D17b9
# Keys
0: Owner: 0x9ad262fcd1f9778d53640ca0a2d46af127d805986a5bb553f007620e11f8e027
1: Alice: 0x9d35dee05976acd10bdbd74f388aedb6fb9d28a0abd893f83aac6198be9a6a85
2: Bob: 0xac82a03d08cb787f627959798d5df321f61eea59c42e0ad03bd1510d5f7fe2da
3: Carlos: 0xa4b045d669fd61b98e985002ecdfd690080dd91b119fc6127aaf744e64a639ec
```

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
token.mint(accounts[1], 11111, "Your turn to buy beer")
await token.ownerOf(11111)
await token.transfer(accounts[1], accounts[2], 11111)
await token.ownerOf(11111)
```

## Contributors

| [![Kenny Inggs][kinggs_avatar]][kinggs_homepage] | [![Jen Wynne][jenwynne_avatar]][jenwynne_homepage] |
| :----------------------------------------------: | :------------------------------------------------: |
|          [Kenny Inggs][kinggs_homepage]          |           [Jen Wynne][jenwynne_homepage]           |

[kinggs_homepage]: https://github.com/kinggs
[kinggs_avatar]: https://github.com/kinggs.png?size=150
[jenwynne_homepage]: https://github.com/jenwynne
[jenwynne_avatar]: https://github.com/jenwynne.png?size=150
