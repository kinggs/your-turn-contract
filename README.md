# YourTurn Token

[![Master Status](https://github.com/kinggs/your-turn-contract/workflows/master/badge.svg)](https://github.com/kinggs/your-turn-contract/actions)

A nonsensical token meant to test and play with ERC20.

Initially built from the basic Waffle 'Getting Started' guide (<https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html>) with some additional dotfiles, linting & prettier.

## Usage

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

## With Truffle (either on truffle development environment, or against ganache)

Simple example of migrating contract, and transferring 10 tokens to an account

```sh
# For Development Environment
yarn truffle
# For Ganache
yarn ganache
# Deploy contract
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

## Contributors

| [![Kenny Inggs][kinggs_avatar]][kinggs_homepage] | [![Jen Wynne][jenwynne_avatar]][jenwynne_homepage] |
| :----------------------------------------------: | :------------------------------------------------: |
|          [Kenny Inggs][kinggs_homepage]          |           [Jen Wynne][jenwynne_homepage]           |

[kinggs_homepage]: https://github.com/kinggs
[kinggs_avatar]: https://github.com/kinggs.png?size=150
[jenwynne_homepage]: https://github.com/jenwynne
[jenwynne_avatar]: https://github.com/jenwynne.png?size=150
