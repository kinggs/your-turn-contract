import { expect, use } from 'chai';
import { Contract } from 'ethers';
import { deployContract, MockProvider, solidity } from 'ethereum-waffle';
import YourTurnNft from '../build/contracts/YourTurnNft.json';

use(solidity);

describe('YourTurnNft', () => {
  const [owner, kenny, simon] = new MockProvider().getWallets();
  let token: Contract;

  beforeEach(async () => {
    token = await deployContract(owner, YourTurnNft, [0]);
  });

  it('Check Token Setup', async () => {
    expect(await token.name()).to.equal('YourTurnNft');
    expect(await token.symbol()).to.equal('YTN');
  });

  it('Creates a YTN on Mint', async () => {
    const firstToken = {
      id: 1,
      purpose: 'Jen and Kenny eats Fishermans Friends',
    };
    await token.mint(owner.address, firstToken.id, firstToken.purpose);
    expect(await token.tokenURI(firstToken.id)).to.be.equal(firstToken.purpose);
    expect(await token.totalSupply()).to.equal(1);
  });

  it('Kenny mints a YTN', async () => {
    const secondToken = {
      id: 2,
      purpose: 'Kenny and Si drink coffee',
    };
    await token.mint(kenny.address, secondToken.id, secondToken.purpose);
    expect(await token.tokenURI(secondToken.id)).to.be.equal(secondToken.purpose);
    expect(await token.totalSupply()).to.equal(1);
  });

  it('Kenny mints a YTN and sends it to Si', async () => {
    const thirdToken = {
      id: 3,
      purpose: 'Kenny and Si drink coffee',
    };
    await token.mint(kenny.address, thirdToken.id, thirdToken.purpose);
    const kennyToken = token.connect(kenny);
    await kennyToken.transfer(kenny.address, simon.address, 3);
    expect(await token.totalSupply()).to.equal(1);
  });
});
