const YourTurnToken = artifacts.require("YourTurnToken");

module.exports = function (deployer) {
  deployer.deploy(YourTurnToken, 99999);
};
