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
    expect(await kennyToken.balanceOf(kenny.address)).to.equal(1);
    await token.tokenURI(thirdToken.id);
    // TODO: Can we fix this weird syntax below? We stole it from https://ethereum.stackexchange.com/questions/86986/safetransferfrom-is-undefined-in-buidler-test - but don't like it at all
    await kennyToken['safeTransferFrom(address,address,uint256)'](kenny.address, simon.address, thirdToken.id);
    expect(await token.ownerOf(thirdToken.id)).to.equal(simon.address);
    expect(await kennyToken.balanceOf(kenny.address)).to.equal(0);
    expect(await token.totalSupply()).to.equal(1);
  });
});
