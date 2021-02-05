const YourTurnToken = artifacts.require("YourTurnToken");
const YourTurnNft = artifacts.require("YourTurnNft");

module.exports = function (deployer) {
  deployer.deploy(YourTurnToken, 99999);
  deployer.deploy(YourTurnNft, 99999);
};
